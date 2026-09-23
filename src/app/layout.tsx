import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "../styles/motion.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axiom Group",
  description:
    "Axiom Group designs and builds the product architecture, intelligent systems, and brand standards a technology portfolio runs on.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://axiomgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Axiom Group",
    description:
      "Axiom Group designs and builds the product architecture, intelligent systems, and brand standards a technology portfolio runs on.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Axiom Group",
    description:
      "Axiom Group designs and builds the product architecture, intelligent systems, and brand standards a technology portfolio runs on.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body suppressHydrationWarning className="min-h-screen bg-[#f4f7fb] font-sans text-[#122033] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
