import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Axiom Group",
  description: "A parent technology and AI holding company building for the long term.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://axiomgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Axiom Group",
    description: "A parent technology and AI holding company building for the long term.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Axiom Group",
    description: "A parent technology and AI holding company building for the long term.",
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
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
