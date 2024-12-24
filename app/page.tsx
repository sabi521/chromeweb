// app/page.tsx

import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";
import BlogPostPreview from "@/components/BlogPostPreview";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.chromedoubleglazing.com/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      {/* Blog Post Previews Section */}
      <BlogPostPreview />
      <Contact />
    </main>
  );
}
