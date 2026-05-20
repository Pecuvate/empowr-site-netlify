import Link from "next/link";
import { LINKS } from "@/lib/links";

const BELIEF_PILLARS = [
  {
    heading: "Wellbeing",
    body: "We believe everyone deserves the tools to live well — mentally, physically, and emotionally.",
  },
  {
    heading: "Learning",
    body: "We believe experience is the most powerful teacher. People grow best when they are in motion.",
  },
  {
    heading: "Community",
    body: "We believe change happens when people come together. Connection is not a by-product — it is the work.",
  },
  {
    heading: "Inclusion",
    body: "We believe wellbeing is for everyone, at every age. No one is too old, too young, or too far behind to grow.",
  },
];

const ROUTE_CARDS = [
  {
    heading: "Support Our Work",
    body: "Give monthly or one-time to fund Empowr programmes and activities in the community.",
    cta: "Become a Hero",
    href: LINKS.heroesplatform,
    external: true,
  },
  {
    heading: "See Our Impact",
    body: "Reports, statistics, and evidence of our work — held to public account as a registered CIC.",
    cta: "Our Impact",
    href: "/impact",
    external: false,
  },
  {
    heading: "Work With Us",
    body: "Practitioners and facilitators who want to deliver programmes with Empowr.",
    cta: "Find Out More",
    href: "/work-with-us",
    external: false,
  },
  {
    heading: "Partner With Us",
    body: "Schools, organisations, and commissioners interested in working with Empowr at a strategic level.",
    cta: "Get In Touch",
    href: "/contact",
    external: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Live by growing. Grow by learning. Learn by doing.
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mb-6">
            Promoting lifelong wellbeing through experiential learning.
          </h1>
          <p className="text-lg md:text-xl text-blue-light max-w-2xl leading-relaxed mb-10">
            Empowr CIC is a community organisation based in SE London. We design
            and deliver hands-on programmes that strengthen body and mind — for
            children, young people, adults, and older adults.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-white text-blue font-semibold px-7 py-3 rounded-full hover:bg-blue-pale transition-colors"
            >
              Find Out More
            </Link>
            <a
              href={LINKS.heroesplatform}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            What We Stand For
          </h2>
          <p className="text-mid text-lg max-w-2xl mb-14">
            Empowr is more than an organisation — it is a movement built on four
            core beliefs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BELIEF_PILLARS.map((pillar) => (
              <div
                key={pillar.heading}
                className="bg-warm-white rounded-2xl p-7 border border-border"
              >
                <h3 className="text-lg font-bold text-blue mb-3">
                  {pillar.heading}
                </h3>
                <p className="text-mid text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Everyone is welcome here.
            </h2>
            <p className="text-mid text-lg leading-relaxed max-w-xl">
              Empowr works with people of all ages and backgrounds — children,
              young people, adults, older adults, and whole families. We are not
              a skating club. We are a wellbeing organisation that uses
              experiential learning to help every person grow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
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
                className="bg-white text-blue font-semibold text-sm px-5 py-2.5 rounded-full border border-blue/20"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Routes */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Get Involved
          </h2>
          <p className="text-mid text-lg max-w-xl mb-14">
            There are several ways to connect with, support, and be part of
            Empowr.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROUTE_CARDS.map((card) => (
              <div
                key={card.heading}
                className="bg-warm-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <h3 className="text-lg font-bold text-black mb-3">
                  {card.heading}
                </h3>
                <p className="text-mid text-sm leading-relaxed flex-1 mb-6">
                  {card.body}
                </p>
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors text-center"
                  >
                    {card.cta}
                  </a>
                ) : (
                  <Link
                    href={card.href}
                    className="bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors text-center"
                  >
                    {card.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News placeholder — populated when MDX posts exist */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-black">
              News &amp; Updates
            </h2>
            <Link
              href="/news"
              className="text-blue font-semibold text-sm hover:text-blue-dark transition-colors"
            >
              All news →
            </Link>
          </div>
          <p className="text-mid">
            News posts will appear here. Check back soon, or{" "}
            <Link href="/news" className="text-blue hover:text-blue-dark">
              visit the news page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
