import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import Header from "../components/Header";
import type { Metadata } from "next";
import LuxuryCursor from "../components/LuxuryCursor";
import WhatsAppButton from "../components/WhatsAppButton";

/* 1️⃣ Define fonts (TOP LEVEL, outside component) */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rootscare.in"),
  title: {
    default: "Roots & Care — Trusted Elder Care in Kanpur",
    template: "%s | Roots & Care",
  },
  description:
    "Premium, on-ground elder care in Kanpur for NRIs. Emergency response, companionship, and responsible family presence.",
  openGraph: {
    title: "Roots & Care — Trusted Elder Care in Kanpur",
    description:
      "Premium, on-ground elder care in Kanpur for NRIs. We act as your local sons and daughters.",
    url: "https://rootscare.in",
    siteName: "Roots & Care",
    images: [
      {
        url: "/elder-happy-couple.png",
        width: 1200,
        height: 630,
        alt: "Happy Elderly Couple - Roots & Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roots & Care — Trusted Elder Care in Kanpur",
    description:
      "Reliable, on-ground elder care in Kanpur for parents living alone.",
    images: ["/elder-happy-couple.png"],
  },
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Roots & Care",
    image: "https://rootscare.in/elder-happy-couple.png",
    description: "Premium, on-ground elder care in Kanpur for NRIs.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    url: "https://rootscare.in",
    areaServed: {
      "@type": "City",
      name: "Kanpur",
    },
    priceRange: "$$$",
  };

  return (
    /* 2️⃣ APPLY FONTS RIGHT HERE */
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />

          {/* PAGE CONTENT */}
          {children}
        </SmoothScroll>
        <WhatsAppButton />
        <LuxuryCursor />
      </body>
    </html>
  );
}
