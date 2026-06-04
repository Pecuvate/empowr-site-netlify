import { Resend } from "resend";

const SUBJECT_ROUTING: Record<string, string> = {
  "Work With Us": process.env.OPPORTUNITIES_EMAIL ?? "",
};

const DEFAULT_TO = process.env.CONTACT_EMAIL ?? "";
const FROM = "Empowr CIC <noreply@empowrcic.org>";

export const handler = async (event: {
  httpMethod: string;
  body: string | null;
}) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let name: string, email: string, subject: string, message: string;
  try {
    ({ name, email, subject, message } = JSON.parse(event.body ?? "{}"));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request" }) };
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

  try {
    await resend.emails.send({
      from: FROM,
      to: toEmail,
      replyTo: email,
      subject: `[Website Enquiry] ${subject} — ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We've received your message — Empowr CIC",
      html: `
        <p>Hi ${name},</p>
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
