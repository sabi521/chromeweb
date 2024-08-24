import React from "react";

const Hero = () => {
  return (
    <section className="relative mt-20 z-10 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/75 to-white/40"></div>

      <div className="relative z-20 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-4xl text-left">
          <h1 className="text-3xl text-white font-extrabold uppercase drop-shadow-2xl sm:text-5xl">
            Transform Your Space with Expert Window Installation
          </h1>

          <p className="mt-4 max-w-3xl text-orange font-medium drop-shadow-2xl sm:text-xl/relaxed">
            Enhance your home's beauty and efficiency with our premium double
            glazing solutions. Professional installation, lasting quality, and
            unmatched service. Discover the difference today.
          </p>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="block w-full max-w-60 rounded bg-orange px-12 py-3 text-lg font-bold text-black shadow hover:bg-opacity-80 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
