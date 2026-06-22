export type ConsentLevel = "all" | "essential";

const STORAGE_KEY = "empowr-cookie-consent";
const TIMESTAMP_KEY = "empowr-cookie-consent-ts";
const EXPIRY_MS = 365 * 24 * 60 * 60 * 1000; // 12 months

export function getStoredConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  const timestamp = localStorage.getItem(TIMESTAMP_KEY);

  if (!stored || !timestamp) return null;

  // Re-ask after 12 months
  if (Date.now() - parseInt(timestamp, 10) > EXPIRY_MS) {
    clearStoredConsent();
    return null;
  }

  return stored === "all" || stored === "essential" ? stored : null;
}

export function storeConsent(level: ConsentLevel): void {
  localStorage.setItem(STORAGE_KEY, level);
  localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
}

export function clearStoredConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TIMESTAMP_KEY);
}

/**
 * Injects an analytics script only when the user has given full consent.
 * Call this once per script — it will not re-inject if already present.
 *
 * Usage (e.g. in layout.tsx or a useEffect):
 *   loadAnalyticsScript("https://plausible.io/js/script.js", "plausible-script");
 */
export function loadAnalyticsScript(src: string, id: string): void {
  if (typeof window === "undefined") return;
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.src = src;
  script.id = id;
  script.async = true;
  document.head.appendChild(script);
}
