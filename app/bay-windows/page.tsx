import React from "react";
import myBgImage from "@/assets/images/bay_window_1.webp";
import contentImage from "@/assets/images/bay_window_2.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stunning Bay Windows: Enhance Light, Space & Style | Chrome Double Glazing",
  description:
    "Explore our range of beautiful bay windows, designed to add space, light, and character to your home. Choose from various styles and enjoy expert installation. Get a free quote today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/bay-windows",
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
              Transform Your Home With Elegant Bay Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Enhance your home with our stunning bay windows, adding both
              character and space.
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
          Why Choose Bay Windows for Your Property?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we specialize in designing and installing
            beautiful bay windows that not only enhance the architectural
            character of your property but also create additional space and
            natural light within your home. Bay windows are a classic
            architectural feature known for their ability to transform any room
            into a more inviting, spacious, and aesthetically pleasing
            environment.
          </p>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            What Are Bay Windows?
          </h3>
          <p className="text-lg leading-relaxed">
            A bay window is a window space that projects outward from the main
            walls of a building, creating a bay within the room. Characterized
            by three or more window panels angled to form a beautiful curve or
            geometric shape, bay windows add a unique architectural interest
            while enhancing the functionality of your space. You can also read
            more about
            <a
              href="https://www.planningportal.co.uk/permission/"
              className="text-blue-600 font-medium hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              planning permission for windows and doors here.
            </a>
          </p>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            The Benefits of Installing Bay Windows
          </h3>
          <ul className="list-decimal list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Increased Natural Light:</span>{" "}
              The multi-paneled design allows much more natural light to enter,
              brightening up your rooms.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Views:</span> The outward
              angle provides panoramic views of your surroundings.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Additional Space:</span> Bay
              windows extend the room outwards, creating more living space.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Improved Ventilation:</span>{" "}
              Operable side panels allow for improved airflow and ventilation.
            </li>
          </ul>

          <div className="max-w-[768px] mx-auto py-10">
            <Image
              className="w-full h-auto object-cover rounded-md shadow-md"
              src={contentImage}
              width={768}
              height={500}
              alt="Modern bay window."
            />
          </div>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Popular Styles of Bay Windows
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Angled Bay Windows:</span> Classic
              design featuring three panels with angled side windows.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Box Bay Windows:</span> Modern
              style with straight lines and a rectangular shape.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Oriel Windows:</span> Bay-style
              windows on upper floors, supported by brackets or corbels.
            </li>
          </ul>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Chrome Double Glazing?
          </h3>
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we are committed to delivering only the
            highest quality bay windows that combine both style and durability.
            Our expert team ensures precise fittings and we use energy-efficient
            materials to help keep your home comfortable and quiet. Whether you
            want a traditional design or a contemporary style, we have a wide
            range of
            <a
              href="https://www.chromedoubleglazing.com/upvc-windows"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              uPVC window options
            </a>
            to suit your needs.
          </p>
          <p className="text-lg leading-relaxed">
            Ready to enhance your home with elegant and functional bay windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a free, no-obligation quote and let us help you create a
            brighter, more spacious living space.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
