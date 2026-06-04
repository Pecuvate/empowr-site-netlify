import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch | Empowr CIC",
  description:
    "Contact Empowr CIC — general enquiries, partnerships, media, work with us, and more.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          Get In Touch
        </h1>
        <p className="text-mid text-lg mb-14 leading-relaxed">
          Fill in the form below and your message will reach the right person.
          We aim to respond within 2 working days.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
