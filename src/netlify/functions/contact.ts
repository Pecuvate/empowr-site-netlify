import { Resend } from "resend";

const SUBJECT_ROUTING: Record<string, string> = {
  "Work With Us": process.env.OPPORTUNITIES_EMAIL ?? "",
};

const DEFAULT_TO = process.env.CONTACT_EMAIL ?? "";
const FROM = "Empowr CIC <noreply@empowrcic.org>";

// Only a short alphanumeric/hyphen token is accepted as a source attribution
// tag (e.g. "wix", "prospectus", "eccp") — anything else is silently dropped.
const SOURCE_PATTERN = /^[a-zA-Z0-9-]{1,32}$/;

function sanitiseSource(value: unknown): string {
  return typeof value === "string" && SOURCE_PATTERN.test(value) ? value : "";
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const handler = async (event: {
  httpMethod: string;
  body: string | null;
}) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let name: string, email: string, subject: string, message: string, company: string, source: unknown;
  try {
    ({ name, email, subject, message, company, source } = JSON.parse(event.body ?? "{}"));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request" }) };
  }

  const safeSource = sanitiseSource(source);

  // Honeypot — real users never fill this. If it's populated, it's a bot.
  // Return 200 so the bot thinks it succeeded and doesn't retry, but send nothing.
  if (company?.trim()) {
    console.warn("[contact] Honeypot triggered — dropping submission");
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const toEmail = SUBJECT_ROUTING[subject] || DEFAULT_TO;

  if (!toEmail) {
    console.error("[contact] No destination email configured");
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    await resend.emails.send({
      from: FROM,
      to: toEmail,
      replyTo: email,
      subject: `[Website Enquiry] ${subject} — ${name}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        ${safeSource ? `<p><strong>Source:</strong> ${escapeHtml(safeSource)}</p>` : ""}
        <hr />
        <p>${safeMessage}</p>
      `,
    });

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We've received your message — Empowr CIC",
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for getting in touch with Empowr CIC. We've received your message and will get back to you within 2 working days.</p>
        <p>The Empowr CIC team</p>
        <hr />
        <p style="color:#888;font-size:12px;">enquiries@empowrcic.org | empowrcic.org</p>
      `,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send message" }),
    };
  }
};
