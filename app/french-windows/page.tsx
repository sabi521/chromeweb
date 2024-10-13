import React from "react";
import myBgImage from "@/assets/images/window_banner.webp"; // Import for URL reference
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "French Windows",
  alternates: {
    canonical: "https://chromedoubleglazing.com/french-windows",
  },
};

const page = () => {
  return (
    <div className="mt-32 mb-10">
      <section
        className="top_banner max-w-[1920px] mx-auto relative h-[600px] w-full bg-black bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${myBgImage.src})`,
        }}
      >
        <div className="banner_content max-w-80 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mx-auto bg-black/60 text-white py-3 px-2 md:p-6 md:max-w-2xl">
          <h1 className="text-3xl md:text-[48px] md:leading-10">
            French Windows
          </h1>
          <p className="my-3">Elegant Design and Functionality</p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] font-bold mb-5">
          Elegant Design and Functionality
        </h2>
        <p className="mb-6">
          French windows combine classic elegance with modern functionality,
          making them an ideal choice for any home. Their double-door design not
          only enhances aesthetic appeal but also allows for easy access to your
          outdoor spaces.
        </p>

        <h2 className="text-xl md:text-[32px] font-bold mb-5">
          Key Benefits of French Windows
        </h2>
        <ol className="list-decimal space-y-2 mb-6">
          <li>
            <strong>Stylish Aesthetics:</strong> French windows add a touch of
            sophistication to any room, enhancing both interior and exterior
            appeal.
          </li>
          <li>
            <strong>Natural Light:</strong> The large glass panels allow for
            ample natural light to flood your space, creating a bright and
            welcoming atmosphere.
          </li>
          <li>
            <strong>Ventilation:</strong> The ability to open both sides
            provides excellent ventilation, keeping your home fresh and airy.
          </li>
          <li>
            <strong>Seamless Connection:</strong> French windows create a
            seamless transition between indoor and outdoor living, perfect for
            patios or gardens.
          </li>
          <li>
            <strong>Energy Efficiency:</strong> Modern French windows are
            designed with energy-efficient materials, helping to retain heat and
            reduce energy bills.
          </li>
        </ol>

        <h3 className="font-bold text-lg mb-2">
          Why Choose Chrome Double Glazing for Your French Windows?
        </h3>
        <p className="mb-6">
          At Chrome Double Glazing, we offer a wide range of high-quality French
          windows tailored to your specifications. Our expert installation
          ensures a perfect fit and finish, while our energy-efficient options
          help you save on energy costs. Whether you prefer traditional or
          contemporary styles, we have the perfect solution for your home.
        </p>

        <h3 className="font-bold text-lg mb-2">Get a Free Quote</h3>
        <p className="">
          Ready to enhance your home with stunning French windows? Contact us
          today for a free, no-obligation quote and discover how we can
          transform your living space.
        </p>
      </section>
    </div>
  );
};

export default page;
