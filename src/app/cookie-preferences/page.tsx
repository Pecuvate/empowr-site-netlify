"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useConsent } from "@/context/ConsentContext";

export default function CookiePreferencesPage() {
  const { consent, accept } = useConsent();
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setAnalytics(consent === "all");
  }, [consent]);

  const handleSave = () => {
    accept(analytics ? "all" : "essential");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section className="bg-cream min-h-screen py-12 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/"
          className="inline-block text-sm font-semibold text-blue hover:text-blue-dark mb-10 transition-colors"
        >
          ← Back to site
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          Cookie Preferences
        </h1>
        <p className="text-mid text-lg leading-relaxed mb-12">
          Manage how Empowr CIC uses cookies on this site. You can update your
          preferences at any time. View our{" "}
          <Link
            href="/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            privacy policy
          </Link>{" "}
          to find out more.
        </p>

        <div className="space-y-4 mb-10">
          {/* Essential */}
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-extrabold text-black mb-1">Essential cookies</p>
                <p className="text-sm text-mid leading-relaxed">
                  Required for core site functions like navigation and security.
                  These cannot be turned off.
                </p>
              </div>
              <span className="shrink-0 mt-0.5 rounded-full bg-cream border border-border px-3 py-1 text-xs font-semibold text-muted">
                Always on
              </span>
            </div>
          </div>

          {/* Analytics */}
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-extrabold text-black mb-1">Analytics cookies</p>
                <p className="text-sm text-mid leading-relaxed">
                  Help us understand how visitors use the site so we can improve
                  it. No personal data is sold or shared with third parties.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={analytics}
                aria-label="Toggle analytics cookies"
                onClick={() => { setAnalytics(!analytics); setSaved(false); }}
                className={`relative shrink-0 mt-0.5 inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/50 ${
                  analytics ? "bg-blue" : "bg-border"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    analytics ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={handleSave}
            className="rounded-xl bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
          >
            Save preferences
          </button>
          {saved && (
            <p className="text-sm font-semibold text-mid">
              Preferences saved.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
