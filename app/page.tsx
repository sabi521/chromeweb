import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { generateSchema } from "@/lib/schema"; // Import your schema function
import Head from "next/head"; // Import Head for adding metadata

export default function Home() {
  const schemaData = generateSchema("LocalBusiness", {}); // Generate schema data

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
