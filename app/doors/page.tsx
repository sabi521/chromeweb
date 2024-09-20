import React from "react";
import myBgImage from "@/assets/images/glass_doors.webp"; // Import for URL reference
import contentImage from "@/assets/images/double_doors.webp";
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
            Stylish Doors
          </h1>
          <p className="my-3">
            Enhance Your Home&apos;s Security and Aesthetics
          </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Transform Your Space with Our Beautiful Door Solutions
        </h2>
        <div className="space-y-4">
          <p>
            Doors play a crucial role in both the functionality and aesthetics
            of your home. From enhancing curb appeal to providing security,
            choosing the right doors is essential for creating a welcoming and
            safe environment.
          </p>

          <h3 className="font-bold text-lg">Types of Doors We Offer</h3>
          <p>
            At Chrome Double Glazing, we provide a wide variety of doors
            designed to meet different needs and preferences. Our selection
            includes:
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Benefits of Our Door Solutions
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Enhanced Security:</strong> Our doors are built with
                high-quality materials and advanced locking mechanisms to ensure
                your home is safe and secure.
              </li>
              <li>
                <strong>Improved Energy Efficiency:</strong> With
                energy-efficient designs and materials, our doors help maintain
                your home&apos;s temperature, reducing energy bills.
              </li>
              <li>
                <strong>Stylish Designs:</strong> Available in a variety of
                styles, colors, and finishes, our doors enhance the aesthetic
                appeal of your property, adding value and charm.
              </li>
              <li>
                <strong>Durability:</strong> Made from robust materials, our
                doors are designed to withstand the elements and provide
                long-lasting performance.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={contentImage}
              width={768}
              height={500}
              alt="Double doors"
            />
          </div>

          <h2 className="text-2xl font-bold">Popular Door Styles</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Composite Doors:</strong> Combining multiple materials,
              these doors offer excellent insulation and security, with the
              appearance of traditional timber.
            </li>
            <li>
              <strong>French Doors:</strong> Perfect for creating a seamless
              connection between indoor and outdoor spaces, French doors are
              stylish and functional.
            </li>
            <li>
              <strong>Patio Doors:</strong> Designed for easy access to outdoor
              areas, patio doors maximize natural light and enhance the beauty
              of your home.
            </li>
            <li>
              <strong>Bi-Fold Doors:</strong> These doors fold away to create a
              wide opening, ideal for entertaining and bringing the outdoors in.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Doors?
            </h4>
            <p>
              At Chrome Double Glazing, we are committed to providing
              high-quality doors that not only enhance your home&apos;s beauty
              but also improve its functionality. Our expert team ensures a
              perfect fit and finish, backed by exceptional customer service.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Door Installation
            </h4>
            <p>
              Upgrade your home with our stylish and secure doors. Contact
              Chrome Double Glazing today for a free, no-obligation quote and
              let us help you find the perfect doors for your space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
