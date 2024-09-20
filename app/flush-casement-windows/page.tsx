import React from "react";
import myBgImage from "@/assets/images/windows_installation.webp";
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
            Flush Casement Windows
          </h1>
          <p className="my-3">Sleek Design Meets Functionality</p>
          <div className="max-w-[200px] w-full mx-auto">
            <GetInTouch />
          </div>
        </div>
      </section>

      <section className="main-content max-w-3xl mx-auto px-2 mt-8">
        <h2 className="text-xl md:text-[32px] md:leading-10 font-bold mb-5">
          Upgrade Your Home with Stylish and Efficient Flush Casement Windows.
        </h2>
        <div className="space-y-4">
          <p>
            Flush casement windows provide a seamless and modern appearance to
            your home, sitting flush with the outer wall. This design not only
            enhances the aesthetic appeal but also improves energy efficiency,
            making it a popular choice for contemporary and traditional
            properties alike.
          </p>

          <h3 className="font-bold text-lg">
            What Are Flush Casement Windows?
          </h3>
          <p>
            Flush casement windows are characterized by their unique design,
            where the window frame sits flat against the exterior of the
            building. This style allows for maximized glass space and
            unobstructed views, making them an excellent choice for homeowners
            seeking both style and practicality.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Benefits of Installing Flush Casement Windows
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Enhanced Aesthetic Appeal:</strong> The clean lines and
                flat finish of flush casement windows offer a modern and stylish
                look that complements any home design.
              </li>
              <li>
                <strong>Improved Energy Efficiency:</strong> These windows are
                designed with high-performance glazing and insulation, helping
                to keep your home warm in winter and cool in summer, ultimately
                lowering energy bills.
              </li>
              <li>
                <strong>Increased Security:</strong> Flush casement windows
                feature robust locking mechanisms, providing enhanced security
                and peace of mind for homeowners.
              </li>
              <li>
                <strong>Low Maintenance:</strong> Made from durable materials,
                flush casement windows require minimal upkeep, allowing you to
                enjoy their beauty without constant care.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold">
            Styles of Flush Casement Windows
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Traditional Flush Casement:</strong> Designed to resemble
              classic timber windows, this style features authentic detailing
              and finishes for a timeless look.
            </li>
            <li>
              <strong>Modern Flush Casement:</strong> With sleek lines and
              contemporary finishes, this style enhances the minimalist
              aesthetic of modern homes.
            </li>
            <li>
              <strong>Custom Flush Casement:</strong> Tailored to your
              specifications, custom flush casement windows offer unique designs
              to match your home&apos;s character.
            </li>
          </ol>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">
              Why Choose Chrome Double Glazing for Your Flush Casement Windows?
            </h4>
            <p>
              At Chrome Double Glazing, we specialize in installing premium
              flush casement windows that combine style, durability, and energy
              efficiency. Our skilled team ensures a precise fit and
              high-quality finish, transforming your home with windows that
              stand the test of time.
            </p>

            <h4 className="text-xl font-bold">
              Get a Free Quote for Your Flush Casement Windows
            </h4>
            <p>
              Elevate your home&apos;s style and efficiency with our flush
              casement windows. Contact Chrome Double Glazing today for a free,
              no-obligation quote and discover the difference our windows can
              make.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
