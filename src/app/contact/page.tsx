import type { Metadata } from "next";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Get In Touch | Empowr CIC",
  description:
    "Contact Empowr CIC — general enquiries, partnerships, media, freelance opportunities, and more.",
};

const CONTACT_ROUTES = [
  {
    subject: "General Enquiries",
    description: "Questions about Empowr, our work, or our programmes.",
    href: `mailto:${LINKS.contactEmail}?subject=General%20Enquiry`,
  },
  {
    subject: "Partnership",
    description:
      "Schools, organisations, and commissioners interested in working with Empowr.",
    href: `mailto:${LINKS.contactEmail}?subject=Partnership%20Enquiry`,
  },
  {
    subject: "Work With Us",
    description:
      "Practitioners and facilitators interested in delivering with Empowr.",
    href: `mailto:${LINKS.contactEmail}?subject=Work%20With%20Us%20Enquiry`,
  },
  {
    subject: "Media",
    description: "Press, interviews, and media requests.",
    href: `mailto:${LINKS.contactEmail}?subject=Media%20Enquiry`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-blue-light max-w-xl leading-relaxed">
            We&apos;d love to hear from you — whether you&apos;re looking to support our
            work, partner with us, or simply find out more.
          </p>
        </div>
      </section>

      {/* Contact Routes */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            How Can We Help?
          </h2>
          <p className="text-mid text-lg max-w-xl mb-14">
            Choose the most relevant route below and your message will reach the
            right person.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {CONTACT_ROUTES.map((route) => (
              <a
                key={route.subject}
                href={route.href}
                className="bg-warm-white rounded-2xl p-7 border border-border hover:border-blue/30 hover:shadow-sm transition-all group flex flex-col"
              >
                <h3 className="font-bold text-black text-lg mb-2 group-hover:text-blue transition-colors">
                  {route.subject}
                </h3>
                <p className="text-mid text-sm leading-relaxed flex-1 mb-4">
                  {route.description}
                </p>
                <span className="text-blue text-sm font-semibold">
                  Send a message →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact + Social */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-black mb-4">
                Email Us Directly
              </h2>
              <a
                href={`mailto:${LINKS.contactEmail}`}
                className="text-blue text-lg font-semibold hover:text-blue-dark transition-colors"
              >
                {LINKS.contactEmail}
              </a>
              <p className="text-muted text-sm mt-2">
                We aim to respond within 2 working days.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-black mb-4">
                Follow Us
              </h2>
              <div className="space-y-3">
                <a
                  href={LINKS.socialInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mid hover:text-blue transition-colors"
                >
                  <span className="font-semibold">Instagram</span>
                  <span className="text-muted text-sm">@empowr.cic</span>
                </a>
                <a
                  href={LINKS.socialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mid hover:text-blue transition-colors"
                >
                  <span className="font-semibold">Facebook</span>
                  <span className="text-muted text-sm">empowr.cic</span>
                </a>
                <a
                  href={LINKS.socialYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mid hover:text-blue transition-colors"
                >
                  <span className="font-semibold">YouTube</span>
                  <span className="text-muted text-sm">@empowr.cic</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registered Details */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-5">
            Registered Details
          </h2>
          <div className="text-mid text-sm space-y-1">
            <p>
              <strong className="text-black">Empowr CIC</strong>
            </p>
            <p>Community Interest Company — Registered in England and Wales</p>
            <p>Company number: 13660924</p>
            <p>
              Registered address: Crown House, 27 Old Gloucester Street, London
              WC1N 3AX
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
