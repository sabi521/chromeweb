"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo-2.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import QuoteButton from "./QuoteButton";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Windows",
    link: "#",
    children: [
      { label: "uPVC Windows", link: "upvc-windows" },
      { label: "Casement Windows", link: "casement-windows" },
      { label: "Sash Windows", link: "sash-windows" },
      { label: "Tilt & Turn Windows", link: "tilt-turn-windows" },
      { label: "Bay Windows", link: "bay-windows" },
      { label: "French Windows", link: "french-windows" },
      { label: "Flush Casement Windows", link: "flush-casement-windows" },
      { label: "Triple-Glazed windows", link: "triple-glazed-windows" },
    ],
  },
  { label: "Doors", link: "#" },
  { label: "Conservatories", link: "#" },
  { label: "Roofline", link: "#" },
  { label: "Cladding", link: "#" },
  { label: "Guttering", link: "#" },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  function openSideMenu() {
    setSideMenuOpen(true);
  }

  function closeSideMenu() {
    setSideMenuOpen(false);
  }

  return (
    <header className=" bg-black fixed top-0 left-0 w-full z-50 ">
      <div className="top_header border-b border-gray-300 px-4 py-4 mx-auto text-center flex gap-3 flex-wrap w-full max-w-screen-xl items-center justify-between text-medium text-orange sm:gap-6">
        <div className="max-w-sm flex gap-2 items-center">
          <IoCall className="text-xl" />
          <a href="tel:07508443393">07508443393</a>
        </div>{" "}
        <a
          className="max-w-[300px] mx-auto sm:w-full hidden md:block"
          href="mailto:info@chromedoubleglazing.com"
        >
          info@chromedoubleglazing.com
        </a>
        <ul className="sm-order-3 flex items-center justify-between gap-6">
          <li>
            <a
              href="mailto:info@chromedoubleglazing.com"
              rel="noreferrer"
              target="_blank"
              className="text-orange transition hover:opacity-75 block md:hidden"
            >
              <span className="sr-only">Email</span>
              <svg
                className="size-6 text-orange-500"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-orange transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="size-6 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-orange transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-black min-h-24 flex items-center">
        <div className="mx-auto flex w-full max-w-screen-xl justify-between items-center px-4 text-sm ">
          {/* logo */}
          <a href="/" className="w-52">
            <Image src={logo} alt="logo" width={200} />
          </a>

          {/*Navigation */}
          <section ref={animationParent} className="flex items-center gap-10">
            {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
            <div className="hidden lg:flex items-center gap-4 transition-all">
              {navItems.map((d, i) => (
                <div
                  key={i}
                  className="relative group px-2 py-3 transition-all"
                >
                  <Link href={d.link ?? "#"}>
                    <div className="flex cursor-pointer items-center gap-2 text-white group-hover:text-orange">
                      <span>{d.label}</span>
                      {d.children && (
                        <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                      )}
                    </div>
                  </Link>

                  {/* dropdown */}
                  {d.children && (
                    <div className="absolute z-50 right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-black py-3 shadow-md transition-all group-hover:flex">
                      {d.children.map((ch, i) => (
                        <Link key={i} href={ch.link ?? "#"}>
                          <div className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:text-orange">
                            <span className="whitespace-nowrap pl-3">
                              {ch.label}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* header buttons */}
          <section className="hidden lg:block">
            <button className="h-fit text-white transition-all hover:text-orange">
              <QuoteButton />
            </button>
          </section>

          <FiMenu
            onClick={openSideMenu}
            className="cursor-pointer text-4xl text-white lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed z-50 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden">
      <div className="h-full w-[65%] bg-black px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-white"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="mt-6 items-center">
          <button className="h-fit text-white transition-all hover:text-orange">
            <QuoteButton />
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children, iconImage }: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <div
        onClick={toggleItem}
        className="flex cursor-pointer items-center gap-2 text-white group-hover:text-black"
      >
        <span>{label}</span>
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${
              isItemOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* dropdown */}
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-black py-3 transition-all flex">
          {children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "#"}>
              <div className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:orange">
                {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
                <span className="whitespace-nowrap pl-3">{ch.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
