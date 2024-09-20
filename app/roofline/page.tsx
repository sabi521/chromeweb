import React from "react";
import myBgImage from "@/assets/images/roofline.webp"; // Import for URL reference
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";

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
            Premium Roofline Solutions
          </h1>
          <p className="my-3">Protect Your Home with Style and Durability</p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Transform Your Home with Our Roofline Solutions
        </h2>
        <div className="space-y-4">
          <p>
            Roofline systems are essential for protecting your home from the
            elements while enhancing its overall appearance. At Chrome Double
            Glazing, we provide a range of roofline products, including fascias,
            soffits, and guttering, designed to improve your home’s
            functionality and aesthetic appeal.
          </p>

          <h3 className="font-bold text-lg">
            Benefits of Our Roofline Solutions
          </h3>
          <p>Our roofline options come with numerous advantages:</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Key Benefits of Roofline Systems
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Weather Protection:</strong> Roofline systems help to
                protect your home from rain, wind, and debris, ensuring
                longevity and reducing maintenance costs.
              </li>
              <li>
                <strong>Enhanced Aesthetics:</strong> Available in various
                styles and colors, our roofline products can significantly
                enhance the visual appeal of your home.
              </li>
              <li>
                <strong>Low Maintenance:</strong> Made from durable materials,
                our roofline solutions require minimal upkeep compared to
                traditional materials like wood.
              </li>
              <li>
                <strong>Improved Drainage:</strong> Properly installed guttering
                ensures efficient water drainage, preventing leaks and water
                damage to your home.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={myBgImage}
              width={768}
              height={500}
              alt="Stylish roofline"
            />
          </div>

          <h2 className="text-2xl font-bold">Popular Roofline Materials</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>UPVC:</strong> Low-maintenance and weather-resistant, UPVC
              is a popular choice for roofline products due to its durability
              and range of styles.
            </li>
            <li>
              <strong>Wood:</strong> Traditional and aesthetically pleasing,
              wooden roofline products offer a classic look but require regular
              maintenance to protect against rot.
            </li>
            <li>
              <strong>Aluminum:</strong> Lightweight and resistant to corrosion,
              aluminum roofline products provide a modern appearance and
              longevity.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Roofline?
            </h4>
            <p>
              At Chrome Double Glazing, we specialize in providing high-quality
              roofline solutions tailored to your home’s specific needs. Our
              expert team ensures a seamless installation process, using only
              the best materials for durability and style.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Roofline Installation
            </h4>
            <p>
              Ready to enhance your home with our stylish and functional
              roofline systems? Contact Chrome Double Glazing today for a free,
              no-obligation quote, and let us help you protect your property
              with elegance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
