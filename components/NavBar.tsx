"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo-2.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

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
      { label: "Vertical Sliding Window", link: "#" },
      { label: "Thermal Insulation", link: "#" },
      { label: "Tilt and Turn Windows", link: "#" },
      { label: "Noise Reduction", link: "#" },
    ],
  },
  {
    label: "Door",
    link: "#",
    children: [
      { label: "Front Doors", link: "#" },
      { label: "Bi Folding Doors", link: "#" },
      { label: "Patio Doors", link: "#" },
    ],
  },
  { label: "Roofline", link: "#" },
  { label: "Contact", link: "#" },
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
    <header className="bg-black fixed top-0 left-0 w-full z-50 min-h-24">
      <div className="mx-auto flex w-full max-w-screen-xl justify-between items-center px-4 py-5 text-sm ">
        {/* logo */}
        <Image src={logo} alt="logo" width={200} />

        {/*Vavigation */}
        <section ref={animationParent} className="flex items-center gap-10">
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <div key={i} className="relative group px-2 py-3 transition-all">
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
        <section className="hidden md:block">
          <button className="h-fit text-white transition-all hover:text-orange">
            <QuoteButton />
          </button>
        </section>

        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl text-white md:hidden"
        />
      </div>
    </header>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed z-50 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
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
        className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black"
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
