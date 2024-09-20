import React from "react";
import myBgImage from "@/assets/images/cladding.webp"; // Import for URL reference
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
            Durable Cladding Solutions
          </h1>
          <p className="my-3">
            Enhance Your Home&apos;s Aesthetics and Protection
          </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Transform Your Home with Our Premium Cladding
        </h2>
        <div className="space-y-4">
          <p>
            Cladding is a crucial element of modern architecture, providing both
            protection and aesthetic appeal. It serves as a barrier against the
            elements while adding character to your home. At Chrome Double
            Glazing, we offer a range of cladding solutions that enhance the
            beauty and durability of your property.
          </p>

          <h3 className="font-bold text-lg">
            Benefits of Our Cladding Solutions
          </h3>
          <p>Our cladding options come with numerous advantages:</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Key Benefits of Cladding</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Weather Resistance:</strong> Cladding protects your home
                from harsh weather conditions, ensuring longevity and reducing
                maintenance costs.
              </li>
              <li>
                <strong>Energy Efficiency:</strong> Insulated cladding can help
                regulate indoor temperatures, contributing to lower energy
                bills.
              </li>
              <li>
                <strong>Enhanced Aesthetics:</strong> Available in a variety of
                materials and finishes, cladding can significantly enhance the
                visual appeal of your home.
              </li>
              <li>
                <strong>Increased Property Value:</strong> High-quality cladding
                can increase your home&apos;s market value and curb appeal.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={myBgImage}
              width={768}
              height={500}
              alt="Stylish cladding"
            />
          </div>

          <h2 className="text-2xl font-bold">Popular Cladding Materials</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Vinyl Cladding:</strong> Affordable and low-maintenance,
              vinyl cladding comes in various colors and styles, making it a
              popular choice for homeowners.
            </li>
            <li>
              <strong>Wood Cladding:</strong> Offers a natural aesthetic,
              providing warmth and character. Properly treated wood can
              withstand the elements and last for years.
            </li>
            <li>
              <strong>Metal Cladding:</strong> Known for its durability and
              modern look, metal cladding is fire-resistant and low-maintenance,
              making it ideal for contemporary homes.
            </li>
            <li>
              <strong>Composite Cladding:</strong> Made from a mix of materials,
              composite cladding is designed to mimic the appearance of wood
              while offering enhanced durability and weather resistance.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Cladding?
            </h4>
            <p>
              At Chrome Double Glazing, we are dedicated to providing
              top-quality cladding solutions tailored to your home&apos;s
              specific needs. Our expert team ensures a professional
              installation process, using only the highest quality materials for
              lasting performance and beauty.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Cladding Installation
            </h4>
            <p>
              Ready to elevate your home with stylish and durable cladding?
              Contact Chrome Double Glazing today for a free, no-obligation
              quote, and let us help you enhance your property&apos;s aesthetics
              and protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
