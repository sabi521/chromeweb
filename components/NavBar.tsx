import Link from "next/link";
import React from "react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import ContactButton from "./ContactButton";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-5 h-24 bg-navyBlue">
      <Link className="text-3xl text-white" href="/">
        {" "}
        <Image src="/logo-2.svg" alt="logo" width={250} height={150} />{" "}
      </Link>
      <ul className="flex space-x-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            className="text-white hover:text-orange transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="text-white cursor-pointer">
        <ContactButton
          type="button"
          title="Get A Free Quote"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default NavBar;
