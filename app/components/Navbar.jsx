"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header className="absolute top-0 bg-transparent w-full z-50 text-gray-400">
      <div className="flex justify-evenly md:justify-between px-10 py-7">
        <div className="flex justify-evenly md:w-auto">
          <Link href="#home-section" className="hover:text-purple-600 nav-text">
            HOME
          </Link>
          <Link
            href="#about-section"
            className="hover:text-purple-600 nav-text"
          >
            ABOUT
          </Link>
          <Link href="#work-section" className="hover:text-purple-600 nav-text">
            WORK
          </Link>
          <Link
            href="#contact-section"
            className="hover:text-purple-600 nav-text"
          >
            CONTACT
          </Link>
        </div>
        <div className="hidden md:block">
          <p className="nav-text">DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
