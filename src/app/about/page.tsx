import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import OurStorySection from "@/components/OurStorySection";

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
    avatar: "/avatars/jasmine.png",
  },
  {
    name: "Shaun Barnett",
    role: "Co-founder",
    bio: "Leads narrative, structure, and long-term strategic vision. The clarity of Empowr's identity — its frameworks, its purpose, the way it grows with intention — is Shaun's work.",
    avatar: "/avatars/shaun.png",
  },
  {
    name: "Clifton George Barrett",
    role: "Director of Events",
    bio: "Leads the planning and delivery of Empowr's events programme — bringing the organisation's values into every event and making sure each one feels true to what Empowr stands for.",
    avatar: "/avatars/clifton.png",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
            Promoting lifelong wellbeing through the transformative power of
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

      <OurStorySection />

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
                <div className="w-20 h-20 rounded-full mb-5 border-2 border-blue/20 overflow-hidden shrink-0">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
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
