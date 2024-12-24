import React from "react";
import myBgImage from "@/assets/images/casement_windows.webp";
import contentImage from "@/assets/images/window_handle.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Casement Windows: Style, Security & Efficiency | Chrome Double Glazing",
  description:
    "Discover the benefits of casement windows from Chrome Double Glazing. Enhance your home with style, security, and excellent ventilation. Get a free quote today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/casement-windows",
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
              Elegant Casement Windows: Style and Functionality
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Upgrade your home with our versatile casement windows, offering
              superior ventilation, security, and energy efficiency.
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
          Why Choose Casement Windows for Your Home?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we offer premium casement windows that are
            engineered to elevate the comfort and aesthetic appeal of your
            living space. Our casement windows are meticulously tested to exceed
            industry benchmarks for security, thermal performance, and weather
            resistance, ensuring that you receive a durable, high-quality
            product.
          </p>

          <p className="text-lg leading-relaxed">
            Casement windows are a popular and versatile style, known for their
            clean lines, ease of operation, and outstanding performance.
            Available in a wide array of configurations, colors, and finishes,
            our casement windows are designed to complement any architectural
            style, offering a customized solution that perfectly matches your
            home's unique character. We offer both uPVC and Aluminium options,
            as well as a wood finish for traditional properties. You can read
            more about
            <a
              href="https://www.chromedoubleglazing.com/double-glazing"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              our double glazing options here.
            </a>
          </p>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Features and Benefits
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold"> Customization Options:</span>{" "}
              Choose from a wide range of colors, frame options, and handles to
              perfectly match your property.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Modern Aesthetics:</span> Our
              casement windows add a touch of contemporary style to any home.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Industry-Leading Standards:</span>{" "}
              Rigorously tested to exceed industry standards in performance,
              durability, and security.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">
                Exceptional Energy Efficiency:
              </span>{" "}
              Achieve superior thermal performance with A-rated glazing options
              to significantly reduce your energy consumption.
            </li>
          </ul>

          <div className="max-w-[768px] mx-auto py-10">
            <Image
              className="w-full h-auto object-cover rounded-md shadow-md"
              src={contentImage}
              width={768}
              height={500}
              alt="Close-up of a casement window handle."
            />
          </div>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Why You'll Love Casement Windows
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Maximum Ventilation:</span>{" "}
              Casement windows open fully to provide excellent airflow, creating
              a refreshing living environment.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Energy Efficiency:</span> Designed
              to create a tight seal when closed, effectively minimizing air
              leaks, and help maintain consistent indoor temperatures, reducing
              your energy bills. For more tips on how to make your home energy
              efficient, please read this{" "}
              <a
                href="https://energysavingtrust.org.uk/"
                className="text-blue-600 font-medium hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy Saving Trust Guide.
              </a>
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Security:</span> Equipped
              with multi-point locking systems for extra protection and peace of
              mind.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Easy Maintenance:</span> Designed
              for ease of cleaning of both interior and exterior surfaces,
              saving you time and effort.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Versatility in Design:</span>{" "}
              Casement windows can complement any architectural style and
              property type, providing customizable solutions.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Natural Light:</span>{" "}
              Maximise natural light into your rooms, creating an open and
              inviting feel.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Unobstructed Views:</span> When
              open, casement windows provide a clear, expansive view of the
              outside world.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            Ready to enhance your home with our high-quality casement windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today to schedule a consultation and receive a free, no-obligation
            quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
