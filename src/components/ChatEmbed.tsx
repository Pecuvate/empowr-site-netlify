"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import posthog from "posthog-js";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

type SessionStatus = "active" | "escalated_pending_contact" | "escalated" | "resolved";

const POLL_INTERVAL = 2500;
const STORAGE_KEY = "crm_session_token_empowr-cic";

const inputClass =
  "w-full rounded-xl border border-border px-3 py-2 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue/30 transition-colors";

export default function ChatEmbed() {
  const [orgName, setOrgName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [configLoaded, setConfigLoaded] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("active");
  const [sending, setSending] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [submittingContact, setSubmittingContact] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pollAttemptsRef = useRef(0);
  const openedTrackedRef = useRef(false);

  useEffect(() => {
    loadConfig();
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSessionToken(stored);
      loadMessages(stored);
    } else {
      createSession();
    }
    return () => stopPolling();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sessionStatus]);

  async function apiError(res: Response, fallback: string) {
    const data = await res.json().catch(() => ({}));
    return typeof data.error === "string" ? data.error : fallback;
  }

  async function loadConfig() {
    try {
      const res = await fetch("/.netlify/functions/chat-config");
      if (!res.ok) throw new Error(await apiError(res, "Unable to load chat"));
      const data = await res.json();
      setOrgName(data.orgName ?? "");
      setGreeting(data.greeting ?? "");
      setQuickReplies(data.quickReplies ?? []);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unable to load chat.");
      posthog.capture("contact_chat_error", { stage: "session" });
    } finally {
      setConfigLoaded(true);
    }
  }

  function trackOpened() {
    if (openedTrackedRef.current) return;
    openedTrackedRef.current = true;
    posthog.capture("contact_chat_opened");
  }

  async function createSession() {
    setErrorMessage("");
    try {
      const res = await fetch("/.netlify/functions/chat-session", { method: "POST" });
      if (!res.ok) throw new Error(await apiError(res, "Unable to start chat"));
      const data = await res.json();
      localStorage.setItem(STORAGE_KEY, data.sessionToken);
      setSessionToken(data.sessionToken);
      trackOpened();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unable to start chat. Please try again.");
      posthog.capture("contact_chat_error", { stage: "session" });
    }
  }

  async function loadMessages(token: string) {
    try {
      const res = await fetch(`/.netlify/functions/chat-session-status?token=${encodeURIComponent(token)}`);
      if (res.status === 404) {
        localStorage.removeItem(STORAGE_KEY);
        await createSession();
        return;
      }
      if (!res.ok) throw new Error(await apiError(res, "Unable to load this conversation"));
      const data = await res.json();
      setMessages(data.messages ?? []);
      setSessionStatus(data.status ?? "active");
      trackOpened();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unable to load this conversation.");
      posthog.capture("contact_chat_error", { stage: "session" });
    }
  }

  function startPolling(token: string) {
    if (pollRef.current) return;
    pollAttemptsRef.current = 0;
    pollRef.current = setInterval(async () => {
      pollAttemptsRef.current += 1;
      try {
        const res = await fetch(`/.netlify/functions/chat-session-status?token=${encodeURIComponent(token)}`);
        if (!res.ok) throw new Error(await apiError(res, "Unable to check for a response"));
        const data = await res.json();
        const msgs: Message[] = data.messages ?? [];
        setMessages(msgs);
        setSessionStatus(data.status ?? "active");
        const lastRole = msgs.at(-1)?.role;
        if (lastRole === "assistant") {
          stopPolling();
          setWaiting(false);
        }
      } catch {
        // A transient polling failure can recover on the next interval.
      }

      if (pollAttemptsRef.current >= 24) {
        stopPolling();
        setWaiting(false);
        setErrorMessage("The response is taking longer than expected. Please try again.");
      }
    }, POLL_INTERVAL);
  }

  function stopPolling() {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }

  async function dispatchMessage(content: string, isQuickReply = false) {
    if (!content.trim() || !sessionToken || sending || waiting) return;
    const optimisticId = crypto.randomUUID();
    setSending(true);
    setWaiting(true);
    setErrorMessage("");
    setMessages(prev => [
      ...prev,
      { id: optimisticId, role: "user", content, created_at: new Date().toISOString() },
    ]);
    try {
      const res = await fetch("/.netlify/functions/chat-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionToken, content }),
      });
      if (!res.ok) throw new Error(await apiError(res, "Unable to send your message"));
      posthog.capture("contact_chat_message_sent", { message_length: content.length });
      if (isQuickReply) posthog.capture("contact_chat_quick_reply_used", { reply: content });
      startPolling(sessionToken);
    } catch (err) {
      setMessages(prev => prev.filter(message => message.id !== optimisticId));
      setInput(content);
      setWaiting(false);
      setErrorMessage(err instanceof Error ? err.message : "Unable to send your message. Please try again.");
      posthog.capture("contact_chat_error", { stage: "message" });
    } finally {
      setSending(false);
    }
  }

  async function sendMessage() {
    if (!input.trim()) return;
    const content = input.trim();
    setInput("");
    await dispatchMessage(content);
  }

  async function handleSpeakToTeam() {
    if (!sessionToken || sending || waiting) return;
    const optimisticId = crypto.randomUUID();
    setSending(true);
    setWaiting(true);
    setErrorMessage("");
    setMessages(prev => [
      ...prev,
      {
        id: optimisticId,
        role: "user",
        content: "I'd like to speak to the team.",
        created_at: new Date().toISOString(),
      },
    ]);
    try {
      const res = await fetch("/.netlify/functions/chat-escalate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionToken }),
      });
      if (!res.ok) throw new Error(await apiError(res, "Unable to request human follow-up"));
      startPolling(sessionToken);
    } catch (err) {
      setMessages(prev => prev.filter(message => message.id !== optimisticId));
      setWaiting(false);
      setErrorMessage(err instanceof Error ? err.message : "Unable to request human follow-up. Please try again.");
      posthog.capture("contact_chat_error", { stage: "escalate" });
    } finally {
      setSending(false);
    }
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !sessionToken) return;
    setSubmittingContact(true);
    setErrorMessage("");
    try {
      const res = await fetch("/.netlify/functions/chat-escalate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionToken, name: contactName, email: contactEmail }),
      });
      if (!res.ok) throw new Error(await apiError(res, "Unable to save your follow-up details"));
      const data = await res.json();
      if (data.status === "escalated") {
        setSessionStatus("escalated");
        posthog.capture("contact_chat_escalated");
        await loadMessages(sessionToken);
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unable to save your details. Please try again.");
      posthog.capture("contact_chat_error", { stage: "escalate" });
    } finally {
      setSubmittingContact(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  async function endConversation() {
    stopPolling();
    const isResolvedAlready = sessionStatus === "resolved";
    if (sessionToken && !isResolvedAlready) {
      try {
        await fetch("/.netlify/functions/chat-end", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionToken }),
        });
        posthog.capture("contact_chat_resolved");
      } catch {
        posthog.capture("contact_chat_error", { stage: "end" });
      }
    }
    localStorage.removeItem(STORAGE_KEY);
    setSessionToken(null);
    setMessages([]);
    setSessionStatus("active");
    setContactName("");
    setContactEmail("");
    setErrorMessage("");
    setInput("");
    setWaiting(false);
    setSending(false);
    openedTrackedRef.current = false;
    await createSession();
  }

  const isResolved = sessionStatus === "resolved";
  const isEscalated = sessionStatus === "escalated" || isResolved;
  const isPendingContact = sessionStatus === "escalated_pending_contact";
  const showQuickReplies = messages.length === 0 && !waiting && sessionStatus === "active";

  if (!configLoaded) {
    return (
      <div className="rounded-2xl border border-border bg-white shadow-sm h-[420px] animate-pulse" />
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between gap-2">
        <div>
          <p className="font-semibold text-sm text-black">{orgName || "Ask Empowr"}</p>
          <p className="text-xs text-muted">Ask us anything</p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={endConversation}
            className="shrink-0 text-xs text-muted hover:text-black underline underline-offset-2"
          >
            {isResolved ? "New chat" : "End chat"}
          </button>
        )}
      </div>

      <div className="max-h-[420px] overflow-y-auto px-4 py-4 space-y-3">
        {greeting && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-3 py-2 text-sm leading-relaxed bg-blue-pale text-black">
              {greeting}
            </div>
          </div>
        )}

        {showQuickReplies && quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {quickReplies.map(reply => (
              <button
                key={reply}
                onClick={() => dispatchMessage(reply, true)}
                disabled={sending}
                className="text-xs px-3 py-1.5 rounded-full border border-blue text-blue hover:bg-blue hover:text-white transition-colors disabled:opacity-40"
              >
                {reply}
              </button>
            ))}
            <button
              onClick={handleSpeakToTeam}
              disabled={sending}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:bg-cream transition-colors disabled:opacity-40"
            >
              Speak to the team
            </button>
          </div>
        )}

        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-blue text-white rounded-br-sm"
                  : "bg-blue-pale text-black rounded-bl-sm"
              }`}
            >
              {m.role === "assistant" ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    ul: ({ children }) => <ul className="mb-2 ml-3 space-y-0.5 last:mb-0">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-2 ml-3 space-y-0.5 list-decimal last:mb-0">{children}</ol>,
                    li: ({ children }) => <li className="list-disc">{children}</li>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              ) : (
                m.content
              )}
            </div>
          </div>
        ))}

        {waiting && (
          <div className="flex justify-start">
            <div className="bg-blue-pale rounded-2xl rounded-bl-sm px-3 py-2">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-blue/40 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 bg-blue/40 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 bg-blue/40 rounded-full animate-bounce [animation-delay:300ms]" />
              </span>
            </div>
          </div>
        )}

        {isPendingContact && !waiting && (
          <form onSubmit={submitContact} className="flex flex-col gap-2 pt-1">
            <input
              type="text"
              placeholder="Your name"
              value={contactName}
              onChange={e => setContactName(e.target.value)}
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Your email address"
              value={contactEmail}
              onChange={e => setContactEmail(e.target.value)}
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={submittingContact || !contactName.trim() || !contactEmail.trim()}
              className="bg-blue text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {submittingContact ? "Sending…" : "Send"}
            </button>
          </form>
        )}

        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-600">
            {errorMessage}{" "}
            <a href="mailto:enquiries@empowrcic.org" className="underline underline-offset-2">
              Or email us directly.
            </a>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="px-3 py-3 border-t border-border">
        {isEscalated ? (
          <p className="text-xs text-center text-muted py-1">
            {isResolved ? "Your enquiry has been handled." : "The team will be in touch soon."}
          </p>
        ) : (
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              rows={1}
              disabled={isPendingContact || waiting}
              className="flex-1 resize-none rounded-xl border border-border px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue/30 max-h-24 disabled:opacity-40 disabled:bg-cream transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || sending || waiting || isPendingContact}
              className="shrink-0 w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center disabled:opacity-40 hover:bg-blue-dark transition-colors"
              aria-label="Send message"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
