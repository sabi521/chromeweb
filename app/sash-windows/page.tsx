import React from "react";
import myBgImage from "@/assets/images/window_banner.webp";
import contentImage from "@/assets/images/sash-windows.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Elegant Sash Windows: Bespoke Designs & Modern Performance | Chrome Double Glazing",
  description:
    "Discover our bespoke sash windows, combining traditional style with modern efficiency. Enhance your period property with our high-quality, custom-designed sash windows. Get a free quote today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/sash-windows",
  },
};

const page = () => {
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
              Timeless Elegance with Sash Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Elevate your home with our meticulously crafted sash windows,
              blending traditional charm with modern functionality.
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
          Why Choose Our Bespoke Sash Windows?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we specialize in crafting exquisite
            bespoke sash windows that perfectly blend timeless elegance with
            modern performance. Our windows are designed to enhance the
            aesthetic appeal of your property, adding value and charm while also
            providing superior energy efficiency and security. Each window is
            tailored to your specific requirements, offering a seamless fit with
            your property’s existing style.
          </p>

          <p className="text-lg leading-relaxed">
            Our sash windows are available in a variety of styles, designs, and
            configurations to suit any period or modern property. Whether you
            are looking for a classic, traditional style, or a contemporary
            design, we have the expertise to create the perfect windows for your
            home. We offer a range of material options including uPVC, wood and
            aluminum, ensuring durability and long-lasting beauty. To see more
            examples of our
            <a
              href="https://www.chromedoubleglazing.com/casement-windows"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              other window styles
            </a>
            , please visit our website.
          </p>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Features and Benefits
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Custom Designs:</span> Tailored to
              your specific needs and architectural style.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">High-Quality Materials:</span>{" "}
              Durable, energy-efficient, and built to last.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Expert Craftsmanship:</span>{" "}
              Meticulously crafted by skilled artisans with attention to detail.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Variety of Styles:</span> From
              Georgian and Victorian to contemporary designs.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Security:</span> Advanced
              locking mechanisms provide added security.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">
                Exceptional Energy Efficiency:
              </span>{" "}
              Designed to help regulate indoor temperature and reduce energy
              costs.
            </li>
          </ul>

          <div className="max-w-[768px] mx-auto py-10">
            <Image
              className="w-full h-auto object-cover rounded-md shadow-md"
              src={contentImage}
              width={768}
              height={500}
              alt="Close-up of sash windows."
            />
          </div>

          <p className="text-lg leading-relaxed">
            Our sash windows are not only beautiful but also highly functional,
            providing optimal energy efficiency, superior performance, and
            enhanced security. Experience the perfect blend of traditional
            craftsmanship and innovative design with our stunning sash windows.
            We are very proud of our
            <a
              href="https://www.chromedoubleglazing.com/double-glazing"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              double glazing options
            </a>
            , and how they can improve your home.
          </p>

          <p className="text-lg leading-relaxed">
            Ready to transform your home with our exquisite bespoke sash
            windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a free consultation and a no-obligation quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
