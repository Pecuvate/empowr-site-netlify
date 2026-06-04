"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is a Community Interest Company (CIC)?",
    answer:
      "A Community Interest Company (CIC) is a type of company specifically designed to benefit the community rather than private shareholders. Any profits are reinvested back into the community purpose — not distributed to owners. CICs are regulated by the CIC Regulator and are required to submit annual reports — called CIC 34 reports — demonstrating how their work has benefited the community. These reports are publicly available.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
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
        <p className="pb-5 text-mid leading-relaxed text-base">{answer}</p>
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
