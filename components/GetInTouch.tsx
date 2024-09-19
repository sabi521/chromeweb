import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <a
        className="group flex items-center justify-center text-center gap-4 rounded-lg border border-orange bg-orange px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring-orange"
        href="/contact"
      >
        <span className="font-bold text-center text-black text-lg transition-colors group-hover:text-orange group-active:text-orange">
          Get In Touch
        </span>
      </a>
    </div>
  );
};

export default GetInTouch;
