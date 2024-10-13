import React from "react";
import myBgImage from "@/assets/images/conservatories_2.webp"; // Import for URL reference
import contentImage from "@/assets/images/conservatories.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conservatories",
  alternates: {
    canonical: "https://chromedoubleglazing.com/conservatories",
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
            Elegant Conservatories
          </h1>
          <p className="my-3">Expand Your Living Space with Natural Light</p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Transform Your Home with a Stunning Conservatory
        </h2>
        <div className="space-y-4">
          <p>
            Conservatories are the perfect addition to any home, offering a
            beautiful space that blends indoor comfort with outdoor beauty.
            Whether used as a garden room, a play area, or a tranquil retreat, a
            conservatory enhances your living environment while increasing your
            property value.
          </p>

          <h3 className="font-bold text-lg">
            Benefits of Adding a Conservatory
          </h3>
          <p>
            At Chrome Double Glazing, our conservatories offer numerous
            advantages:
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Advantages of Our Conservatory Solutions
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Natural Light:</strong> Enjoy abundant natural light
                throughout the day, creating a bright and inviting atmosphere in
                your home.
              </li>
              <li>
                <strong>Versatile Space:</strong> Use your conservatory for
                various purposes—be it a dining area, lounge, office, or plant
                sanctuary.
              </li>
              <li>
                <strong>Year-Round Use:</strong> With our energy-efficient
                designs, you can enjoy your conservatory throughout the year,
                regardless of the weather.
              </li>
              <li>
                <strong>Increased Property Value:</strong> A well-designed
                conservatory can significantly enhance the value of your home.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={contentImage}
              width={768}
              height={500}
              alt="Beautiful conservatory"
            />
          </div>

          <h2 className="text-2xl font-bold">Popular Conservatory Styles</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Victorian Conservatories:</strong> Featuring a classic
              design with ornate detailing, Victorian conservatories offer a
              timeless charm and panoramic views.
            </li>
            <li>
              <strong>Edwardian Conservatories:</strong> With a square or
              rectangular shape, Edwardian conservatories maximize space and
              light, providing a more modern look.
            </li>
            <li>
              <strong>Lean-To Conservatories:</strong> Ideal for smaller spaces,
              lean-to conservatories are simple and elegant, often fitting
              seamlessly against the side of your home.
            </li>
            <li>
              <strong>Gable-End Conservatories:</strong> These conservatories
              have a high ceiling and an elegant front gable, creating a
              spacious and airy environment.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Conservatory?
            </h4>
            <p>
              At Chrome Double Glazing, we specialize in creating stunning
              conservatories tailored to your specific needs. Our expert team
              ensures a seamless installation process and uses high-quality
              materials to guarantee durability and aesthetic appeal.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Conservatory Installation
            </h4>
            <p>
              Ready to transform your home with a beautiful conservatory?
              Contact Chrome Double Glazing today for a free, no-obligation
              quote, and let us help you create your dream living space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
