"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/links";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-warm-white border-b border-border sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Empowr CIC — Home">
          <img src="/logo.png" alt="Empowr CIC" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-blue border-b-2 border-blue pb-0.5"
                    : "font-medium text-mid hover:text-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={LINKS.shop}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-mid hover:text-blue transition-colors"
          >
            Shop
          </a>
          {/* My Account — placeholder until members platform is built */}
          <button
            disabled
            title="Members area — coming soon"
            className="text-muted cursor-not-allowed p-1.5 rounded-full"
            aria-label="My Account"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
          </button>
          <a
            href={LINKS.heroesplatform}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-dark transition-colors"
          >
            Support Us
          </a>
        </div>

        <button
          className="md:hidden text-mid p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-warm-white border-b border-border px-6 pb-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mid hover:text-blue transition-colors py-3 border-b border-border last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LINKS.shop}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-mid hover:text-blue transition-colors py-3 border-b border-border"
            onClick={() => setOpen(false)}
          >
            Shop
          </a>
          {/* My Account — placeholder until members platform is built */}
          <div className="flex items-center gap-2.5 py-3 border-b border-border text-muted cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
            <span className="text-sm font-medium">My Account</span>
            <span className="ml-auto text-[11px] font-medium bg-border/50 px-2 py-0.5 rounded-full">Coming soon</span>
          </div>
          <a
            href={LINKS.heroesplatform}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors text-center"
          >
            Support Us
          </a>
        </div>
      )}
    </header>
  );
}
