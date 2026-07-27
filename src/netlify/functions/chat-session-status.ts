const CRM_API_BASE_URL = process.env.CRM_API_BASE_URL ?? "";

export const handler = async (event: {
  httpMethod: string;
  queryStringParameters: Record<string, string | undefined> | null;
}) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const token = event.queryStringParameters?.token;
  if (!token) {
    return { statusCode: 400, body: JSON.stringify({ error: "token required" }) };
  }

  if (!CRM_API_BASE_URL) {
    console.error("[chat-session-status] CRM_API_BASE_URL not configured");
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  try {
    const res = await fetch(`${CRM_API_BASE_URL}/api/channels/widget/session/${encodeURIComponent(token)}`);
    const body = await res.text();
    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json" },
      body,
    };
  } catch (err) {
    console.error("[chat-session-status] Fetch error:", err);
    return { statusCode: 502, body: JSON.stringify({ error: "Chat service unavailable" }) };
  }
};
