import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chrome Double Glazing | Expert Door & Window Solutions in London",
  description:
    "Chrome Double Glazing offers professional installation and repair services for doors, windows, double glazing, roof lanterns, sash windows, aluminium windows, composite doors, bi-fold doors, conservatories, shopfronts, and lock repairs. Serving London, Ilford, Dagenham, we provide quality craftsmanship and exceptional service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main className="relative overflow-hidden">{children}</main>
        
        </body>
    </html>
  );
}
