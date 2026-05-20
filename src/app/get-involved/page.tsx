import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Get Involved | Empowr CIC",
  description:
    "Support Empowr, partner with us, work with us, or join the community — find the right route for you.",
};

const ROUTES = [
  {
    heading: "Support Our Work",
    body: "Give monthly or one-time to fund Empowr programmes and activities in the community. Every contribution helps us reach more people.",
    cta: "Become a Hero",
    href: LINKS.heroesplatform,
    external: true,
    accent: "bg-blue text-white",
    ctaClass:
      "bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors",
  },
  {
    heading: "Partner With Us",
    body: "For schools, community organisations, commissioners, and anchor institutions interested in working with Empowr at an organisational level.",
    cta: "Get In Touch",
    href: "/contact",
    external: false,
    accent: "bg-warm-white border border-border text-black",
    ctaClass:
      "bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors",
  },
  {
    heading: "Work With Us",
    body: "For practitioners, facilitators, coaches, and community workers interested in delivering work with Empowr.",
    cta: "Find Out More",
    href: "/work-with-us",
    external: false,
    accent: "bg-warm-white border border-border text-black",
    ctaClass:
      "bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors",
  },
  {
    heading: "Join the Community",
    body: "For individuals who want to participate in Empowr programmes — skating sessions, courses, camps, and more.",
    cta: "Contact Us",
    href: "/contact",
    external: false,
    accent: "bg-warm-white border border-border text-black",
    ctaClass:
      "bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Get Involved
          </h1>
          <p className="text-lg text-blue-light max-w-xl leading-relaxed">
            There are several ways to connect with, support, and be part of
            Empowr. Find the right route for you below.
          </p>
        </div>
      </section>

      {/* Route Cards */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROUTES.map((route) => (
              <div
                key={route.heading}
                className={`rounded-2xl p-8 flex flex-col ${route.accent}`}
              >
                <h2 className="text-2xl font-extrabold mb-4">{route.heading}</h2>
                <p
                  className={`text-lg leading-relaxed flex-1 mb-8 ${
                    route.accent.includes("bg-blue") ? "text-blue-light" : "text-mid"
                  }`}
                >
                  {route.body}
                </p>
                {route.external ? (
                  <a
                    href={route.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`self-start ${route.ctaClass}`}
                  >
                    {route.cta}
                  </a>
                ) : (
                  <Link href={route.href} className={`self-start ${route.ctaClass}`}>
                    {route.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
