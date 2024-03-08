"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { navLinks } from "../config";
import { useAppContext } from "./Context";

const Navbar = () => {
  const { activeSection, updateActiveSection } = useAppContext();

  return (
    <header className="absolute top-0 bg-transparent w-full z-50 text-gray-400">
      <div className="flex justify-evenly md:justify-between px-10 py-7">
        <div className="flex justify-evenly md:w-auto">
          <ol className="flex flex-row">
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link href={url}>
                    <span
                      className={`cursor-pointer ${
                        activeSection == name && "text-orange-500"
                      }`}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
          </ol>
        </div>
        <div className="hidden md:block">
          <p className="nav-text">DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
