import type { Metadata } from "next";
import FaqsAccordion from "./FaqsAccordion";

export const metadata: Metadata = {
  title: "FAQs | Empowr CIC",
  description:
    "Answers to common questions about Empowr CIC, our programmes, and how we work.",
};

export default function FaqsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            Answers to common questions about Empowr CIC, our programmes, and
            how we work.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <FaqsAccordion />
        </div>
      </section>
    </>
  );
}
