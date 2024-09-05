import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact"
}

const page = () => {
  return (
    <div className="mt-20">
      <Contact />
    </div>
  );
};

export default page;
