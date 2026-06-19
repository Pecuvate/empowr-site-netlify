"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useConsent } from "@/context/ConsentContext";

export default function CookieBanner() {
  const { bannerVisible, accept } = useConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (bannerVisible) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [bannerVisible]);

  const dismiss = (level: "all" | "essential") => {
    setVisible(false);
    setTimeout(() => accept(level), 300);
  };

  if (!bannerVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className={`fixed bottom-4 left-4 right-4 z-50 sm:left-8 sm:right-8 rounded-2xl border border-border bg-warm-white shadow-2xl p-5 transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-sm font-extrabold text-black mb-1">Cookie settings</p>
      <p className="text-sm text-mid leading-relaxed mb-4">
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
      <div className="flex gap-3">
        <button
          onClick={() => dismiss("essential")}
          className="flex-1 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-mid hover:bg-cream transition-colors"
        >
          Essential only
        </button>
        <button
          onClick={() => dismiss("all")}
          className="flex-1 rounded-xl bg-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
