import React from "react";
import myBgImage from "@/assets/images/windows.webp"; // Import for URL reference
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
        <div className="banner_content max-w-80 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mx-auto bg-black/60 text-white py-3 px-2 md:p-6 md:max-w-2xl">
          <h1 className="text-3xl md:text-[48px] md:leading-10">
            uPVC Windows
          </h1>
          <p className="my-3">
            Upgrade Your Home with Energy-Efficient and Durable UPVC Windows
          </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] font-bold mb-5">
          UPVC Windows Installation by Chrome Double Glazing
        </h2>
        <div className="space-y-4">
          <p>
            At Chrome Double Glazing, we specialize in the installation of
            high-quality UPVC windows, perfect for both residential and
            commercial properties. UPVC (Unplasticized Polyvinyl Chloride) is a
            durable, energy-efficient, and low-maintenance material that has
            become the preferred choice for modern window solutions.
          </p>

          <h2 className="md:text-[32px] font-bold mb-5">
            Benefits of UPVC Windows:
          </h2>

          <ul className="space-y-2">
            <li>
              <strong>Energy Efficiency:</strong> UPVC windows offer excellent
              insulation, helping you reduce energy bills by keeping your home
              warmer in winter and cooler in summer.
            </li>{" "}
            <li>
              <strong>Durability:</strong> Resistant to rot, rust, and
              corrosion, UPVC windows can withstand harsh weather conditions,
              making them perfect for the UK climate.
            </li>{" "}
            <li>
              <strong>Low Maintenance:</strong> Unlike wood, UPVC does not
              require frequent painting or varnishing. A simple wipe-down is all
              it takes to keep your windows looking new.
            </li>
            <li>
              <strong>Sound Insulation:</strong> UPVC windows can reduce outside
              noise, offering a quieter, more peaceful indoor environment.
            </li>
            <li>
              <strong>Security:</strong> Our UPVC windows are fitted with
              multi-point locking systems, providing enhanced security for your
              home.
            </li>
            <li>
              <strong>Aesthetic Appeal:</strong> Available in a range of styles,
              colors, and finishes, UPVC windows can complement any property
              design.
            </li>
          </ul>

          <p>
            Our team of expert installers ensures that each window is fitted to
            the highest standards, ensuring energy efficiency and long-term
            performance. Whether you’re looking to replace old windows or
            upgrade to modern, energy-efficient UPVC windows, Chrome Double
            Glazing is here to help.
          </p>

          <p>
            <a
              className="text-blue-700 underline"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today to schedule a consultation and get a free quote for your UPVC
            window installation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
