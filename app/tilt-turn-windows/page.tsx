import React from "react";
import myBgImage from "@/assets/images/tilt-turn-windows.webp"; // Import for URL reference
import contentImage from "@/assets/images/window_handle.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilt and Turn Windows",
  alternates: {
    canonical: "https://chromedoubleglazing.com/tilt-turn-windows",
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
            Tilt and Turn Windows
          </h1>
          <p className="my-3">Versatility, Functionality, and Style </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] font-bold mb-5">
          Elevate Your Space with Tilt and Turn Windows
        </h2>
        <div className="space-y-4">
          <p>
            Tilt and Turn windows from Chrome Double Glazing offer a perfect
            blend of flexibility, security, and energy efficiency for modern
            homes. Their innovative design allows for dual opening options,
            providing enhanced ventilation and easy cleaning, making them a
            popular choice for homeowners across London.
          </p>
          <p>
            {" "}
            Versatile opening options for easy cleaning and ventilation.Tilt
            and-turn windows are an excellent choice for modern homes, offering
            a unique combination of functionality and style. These windows
            feature a dual opening mechanism, allowing them to tilt inwards from
            the top for secure ventilation or turn inwards from the side for
            easy cleaning and maximum airflow1. With enhanced security features,
            including multi-point locking systems, they provide peace of mind
            while maintaining a sleek appearance.
          </p>
          <p>
            {" "}
            Available in a variety of materials such as uPVC, aluminum, and
            wood, and a range of colors and finishes, tilt and turn windows can
            be customized to match any home aesthetic1. They are also designed
            for energy efficiency, helping to reduce energy costs and keep your
            home comfortable year-round2. Low maintenance and durable, these
            windows are a practical and stylish addition to any property.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Tilt Function:</strong> The window tilts inward from the
              top, allowing secure ventilation while keeping the window
              partially closed.
            </li>{" "}
            <li>
              <strong>Turn Function:</strong> The window swings inward from the
              side, enabling easy access for cleaning or creating a wide opening
              for maximum airflow.
            </li>{" "}
          </ul>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={contentImage}
              width={768}
              height={500}
              alt="Tilt and Turn windows"
            />
          </div>

          <h3>
            <strong>Why Choose Tilt and Turn Windows?</strong>
          </h3>
          <ol className="list-decimal space-y-2">
            <li>
              <strong>Improved Ventilation:</strong> The tilting option allows
              for safe and controlled ventilation, perfect for keeping your home
              airy without compromising on security.
            </li>{" "}
            <li>
              <strong>Easy Maintenance:</strong> With the turn function, you can
              easily clean both sides of the window from inside your home,
              making it ideal for high-rise buildings or hard-to-reach windows.
            </li>{" "}
            <li>
              <strong>Space-Saving Design:</strong> Their sleek inward-opening
              mechanism makes Tilt and Turn windows suitable for properties with
              limited exterior space.
            </li>{" "}
            <li>
              <strong>Security:</strong> The multi-point locking system and
              inward-opening design provide enhanced security, ensuring peace of
              mind for your home.
            </li>{" "}
            <li>
              <strong>Energy Efficiency:</strong> Like all our UPVC windows,
              Tilt and Turn windows are designed to retain heat, helping you
              save on energy bills.
            </li>{" "}
            <li>
              <strong>Modern Aesthetics:</strong> With a variety of styles,
              colors, and finishes, these windows are perfect for any property,
              adding a touch of sophistication and modern appeal.
            </li>
          </ol>

          <p>
            At Chrome Double Glazing, we understand that every home is unique.
            That is why our Tilt and Turn windows are fully customizable,
            allowing you to choose from a wide range of designs, colors, and
            finishes to suit your property&apos;s style and personal
            preferences.
          </p>

          <p>
            <a
              className="text-blue-700 underline"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today to discuss your Tilt and Turn window installation and receive
            a free, no-obligation quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
