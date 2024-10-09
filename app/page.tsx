import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.chromedoubleglazing.com/', 
  },
};


export default function Home() {
  return (
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
  );
}
