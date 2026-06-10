"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: "What is a Community Interest Company (CIC)?",
    answer: (
      <>
        <p>
          A Community Interest Company (CIC) is a type of company specifically
          designed to benefit the community rather than private shareholders. Any
          profits are reinvested back into the community purpose — not
          distributed to owners.
        </p>
        <p className="mt-3">
          CICs are regulated by the{" "}
          <a
            href="https://www.gov.uk/government/organisations/office-of-the-regulator-of-community-interest-companies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue underline hover:text-blue-dark transition-colors"
          >
            CIC Regulator
          </a>{" "}
          and are required to submit annual reports — called CIC 34 reports —
          demonstrating how their work has benefited the community. These
          reports are publicly available.
        </p>
      </>
    ),
  },
  {
    question: "Why did Empowr become a CIC?",
    answer: (
      <>
        <p>
          As a community interest company, our primary goal is to reinvest our
          surpluses back into the company or community, rather than maximizing
          profits for shareholders or owners.
        </p>
        <p className="mt-3">
          Being a CIC sets us apart from charities and traditional businesses,
          giving us the flexibility to undertake a diverse range of projects and
          activities without being bound by the same regulations and
          limitations. Our commitment to serving our community remains our top
          priority, and we strive to create a positive impact through all our
          initiatives.
        </p>
      </>
    ),
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-black">{question}</span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-border text-blue transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="w-3 h-3"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-mid leading-relaxed text-base">{answer}</div>
      )}
    </div>
  );
}

export default function FaqsAccordion() {
  return (
    <div className="bg-warm-white rounded-2xl border border-border px-8">
      {FAQS.map((faq) => (
        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
