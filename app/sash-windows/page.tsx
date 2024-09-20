import React from "react";
import myBgImage from "@/assets/images/window_banner.webp"; // Import for URL reference
import contentImage from "@/assets/images/sash-windows.webp";
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
        <div className="banner_content max-w-80 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mx-auto bg-black/60 text-white py-3 px-2 md:p-6 md:max-w-2xl">
          <h1 className="text-3xl md:text-[48px] md:leading-10">
            Sash Windows
          </h1>
          <p className="my-3">
            Traditional style with modern benefits, perfect for period
            propertiess
          </p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] font-bold mb-5">
          Beautiful Bespoke Sash Windows
        </h2>
        <div className="space-y-4">
          <p>
            Transform your home with our exquisite bespoke sash windows. Crafted
            with precision and care, our windows come in a variety of styles,
            designs, and configurations to suit any aesthetic. Whether you’re
            looking for a classic, timeless look or a modern twist on a
            traditional design, we have the perfect solution for you.
          </p>

          <h3>
            <strong>Key Features:</strong>
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Custom Designs:</strong> Tailored to your specific needs
              and preferences.
            </li>{" "}
            <li>
              <strong>High-Quality Materials:</strong> Durable and
              energy-efficient, ensuring long-lasting beauty and performance.
            </li>{" "}
            <li>
              <strong>Expert Craftsmanship:</strong> Each window is meticulously
              crafted by skilled artisans.
            </li>{" "}
            <li>
              <strong>Variety of Styles:</strong> From Georgian and Victorian to
              contemporary designs.
            </li>{" "}
            <li>
              <strong>Enhanced Security:</strong> Advanced locking mechanisms
              for peace of mind.
            </li>{" "}
            <li>
              <strong>Energy Efficiency:</strong> Designed to keep your home
              warm in the winter and cool in the summer.
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

          <p>
            Our bespoke sash windows not only enhance the aesthetic appeal of
            your home but also add value and improve energy efficiency.
            Experience the perfect blend of tradition and innovation with our
            stunning sash windows.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
