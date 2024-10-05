import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { WithContext, LocalBusiness, Service } from "schema-dts";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://chromedoubleglazing.com"),
  title: {
    template: "%s | Expert Door & Window Solutions in London",
    default: "Chrome Double Glazing | Expert Door & Window Solutions in London",
  },
  description:
    "Chrome Double Glazing offers professional installation and repair services for doors, windows, double glazing, roof lanterns, sash windows, aluminium windows, composite doors, bi-fold doors, conservatories, shopfronts, and lock repairs. Serving London, Ilford, Dagenham, we provide quality craftsmanship and exceptional service",
};

const localBusinessJsonLd: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Chrome Double Glazing",
  url: "https://www.chromedoubleglazing.com",
  telephone: "07508443393",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 Winterbourne Road",
    addressLocality: "Dagenham",
    postalCode: "RM8 2JZ",
    addressCountry: "GB",
  },
  openingHours: "Mon-Sat 08:00-20:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.560637151465976,
    longitude: -0.11982422591251347,
  },
  areaServed: [
    { "@type": "Place", name: "London" },
    { "@type": "Place", name: "Ilford" },
    { "@type": "Place", name: "Dagenham" },
  ],
};

const serviceJsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Window and Door Fitting Service",
  description:
    "Professional installation and repair services for doors and windows.",
  provider: localBusinessJsonLd,
  areaServed: localBusinessJsonLd.areaServed,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-Q4E869XH8W" />
      <body className={inter.className}>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
      </body>
    </html>
  );
}
