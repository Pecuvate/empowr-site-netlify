import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supporter Prospectus 2025–2026 | Empowr CIC",
  description:
    "Empowr CIC supporter prospectus — our mission, impact, programmes, and how to get involved.",
  robots: { index: false, follow: false },
};

const BELIEFS = [
  {
    name: "Wellbeing as a Way of Life",
    body: "We support everyday habits and mindsets that build lasting health and joy — not one-off interventions. Wellbeing is something you live, not something you receive.",
  },
  {
    name: "Community and Belonging",
    body: "We create spaces where everyone feels valued and connected, united by authentic relationships and shared purpose. Belonging is one of the most powerful protective factors for long-term mental health, and we treat it that way.",
  },
  {
    name: "Growth Through Learning",
    body: "Transformation happens when people engage and experience. We help them grow through doing — not watching, not waiting. Every session is designed around the idea that learning lives in action.",
  },
  {
    name: "Inclusion For All",
    body: "Wellbeing is for everyone, at every age. No one is too old, too young, or too far behind to grow — every person has a place here.",
  },
];

const ENGINES = [
  {
    icon: "🏟",
    name: "The Delivery Engine",
    body: "We find and partner with venues, run skating sessions, workshops, lessons, events, and holiday camps, and deliver these through trained coaches and facilitators. This is what the community sees — but it is not the whole picture.",
  },
  {
    icon: "🎓",
    name: "The Coach Development Engine",
    body: "We recruit and train participants, volunteers, and community members through our Empowr Certified Coaching Programme (ECCP), creating pathways from participant to certified coach to programme leader. Our real asset is the growing network of people who can deliver Empowr experiences safely and sustainably.",
  },
  {
    icon: "🔗",
    name: "The Support and Funding Engine",
    body: "We generate income through commissioned delivery, government programmes, and participant-paid sessions. Alongside this, we seek funding and supporter investment — not to fund individual sessions, but to strengthen the whole system: more coaches, more spaces, more subsidised places.",
  },
];

const FLYWHEEL = [
  "Empowr secures support",
  "Support funds capacity — coaches, venues, equipment",
  "Capacity creates more sessions and more access",
  "Sessions produce wellbeing outcomes and community trust",
  "Outcomes produce evidence and public demand",
  "Evidence attracts more support and partnerships",
  "The system expands — more coaches, more locations, more lives",
];

const IMPACT_STATS = [
  { number: "10,000+", label: "Attendances\nYear 3", highlight: true },
  { number: "100%", label: "Year-on-year\ngrowth", highlight: false },
  { number: "428", label: "Sessions\ndelivered", highlight: false },
  { number: "700+", label: "Hours of\nactivity", highlight: false },
];

const YEAR_TABLE = [
  {
    year: "Year 1 (2022–23)",
    attendances: "7,000",
    milestone: "Empowr Champions launched. 6 partner organisations. 4 in 5 participants reported improved mental health.",
  },
  {
    year: "Year 2 (2023–24)",
    attendances: "~5,000",
    milestone: "DfE HAF delivery. BOST long-term partnership. First international activation (Badalona).",
  },
  {
    year: "Year 3 (2024–25)",
    attendances: "~10,000",
    milestone: "428 sessions · 700+ hours · 500+ paid and volunteer opportunities created · 100% YoY growth.",
  },
];

const EELA_PROGRAMMES = [
  { name: "MoveWell", focus: "Movement & Wellness", status: "Active" },
  { name: "MindWell", focus: "Mindfulness & Recovery", status: "Planned" },
  { name: "CreateWell", focus: "Creativity & Self-Expression", status: "Planned" },
  { name: "ExploreWell", focus: "Nature & Exploration", status: "Planned" },
  { name: "ConnectWell", focus: "Collaboration & Growth", status: "Planned" },
];

