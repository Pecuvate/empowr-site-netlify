import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "What We Do | Empowr CIC",
  description:
    "Empowr's programmes, approach, and methodology — experiential learning in action across SE London.",
};

const PROGRAMME_GROUPS = [
  {
    category: "Drop-in Sessions",
    programmes: ["Each1teach1: Skate Jam — Ages 15+", "All Ages Roller Disco — Ages 5+"],
    description:
      "Open, welcoming sessions where skaters of all levels come together to practise, learn, and connect. No pressure, no performance — just movement, community, and growth at your own pace.",
  },
  {
    category: "Structured Lessons",
    programmes: ["Sk8 Skool for Kidz — Ages 5–15", "SK8 Skool for All Ages — Ages 5+"],
    description:
      "Progressive skating programmes that build balance, coordination, confidence, and a love of movement. Coaches create an environment where trying, falling, and getting back up is exactly the point.",
  },
  {
    category: "Courses",
    programmes: [
      "Beginners Foundations — Ages 13+",
      "Beginners Outside — Ages 13+",
      "Prep to Street Skating — Ages 13+ (Level 2)",
    ],
    description:
      "Multi-session courses that take participants from their first steps on skates to genuine skill and confidence. By the end, skating feels like yours.",
  },
  {
    category: "Camps",
    programmes: ["Roller Quad Camp — Ages 5–12", "Roller Skating Camp — Ages 5–15"],
    description:
      "Immersive holiday skating experiences for children and young people. High-energy, inclusive, and genuinely memorable — the kind of experience that stays with you long after the skates come off.",
  },
  {
    category: "Advanced",
    programmes: ["SYNKRON8 — Ages 15+"],
    description:
      "For skaters ready to go beyond the basics. Focused on routines, flow, and linking moves into sequences — building coordination, creativity, and a deeper relationship with movement.",
  },
];

const PAST_PROGRAMMES = [
  "Bouldering",
  "Hula Hoop Workshops",
  "Kids Digital Art Club",
  "Kids Coding Club",
  "Zumba",
  "Rubix Cube Workshop",
];

const PARTNERS = [
  "Ivydale Primary School",
  "St Winifred's School",
  "BOST (Bankside Open Spaces Trust)",
  "The Somerville TRA",
  "Barnes Wallis Community Centre",
  "Lewisham Tenants Fund",
  "Catbytes CIC",
];

