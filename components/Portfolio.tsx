import React from "react";
import Image from "next/image";
import service_1 from "@/assets/images/window_banner.webp";
import bay_winodw from "@/assets/images/bay_window_1.webp";
import tilt_window from "@/assets/images/window_handle.webp";
import flush_window from "@/assets/images/windows_installation.webp";
import casement_window from "@/assets/images/casement_windows.webp";
import upvc_window from "@/assets/images/windows.webp";
import doors from "@/assets/images/single_door.webp";
import conservatories from "@/assets/images/conservatories_2.webp";
import roofline from "@/assets/images/roofline.webp";

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <a
            href="/sash-windows"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={service_1}
              alt="Sash Windows"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Sash Windows
              </h3>
            </div>
          </a>
          {/* Portfolio Item 2 */}
          <a
            href="/bay-windows"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={bay_winodw}
              alt="Bay Windows"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Bay Windows
              </h3>
            </div>
          </a>
          {/* Portfolio Item 3 */}
          <a
            href="/tilt-turn-windows"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={tilt_window}
              alt="Tilt Windows"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Tilt and Turn Windows
              </h3>
            </div>
          </a>
          {/* Portfolio Item 4 */}
          <a
            href="/flush-casement-windows"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={flush_window}
              alt="Flush Windows"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Flush Casement Windows
              </h3>
            </div>
          </a>
          {/* Portfolio Item 5 */}
          <a
            href="/casement-windows"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={casement_window}
              alt="Casement Windows"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Casement Windows
              </h3>
            </div>
          </a>
          {/* Portfolio Item 6 */}
          <a
            href="/upvc-windows"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={upvc_window}
              alt="uPVC Windows"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                uPVC Windows
              </h3>
            </div>
          </a>
          {/* Portfolio Item 7 */}
          <a
            href="/roofline"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={roofline}
              alt="Roofline"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Roofline
              </h3>
            </div>
          </a>
          {/* Portfolio Item 8 */}
          <a
            href="/doors"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={doors}
              alt="Doors"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Doors
              </h3>
            </div>
          </a>
          {/* Portfolio Item 9 */}
          <a
            href="/conservatories"
            className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={conservatories}
              alt="Conservatories"
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Conservatories
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
