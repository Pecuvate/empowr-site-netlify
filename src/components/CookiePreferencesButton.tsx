"use client";

import { useConsent } from "@/context/ConsentContext";

export default function CookiePreferencesButton() {
  const { openPreferences } = useConsent();
  return (
    <button
      onClick={openPreferences}
      className="text-sm text-muted hover:text-white transition-colors text-left"
    >
      Cookie Preferences
    </button>
  );
}
