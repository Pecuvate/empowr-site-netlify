"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const SUBJECTS = [
  "General Enquiry",
  "Partnership",
  "Work With Us",
  "Media",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border px-4 py-3 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue/30 transition-colors";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const rawSubject = searchParams.get("subject") ?? "";
  const initialSubject = SUBJECTS.includes(rawSubject) ? rawSubject : "";
  const initialMessage = searchParams.get("message") ?? "";

  const [subject, setSubject] = useState(initialSubject);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Non-OK response");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-blue-pale rounded-2xl p-10 max-w-lg">
        <p className="text-2xl font-extrabold text-black mb-3">Message sent</p>
        <p className="text-mid leading-relaxed">
          Thanks for getting in touch. We&apos;ll get back to you within 2 working
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
            What is your enquiry about?
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={initialMessage}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try again or email us directly at{" "}
          <a href="mailto:enquiries@empowrcic.org" className="underline">
            enquiries@empowrcic.org
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="max-w-2xl space-y-6" />}>
      <ContactFormInner />
    </Suspense>
  );
}
