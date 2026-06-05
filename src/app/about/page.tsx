import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Who We Are | Empowr CIC",
  description:
    "Learn about Empowr CIC — our story, our structure, our values, and the people behind the movement.",
};

const VALUES = [
  {
    name: "Wellbeing as a Way of Life",
    body: "We support everyday habits and mindsets that build lasting health and joy — not just one-off interventions.",
  },
  {
    name: "Community and Belonging",
    body: "Empowr is a movement. We create spaces where everyone feels valued and connected, united by authentic relationships and shared purpose.",
  },
  {
    name: "Growth Through Learning",
    body: "Transformation happens when people engage and experience. We help them grow through doing — not watching, not waiting.",
  },
  {
    name: "Inclusion For All",
    body: "Wellbeing is for everyone, at every age. No one is too old, too young, or too far behind to grow — every person has a place here.",
  },
];

const TEAM = [
  {
    name: "Jasmine Barnett",
    role: "Co-founder",
    bio: "Leads community, operations, and culture. The warmth people feel in every Empowr space — the welcome, the relationships, the sense that they belong — flows from Jasmine.",
    avatar: "/avatars/jasmine.svg",
  },
  {
    name: "Shaun Barnett",
    role: "Co-founder",
    bio: "Leads narrative, structure, and long-term strategic vision. The clarity of Empowr's identity — its frameworks, its purpose, the way it grows with intention — is Shaun's work.",
    avatar: "/avatars/shaun.svg",
  },
  {
    name: "Clifton George Barrett",
    role: "Director of Events",
    bio: "Leads the planning and delivery of Empowr's events programme — bringing the organisation's values into every event and making sure each one feels true to what Empowr stands for.",
    avatar: "/avatars/clifton.svg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
            We promote lifelong wellbeing through the transformative power of
            experiential learning.
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            Empowr CIC is a community organisation based in SE London. Our
            mission is to be the number one Health Activities Provider in the
            UK, providing people with safe spaces where they can feel empowered
            to learn, develop and grow as an individual.
          </p>
        </div>
      </section>

      {/* What We Stand For (Values) */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            What We Stand For
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-14">
            Empowr is more than an organisation — it is a movement built on
            four core beliefs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.name}
                className="bg-warm-white rounded-2xl p-8 border border-border border-l-4 border-l-blue"
              >
                <h3 className="text-lg font-bold text-blue mb-4">
                  {value.name}
                </h3>
                <p className="text-mid leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-blue-pale py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
              Our Story
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-8">
              How we got here.
            </p>
            <div className="space-y-6 text-mid text-lg leading-relaxed">
              <p>
                Empowr was officially incorporated in October 2021, but the idea
                behind it began much earlier. It started with a simple
                observation shared by founders Jasmine and Shaun Barnett: across
                their communities were countless empty halls and unused spaces —
                community centres, school halls, and local venues sitting idle
                for most of the week. At the same time, a deeper question was
                forming: what truly contributes to lifelong wellbeing?
              </p>
              <p>
                The founders had become fascinated by the Japanese concept of
                Ikigai — the idea that purpose and fulfilment are found through
                meaningful action. The more they reflected on it, the clearer it
                became that real growth doesn&apos;t happen in theory; it happens
                through experience. Through doing, trying, and learning in
                motion. This became the founding principle of Empowr: to bring
                life back into unused community spaces by turning them into hubs
                of experiential learning.
              </p>
              <p>
                Before settling on skating, the founders explored a completely
                different direction — an RC (remote control) workshop, a space
                where people could build, tinker, and learn through hands-on
                experimentation. It aligned with the principles, but planning
                took over from action and the concept grew cumbersome. The
                original instinct had been simpler:{" "}
                <em>
                  we have empty spaces, people need activities — start where
                  it&apos;s human.
                </em>{" "}
                Then something more organic happened. Jasmine had developed an
                interest in roller skating and quickly realised others wanted the
                same thing: a safe, open, welcoming place to move and learn.
                Skating aligned with the community&apos;s real needs. It wasn&apos;t
                chosen — it emerged.
              </p>
              <p>
                Once the first sessions began, something became immediately
                clear: people weren&apos;t just attending — they were connecting.
                Parents stayed longer than expected. Adults rediscovered
                movement. Young people found confidence they didn&apos;t know they
                had. What began as an activity became a movement — and Empowr
                has been growing ever since.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-blue pl-6 text-black font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed italic">
              &ldquo;Empty spaces can become places of growth. People, given the
              right environment, can thrive. And the most powerful learning
              happens when we are in motion — together.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-warm-white py-12 md:py-20 lg:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Our Team
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-14">
            The people who lead and shape Empowr.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-cream rounded-2xl p-8 border border-border"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mb-5 border-2 border-blue/20 bg-blue-pale"
                />
                <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-1">
                  {member.role}
                </p>
                <h3 className="text-lg font-bold text-black mb-3">
                  {member.name}
                </h3>
                <p className="text-mid text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">
              Ready to get involved?
            </h2>
            <p className="text-blue-light">
              See our programmes, read our impact reports, or get in touch.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/our-work"
              className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors whitespace-nowrap"
            >
              Our Work
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
