import React from "react";
import logo from "@/assets/images/logo-2.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <p className="font-medium text-white">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/sash-windows"
                  className="text-white transition hover:opacity-75"
                >
                  Windows
                </a>
              </li>

              <li>
                <a
                  href="/doors"
                  className="text-white transition hover:opacity-75"
                >
                  Doors
                </a>
              </li>

              <li>
                <a
                  href="/conservatories"
                  className="text-white transition hover:opacity-75"
                >
                  Conservatories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  {" "}
                  Contact{" "}
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  {" "}
                  FAQs{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  {" "}
                  Returns Policy{" "}
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  {" "}
                  Refund Policy{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2024. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
