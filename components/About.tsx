import React from "react";
import Image from "next/image";
import aboutUs from "@/assets/images/window_banner.webp";

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 overflow-hidden dark:bg-gray-800 2xl:py-16"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          <div className="w-full">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              About Us
            </h2>
            <p className="w-full mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 md:max-w-lg">
              At <strong>Chrome Double Glazing</strong>, we don&apos;t just
              install doors and windows—we enhance your home&apos;s security and
              style. As expert fitters, we specialize in everything from the
              installation of elegant <strong>uPVC products</strong> to robust{" "}
              <strong>double glazing</strong> solutions that add both value and
              beauty to your property.
            </p>
            <p className="w-full mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Whether you&apos;re looking to replace old windows with
              energy-efficient{" "}
              <strong>casement, sash, or tilt-and-turn styles</strong>, or need
              help with <strong>lock repairs</strong>, our team delivers a
              professional, stress-free experience. We&apos;re also experts in
              crafting custom solutions for <strong>roofline products</strong>{" "}
              and even the intricate design of <strong>French windows</strong>.
            </p>
            <p className="w-full mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              With years of experience and a passion for precision, we guarantee
              installations that stand the test of time, ensuring your home is
              as safe as it is stylish.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden">
              <Image
                className="w-full h-full object-cover transform transition-transform hover:scale-105"
                src={aboutUs}
                alt="Fixing the door lock"
                width={600}
                height={400} // Adjust the height for better proportions
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
