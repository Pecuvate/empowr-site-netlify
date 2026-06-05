"use client";

import { useState } from "react";

export default function OurStorySection() {
  const [expanded, setExpanded] = useState(false);

  return (
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

            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="text-blue font-semibold text-base hover:underline focus:outline-none"
              >
                See more →
              </button>
            )}

            {expanded && (
              <>
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
                <blockquote className="mt-10 border-l-4 border-blue pl-6 text-black font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed italic">
                  &ldquo;Empty spaces can become places of growth. People, given the
                  right environment, can thrive. And the most powerful learning
                  happens when we are in motion — together.&rdquo;
                </blockquote>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
