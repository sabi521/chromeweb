import React from "react";
import myBgImage from "@/assets/images/triple_glaze_1.webp";
import contentImage from "@/assets/images/triple_glazed_2.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "High-Performance Triple Glazed Windows: Energy Efficiency & Comfort | Chrome Double Glazing",
  description:
    "Discover the exceptional benefits of triple glazed windows, including superior energy efficiency, noise reduction, and enhanced security. Get a free quote from Chrome Double Glazing today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/triple-glazed-windows",
  },
};

const Page = () => {
  return (
    <div className="mt-32 mb-10">
      {/* Banner Section */}
      <section
        className="relative h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat bg-black/70"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${myBgImage.src})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center mx-auto px-4 md:px-6">
          <div className="max-w-2xl w-full text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Experience Superior Comfort with Triple Glazed Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Maximize your home's energy efficiency and comfort with our
              advanced triple glazed windows.
            </p>
            <div className="mx-auto w-fit">
              <GetInTouch />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Why Choose Triple Glazed Windows for Your Home?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we are dedicated to providing top-tier
            window solutions, and our triple glazed windows are designed to
            provide unparalleled insulation and energy efficiency. Triple
            glazing represents the cutting edge of window technology, making it
            an excellent choice for homeowners who want to maximize their
            comfort and reduce energy costs.
          </p>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            What Are Triple Glazed Windows?
          </h3>
          <p className="text-lg leading-relaxed">
            Triple glazed windows feature three panes of glass separated by
            insulating spaces, which are typically filled with argon or krypton
            gas. This configuration significantly reduces heat transfer compared
            to double glazing, resulting in a warmer home during the winter and
            a cooler home during the summer. For more information about energy
            saving options for your home, please visit the
            <a
              href="https://www.thegreenage.co.uk/"
              className="text-blue-600 font-medium hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Green Age Website.
            </a>
          </p>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Benefits of Installing Triple Glazed Windows
          </h3>
          <ul className="list-decimal list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">
                Exceptional Energy Efficiency:
              </span>{" "}
              Reduces heat loss, maintains indoor temperatures, and lowers
              energy bills.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Superior Noise Reduction:</span>{" "}
              Effectively minimizes external noise, creating a quieter home.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Security:</span> More
              difficult to break, offering an extra layer of security.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Eco-Friendly Solution:</span>{" "}
              Lowers energy consumption, reducing your carbon footprint and
              environmental impact.
            </li>
          </ul>

          <div className="max-w-[768px] mx-auto py-10">
            <Image
              className="w-full h-auto object-cover rounded-md shadow-md"
              src={contentImage}
              width={768}
              height={500}
              alt="Triple glazed window."
            />
          </div>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Chrome Double Glazing?
          </h3>
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we are dedicated to providing top-tier
            triple glazed windows that combine high performance with aesthetic
            appeal. Our experienced team ensures a flawless installation, using
            the latest materials and techniques to maximize the energy
            efficiency and longevity of your windows. You can see more about
            <a
              href="https://www.chromedoubleglazing.com/casement-windows"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              our casement windows here.
            </a>
          </p>

          <p className="text-lg leading-relaxed">
            Ready to upgrade your home with our high-performance triple glazed
            windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a free, no-obligation quote and discover the benefits of
            superior insulation and comfort.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
