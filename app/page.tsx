import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { generateSchema } from "@/lib/schema";

export const metadata = {
  alternates: {
    canonical: 'https://chromedoubleglazing.com/', 
  },
};

export default function Home() {
  const schemaData = generateSchema("LocalBusiness", {}); // Generate schema data

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
