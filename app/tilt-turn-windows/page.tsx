import React from "react";
import myBgImage from "@/assets/images/tilt-turn-windows.webp";
import contentImage from "@/assets/images/window_handle.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Tilt and Turn Windows: Versatile & Secure | Chrome Double Glazing",
  description:
    "Discover the benefits of tilt and turn windows for your home or business. Enhanced security, ventilation, and energy efficiency. Get a free quote today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/tilt-turn-windows",
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
              Experience the Versatility of Tilt and Turn Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Enjoy enhanced functionality, security, and style with our premium
              tilt and turn windows.
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
          Why Choose Tilt and Turn Windows for Your Home?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we are committed to providing innovative
            and high-quality window solutions. Our tilt and turn windows are
            engineered to bring a perfect blend of flexibility, security, and
            energy efficiency to modern homes. With their innovative dual-action
            design, they offer enhanced ventilation and ease of cleaning, making
            them a top choice for homeowners across London and the surrounding
            areas.
          </p>

          <p className="text-lg leading-relaxed">
            Tilt and turn windows stand out with their unique dual opening
            mechanism. They tilt inwards from the top for secure and controlled
            ventilation or can turn fully inwards from the side, providing easy
            access for cleaning and maximum airflow. This functionality makes
            them incredibly versatile, adaptable for various living spaces and
            practical needs, without compromising on safety or style. To explore
            more about how to make your home energy efficient, please visit the
            <a
              href="https://energysavingtrust.org.uk/"
              className="text-blue-600 font-medium hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Energy Saving Trust Website.
            </a>
          </p>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Features and Benefits
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Dual Opening Mechanism:</span>{" "}
              Tilt inwards for ventilation or fully turn for cleaning and
              airflow.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Security:</span> Fitted
              with multi-point locking systems for added protection.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Versatile Ventilation:</span>{" "}
              Allows controlled airflow while keeping your home secure.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Easy Cleaning:</span> Inward
              opening allows easy cleaning from inside your home.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Superior Energy Efficiency:</span>{" "}
              Designed to retain heat and help save on energy bills.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Modern and Customisable:</span> A
              wide range of styles, colors, and finishes to complement your
              property.
            </li>
          </ul>

          <div className="max-w-[768px] mx-auto py-10">
            <Image
              className="w-full h-auto object-cover rounded-md shadow-md"
              src={contentImage}
              width={768}
              height={500}
              alt="Tilt and turn window handle."
            />
          </div>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Why You Should Choose Tilt and Turn Windows
          </h3>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Improved Ventilation:</span> The
              tilting action enables secure and adjustable ventilation.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Easy Maintenance:</span> With the
              turn function you can easily clean both sides of the window.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Space-Saving:</span> Ideal for
              properties with limited space.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Security:</span>{" "}
              Multi-point locking system provides extra security.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Energy Efficiency:</span> Designed
              to retain heat and save on energy costs.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Modern Aesthetics:</span> Designed
              to add a touch of sophistication to any property.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we are committed to delivering bespoke
            window solutions. Our tilt and turn windows are fully customizable,
            allowing you to choose from a wide range of styles, colors, and
            finishes. To see the range of double glazing that we offer please
            visit our
            <a
              href="https://www.chromedoubleglazing.com/double-glazing"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              double glazing
            </a>{" "}
            page.
          </p>
          <p className="text-lg leading-relaxed">
            Ready to elevate your home with our high-quality tilt and turn
            windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a free consultation and quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
