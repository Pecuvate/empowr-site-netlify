import type { Metadata } from "next";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Our Impact | Empowr CIC",
  description:
    "Empowr CIC's impact reports, statistics, and annual CIC filings — publicly held to account.",
};

const REPORTS = [
  {
    year: "2024–25",
    covers: "Year ending October 2025",
    href: LINKS.cicReport2025,
  },
  {
    year: "2023–24",
    covers: "Year ending October 2024",
    href: LINKS.cicReport2024,
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Impact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Our Impact
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            As a registered CIC, we are publicly held to account for the
            community benefit we deliver. Here is our evidence.
          </p>
        </div>
      </section>

      {/* Headline Numbers */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            By the Numbers
          </h2>
          <p className="text-mid text-lg max-w-xl mb-14">
            Selected impact statistics from our programmes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-5xl font-extrabold text-blue mb-3">10,000+</p>
              <p className="text-mid text-sm leading-relaxed">
                Participant attendances in 2024–25 — a 100% increase on the
                previous year.
              </p>
            </div>
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-5xl font-extrabold text-blue mb-3">426</p>
              <p className="text-mid text-sm leading-relaxed">
                Sessions delivered in 2024–25, equating to over 700 hours of
                activity across schools, community venues, and public spaces.
              </p>
            </div>
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-5xl font-extrabold text-blue mb-3">500+</p>
              <p className="text-mid text-sm leading-relaxed">
                Hours of paid and voluntary work generated — supporting
                workforce development and community leadership.
              </p>
            </div>
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-5xl font-extrabold text-blue mb-3">Feb&nbsp;2022</p>
              <p className="text-mid text-sm leading-relaxed">
                First activities delivered. Operating continuously in the
                community since our founding.
              </p>
            </div>
          </div>
          <p className="text-muted text-sm mt-6">
            Figures sourced from the Community Interest Report within our 2024–25 annual accounts, filed with Companies House.
          </p>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Annual Reports
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-10">
            Empowr&apos;s annual accounts — including our Community Interest Report
            — are filed with Companies House and publicly available. These are
            verified public filings, not self-produced documents.
          </p>
          <div className="space-y-4 max-w-2xl">
            {REPORTS.map((report) => (
              <div
                key={report.year}
                className="bg-warm-white rounded-2xl p-6 border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-black">{report.year}</p>
                  <p className="text-muted text-sm">{report.covers}</p>
                </div>
                {report.href ? (
                  <a
                    href={report.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue font-semibold text-sm hover:text-blue-dark transition-colors whitespace-nowrap"
                  >
                    View on Companies House →
                  </a>
                ) : (
                  <span className="text-muted text-sm italic">
                    Link coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-6">
            All annual accounts are also available on{" "}
            <a
              href={LINKS.companiesHouse}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-blue-dark underline"
            >
              Companies House
            </a>{" "}
            (company number 13660924).
          </p>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-black mb-6">
              A Statement on Transparency
            </h2>
            <div className="space-y-5 text-mid text-lg leading-relaxed">
              <p>
                As a CIC, Empowr is held to account by the CIC Regulator and
                required to demonstrate — in public, every year — that our work
                genuinely benefits the community. We do not treat this as a
                compliance exercise. We believe transparency is part of the work
                itself.
              </p>
              <p>
                Funders, partners, and community members should be able to
                scrutinise what we do and how we operate. Our reports are
                publicly available precisely because we welcome that scrutiny.
              </p>
              <blockquote className="border-l-4 border-blue pl-6 italic text-black font-semibold">
                &ldquo;Investing in experiential learning is not just a cultural or
                educational decision — it&apos;s a smart, future-focused economic
                strategy.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
