import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28 text-center">
          <p className="text-blue-light text-xs font-semibold uppercase tracking-widest mb-4">
            Our Impact
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-2xl mx-auto">
            As a registered CIC, we are publicly held to account for the
            community benefit we deliver. Here is our evidence.
          </h1>
        </div>
      </section>

      {/* Headline Numbers */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-center">
            By the Numbers
          </h2>
          <p className="text-mid text-lg max-w-xl mb-14 text-center mx-auto">
            Selected impact statistics from our programmes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-3xl md:text-5xl font-extrabold text-blue mb-3">10,000+</p>
              <p className="text-mid text-sm leading-relaxed">
                Participant attendances in 2024–25 — a 100% increase on the
                previous year.
              </p>
            </div>
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-3xl md:text-5xl font-extrabold text-blue mb-3">428</p>
              <p className="text-mid text-sm leading-relaxed">
                Sessions delivered in 2024–25, equating to over 700 hours of
                activity across schools, community venues, and public spaces.
              </p>
            </div>
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-3xl md:text-5xl font-extrabold text-blue mb-3">500+</p>
              <p className="text-mid text-sm leading-relaxed">
                Hours of paid and voluntary work generated — supporting
                workforce development and community leadership.
              </p>
            </div>
            <div className="bg-warm-white rounded-2xl p-8 border border-border">
              <p className="text-3xl md:text-5xl font-extrabold text-blue mb-3">Feb&nbsp;2022</p>
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

      {/* Highlights */}
      <section className="bg-warm-white py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-center">
            Highlights
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-10 text-center mx-auto">
            Selected milestones from our 2024–25 delivery year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream rounded-2xl p-7 border border-border">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
                Government Commissioned
              </p>
              <h3 className="text-lg font-bold text-black mb-3">
                HAF Programme — Year 2
              </h3>
              <p className="text-mid text-sm leading-relaxed">
                For the second consecutive year, Empowr was commissioned as a
                delivery partner under the government&apos;s Holiday Activities and
                Food (HAF) programme — providing structured activity and food
                provision for children during school holidays.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-7 border border-border">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
                Beyond London
              </p>
              <h3 className="text-lg font-bold text-black mb-3">
                Birmingham &amp; International Reach
              </h3>
              <p className="text-mid text-sm leading-relaxed">
                Empowr expanded its reach beyond SE London with a community
                collaboration in Birmingham and a street skate activation in
                Badalona, Spain — where over 200 participants engaged in a
                single session, connecting with international skate culture.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-7 border border-border">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
                Year-on-Year Growth
              </p>
              <h3 className="text-lg font-bold text-black mb-3">
                100% Growth in Attendance
              </h3>
              <p className="text-mid text-sm leading-relaxed">
                From approximately 5,000 participant attendances in 2023–24 to
                10,000+ in 2024–25. Sustained growth across school delivery,
                community sessions, holiday camps, and public events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="bg-blue-pale py-10 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-center">
            Annual Reports
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-10 text-center mx-auto">
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
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-black mb-6 text-center">
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

      {/* History Callout */}
      <section className="bg-blue text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-blue-light text-xs font-semibold uppercase tracking-widest mb-2">
            Since February 2022
          </p>
          <h2 className="text-2xl font-extrabold mb-4">
            Empowr has been showing up for over three years.
          </h2>
          <p className="text-blue-light leading-relaxed mb-8">
            The numbers above are one measure of that. Our history page tells
            you how — the milestones, the collaborators, and the communities
            we have built it with.
          </p>
          <Link
            href="/history"
            className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors inline-block"
          >
            Explore our full history →
          </Link>
        </div>
      </section>
    </>
  );
}
