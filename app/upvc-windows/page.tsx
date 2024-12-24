import React from "react";
import myBgImage from "@/assets/images/windows.webp"; // Import for URL reference
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "High-Quality uPVC Windows: Installation & Benefits | Chrome Double Glazing",
  description:
    "Upgrade your home with energy-efficient and durable uPVC windows from Chrome Double Glazing. Explore the benefits and request a free quote today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/upvc-windows",
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
          <div className="max-w-2xl w-full text-white ">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Upgrade to Superior uPVC Windows
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Experience the perfect blend of energy efficiency, durability, and
              style with our high-quality uPVC windows.
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
          Why Choose uPVC Windows from Chrome Double Glazing?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we're dedicated to providing top-tier uPVC
            window solutions for both residential and commercial properties. Our
            uPVC windows are crafted from high-quality, unplasticized polyvinyl
            chloride, a material renowned for its exceptional durability,
            energy-efficiency, and low maintenance requirements. Opting for uPVC
            windows is a smart investment in the comfort and value of your
            property.
          </p>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            The Key Benefits of uPVC Windows
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Superior Energy Efficiency:</span>{" "}
              uPVC windows are engineered to provide exceptional thermal
              insulation, significantly reducing your energy consumption and
              lowering your heating and cooling bills.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Exceptional Durability:</span>{" "}
              Resistant to rot, rust, and corrosion, uPVC windows are designed
              to withstand the UK's challenging weather conditions, ensuring
              long-lasting performance with minimal upkeep.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Low Maintenance:</span> Say
              goodbye to the hassles of painting or varnishing. A simple
              wipe-down with soap and water is all it takes to keep your uPVC
              windows looking pristine.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Sound Insulation:</span>{" "}
              Enjoy a quieter and more serene indoor environment with uPVC
              windows that effectively minimize external noise pollution.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">
                {" "}
                Advanced Security Features:
              </span>{" "}
              Our uPVC windows are equipped with multi-point locking systems to
              provide enhanced security and give you peace of mind.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Customizable Aesthetics:</span>{" "}
              Available in a wide range of styles, colours, and finishes, our
              uPVC windows can be tailored to complement any architectural
              design and personal preference.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            Our team of skilled installers is committed to delivering flawless
            fittings, guaranteeing optimal energy efficiency and enduring
            performance. Whether you're embarking on a full property renovation
            or simply looking to replace outdated windows with modern,
            energy-efficient uPVC options, Chrome Double Glazing is ready to
            assist.
          </p>

          <p className="text-lg leading-relaxed">
            Ready to transform your home or business with our premium uPVC
            windows?
            <a
              className="text-blue-600 font-medium hover:underline ml-1"
              href="https://www.chromedoubleglazing.com/contact"
            >
              Contact us
            </a>{" "}
            today for a personalized consultation and to receive a no-obligation
            free quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
