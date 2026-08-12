const CRM_API_BASE_URL = process.env.CRM_API_BASE_URL ?? "";
const ORG_SLUG = "empowr-cic";

export const handler = async (event: { httpMethod: string }) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!CRM_API_BASE_URL) {
    console.error("[chat-session] CRM_API_BASE_URL not configured");
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  try {
    const res = await fetch(`${CRM_API_BASE_URL}/api/channels/widget/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orgSlug: ORG_SLUG }),
    });
    const body = await res.text();
    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json" },
      body,
    };
  } catch (err) {
    console.error("[chat-session] Fetch error:", err);
    return { statusCode: 502, body: JSON.stringify({ error: "Chat service unavailable" }) };
  }
};
