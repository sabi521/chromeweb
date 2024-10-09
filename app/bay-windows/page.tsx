import React from "react";
import myBgImage from "@/assets/images/bay_window_1.webp"; // Import for URL reference
import contentImage from "@/assets/images/bay_window_2.webp";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay Windows",
  alternates: {
    canonical: 'https://chromedoubleglazing.com/bay-windows/', 
  },
};
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
          <h1 className="text-3xl md:text-[48px] md:leading-10">Bay Windows</h1>
          <p className="my-3">Enhance Your Home&apos;s Character and Space</p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] font-bold mb-5">
          Enhance your home with elegant bay windows for stunning views and
          natural light.
        </h2>
        <div className="space-y-4">
          <p>
            Bay windows are a classic architectural feature that not only add
            charm and elegance to your home but also create additional space,
            making any room feel larger and more inviting. They are perfect for
            capturing natural light, offering stunning views and boosting the
            overall aesthetic appeal of your property.
          </p>

          <h3 className="font-bold text-lg">What Are Bay Windows?</h3>
          <p>
            A bay window is a window space that protrudes outward from the main
            walls of a building, forming a “bay” inside the room. Typically, bay
            windows consist of three or more panels of windows, angled to create
            a beautiful outward curve. This type of window not only adds
            architectural interest but also enhances the functionality of your
            living space.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Benefits of Installing Bay Windows
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Increased Natural Light:</strong> Due to their expansive
                and multi-paneled design, bay windows allow much more natural
                light to enter a room compared to standard flat windows. This
                can brighten up any room and create a warm, inviting atmosphere.
              </li>
              <li>
                <strong>Enhanced Views:</strong> The outward angle of bay
                windows provides a panoramic view of your surroundings, making
                them perfect for living rooms, dining areas, or even bedrooms
                that overlook a garden or scenic landscape.
              </li>
              <li>
                <strong>Additional Space:</strong> Bay windows add extra space
                to a room by extending beyond the exterior walls. This space can
                be used creatively, whether you want to add a cozy reading nook,
                a window seat, or a decorative display.
              </li>
              <li>
                <strong>Improved Ventilation:</strong> Most bay windows are
                designed with operable sections, allowing you to open the side
                panels to create airflow. This means that your home can benefit
                from both improved ventilation and more fresh air circulation.
              </li>
            </ol>
          </div>

          <div className="max-w-[768px] h-[500px] mx-auto py-10">
            <Image
              className="w-full h-full object-cover"
              src={contentImage}
              width={768}
              height={500}
              alt="Tilt and Turn windows"
            />
          </div>

          <h2 className="text-2xl font-bold">Styles of Bay Windows</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Angled Bay Windows:</strong> The most common style,
              featuring three panels with the side windows set at 30 to
              40-degree angles. This style is ideal for creating that classic
              bay window look.
            </li>
            <li>
              <strong>Box Bay Windows:</strong> This style offers a modern twist
              with straight lines and sharp angles. It is more rectangular in
              shape and often features a flat front with side panels at
              90-degree angles.
            </li>
            <li>
              <strong>Oriel Windows:</strong> Similar to bay windows, but
              typically found on upper floors and supported by brackets or
              corbels. This style adds a touch of old-world charm and is perfect
              for more traditional homes.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Bay Windows?
            </h4>
            <p>
              At Chrome Double Glazing, we specialize in the installation of
              high-quality bay windows that combine both style and durability.
              Our expert team ensures a perfect fit, while our use of
              energy-efficient materials helps to keep your home warm and quiet.
              Whether youh&apos;re looking for a traditional or contemporary
              design, we offer a range of options to suit your taste and
              property style.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Bay Windows
            </h4>
            <p>
              Transform your home with elegant and functional bay windows.
              Contact Chrome Double Glazing today for a free, no-obligation
              quote and let us help you create a brighter, more spacious living
              space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
