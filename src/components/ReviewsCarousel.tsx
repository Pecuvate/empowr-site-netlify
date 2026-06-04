"use client";

import { useRef } from "react";
import { LINKS } from "@/lib/links";

const REVIEWS = [
  {
    title: "We had such a lovely time at the family rollerskating disco",
    body: "It was really well organised, and even the first-timers had plenty of space to find their feet around the sports hall. The speedy skaters got their own time too, which kept things fun for everyone.",
    date: "May 2026",
    verified: true,
  },
  {
    title: "Happy 🛼😊👍🏾",
    body: "I'd recommend the reasonably priced, well-structured courses. The staff are very helpful and knowledgeable; the attendees are friendly too. The Empowr social media and marketing champions diversity which is important as I'm a mature rollerskater at Beginner Foundation level. I'm pleased with the progress I'm making. It's worth the journey from NW10.",
    date: "April 2026",
    verified: true,
  },
  {
    title: "Had a great time",
    body: "Very clear and easy to follow instructions. Jasmine is super lovely and despite a large class she's able to address where you need to improve without making you feel singled out. Would love to attend again when my schedule allows.",
    date: "October 2024",
    verified: false,
  },
  {
    title: "Great session!",
    body: "Fun session with options depending on your level but also challenging, which is what makes progress. A combination of free skate, specific drills and easy dance routines. A friendly environment with a coach who puts you at ease.",
    date: "January 2024",
    verified: false,
  },
  {
    title: "Lovely all around",
    body: "Lovely staff, lovely environment! Had a great time.",
    date: "May 2026",
    verified: true,
  },
  {
    title: "Lovely people & great sessions!",
    body: "The classes and the team are lovely and the sessions are very affordable. I initially went in not feeling very confident about a lot of moves but have been able to include several new skills to my archive!!",
    date: "March 2026",
    verified: true,
  },
  {
    title: "Very positive",
    body: "Very positive. My daughter's skating has improved significantly. Now she is trying skating at the park, where she didn't have the confidence to do this before.",
    date: "February 2026",
    verified: true,
  },
];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 16l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 4l6 6-6 6" />
    </svg>
  );
}

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous review"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 bg-white border border-border rounded-full shadow-sm hover:bg-blue-pale text-blue transition-colors"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto sm:mx-14 pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review) => (
            <div
              key={review.title}
              className="w-80 flex-none snap-start bg-white rounded-2xl p-7 border border-border flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#00b67a] text-lg tracking-tight">★★★★★</span>
                {review.verified && (
                  <span className="text-xs text-muted font-medium">Verified</span>
                )}
              </div>
              <h3 className="font-bold text-black text-sm mb-3 leading-snug">
                {review.title}
              </h3>
              <p className="text-mid text-sm leading-relaxed flex-1 line-clamp-6">
                {review.body}
              </p>
              {review.date && (
                <p className="text-xs text-muted mt-4">{review.date}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          aria-label="Next review"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 bg-white border border-border rounded-full shadow-sm hover:bg-blue-pale text-blue transition-colors"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-8 text-center">
        <a
          href={LINKS.trustpilot}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue text-sm font-semibold hover:text-blue-dark transition-colors"
        >
          See all reviews on Trustpilot →
        </a>
      </div>
    </div>
  );
}
