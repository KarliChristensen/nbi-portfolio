"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="absolute top-0 bg-transparent w-full z-50 text-gray-400">
      <div className="flex justify-evenly md:justify-between px-10 py-7">
        <div className="flex justify-evenly md:w-auto">
          <Link href="#home-section">
            <div
              className={`text-xl cursor-pointer ${
                activeLink === "home-section" ? "text-green-500" : ""
              }`}
            >
              HOME
            </div>
          </Link>
          <Link href="#about-section">
            <div
              className={`text-xl cursor-pointer ${
                activeLink === "about-section" ? "text-green-500" : ""
              }`}
            >
              ABOUT
            </div>
          </Link>
          <Link href="#work-section">
            <div
              className={`text-xl cursor-pointer ${
                activeLink === "work-section" ? "text-green-500" : ""
              }`}
            >
              WORK
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <p className="nav-text">DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
