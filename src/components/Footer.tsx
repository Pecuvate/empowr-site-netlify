import Link from "next/link";
import { LINKS } from "@/lib/links";

const FOOTER_NAV = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-warm-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <p className="font-extrabold text-lg text-white mb-3 tracking-tight">
              Empowr CIC
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Promoting lifelong wellbeing through the transformative power of
              experiential learning.
            </p>
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
              Connect With Us
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.socialInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={LINKS.socialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={LINKS.socialYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
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
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.privacyPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={LINKS.cookiePolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href={LINKS.termsAndConditions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href={LINKS.riskWaiver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Risk Waiver
                </a>
              </li>
              <li>
                <a
                  href={LINKS.photographyConsent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Photography &amp; Media Consent
                </a>
              </li>
              <li>
                <a
                  href={LINKS.programmePolicies}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  Programme Policies
                </a>
              </li>
            </ul>
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
