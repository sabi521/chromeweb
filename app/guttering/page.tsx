import React from "react";
import myBgImage from "@/assets/images/guttering.webp"; // Import for URL reference
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guttering",
  alternates: {
    canonical: "https://www.chromedoubleglazing.com/guttering",
  },
};

const Page = () => {
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
            Premium Guttering Solutions
          </h1>
          <p className="my-3">
            Protect Your Home with Efficient Water Management
          </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Transform Your Home with Our Guttering Solutions
        </h2>
        <div className="space-y-4">
          <p>
            Guttering systems are vital for directing rainwater away from your
            home, preventing leaks and water damage. At Chrome Double Glazing,
            we offer a comprehensive range of guttering solutions that enhance
            the functionality and aesthetics of your property.
          </p>

          <h3 className="font-bold text-lg">
            Benefits of Our Guttering Solutions
          </h3>
          <p>Our guttering options come with numerous advantages:</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Key Benefits of Guttering Systems
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Effective Water Drainage:</strong> Guttering channels
                rainwater away from your home, preventing damage to foundations
                and landscaping.
              </li>
              <li>
                <strong>Prevent Moisture Issues:</strong> A well-designed gutter
                system helps to prevent mold, mildew, and rot, preserving the
                integrity of your home.
              </li>
              <li>
                <strong>Enhance Curb Appeal:</strong> Available in various
                styles and colors, our guttering products can complement your
                home&apos;s exterior design.
              </li>
              <li>
                <strong>Low Maintenance:</strong> Modern materials used in
                guttering require minimal upkeep, allowing you to enjoy peace of
                mind.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={myBgImage}
              width={768}
              height={500}
              alt="Stylish guttering"
            />
          </div>

          <h2 className="text-2xl font-bold">Popular Guttering Materials</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>UPVC:</strong> Lightweight and durable, UPVC guttering is
              resistant to rust and corrosion, making it a popular choice for
              homeowners.
            </li>
            <li>
              <strong>Aluminum:</strong> Known for its strength and resistance
              to weather elements, aluminum guttering is available in various
              styles and finishes.
            </li>
            <li>
              <strong>Cast Iron:</strong> Offering a classic look and
              durability, cast iron guttering is ideal for traditional homes,
              though it requires more maintenance.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Guttering?
            </h4>
            <p>
              At Chrome Double Glazing, we specialize in providing high-quality
              guttering solutions tailored to your home&apos;s specific needs.
              Our expert team ensures a seamless installation process, using
              only the best materials for durability and functionality.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Guttering Installation
            </h4>
            <p>
              Ready to protect your home with efficient and stylish guttering?
              Contact Chrome Double Glazing today for a free, no-obligation
              quote, and let us help you manage water effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
