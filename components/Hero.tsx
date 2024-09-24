import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/heroImage.webp";

const Hero = () => {
  return (
    <section className="relative mt-20 z-10">
      <div className="w-screen h-[800px] absolute top-0 left-0">
        <Image
          className="w-full h-full object-cover"
          src={heroImage}
          width={1000}
          height={1000}
          alt="background image"
          priority={true}
        />
      </div>
      {/* Adjusted the overlay to add opacity */}
      <div className="absolute w-full h-[800px] inset-0 z-[5] bg-gradient-to-r from-black/75 to-white/40"></div>

      <div className="relative z-20 mx-auto max-w-screen-xl px-4 flex h-[800px] items-center lg:px-8 sm:px-6">
        {/* Set text alignment explicitly to left */}
        <div className="max-w-4xl text-left">
          <h1 className="text-3xl text-white font-extrabold uppercase drop-shadow-2xl sm:text-5xl">
            Transform Your Space with Expert Window Installation
          </h1>

          <p className="mt-4 max-w-3xl text-orange font-medium drop-shadow-2xl sm:text-xl/relaxed">
            Enhance your home&apos;s beauty and efficiency with our premium
            double glazing solutions. Professional installation, lasting
            quality, and unmatched service. Discover the difference today.
          </p>

          <div className="mt-8 text-center">
            <a
              href="/contact/"
              className="block w-full max-w-60 rounded bg-orange px-12 py-3 text-lg font-bold text-black shadow hover:bg-opacity-80 focus:outline-none sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
