import Link from "next/link";
import { LINKS } from "@/lib/links";

const FOOTER_NAV = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-warm-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-extrabold text-lg text-white mb-3 tracking-tight">
              Empowr CIC
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Promoting lifelong well-being through the transformative power of
              experiential learning.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={LINKS.socialInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={LINKS.socialFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={LINKS.socialYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors text-sm"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Navigate
            </p>
            <ul className="space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Get In Touch
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${LINKS.contactEmail}`}
                  className="text-muted hover:text-white transition-colors"
                >
                  {LINKS.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.heroesplatform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Empowr Heroes Platform →
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={LINKS.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href={LINKS.cookiePolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-muted space-y-1">
          <p>
            Empowr CIC. Registered in England and Wales. Company number:{" "}
            <a
              href={LINKS.companiesHouse}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              13660924
            </a>
            .
          </p>
          <p>Crown House, 27 Old Gloucester Street, London, WC1N 3AX.</p>
          <p className="mt-3">
            © {new Date().getFullYear()} Empowr CIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
