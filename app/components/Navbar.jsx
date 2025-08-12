"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BigK from "../android-chrome-192x192.png";
import BigKW from "../android-chrome-192x192w.png";
import { useAppContext } from "../components/Context";
import { useRouter } from "next/navigation";

// Extract spatial navigation props and prevent them from reaching DOM
const Navbar = ({ 
  navigateToSection, 
  sectionStatus, 
  isTransitioning,
  ...restProps 
}) => {
  const { activeSection } = useAppContext();
  const router = useRouter();
  const [splashShown, setSplashShown] = useState(null);

  useEffect(() => {
    setSplashShown(sessionStorage.getItem("splashShown"));
  }, []);

  const handleAboutClick = (e) => {
    if (navigateToSection) {
      e.preventDefault(); // Prevent default Link behavior
      navigateToSection("about");
    }
    // If navigateToSection is not available, let Link handle navigation normally
  };

  const handleProjectsClick = (e) => {
    if (navigateToSection) {
      e.preventDefault(); // Prevent default Link behavior
      navigateToSection("projects");
    } else {
      // Fallback behavior for when spatial navigation isn't available
      e.preventDefault();
      if (window.location.pathname !== "/") {
        router.push("/#projects");
      } else {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header 
      className="sm:block absolute top-0 w-full h-12 sm:h-28 z-50 bg-green-400/60 sm:bg-transparent"
      {...restProps}
    >
      <div className="h-full w-full px-2 sm:px-10 flex justify-between items-center">
        <Link
          href="/#home"
          aria-label="Link to Home"
        >
          <Image
            className={`hover:scale-110 transform ease-in-out duration-300 ${
              activeSection === "home" ? "hidden" : "block"
            }`}
            src={BigK}
            alt="Logo"
            width={40}
            height={40}
          />
          <Image
            className={`hover:scale-110 transform ease-in-out duration-300 ${
              activeSection === "home" ? "block" : "hidden"
            }`}
            src={BigKW}
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
        <ul className="flex font-bold raleway w-44 justify-between">
          <li>
            <Link
              className={`navbarLink ${
                activeSection === "home" ? "" : "active"
              }`}
              href="/about"
              aria-label="Link to About"
              onClick={handleAboutClick}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className={`navbarLink ${
                activeSection === "home" ? "" : "active"
              }`}
              href="/#projects"
              aria-label="Link to Projects"
              onClick={handleProjectsClick}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;