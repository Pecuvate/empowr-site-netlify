import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Empowr CIC",
  description:
    "Promoting lifelong well-being through the transformative power of experiential learning.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Empowr CIC",
    "url": "https://empowrcic.org",
    "description": "Empowr CIC is a UK-based Community Interest Company focused on empowering individuals through education, employment, and community connection.",
    "sameAs": [
      "https://www.linkedin.com/company/empowr-cic",
      "https://www.instagram.com/empowr.cic",
      "https://www.facebook.com/empowr.cic",
      "https://www.youtube.com/@empowr.cic"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Empowr CIC",
    "url": "https://empowrcic.org",
    "description": "Empowr CIC is a UK-based Community Interest Company focused on empowering individuals through education, employment, and community connection."
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-black font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