export default function OurWorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            What We Do
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            We design and deliver programmes that use hands-on experience as the
            route to lasting wellbeing. Skating is the vehicle. Growth is the
            destination.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                Our Approach
              </h2>
              <div className="space-y-5 text-mid text-lg leading-relaxed">
                <p>
                  Empowr designs and delivers programmes through{" "}
                  <strong className="text-black">EELA</strong> — the Empowr
                  Experiential Learning Activities framework. EELA ensures every
                  session is grounded in psychological safety, inclusion,
                  meaningful challenge, and joy. It keeps Empowr true to its
                  roots: people learn and grow best through doing.
                </p>
                <p>
                  Our facilitators are trained through{" "}
                  <strong className="text-black">ECCP</strong> — the Empowr
                  Certified Coaching Program. ECCP develops facilitators, not
                  instructors — equipping them to lead with empathy, hold space
                  for others, and uphold Empowr&apos;s values in any context.
                </p>
                <p>
                  The science supports what we see in practice. Experiential
                  learning — hands-on activity that challenges both body and mind
                  — creates new neural pathways, improves brain function, and
                  reduces stress hormones. Physical movement and mental
                  stimulation combined produce outcomes no passive approach can
                  replicate.
                </p>
                <p>
                  Empowr&apos;s long-term ambition is to be recognised as a{" "}
                  <strong className="text-black">Health Activities Provider</strong>{" "}
                  — a legitimate health intervention alongside clinical care,
                  with experiential learning prescribed as part of a broader
                  wellbeing strategy. Every programme we build is a step toward
                  that goal.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-pale rounded-2xl p-7 border border-blue/10">
                <h3 className="font-bold text-blue mb-2">
                  EELA — Empowr Experiential Learning Activities
                </h3>
                <p className="text-mid text-sm leading-relaxed mb-3">
                  The overarching programme framework — every activity Empowr
                  delivers sits within it. Currently active through{" "}
                  <strong className="text-black">MoveWell</strong>, the
                  Movement &amp; Wellness sub-programme that covers skating,
                  dance, yoga, and parkour. Four further sub-programmes are
                  planned as Empowr grows.
                </p>
              </div>
              <div className="bg-blue-pale rounded-2xl p-7 border border-blue/10">
                <h3 className="font-bold text-blue mb-2">
                  ECCP — Empowr Certified Coaching Program
                </h3>
                <p className="text-mid text-sm leading-relaxed mb-3">
                  A development pathway that converts participants into certified
                  coaches — building Empowr&apos;s delivery capacity from within
                  the community. Currently in development and piloting.
                </p>
                <ul className="space-y-1">
                  {[
                    "Level 1 — certifies to train beginner to intermediate",
                    "Level 2 — certifies to train intermediate to advanced",
                    "Level 3 — certifies to train advanced and beyond",
                  ].map((level) => (
                    <li key={level} className="text-xs text-muted flex items-start gap-2">
                      <span className="text-blue mt-0.5">–</span>
                      <span>{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EELA Vision */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            The EELA Framework
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-10">
            EELA is designed to expand across five sub-programmes — each led by
            a dedicated programme lead, each delivering the same experiential
            learning principles in a different domain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "MoveWell", focus: "Movement & Wellness — skating, dance, yoga, parkour", active: true },
              { name: "Mind Body & Wellness", focus: "Mindfulness, breathwork, meditation, recovery", active: false },
              { name: "Creative Expression", focus: "Art, music, dance, creative writing", active: false },
              { name: "Outdoor & Adventure", focus: "Hiking, cycling, team sports, nature", active: false },
              { name: "Team-Building & Leadership", focus: "Leadership workshops, group challenges", active: false },
            ].map((prog) => (
              <div
                key={prog.name}
                className={`rounded-2xl p-6 border flex flex-col ${
                  prog.active
                    ? "bg-blue text-white border-blue"
                    : "bg-white border-border"
                }`}
              >
                <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${prog.active ? "text-blue-light" : "text-muted"}`}>
                  {prog.active ? "Active" : "Planned"}
                </span>
                <h3 className={`font-bold mb-2 ${prog.active ? "text-white" : "text-black"}`}>
                  {prog.name}
                </h3>
                <p className={`text-xs leading-relaxed ${prog.active ? "text-blue-light" : "text-muted"}`}>
                  {prog.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            Who We Work With
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-10">
            Empowr works with people of every age in SE London and beyond —
            across schools, community centres, public spaces, and events.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {[
              "Children",
              "Young People",
              "Adults",
              "Older Adults",
              "Families",
              "Communities",
            ].map((group) => (
              <div
                key={group}
                className="bg-white rounded-xl p-4 text-center border border-border"
              >
                <span className="text-blue font-semibold text-sm">{group}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-mid">
            {[
              { label: "Schools", example: "Ivydale Primary School" },
              { label: "Community Centres", example: "Barnes Wallis" },
              { label: "Community Events", example: "Jubilee Family Funday" },
              { label: "Public Spaces", example: "Street Skate Support Group" },
            ].map((setting) => (
              <div
                key={setting.label}
                className="bg-white rounded-xl p-5 border border-border"
              >
                <p className="font-bold text-black mb-1">{setting.label}</p>
                <p className="text-muted">{setting.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
                Our Programmes
              </h2>
              <p className="text-mid text-lg max-w-xl">
                Active sessions, courses, and camps — all grounded in the EELA
                framework.
              </p>
            </div>
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              Book a Session →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMME_GROUPS.map((group) => (
              <div
                key={group.category}
                className="bg-warm-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <h3 className="text-lg font-bold text-blue mb-3">
                  {group.category}
                </h3>
                <p className="text-mid text-sm leading-relaxed flex-1 mb-5">
                  {group.description}
                </p>
                <ul className="space-y-1">
                  {group.programmes.map((p) => (
                    <li key={p} className="text-xs text-muted flex items-start gap-2">
                      <span className="text-blue mt-0.5">–</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Past Programmes */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-black mb-2">
              Past Programmes
            </h3>
            <p className="text-mid text-sm max-w-2xl mb-6">
              Skating is one vehicle among many. Past programmes demonstrate
              that Empowr&apos;s methodology works across activities — whatever
              creates movement, challenge, and connection.
            </p>
            <div className="flex flex-wrap gap-3">
              {PAST_PROGRAMMES.map((p) => (
                <span
                  key={p}
                  className="text-sm text-muted bg-warm-white px-4 py-2 rounded-full border border-border"
                >
                  {p} <span className="text-xs ml-1 opacity-60">Past</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-warm-white py-16 md:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Our Partners
          </h2>
          <p className="text-mid text-lg max-w-xl mb-10">
            Empowr builds value-based partnerships with organisations committed
            to community wellbeing.
          </p>
          <div className="flex flex-wrap gap-3">
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="bg-blue-pale text-blue font-semibold text-sm px-5 py-2.5 rounded-full border border-blue/20"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-cream py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
            Policies &amp; Documents
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href={LINKS.programmePolicies}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-blue-dark transition-colors"
            >
              Programme Policies
            </a>
            <a
              href={LINKS.riskWaiver}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-blue-dark transition-colors"
            >
              Risk Waiver
            </a>
            <a
              href={LINKS.photographyConsent}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-blue-dark transition-colors"
            >
              Photography &amp; Media Consent
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">
              Want to work with us?
            </h2>
            <p className="text-blue-light">
              Whether you&apos;re a school, organisation, or practitioner — we&apos;d
              love to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work-with-us"
              className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors whitespace-nowrap"
            >
              Work With Us
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
