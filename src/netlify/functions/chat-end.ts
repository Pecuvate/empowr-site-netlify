const CRM_API_BASE_URL = process.env.CRM_API_BASE_URL ?? "";

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let sessionToken: string;
  try {
    ({ sessionToken } = JSON.parse(event.body ?? "{}"));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request" }) };
  }

  if (!sessionToken?.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: "sessionToken required" }) };
  }

  if (!CRM_API_BASE_URL) {
    console.error("[chat-end] CRM_API_BASE_URL not configured");
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  try {
    const res = await fetch(`${CRM_API_BASE_URL}/api/channels/widget/end`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionToken }),
    });
    const body = await res.text();
    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json" },
      body,
    };
  } catch (err) {
    console.error("[chat-end] Fetch error:", err);
    return { statusCode: 502, body: JSON.stringify({ error: "Chat service unavailable" }) };
  }
};
