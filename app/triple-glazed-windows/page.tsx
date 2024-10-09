import React from "react";
import myBgImage from "@/assets/images/triple_glaze_1.webp"; // Import for URL reference
import contentImage from "@/assets/images/triple_glazed_2.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triple Glazed Windows",
  alternates: {
    canonical: 'https://chromedoubleglazing.com/triple-glazed-windows/', 
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
            Triple Glazed Windows
          </h1>
          <p className="my-3">Maximize Comfort and Efficiency</p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Experience Unmatched Energy Efficiency with Triple Glazed Windows.
        </h2>
        <div className="space-y-4">
          <p>
            Triple glazed windows are designed to provide superior insulation
            and energy efficiency, making them an ideal choice for homeowners
            seeking to enhance comfort while reducing energy costs. With three
            layers of glass, these windows minimize heat loss, ensuring your
            home remains warm in winter and cool in summer.
          </p>

          <h3 className="font-bold text-lg">What Are Triple Glazed Windows?</h3>
          <p>
            Triple glazed windows consist of three panes of glass separated by
            insulating spaces filled with argon or krypton gas. This advanced
            design significantly improves thermal performance compared to
            traditional double glazed windows, making them a wise investment for
            energy-conscious homeowners.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Benefits of Installing Triple Glazed Windows
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Exceptional Energy Efficiency:</strong> With reduced
                heat loss, triple glazing helps maintain consistent indoor
                temperatures, lowering energy bills.
              </li>
              <li>
                <strong>Noise Reduction:</strong> The additional layer of glass
                effectively minimizes outside noise, creating a quieter living
                environment.
              </li>
              <li>
                <strong>Enhanced Security:</strong> Triple glazed windows are
                more difficult to break, providing an extra layer of security
                for your home.
              </li>
              <li>
                <strong>Environmental Benefits:</strong> Lower energy
                consumption contributes to a smaller carbon footprint, making
                triple glazed windows an eco-friendly choice.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={contentImage}
              width={768}
              height={500}
              alt="Triple glazed windows"
            />
          </div>

          <h2 className="text-2xl font-bold">
            Why Choose Chrome Double Glazing for Your Triple Glazed Windows?
          </h2>
          <p>
            At Chrome Double Glazing, we pride ourselves on delivering
            top-quality triple glazed windows that enhance your home&apos;s
            performance and aesthetics. Our experienced team ensures a perfect
            installation, using the latest materials and technology to maximize
            your windows&apos; energy efficiency and durability.
          </p>

          <h4 className="text-xl font-bold">
            Get a Free Quote for Your Triple Glazed Windows
          </h4>
          <p>
            Upgrade your home with high-performance triple glazed windows.
            Contact Chrome Double Glazing today for a free, no-obligation quote
            and discover the benefits of superior insulation and comfort.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
