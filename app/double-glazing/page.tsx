import React from "react";
import myBgImage from "@/assets/images/tilt-turn-windows.webp";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Double Glazing Installation & Services | Chrome Double Glazing",
  description:
    "Explore our double glazing solutions for enhanced energy efficiency, noise reduction, and security. Get a free quote from Chrome Double Glazing today!",
  alternates: {
    canonical: "https://chromedoubleglazing.com/double-glazing",
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
              Upgrade to High-Performance Double Glazing
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Enhance your home with our high-quality double glazing, designed
              for superior energy efficiency and comfort.
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
          Why Choose Double Glazing for Your Property?
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Chrome Double Glazing, we specialize in providing top-quality
            double glazing solutions tailored to meet the specific needs of both
            residential and commercial properties. Double glazing is an
            essential upgrade for modern buildings, offering significant
            advantages in energy conservation, noise reduction, and security.
            Our team of expert installers ensures that every window is fitted
            perfectly, maximizing its benefits and longevity.
          </p>

          <p className="text-lg leading-relaxed">
            Our double-glazed windows consist of two panes of glass, separated
            by an air or gas-filled space, creating an insulating barrier that
            significantly reduces heat transfer. This results in warmer
            interiors during the winter and cooler environments during the
            summer, leading to significant savings on energy bills. Moreover,
            our double glazing options provide enhanced security and contribute
            to a more peaceful living environment by minimizing external noise.
            To see the difference double glazing can make please see
            <a
              href="https://www.glassdoor.com/blog/benefits-double-glazing/"
              className="text-blue-600 font-medium hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              this article from Glass Door.
            </a>
          </p>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Advantages of Double Glazing
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Superior Energy Efficiency:</span>{" "}
              Double glazing significantly reduces heat loss, helping to lower
              your energy bills and reduce your carbon footprint.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Effective Noise Reduction:</span>{" "}
              Enjoy a quieter, more peaceful environment with our high-quality
              double glazed windows that minimise external noise.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Enhanced Security:</span> Our
              double glazing options provide an extra layer of security for your
              home, deterring potential intruders.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-semibold">Increased Property Value:</span>{" "}
              Upgrading to double glazing can significantly increase the market
              value of your property.
            </li>
          </ul>

          <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Our Commitment to Quality Double Glazing
          </h3>
          <p className="text-lg leading-relaxed">
            We are committed to using only the highest quality materials and
            installation methods in all of our double glazing projects. Our
            experienced team ensures that every window is perfectly fitted and
            provides long-lasting performance, giving you peace of mind and
            comfort. We offer a range of options and finishes to suit all tastes
            and budgets. You can also see some of the
            <a
              href="https://www.chromedoubleglazing.com/upvc-windows"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              uPVC window options {}
            </a>
            available on our website.
          </p>

          <p className="text-lg leading-relaxed">
            Ready to upgrade your home or business with our high-performance
            double glazing?
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
