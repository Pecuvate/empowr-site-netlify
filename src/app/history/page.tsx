import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our History | Empowr CIC",
  description:
    "The story of Empowr CIC — milestones, collaborations, and the people who shaped our journey since February 2022.",
};

const TIMELINE = [
  {
    date: "February 2022",
    title: "Empowr launches — the first Skate Jam",
    body: "Empowr CIC held its very first session in Southeast London: an open Skate Jam. Born from a gap in community spaces for roller skating, this was the proof of concept that started everything.",
    image:
      "https://empowr-cic.s3.us-east-1.amazonaws.com/news_images/first-ever-empowr-skatejam-launch.avif",
    newsSlug: "2022-02-04-launch-of-empowr-first-skate-jam",
  },
  {
    date: "May 2022",
    title: "Catbytes CIC donates computers — the ICT room is born",
    body: "Catbytes CIC donated a full set of computers to Empowr, enabling a community ICT room at Barnes Wallis Community Centre in Newcross — and launching the Kids Coding Club the same month.",
    image:
      "https://empowr-cic.s3.us-east-1.amazonaws.com/news_images/catbytes-cic-computer-donation.avif",
    newsSlug: "2022-05-28-donated-computer-from-catbytes-cic",
  },
  {
    date: "June 2022",
    title: "Jubilee Family Funday — 400+ community members",
    body: "Empowr co-hosted a free community Funday with The Somerville TRA and Barnes Wallis Community Centre, funded by the Lewisham Tenants Fund. Over 400 people attended, with 11 partner organisations contributing to the day.",
    image:
      "https://empowr-cic.s3.us-east-1.amazonaws.com/news_images/jubilee-family-funday.avif",
    newsSlug: "2022-06-04-jubilee-family-funday",
  },
  {
    date: "June 2022",
    title: "Street Skate Support Group — 50+ skaters every week",
    body: "A free 12-week street skating programme launched in public spaces across SE London, run by experienced community volunteers. No cost, no barrier — just skating and community.",
    image:
      "https://empowr-cic.s3.us-east-1.amazonaws.com/news_images/street-support-for-beginners.avif",
    newsSlug: "2022-06-05-street-skate-support-group",
  },
  {
    date: "January 2023",
    title: "First school partnership — Ivydale Primary",
    body: "Empowr launched its first formal school partnership, delivering after-school skating sessions at Ivydale Primary School. A proof point that the EELA methodology translates directly into education settings.",
    image:
      "https://empowr-cic.s3.us-east-1.amazonaws.com/news_images/first-school-partnership.avif",
    newsSlug: "2023-01-13-first-partnership-ivydale-primary",
  },
  {
    date: "February 2023",
    title: "One year on — the community celebrates",
    body: "Empowr marked its first anniversary with a free roller skating event and live DJ. In year one: hundreds of sessions delivered, thousands of participants reached, two school partnerships, and a community ICT room established.",
    image:
      "https://empowr-cic.s3.us-east-1.amazonaws.com/news_images/one-year-anniversary.avif",
    newsSlug: "2023-02-06-one-year-anniversary",
  },
];

const COLLABORATORS = [
  {
    name: "Vando",
    role: "Pop-up Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/vando-pop-up-skating-instructor.avif",
  },
  {
    name: "Tyreece",
    role: "Pop-up Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/tyreece-pop-up-skating-instructor.avif",
  },
  {
    name: "Tre",
    role: "Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/tre-skating-instructor.avif",
  },
  {
    name: "Sam",
    role: "Pop-up Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/sam-pop-up-skating-instructor.avif",
  },
  {
    name: "Marie",
    role: "Bouldering Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/marie-bouldering-instructor.avif",
  },
  {
    name: "Kurt",
    role: "Zumba Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/kurt-zumba-instructor.avif",
  },
  {
    name: "Johnny",
    role: "Pop-up Roller Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/johnny-pop-up-roller-skating-instructor.avif",
  },
  {
    name: "Jared",
    role: "Pop-up Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/jared-pop-up-skating-instructor.avif",
  },
  {
    name: "Jade",
    role: "Digital Art Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/jade-digital-art-instructor.avif",
  },
  {
    name: "Genisis",
    role: "Pop-up Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/genisis-pop-up-skating-instructor.avif",
  },
  {
    name: "Clara",
    role: "Hula Hoop Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/clara-hula-hoop-instructor.avif",
  },
  {
    name: "Alan",
    role: "Pop-up Ballroom Skating Instructor",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/creative_collaborators/alan-pop-up-ballroom-skating-instructor.avif",
  },
];

