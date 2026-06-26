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
  {
    name: "Bouldering",
    description: "Physical problem-solving and full-body challenge on the wall.",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/bouldering-session.avif",
  },
  {
    name: "Hula Hoop Workshops",
    description: "Movement, rhythm, and coordination through hoop play — for all ages.",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/hula-hoop-session.avif",
  },
  {
    name: "Kids Digital Art Club",
    description: "Creative digital expression and design skills for young people.",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/digital-design-session.avif",
  },
  {
    name: "Kids Coding Club",
    description: "Hands-on introduction to programming, logic, and computational thinking.",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/coding-club-session.avif",
  },
  {
    name: "Zumba",
    description: "High-energy Latin-inspired dance fitness for all levels.",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/zumba-fitness-session.avif",
  },
  {
    name: "Rubix Cube Workshop",
    description: "Spatial reasoning and logical thinking through puzzle-solving.",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/rubiks-cube-session.avif",
  },
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

const EELA_PROGRAMMES = [
  {
    name: "MoveWell",
    tagline: "Movement & Wellness",
    description: "Dynamic ways to improve physical and mental health through movement.",
    active: true,
  },
  {
    name: "MindWell",
    tagline: "Mindfulness & Recovery",
    description: "A space for relaxation and rejuvenation, nurturing inner peace, mental clarity, and physical flexibility.",
    active: false,
  },
  {
    name: "CreateWell",
    tagline: "Creativity & Self-Expression",
    description: "Exploring personal expression as a meaningful pathway to wellbeing.",
    active: false,
  },
  {
    name: "ExploreWell",
    tagline: "Nature & Exploration",
    description: "Building fitness, teamwork, and a genuine connection with the natural world.",
    active: false,
  },
  {
    name: "ConnectWell",
    tagline: "Collaboration & Growth",
    description: "Group challenges and interactive workshops that develop leadership, problem-solving, and strategic thinking through hands-on experience.",
    active: false,
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28 text-center">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl mx-auto">
            Delivering activities that use hands-on experience as the route to lasting wellbeing.
          </h1>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
                Our Approach
              </h2>
              <div className="space-y-8 text-mid text-lg leading-relaxed">
                <div>
                  <p className="mb-3">
                    Empowr designs and delivers activities through{" "}
                    <strong className="text-black">EELA</strong> — the Empowr
                    Experiential Learning Activities framework. EELA ensures every
                    session is grounded in psychological safety, inclusion,
                    meaningful challenge, and joy. It keeps Empowr true to its
                    roots: people learn and grow best through doing.
                  </p>
                  <Link
                    href={LINKS.experientialLearning}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:opacity-75 transition-opacity"
                  >
                    Find out more about EELA →
                  </Link>
                </div>
                <div>
                  <p className="mb-3">
                    Our facilitators are trained through{" "}
                    <strong className="text-black">ECCP</strong> — the Empowr
                    Certified Coaching Programme. Rather than recruiting externally,
                    ECCP converts participants into certified coaches — building
                    Empowr&apos;s delivery capacity from within the community, and
                    ensuring every coach carries Empowr&apos;s values into every
                    session.
                  </p>
                  <Link
                    href="/eccp"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:opacity-75 transition-opacity"
                  >
                    Find out more about ECCP →
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-blue-pale rounded-2xl p-7 border border-blue/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-3">
                  The Science
                </p>
                <p className="text-mid text-sm leading-relaxed">
                  Experiential learning — hands-on activity that challenges both
                  body and mind — creates new neural pathways, improves brain
                  function, and reduces stress hormones. Physical movement and
                  mental stimulation combined produce outcomes no passive approach
                  can replicate.
                </p>
              </div>
              <div className="bg-blue-pale rounded-2xl p-7 border border-blue/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-3">
                  Where We&apos;re Headed
                </p>
                <p className="text-mid text-sm leading-relaxed">
                  Empowr&apos;s long-term ambition is to be recognised as a{" "}
                  <strong className="text-black">Health Activities Provider</strong>{" "}
                  — a legitimate health intervention alongside clinical care, with
                  experiential learning prescribed as part of a broader wellbeing
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EELA Framework */}
      <section className="bg-blue-pale py-10 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            The EELA Framework
          </h2>
          <p className="text-mid text-lg max-w-2xl mx-auto mb-10">
            EELA is not a single activity — it is the framework that all
            activities are built within. Five sub-programmes, each with its own
            focus, all aligned to the same mission.
          </p>
          </div>
          <div className="flex flex-col gap-3">
            {EELA_PROGRAMMES.map((prog) => (
              <div
                key={prog.name}
                className={`flex items-start gap-5 rounded-2xl border p-5 sm:p-6 ${
                  prog.active
                    ? "bg-white border-blue/30"
                    : "bg-white/60 border-border"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-1.5">
                    <p className={`font-bold ${prog.active ? "text-black" : "text-black/70"}`}>
                      {prog.name}
                    </p>
                    <span className="text-xs text-muted">{prog.tagline}</span>
                    {prog.active ? (
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue bg-blue/10 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted bg-black/5 px-2 py-0.5 rounded-full">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${prog.active ? "text-mid" : "text-muted"}`}>
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              Our Activities
            </h2>
            <p className="text-mid text-lg max-w-xl mx-auto">
              Active sessions, courses, and camps — all grounded in the EELA
              framework.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMME_GROUPS.map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-2xl p-7 border border-border flex flex-col"
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

          <div className="mt-10 text-center">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-dark transition-colors inline-block"
            >
              Book a Session
            </a>
          </div>

          {/* Past Programmes */}
          <div className="mt-14 pt-10 border-t border-border">
            <h3 className="text-xl font-bold text-black mb-2">
              Past Activities
            </h3>
            <p className="text-mid text-sm max-w-2xl mb-6">
              Skating is one vehicle among many. Past activities demonstrate
              that Empowr&apos;s methodology works across different formats — whatever
              creates movement, challenge, and connection.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {PAST_PROGRAMMES.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl border border-border overflow-hidden flex flex-col"
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-blue-pale flex items-center justify-center px-4">
                      <span className="text-blue font-bold text-base text-center">
                        {p.name}
                      </span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col gap-1">
                    <p className="font-bold text-black text-sm">{p.name}</p>
                    <p className="text-muted text-xs leading-snug">
                      {p.description}
                    </p>
                    <span className="text-xs font-semibold text-muted bg-black/5 self-start px-2 py-0.5 rounded-full mt-1">
                      Past
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With + Partners */}
      <section className="bg-warm-white py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-4">
                Who We Work With
              </h2>
              <p className="text-mid text-lg mb-8">
                Empowr works with people of every age in SE London and beyond —
                across schools, community centres, public spaces, and events.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Children",
                  "Young People",
                  "Adults",
                  "Older Adults",
                  "Families",
                  "Communities",
                ].map((group) => (
                  <span
                    key={group}
                    className="bg-blue-pale text-blue font-semibold text-sm px-4 py-1.5 rounded-full border border-blue/20"
                  >
                    {group}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Schools", example: "Ivydale Primary School" },
                  { label: "Community Centres", example: "Barnes Wallis" },
                  { label: "Community Events", example: "Jubilee Family Funday" },
                  { label: "Public Spaces", example: "Street Skate Support Group" },
                ].map((setting) => (
                  <div
                    key={setting.label}
                    className="bg-white rounded-xl p-4 border border-border"
                  >
                    <p className="font-bold text-black text-sm mb-0.5">{setting.label}</p>
                    <p className="text-muted text-xs">{setting.example}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-4">
                Our Partners
              </h2>
              <p className="text-mid text-lg mb-8">
                Empowr builds value-based partnerships with organisations
                committed to community wellbeing.
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
