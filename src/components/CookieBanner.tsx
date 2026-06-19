"use client";

import Link from "next/link";
import { useConsent } from "@/context/ConsentContext";

export default function CookieBanner() {
  const { bannerVisible, accept } = useConsent();

  if (!bannerVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-warm-white px-4 py-5 shadow-lg"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mid leading-relaxed">
          We use essential cookies to make this site work. With your consent, we
          may also use analytics cookies to understand how visitors use the site.
          View our{" "}
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
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => accept("essential")}
            className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-mid hover:bg-cream transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={() => accept("all")}
            className="rounded-xl bg-blue px-5 py-2 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
