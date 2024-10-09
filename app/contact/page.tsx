import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: 'https://www.chromedoubleglazing.com/contact/', 
  },
};

const page = () => {
  return (
    <div className="mt-32">
      <Contact />
    </div>
  );
};

export default page;
