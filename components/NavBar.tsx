"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo-2.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Features",
    link: "#",
    children: [
      { label: "Todo list", link: "#", iconImage: todoImage },
      { label: "Calendar", link: "#", iconImage: calendarImage },
      { label: "Reminders", link: "#", iconImage: remindersImage },
      { label: "Planning", link: "#", iconImage: planningImage }
    ]
  },
  {
    label: "Company",
    link: "#",
    children: [
      { label: "History", link: "#" },
      { label: "Our Team", link: "#" },
      { label: "Blog", link: "#" }
    ]
  },
  { label: "Careers", link: "#" },
  { label: "About", link: "#" }
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
    <header className="bg-black">
      <div className="mx-auto flex w-full max-w-[1660px] justify-between items-center px-4 py-5 text-sm ">
      {/* logo */}
      <Image src={logo} alt="logo" width={200}/>

      {/*Vavigation */}
      <section ref={animationParent} className="flex items-center gap-10">      
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <div key={i} className="relative group px-2 py-3 transition-all">
              <Link href={d.link ?? "#"}>
                <div className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </div>
              </Link>

              {/* dropdown */}
              {d.children && (
                <div className="absolute z-50 right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <Link key={i} href={ch.link ?? "#"}>
                      <div className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
                        {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
                        <span className="whitespace-nowrap pl-3">{ch.label}</span>
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
      <section className="hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>

      <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl text-white md:hidden" />
    </div>
    </header>
    
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed z-50 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-black px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl text-white" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} iconImage={d.iconImage} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
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
      <div onClick={toggleItem} className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{label}</span>
        {children && (
          <IoIosArrowDown className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`} />
        )}
      </div>

      {/* dropdown */}
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "#"}>
              <div className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
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
