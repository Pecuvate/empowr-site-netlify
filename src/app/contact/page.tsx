import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch | Empowr CIC",
  description:
    "Contact Empowr CIC — general enquiries, partnerships, media, work with us, and more.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-2xl">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-mid text-lg max-w-xl mb-14">
            Fill in the form below and your message will reach the right person.
            We aim to respond within 2 working days.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
