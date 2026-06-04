import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Partner With Us | Empowr CIC",
  description:
    "Partner with Empowr CIC — schools, organisations, and commissioners bringing experiential learning to their communities.",
};

const PARTNERSHIP_TYPES = [
  {
    name: "Schools & Education",
    desc: "Bring Empowr programmes into your school as enrichment, curriculum support, or holiday provision. We work with primary, secondary, and SEN settings.",
  },
  {
    name: "Organisations & Charities",
    desc: "Commission Empowr to design and deliver programmes for your beneficiaries. We can adapt our model to fit your community's specific needs.",
  },
  {
    name: "Commissioners & Funders",
    desc: "Work with us at a strategic level to fund, scale, or shape Empowr programmes in specific areas or demographic groups.",
  },
  {
    name: "Venues & Spaces",
    desc: "Partner with us to activate unused community spaces. We bring the programme — you bring the venue.",
  },
];

const STATS = [
  { stat: "10,000+", label: "Participant attendances" },
  { stat: "428", label: "Sessions delivered" },
  { stat: "500+", label: "Hours of paid & volunteer work" },
  { stat: "100%", label: "Year-on-year growth" },
];

export default function PartnerWithUsPage() {
  return (
    <>
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Work Together
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Partner With Us
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            Empowr CIC works with schools, organisations, commissioners, and
            venues to bring experiential learning programmes to more people in
            more places.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
              Why work with Empowr?
            </h2>
            <div className="space-y-6 text-mid text-lg leading-relaxed">
              <p>
                Since our first activities in February 2022, we have delivered
                over 428 sessions, welcomed more than 10,000 participant
                attendances, and expanded our reach from SE London to Birmingham
                and internationally to Badalona, Spain.
              </p>
              <p>
                We are a registered CIC — every pound reinvested into the
                community, publicly accountable through Companies House filings.
                Our work is evidence-based, outcomes-focused, and built around
                the people we serve.
              </p>
              <p>
                Whether you are commissioning a single programme or building a
                long-term strategic relationship, we will work with you to
                design something that genuinely works for your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Who we work with
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-14">
            From local schools to national commissioners — we work with partners
            of all sizes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PARTNERSHIP_TYPES.map((pt) => (
              <div
                key={pt.name}
                className="bg-warm-white rounded-2xl p-8 border border-border"
              >
                <h3 className="text-lg font-bold text-blue mb-3">{pt.name}</h3>
                <p className="text-mid text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-black mb-12">
            Our reach
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-extrabold text-blue mb-2">
                  {item.stat}
                </p>
                <p className="text-mid text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">
              Ready to explore a partnership?
            </h2>
            <p className="text-blue-light">
              Get in touch and tell us about your community and what you are
              trying to achieve.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors whitespace-nowrap"
            >
              Get In Touch
            </Link>
            <Link
              href="/impact"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Our Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