const GOVERNANCE = [
  { item: "CIC registration", status: "Active — Company No. 13660924" },
  { item: "Annual CIC 34 reports", status: "Filed with CIC Regulator for 2023, 2024, and 2025" },
  { item: "Board of Directors", status: "Three directors in office; three strategic roles being recruited (target: 3+ by August 2026)" },
  { item: "Profit use", status: "100% reinvested — no surplus extraction" },
  { item: "Directors' remuneration", status: "Transparent — disclosed in full in CIC 34 annual filings" },
];

const DELIVERY_DATA = [
  { type: "Weekly Community Sessions", attendances: "3,815" },
  { type: "School-Based Delivery (Ivydale School, St Winifred's, BOST)", attendances: "3,540" },
  { type: "Holiday Programmes and HAF Camps", attendances: "1,185" },
  { type: "Roller Skating Events", attendances: "770" },
  { type: "Street Skate Programmes", attendances: "460" },
  { type: "Structured Courses (Sk8 Skool)", attendances: "160" },
  { type: "Birthday Parties", attendances: "80" },
  { type: "Total", attendances: "~10,010", bold: true },
];

export default function ProspectusPage() {
  return (
    <>
      {/* ── Cover ──────────────────────────────────────── */}
      <section className="bg-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-light mb-6">
            Empowr CIC — Community Interest Company
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Supporter Prospectus
            <span className="block text-2xl md:text-3xl font-semibold opacity-75 mt-2">
              2025 – 2026
            </span>
          </h1>
          <p className="text-lg md:text-xl font-semibold leading-relaxed opacity-90 max-w-xl border-l-4 border-white/30 pl-5 mb-12 italic">
            &ldquo;Promoting lifelong wellbeing through the transformative power of experiential learning.&rdquo;
          </p>
          <div className="flex flex-wrap gap-10">
            {[
              { number: "10,000", label: "Participant attendances\nin Year 3" },
              { number: "100%", label: "Year-on-year\ngrowth" },
              { number: "4 in 5", label: "Participants report\nimproved mental health" },
            ].map((stat) => (
              <div key={stat.number}>
                <span className="block text-4xl md:text-5xl font-extrabold leading-none tracking-tight">
                  {stat.number}
                </span>
                <span className="block text-xs font-semibold uppercase tracking-wider opacity-75 mt-2 whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xs font-semibold uppercase tracking-widest opacity-50">
            empowrcic.org · Company No. 13660924
          </p>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-8">
            We exist on a simple belief
          </h2>
          <div className="space-y-5 text-mid text-lg leading-relaxed">
            <p>
              Empowr was founded in October 2021 by Jasmine and Shaun Barnett — though the idea
              behind it had been forming for some time before that. It began with a simple
              observation: across their communities were countless empty halls and unused spaces,
              sitting idle for most of the week. At the same time, a deeper question was taking
              shape — what truly contributes to lifelong wellbeing?
            </p>
            <p>
              The answer kept pointing in the same direction. Real growth doesn&rsquo;t happen in
              theory. It happens through experience — through doing, trying, and learning in
              motion. That became the founding principle of Empowr: to bring life back into unused
              community spaces by turning them into hubs of experiential learning.
            </p>
            <p>
              Three years later, that belief has more than 10,000 attendances behind it. We deliver
              across community sessions, school programmes, holiday camps, and events — reaching
              children, young people, and adults across South East London and beyond.
            </p>
            <blockquote className="border-l-4 border-blue pl-6 bg-blue-pale rounded-r-2xl py-4 my-2">
              <p className="text-black font-bold text-lg italic">
                Experiential learning is our method. Lifelong wellbeing is our mission.
                Skating — for now — is our medium.
              </p>
            </blockquote>
            <p>
              The framework we have built is designed for far more than one activity. It is an
              infrastructure for community wellbeing — and it is growing.
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Stand For ──────────────────────────── */}
      <section className="bg-warm-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">What We Stand For</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-6">
            Four beliefs at the heart of what we do
          </h2>
          <p className="text-mid text-lg leading-relaxed mb-10">
            Empowr is more than an organisation — it is a movement built on four core beliefs.
            They shape every session we design, every coach we train, and every partnership we build.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BELIEFS.map((b) => (
              <div
                key={b.name}
                className="bg-white rounded-2xl p-7 border border-border border-l-4 border-l-blue"
              >
                <h3 className="text-base font-extrabold text-blue mb-3">{b.name}</h3>
                <p className="text-mid text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Need ───────────────────────────────────── */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">The Need</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-8">
            A health crisis that prescriptions alone cannot solve
          </h2>
          <div className="space-y-5 text-mid text-lg leading-relaxed">
            <p>
              The UK is facing compounding physical and mental health challenges. One in four adults
              experiences a mental health problem each year. Physical inactivity costs the NHS an
              estimated £7.4 billion annually. Children and young people from lower-income
              backgrounds are disproportionately affected. And community connection — one of the
              most powerful protective factors for long-term mental health — is in decline.
            </p>
            <p className="font-semibold text-black">
              Waiting lists treat the symptom. Empowr addresses the root.
            </p>
            <p>
              When a person engages in a new physical, social experience — especially one that
              presents a manageable challenge — the brain forms new neural connections. Chronic
              stress, which accelerates cellular aging and weakens immunity, is reduced. Movement
              activates the body&rsquo;s fascia system, supporting whole-body health. And shared
              activity creates belonging, accountability, and lasting wellbeing habits.
            </p>
            <blockquote className="border-l-4 border-blue pl-6 bg-blue-pale rounded-r-2xl py-4 my-2">
              <p className="text-black font-bold text-lg italic">
                &ldquo;Investing in experiential learning is not just a cultural or educational decision
                — it&rsquo;s a smart, future-focused economic strategy.&rdquo;
              </p>
            </blockquote>
            <p>
              This is the principle Empowr was built on, and it is the case we now make to
              commissioners, funders, and government — supported by a growing evidence base.
            </p>
          </div>
        </div>
      </section>

      {/* ── How We Work ────────────────────────────────── */}
      <section className="bg-warm-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-6">
            Three engines. One system.
          </h2>
          <p className="text-mid text-lg leading-relaxed mb-10">
            Empowr did not start as a system. It started with one session — a skating jam in South
            East London, in February 2022. What we have built since has come from paying attention
            to what actually worked, and giving it structure. That structure now operates as three
            connected engines.
          </p>
          <div className="flex flex-col gap-4 mb-12">
            {ENGINES.map((e) => (
              <div key={e.name} className="bg-blue rounded-2xl p-6 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl shrink-0">
                  {e.icon}
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-base mb-2">{e.name}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-mid text-lg leading-relaxed mb-6">The result is a flywheel:</p>
          <div className="flex flex-col divide-y divide-border">
            {FLYWHEEL.map((step, i) => (
              <div key={i} className="flex items-start gap-4 py-4">
                <span className="w-7 h-7 rounded-full bg-blue text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-mid font-semibold text-sm pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ─────────────────────────────────────── */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-4">
            Three years of verified delivery
          </h2>
          <p className="text-mid text-lg leading-relaxed mb-8">
            All figures are drawn from our CIC 34 annual reports, filed with the CIC Regulator.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {IMPACT_STATS.map((s) => (
              <div
                key={s.number}
                className={`rounded-2xl p-6 text-center border ${
                  s.highlight
                    ? "bg-blue border-blue"
                    : "bg-white border-border"
                }`}
              >
                <span
                  className={`block text-3xl md:text-4xl font-extrabold leading-none tracking-tight mb-2 ${
                    s.highlight ? "text-white" : "text-blue"
                  }`}
                >
                  {s.number}
                </span>
                <span
                  className={`block text-xs font-bold uppercase tracking-wider whitespace-pre-line ${
                    s.highlight ? "text-white/75" : "text-muted"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-mid text-lg leading-relaxed mb-8">
            The three-year picture tells the story of an organisation finding its shape. Year 1
            was a proof of concept — 7,000 attendances, the launch of Empowr Champions, the first
            six partner organisations, and early evidence that 4 in 5 participants reported
            improved mental health. Year 2 saw consolidation rather than growth: 5,000 attendances,
            but also our first year as a commissioned DfE HAF provider, our long-term partnership
            with Bankside Open Space Trust, and our first international activation in Badalona.
            Year 3 was the year the model came into its own — 10,000 attendances, 428 sessions,
            700+ hours of activity, more than 500 paid and volunteer opportunities created, and
            100% year-on-year growth.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Year", "Attendances", "Key Milestone"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-extrabold uppercase tracking-wider text-muted pb-3 border-b-2 border-border pr-6"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {YEAR_TABLE.map((row) => (
                  <tr key={row.year}>
                    <td className="py-4 pr-6 border-b border-border font-bold text-black whitespace-nowrap align-top">
                      {row.year}
                    </td>
                    <td className="py-4 pr-6 border-b border-border font-bold text-black align-top">
                      {row.attendances}
                    </td>
                    <td className="py-4 border-b border-border text-mid align-top">
                      {row.milestone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 space-y-3 text-mid text-base leading-relaxed">
            <p>
              <strong className="text-black">Active partnerships include:</strong> Bankside Open
              Space Trust (BOST), Department for Education HAF (second year as commissioned
              provider), Lewisham Young Mayor&rsquo;s Team, and five named venue partners across SE
              London.
            </p>
            <p>
              All profits are reinvested. Directors deferred a portion of their own remuneration in
              Year 3 to preserve organisational liquidity and prioritise delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── Where We're Going ──────────────────────────── */}
      <section className="bg-warm-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">Where We&rsquo;re Going</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-6">
            Building a Health Activities Provider for the UK
          </h2>
          <div className="space-y-5 text-mid text-lg leading-relaxed">
            <p className="text-xl font-semibold text-black leading-relaxed">
              We are building towards becoming a recognised Health Activities Provider in the UK —
              a legitimate health intervention that sits alongside clinical care.
            </p>
            <p>
              The long-term vision: GPs and social prescribers referring people to Empowr sessions
              the way they refer people to physiotherapy or talking therapies. Social prescribing is
              already NHS policy. Our task is to be ready when that pathway expands.
            </p>
            <h3 className="text-lg font-extrabold text-blue pt-4">In the near term</h3>
            <p>
              <strong className="text-black">ECCP launch</strong> — Our Empowr Certified Coaching
              Programme converts participants into certified coaches, multiplying delivery capacity
              without proportionally increasing overhead. This is the infrastructure that makes
              national scale possible — and it is also the mechanism by which the Empowr ethos is
              preserved as the organisation grows. ECCP develops facilitators, not instructors.
            </p>
            <p>
              <strong className="text-black">EELA expansion</strong> — Skating is our current
              medium, but the EELA framework supports five sub-programmes: MoveWell (Movement &amp;
              Wellness), MindWell (Mindfulness &amp; Recovery), CreateWell (Creativity &amp;
              Self-Expression), ExploreWell (Nature &amp; Exploration), and ConnectWell
              (Collaboration &amp; Growth). MoveWell is active. We are actively building the teams
              and partnerships to activate the rest.
            </p>
            <p>
              <strong className="text-black">Delivery hubs</strong> — Establishing permanent
              Empowr activity spaces in SE London and beyond, reducing venue dependency and
              increasing community access.
            </p>
            <p>
              <strong className="text-black">Evidence framework</strong> — Building a formal
              outcomes measurement system to support Social Return on Investment (SROI) reporting,
              enabling commissioner-grade funding applications and long-term government partnerships.
            </p>
            <p>
              None of this is infrastructure for its own sake. ECCP, EELA, delivery hubs, the
              evidence framework — every piece is in service of one outcome: that more people,
              across more communities, have access to the experiences that support their wellbeing
              across a lifetime. Empowr is not designed around the session. It is designed around
              the person walking into the session, and the years of their life that follow.
            </p>
          </div>
        </div>
      </section>

      {/* ── How To Support ─────────────────────────────── */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">How You Can Help</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-10">
            Three ways to invest in this mission
          </h2>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-extrabold text-black mb-4">Commission Empowr</h3>
              <p className="text-mid leading-relaxed mb-3">
                We deliver structured, evidenced experiential learning sessions for organisations
                with community wellbeing goals. Whether you are a school, local authority, housing
                association, NHS partnership, or wellbeing commissioner — we can design and deliver
                a programme for your community.
              </p>
              <p className="text-mid leading-relaxed mb-5">
                We are a proven DfE HAF provider with experience across South East London and a
                growing network of certified coaches. The question we are most often asked now is
                not whether we can run a session, but whether we can deliver outcomes for a
                community. The answer, consistently, is yes.
              </p>
              <a
                href="mailto:info@empowrcic.org"
                className="text-sm font-extrabold text-blue hover:opacity-75 transition-opacity tracking-wide"
              >
                info@empowrcic.org →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-extrabold text-black mb-4">Partner With Empowr</h3>
              <p className="text-mid leading-relaxed mb-3">
                If your organisation serves communities that would benefit from Empowr&rsquo;s
                programmes — charities, CICs, youth services, community health organisations, sport
                and activity providers — we welcome partnership conversations.
              </p>
              <p className="text-mid leading-relaxed mb-5">
                We bring the sessions. You bring the community. Together we create outcomes neither
                of us could produce alone.
              </p>
              <a
                href="mailto:info@empowrcic.org"
                className="text-sm font-extrabold text-blue hover:opacity-75 transition-opacity tracking-wide"
              >
                info@empowrcic.org →
              </a>
            </div>

            <div className="bg-blue rounded-2xl p-8">
              <h3 className="text-xl font-extrabold text-white mb-4">Support Our Mission</h3>
              <p className="text-white/85 leading-relaxed mb-5">
                Empowr is a Community Interest Company. Every pound we receive is reinvested —
                training coaches, accessing venues, subsidising places, and building the
                infrastructure to reach more communities.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "One-off or regular donation — via our Heroes platform at hero.empowrcic.org",
                  "Legacy gift — leave a gift to Empowr in your will and ensure your values outlive you. Even a small percentage of an estate can fund years of coaching training and community access.",
                  "Named support — sponsor a programme, a coaching cohort, or a season of sessions. We will recognise your contribution and provide a full impact report.",
                  "Corporate partnership — align your social value commitments with Empowr's delivery.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                    <span className="text-white mt-1 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:shaun@empowrcic.org"
                className="text-sm font-extrabold text-white underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                Contact Shaun Barnett directly →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section className="bg-warm-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-6">
            We&rsquo;d love to hear from you
          </h2>
          <p className="text-mid text-lg leading-relaxed mb-8">
            Whether you want to commission a programme, explore a partnership, or discuss how to
            support our mission — the conversation starts here.
          </p>
          <div className="bg-blue-pale rounded-2xl p-8 border border-blue/10 space-y-2 text-mid">
            <p className="font-extrabold text-black text-lg mb-4">Empowr CIC</p>
            <p>Crown House, 27 Old Gloucester Street, London WC1N 3AX</p>
            <p>Company No. 13660924 · Registered Community Interest Company, England and Wales</p>
            <div className="pt-4 space-y-2">
              <p><strong className="text-black">General enquiries:</strong> info@empowrcic.org</p>
              <p><strong className="text-black">Commissioning &amp; partnerships:</strong> info@empowrcic.org</p>
              <p><strong className="text-black">Legacy giving &amp; major support:</strong> shaun@empowrcic.org (Shaun Barnett, CVO)</p>
              <p><strong className="text-black">Website:</strong>{" "}
                <Link href="/" className="text-blue font-semibold hover:opacity-75 transition-opacity">
                  empowrcic.org
                </Link>
              </p>
              <p><strong className="text-black">Donate:</strong>{" "}
                <a
                  href="https://hero.empowrcic.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue font-semibold hover:opacity-75 transition-opacity"
                >
                  hero.empowrcic.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Appendix A ─────────────────────────────────── */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <p className="text-xs font-extrabold uppercase tracking-widest text-muted mb-2">
            Appendix A — Delivery Data
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight mb-8">
            Year 3 Programme Breakdown (2024–2025)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-xs font-extrabold uppercase tracking-wider text-muted pb-3 border-b-2 border-border pr-6">
                    Programme Type
                  </th>
                  <th className="text-right text-xs font-extrabold uppercase tracking-wider text-muted pb-3 border-b-2 border-border">
                    Attendances
                  </th>
                </tr>
              </thead>
              <tbody>
                {DELIVERY_DATA.map((row) => (
                  <tr key={row.type}>
                    <td className={`py-3 pr-6 border-b border-border align-top ${row.bold ? "font-bold text-black" : "text-mid"}`}>
                      {row.type}
                    </td>
                    <td className={`py-3 text-right border-b border-border align-top font-bold ${row.bold ? "text-black" : "text-black"}`}>
                      {row.attendances}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Appendix B ─────────────────────────────────── */}
      <section className="bg-warm-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <p className="text-xs font-extrabold uppercase tracking-widest text-muted mb-2">
            Appendix B — Programme Framework
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight mb-8">
            The EELA Framework
          </h2>
          <div className="space-y-5 text-mid text-base leading-relaxed mb-8">
            <p>
              The Empowr Experiential Learning Activities (EELA) framework is the architecture
              every Empowr programme lives within. It is built on the established four-stage
              experiential learning cycle: people <em>do</em> (engage in purposeful, often novel
              activity), <em>reflect</em> (analyse the experience), <em>conceptualise</em> (draw
              general principles from what happened), and <em>apply</em> (transfer those insights
              to new situations). This is what allows movement to become wellbeing, and a single
              session to become a lasting shift.
            </p>
            <p>
              Every EELA session is grounded in four principles: psychological safety, inclusion,
              meaningful challenge, and joy. These are not optional features. They are the
              conditions that make experiential learning actually work.
            </p>
            <p>
              EELA operates as an umbrella across five sub-programmes, each with its own team and
              focus, all aligned to the same mission.
            </p>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Sub-Programme", "Focus", "Status"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-extrabold uppercase tracking-wider text-muted pb-3 border-b-2 border-border pr-6"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EELA_PROGRAMMES.map((row) => (
                  <tr key={row.name}>
                    <td className="py-3 pr-6 border-b border-border font-bold text-black align-top">
                      {row.name}
                    </td>
                    <td className="py-3 pr-6 border-b border-border text-mid align-top">
                      {row.focus}
                    </td>
                    <td className="py-3 border-b border-border align-top">
                      {row.status === "Active" ? (
                        <span className="text-xs font-bold uppercase tracking-wider text-blue bg-blue/10 px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      ) : (
                        <span className="text-xs font-bold uppercase tracking-wider text-muted bg-black/5 px-2 py-0.5 rounded-full">
                          Planned
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-mid italic">Skating is the vehicle. Wellbeing is the destination.</p>
        </div>
      </section>

      {/* ── Appendix C ─────────────────────────────────── */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <p className="text-xs font-extrabold uppercase tracking-widest text-muted mb-2">
            Appendix C — Governance
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight mb-8">
            Credentials and Transparency
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Item", "Status"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-extrabold uppercase tracking-wider text-muted pb-3 border-b-2 border-border pr-6"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GOVERNANCE.map((row) => (
                  <tr key={row.item}>
                    <td className="py-3 pr-6 border-b border-border font-bold text-black align-top whitespace-nowrap">
                      {row.item}
                    </td>
                    <td className="py-3 border-b border-border text-mid align-top">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Document Footer ─────────────────────────────── */}
      <section className="bg-warm-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted">
            Empowr CIC · Registered Community Interest Company, England and Wales · Company No. 13660924
          </p>
          <p className="text-sm text-muted mt-1">
            Crown House, 27 Old Gloucester Street, London WC1N 3AX · empowrcic.org
          </p>
          <p className="text-xs text-muted mt-3">
            All delivery figures sourced from CIC 34 annual reports filed with the CIC Regulator.
            Prospectus correct as of June 2026.
          </p>
        </div>
      </section>
    </>
  );
}
