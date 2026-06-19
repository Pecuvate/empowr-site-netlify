export type ConsentLevel = "all" | "essential";

const STORAGE_KEY = "empowr-cookie-consent";

export function getStoredConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "all" || stored === "essential" ? stored : null;
}

export function storeConsent(level: ConsentLevel): void {
  localStorage.setItem(STORAGE_KEY, level);
}

export function clearStoredConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
}