const ACTIVITY_PHOTOS = [
  {
    caption: "Bouldering",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/bouldering-session.avif",
  },
  {
    caption: "Hula Hoop Workshop",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/hula-hoop-session.avif",
  },
  {
    caption: "Kids Digital Art Club",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/digital-design-session.avif",
  },
  {
    caption: "Kids Coding Club",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/coding-club-session.avif",
  },
  {
    caption: "Zumba Fitness",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/zumba-fitness-session.avif",
  },
  {
    caption: "Rubik's Cube Workshop",
    image: "https://empowr-cic.s3.us-east-1.amazonaws.com/past_activities/rubiks-cube-session.avif",
  },
];

const PARTNERS = [
  {
    name: "Catbytes CIC",
    context:
      "Donated computers that enabled Empowr's community ICT room and Kids Coding Club in Newcross.",
  },
  {
    name: "The Somerville TRA",
    context: "Co-hosted the Jubilee Family Funday alongside Empowr and Barnes Wallis.",
  },
  {
    name: "Barnes Wallis Community Centre",
    context:
      "Home of Empowr's community ICT room and base for early programmes in Newcross.",
  },
  {
    name: "Lewisham Tenants Fund",
    context: "Funded the Jubilee Family Funday, enabling a free community event for 400+ people.",
  },
  {
    name: "Ivydale Primary School",
    context:
      "Empowr's first school partnership — after-school skating sessions delivered on site.",
  },
  {
    name: "St Winifred's School",
    context: "School partnership delivering EELA sessions for pupils.",
  },
  {
    name: "BOST (Bankside Open Spaces Trust)",
    context: "Community space partner supporting Empowr's outdoor and public programming.",
  },
];

export default function HistoryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Our History
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl mb-6">
            From two skaters to a community of thousands.
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            Since February 2022, Empowr has been showing up — in schools, community centres,
            public spaces, and everywhere people want to move and grow. Here&apos;s how we got here.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            Our Journey
          </h2>
          <p className="text-mid text-lg max-w-xl mb-14">
            Key milestones since Empowr launched in February 2022.
          </p>

          <div className="relative pl-8 sm:pl-14">
            {/* Vertical connecting line */}
            <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-0.5 bg-border" />

            <div className="space-y-10 sm:space-y-14">
              {TIMELINE.map((milestone, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-8 sm:-left-14 top-1.5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue border-2 border-cream" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-3">
                    {milestone.date}
                  </p>
                  <div className="bg-white rounded-2xl border border-border overflow-hidden">
                    {milestone.image && (
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full aspect-video object-cover"
                      />
                    )}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-mid text-sm leading-relaxed mb-4">
                        {milestone.body}
                      </p>
                      {milestone.newsSlug && (
                        <Link
                          href={`/news/${milestone.newsSlug}`}
                          className="inline-flex items-center gap-1 text-blue text-sm font-semibold hover:text-blue-dark transition-colors"
                        >
                          Read the full story →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Collaborators */}
      {COLLABORATORS.length > 0 && (
        <section className="bg-warm-white py-12 md:py-20 lg:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              Creative Collaborators &amp; Instructors
            </h2>
            <p className="text-mid text-lg max-w-xl mb-14">
              The practitioners and facilitators who have brought Empowr&apos;s
              programmes to life.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {COLLABORATORS.map((person) => (
                <div
                  key={person.name}
                  className="bg-white rounded-2xl border border-border overflow-hidden flex flex-col"
                >
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full aspect-square object-cover object-top"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-blue-pale flex items-center justify-center">
                      <span className="text-3xl text-blue-light font-extrabold">
                        {person.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-4">
                    <p className="font-bold text-black text-sm">{person.name}</p>
                    <p className="text-muted text-xs mt-0.5">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Activity Photos */}
      {ACTIVITY_PHOTOS.length > 0 && (
        <section className="bg-blue-pale py-12 md:py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              In Action
            </h2>
            <p className="text-mid text-lg max-w-xl mb-14">
              A look back at Empowr programmes and activities across the years.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {ACTIVITY_PHOTOS.map((photo, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-border bg-white"
                >
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full aspect-square object-cover"
                  />
                  {photo.caption && (
                    <p className="text-xs text-muted p-3 leading-snug">{photo.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Partners */}
      <section className="bg-cream py-12 md:py-20 lg:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            Organisations We&apos;ve Worked With
          </h2>
          <p className="text-mid text-lg max-w-xl mb-14">
            Empowr builds value-based partnerships. These are the organisations that
            have been part of our story.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-2"
              >
                <p className="font-bold text-black">{partner.name}</p>
                <p className="text-muted text-sm leading-snug">{partner.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue text-white py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">Be part of what comes next.</h2>
            <p className="text-blue-light">
              Support our work, partner with us, or come and skate.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-involved"
              className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors whitespace-nowrap"
            >
              Get Involved
            </Link>
            <Link
              href="/news"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Latest News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
