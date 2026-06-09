import Link from "next/link";
import { LINKS } from "@/lib/links";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const OFFER_CARDS = [
  {
    label: "Drop In & Skate",
    ages: "Ages 5+ · All levels",
    body: "Open community sessions — no commitment, no pressure. Just show up, lace up, and move at your own pace.",
  },
  {
    label: "Learn to Skate",
    ages: "Ages 5+ · Beginner to advanced",
    body: "Progressive lessons and multi-session courses that take you from first steps to real, lasting confidence.",
  },
  {
    label: "Holiday Camps",
    ages: "Ages 5–15 · School holidays",
    body: "Immersive multi-day skating experiences for children and young people. High-energy, skill-building, and genuinely memorable.",
  },
  {
    label: "Push Your Skills",
    ages: "Ages 13+ · Intermediate to advanced",
    body: "Level 2 courses and advanced sessions for skaters ready to develop their own style and go further.",
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
    cta: "Find Out More",
    href: "/partner-with-us",
    external: false,
  },
];


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <video
          src="/hero-banner2-sharp.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-28 lg:py-36">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl mb-6">
            Live by growing. Grow by learning. Learn by doing.
          </h1>
          <p className="text-lg md:text-xl text-blue-light max-w-2xl leading-relaxed mb-10">
            We design and deliver experiential learning programmes that improve
            long-term mental, physical, and emotional wellbeing — for people of
            every age.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue font-semibold px-7 py-3 rounded-full hover:bg-blue-pale transition-colors"
            >
              Book a Session
            </a>
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

      {/* What We Offer */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              Everyone is welcome here.
            </h2>
            <p className="text-mid text-lg max-w-xl">
              Empowr works with people of all ages and backgrounds. Whether
              you&apos;re stepping on skates for the first time or looking to
              push your limits — there&apos;s a session for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {OFFER_CARDS.map((card) => (
              <div
                key={card.label}
                className="bg-warm-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <p className="text-xs text-muted font-medium mb-3">{card.ages}</p>
                <h3 className="text-lg font-bold text-black mb-3">{card.label}</h3>
                <p className="text-mid text-sm leading-relaxed flex-1">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-dark transition-colors inline-block"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-blue-pale py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
                Thousands of people. One community.
              </h2>
              <p className="text-mid text-lg max-w-xl">
                Since February 2022, Empowr has been showing up. Our mission is
                to <em>empowr</em>{" "}as many people as possible — here&apos;s our
                reach so far.
              </p>
            </div>
            <Link
              href="/impact"
              className="text-blue font-semibold text-sm hover:text-blue-dark transition-colors whitespace-nowrap"
            >
              See our full impact →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "10,000+", label: "Participant attendances" },
              { stat: "428", label: "Sessions delivered" },
              { stat: "500+", label: "Hours of paid & volunteer work" },
              { stat: "2", label: "Countries reached" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue mb-3">
                  {stat}
                </span>
                <span className="text-mid text-sm leading-snug">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-6">
            Figures from our 2024–25 Annual Report — one year&apos;s output.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-warm-white py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              See what others say
            </h2>
            <p className="text-mid text-lg max-w-xl">
              Real people. Real sessions. Here&apos;s what our community thinks.
            </p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Get Involved Routes */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
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
    </>
  );
}
