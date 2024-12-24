import React from "react";
import myBgImage from "@/assets/images/windows_installation.webp";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sleek Flush Casement Windows: Modern Design & Efficiency | Chrome Double Glazing",
  description:
    "Discover the benefits of flush casement windows, offering a sleek design and excellent energy efficiency. Explore various styles and get a free quote from Chrome Double Glazing today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/flush-casement-windows",
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
              Upgrade Your Home with Flush Casement Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Experience the perfect blend of sleek design and energy efficiency
              with our premium flush casement windows.
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
          Why Choose Flush Casement Windows for Your Property?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we specialize in the installation of
            stylish and efficient flush casement windows that enhance the
            aesthetic appeal and performance of both contemporary and
            traditional homes. Flush casement windows are known for their unique
            design, where the window frame sits flush with the exterior wall,
            creating a seamless and modern look.
          </p>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            What Are Flush Casement Windows?
          </h3>
          <p className="text-lg leading-relaxed">
            Flush casement windows are characterized by their flat and
            unobtrusive design, where the window frame aligns perfectly with the
            outer wall surface. This allows for maximized glass space and
            unobstructed views, offering both visual appeal and practical
            benefits, and adding a touch of sophistication to any property. For
            more information about windows, you can visit the
            <a
              href="https://www.which.co.uk/"
              className="text-blue-600 font-medium hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Which? Website
            </a>
          </p>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Benefits of Flush Casement Windows
          </h3>
          <ul className="list-decimal list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Aesthetic Appeal:</span>{" "}
              Clean lines and flat surfaces offer a modern and stylish
              appearance.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Improved Energy Efficiency:</span>{" "}
              Designed with high-performance glazing to help lower your energy
              bills.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Increased Security:</span> Fitted
              with robust locking mechanisms to provide peace of mind.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Low Maintenance:</span> Durable
              materials require minimal upkeep, saving you time and effort.
            </li>
          </ul>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Popular Styles of Flush Casement Windows
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Traditional Flush Casement:</span>{" "}
              Designed to emulate classic timber windows with authentic details.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Modern Flush Casement:</span> With
              sleek lines and contemporary finishes to suit modern homes.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Custom Flush Casement:</span>{" "}
              Tailored to your specific designs and requirements.
            </li>
          </ul>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Chrome Double Glazing?
          </h3>
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we are passionate about providing top-tier
            flush casement windows that combine style, durability, and
            high-performance. Our experienced team ensures precise fittings and
            high-quality finishes, which are built to last. Whether you are
            seeking a traditional look or a contemporary feel, we have a wide
            range of
            <a
              href="https://www.chromedoubleglazing.com/upvc-windows"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              uPVC window options
            </a>
            that will transform your home.
          </p>

          <p className="text-lg leading-relaxed">
            Ready to elevate your home with our premium flush casement windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a free, no-obligation quote and discover the difference
            our windows can make.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
