import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Empowr",
  description: "Empowring lives through the transformative power of Experiential Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
          ${poppins.variable}
          font-sans
          antialiased
          text-neutral-900
          bg-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
