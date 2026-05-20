import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us | Empowr CIC",
  description:
    "Join Empowr as a practitioner or facilitator — delivering experiential learning programmes in the community.",
};

export default function WorkWithUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Work With Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Work With Us
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            Empowr works with practitioners and facilitators who believe in the
            power of hands-on experience to transform people&apos;s lives. We&apos;re
            looking for people who lead with values, not just skills.
          </p>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                Who We&apos;re Looking For
              </h2>
              <div className="space-y-5 text-mid text-lg leading-relaxed">
                <p>
                  We&apos;re not looking for instructors — we&apos;re looking for
                  facilitators. People who understand that the real work happens
                  not in the activity itself, but in the space created around
                  it. People who can hold that space with empathy, consistency,
                  and a genuine belief that everyone can grow.
                </p>
                <p>
                  You might be a coach, a youth worker, a community practitioner,
                  or someone who has built experience delivering hands-on
                  programmes in any context. What matters most is not your
                  specialism — it&apos;s your values, your ability to connect with
                  people, and your commitment to doing things properly.
                </p>
                <p>
                  We work across age groups and settings — schools, community
                  centres, public spaces, and events. The right practitioner is
                  someone who can adapt without compromising the quality of the
                  experience.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  heading: "Values first",
                  body: "You believe wellbeing matters, that experience is the most powerful teacher, and that everyone deserves to grow — regardless of age, background, or starting point.",
                },
                {
                  heading: "Community-minded",
                  body: "You understand that the people in the room are the product, not the activity. You prioritise belonging, safety, and authentic connection.",
                },
                {
                  heading: "Committed to quality",
                  body: "You take standards seriously — not because you&apos;re told to, but because the people you work with deserve a consistently excellent experience.",
                },
              ].map((point) => (
                <div
                  key={point.heading}
                  className="bg-blue-pale rounded-2xl p-7 border border-blue/10"
                >
                  <h3 className="font-bold text-blue mb-2">{point.heading}</h3>
                  <p className="text-mid text-sm leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              How It Works
            </h2>
            <div className="space-y-5 text-mid text-lg leading-relaxed">
              <p>
                Empowr works with freelance associates rather than employing
                everyone directly. This model allows us to bring in the right
                people for the right contexts — and gives practitioners the
                flexibility to work across multiple organisations while
                maintaining a genuine relationship with Empowr.
              </p>
              <p>
                Work is typically scoped around specific programmes, sessions,
                or delivery periods. Before any work begins, Empowr will make
                sure you understand the EELA framework, our approach to
                facilitation, and what good looks like in practice. This is not
                a box-ticking exercise — it&apos;s how we make sure the quality stays
                consistent and the people we serve are in good hands.
              </p>
              <p>
                If you join as a practitioner, you join a community — not just
                a delivery roster. Empowr invests in the people who represent
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expression of Interest */}
      <section className="bg-blue text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Interested in working with us?
          </h2>
          <p className="text-blue-light text-lg max-w-xl mx-auto mb-10">
            We&apos;d love to hear from you. No formal application — just start the
            conversation and we&apos;ll take it from there.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue font-semibold px-8 py-4 rounded-full hover:bg-blue-pale transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
