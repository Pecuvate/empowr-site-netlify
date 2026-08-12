import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ChatEmbed from "@/components/ChatEmbed";

export const metadata: Metadata = {
  title: "Get In Touch | Empowr CIC",
  description:
    "Contact Empowr CIC — general enquiries, partnerships, media, work with us, and more.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen py-12 md:py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          Get In Touch
        </h1>
        <p className="text-mid text-lg mb-10 leading-relaxed">
          Ask a question below and we&rsquo;ll try to answer it right away &mdash;
          or fill in the form and your message will reach the right person.
          We aim to respond within 2 working days.
        </p>
        <ChatEmbed />
        <div className="my-10 flex items-center gap-3">
          <div className="flex-1 border-t border-border" />
          <span className="text-xs text-muted uppercase tracking-wide">Or use the form</span>
          <div className="flex-1 border-t border-border" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
