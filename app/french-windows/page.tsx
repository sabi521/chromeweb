import React from "react";
import myBgImage from "@/assets/images/window_banner.webp";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Elegant French Windows: Style, Light & Access | Chrome Double Glazing",
  description:
    "Discover the beauty and functionality of our French windows. Enhance your home with classic designs, increased natural light, and seamless indoor-outdoor living. Get a free quote today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/french-windows",
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
              Enhance Your Home with French Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Combine classic elegance with modern functionality with our
              stunning French windows.
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
          Why Choose French Windows for Your Home?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we offer beautiful, high-quality French
            windows that combine classic elegance with modern functionality.
            These windows are an ideal choice for any home, offering not only a
            touch of sophistication but also seamless access to your outdoor
            spaces. With their double-door design, they enhance both the
            aesthetic appeal and practical living of any room.
          </p>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Benefits of French Windows
          </h3>
          <ul className="list-decimal list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Elegant Aesthetics:</span> French
              windows add a touch of sophistication to any space.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Abundant Natural Light:</span> The
              large glass panels allow ample natural light to flood your rooms.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Improved Ventilation:</span> Open
              both sides for excellent ventilation, keeping your home fresh.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">
                Seamless Indoor-Outdoor Connection:
              </span>{" "}
              Creates a smooth transition to patios, gardens, or balconies.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Energy Efficiency:</span>{" "}
              Modern French windows are designed with energy-efficient
              materials. To find more tips on making your home energy efficient,
              please visit the
              <a
                href="https://energysavingtrust.org.uk/"
                className="text-blue-600 font-medium hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy Saving Trust Website.
              </a>
            </li>
          </ul>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Chrome Double Glazing?
          </h3>
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we provide a wide range of premium French
            windows that are tailored to your exact specifications. Our expert
            installation team ensures a perfect fit and a high-quality finish,
            while our energy-efficient options help you save on utility bills.
            Whether you prefer a traditional style or a more modern look, we can
            create the perfect French windows for your home, you can see more
            about our
            <a
              href="https://www.chromedoubleglazing.com/double-glazing"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              double glazing options here
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed">
            Ready to enhance your home with our beautiful French windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a free, no-obligation quote and let us transform your
            living space.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
