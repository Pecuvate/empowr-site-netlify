import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-black text-warm-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Brand */}
          <div>
            <p className="font-extrabold text-lg text-white mb-3 tracking-tight">
              Empowr CIC
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Promoting lifelong wellbeing through the transformative power of
              experiential learning.
            </p>
            <div className="text-xs text-muted space-y-1 leading-relaxed">
              <p>Registered in England and Wales.</p>
              <p>
                Company no.{" "}
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
            </div>
          </div>

          {/* About Us */}
          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              About Us
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Get In Touch
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-with-us"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/eccp"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Connect With Us
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={LINKS.socialInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={LINKS.socialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={LINKS.socialYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Programmes
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-work"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  All Programmes
                </Link>
              </li>
              <li>
                <a
                  href={LINKS.heroesplatform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Empowr Heroes
                </a>
              </li>
              <li>
                <Link
                  href="/eccp"
                  className="text-sm text-muted hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  ECCP
                  <span className="text-xs bg-blue/20 text-blue-light px-1.5 py-0.5 rounded">
                    Soon
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/eccp"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Certified Coach
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Empowr Legal Policies
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted">
          <p>© {new Date().getFullYear()} Empowr CIC. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href={LINKS.socialInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={LINKS.socialFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={LINKS.socialYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
