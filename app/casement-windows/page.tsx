import React from "react";
import myBgImage from "@/assets/images/casement_windows.webp"; // Import for URL reference
import contentImage from "@/assets/images/window_handle.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";

const page = () => {
  return (
    <div className="mt-32 mb-10">
      <section
        className="top_banner max-w-[1920px] mx-auto relative h-[600px] w-full bg-black bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${myBgImage.src})`,
        }}
      >
        <div className="banner_content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mx-auto bg-black/60 text-white p-6">
          <h1 className="md:text-[48px] md:leading-10">Casement Windows</h1>
          <p className="my-3">
            Easy to open and close, offering excellent ventilation
          </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="md:text-[32px] font-bold mb-5">
          Transform Your Home with Casement Windows
        </h2>
        <div className="space-y-4">
          <p>
            Transform your home with our casement windows, designed to enhance
            your living space with both style and functionality. These windows
            not only look stunning but are also rigorously tested to surpass
            standards for security, heat retention, and weather performance.
            With seven frame color options, a variety of handles, and numerous
            customization choices, our casement windows provide a flexible
            solution to truly personalize your home.
          </p>
          <p>
            Casement windows are our most popular and versatile style, offering
            hundreds of configurations and options to create the perfect fit for
            your house. Everest casement windows come in classic uPVC, wood for
            a traditional look, and aluminum for modern frames. You can select
            from a range of options to tailor your home to your preferences.
          </p>

          <p>
            <strong>
              wide variety of colors and window fittings. Casement windows can
              be fitted with double glazing or triple glazing for exceptional
              energy efficiency.
            </strong>
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Versatile Design:</strong>A range of colors, styles, and
              options to suit your property.
            </li>{" "}
            <li>
              <strong>Modern Aesthetics:</strong> Give your home a clean, fresh
              look with uPVC casement windows.
            </li>{" "}
            <li>
              <strong>High Standards:</strong>Rgorously tested to exceed
              industry standards.
            </li>
            <li>
              <strong>Energy Efficiency:</strong> ‘A’ rated for outstanding heat
              retention and minimal heat
            </li>
          </ul>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={contentImage}
              width={768}
              height={500}
              alt="window image"
            />
          </div>

          <ol className="list-decimal space-y-2">
            <li>
              <strong>Maximum Ventilation:</strong> Casement windows open fully,
              allowing for excellent airflow and ventilation throughout your
              home.
            </li>{" "}
            <li>
              <strong>Energy Efficiency:</strong> They provide a tight seal when
              closed, which helps in reducing energy loss and maintaining indoor
              temperatures.
            </li>{" "}
            <li>
              <strong>Enhanced Security:</strong> These windows often come with
              robust locking mechanisms, making them more secure against
              break-in.
            </li>
            <li>
              <strong>Ease of Cleaning:</strong> The design allows for easy
              cleaning of both the interior and exterior surfaces.
            </li>{" "}
            <li>
              <strong>Versatility in Design:</strong> Available in various
              materials, styles, and colors, casement windows can complement
              almost any type of property.
            </li>{" "}
            <li>
              <strong>Natural Light:</strong> They allow plenty of natural light
              to enter, brightening up your living spaces.
            </li>
            <li>
              <strong>Unobstructed Views:</strong> When open, casement windows
              provide a clear, unobstructed view of the outside.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default page;
