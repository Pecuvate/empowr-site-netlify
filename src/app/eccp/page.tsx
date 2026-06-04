import type { Metadata } from "next";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "ECCP — Empowr Certified Coach Programme | Empowr CIC",
  description:
    "The Empowr Certified Coach Programme — a professional certification pathway for practitioners and facilitators. Coming soon.",
};

const LEVELS = [
  {
    level: "Level 1",
    name: "Foundation",
    desc: "Core Empowr principles, programme knowledge, and facilitation basics.",
  },
  {
    level: "Level 2",
    name: "Practitioner",
    desc: "Deeper facilitation skills, session planning, and participant wellbeing.",
  },
  {
    level: "Level 3",
    name: "Advanced Coach",
    desc: "Programme design, community leadership, and coaching other facilitators.",
  },
];

export default function ECCPPage() {
  return (
    <>
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Coming Soon
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Empowr Certified Coach Programme
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            A professional certification pathway for practitioners and
            facilitators who want to deliver Empowr-quality experiential
            learning programmes in their communities.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
              What is the ECCP?
            </h2>
            <div className="space-y-6 text-mid text-lg leading-relaxed">
              <p>
                The Empowr Certified Coach Programme (ECCP) is a structured
                certification pathway designed for coaches, facilitators, and
                practitioners who want to deliver the Empowr approach to
                experiential learning.
              </p>
              <p>
                The programme spans three certification levels — each building
                on the last to develop deeper knowledge, stronger facilitation
                skills, and a greater ability to create transformative
                experiences for participants.
              </p>
              <p>
                ECCP is currently in its pilot phase. We are building the
                platform and infrastructure to support coaches across the UK and
                beyond. If you are interested in becoming a certified Empowr
                coach, register your interest below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Certification Levels
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-14">
            Three progressive levels — from foundation knowledge to advanced
            facilitation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEVELS.map((cert) => (
              <div
                key={cert.level}
                className="bg-warm-white rounded-2xl p-8 border border-border"
              >
                <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">
                  {cert.level}
                </p>
                <h3 className="text-lg font-bold text-black mb-3">
                  {cert.name}
                </h3>
                <p className="text-mid text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">
              Interested in becoming a certified coach?
            </h2>
            <p className="text-blue-light">
              Register your interest and we will be in touch when applications
              open.
            </p>
          </div>
          <a
            href={`mailto:${LINKS.opportunitiesEmail}`}
            className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors whitespace-nowrap"
          >
            Register Interest
          </a>
        </div>
      </section>
    </>
  );
}
