import React from "react";

const QuoteButton = () => {
  return (
    <div>
      <a
        className="group flex items-center justify-between gap-4 rounded-lg border border-orange bg-orange px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring-ornage"
        href="/contact"
      >
        <span className="font-medium text-black transition-colors group-hover:text-orange group-active:text-orange">
          Get A Free Quote
        </span>

        <span className="shrink-0 rounded-full border border-current bg-white p-2 text-orange group-active:text-orange">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default QuoteButton;
