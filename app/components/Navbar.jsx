"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import BigK from "../android-chrome-192x192.png";
import BigKW from "../android-chrome-192x192w.png";
import { useAppContext } from "../components/Context";
import { useRouter } from "next/navigation";

const Navbar = ({
  navigateToSection,
  sectionStatus,
  isTransitioning,
  currentSection,
  ...restProps
} = {}) => {
  const { activeSection: contextActiveSection } = useAppContext();
  const router = useRouter();
  const [splashShown, setSplashShown] = useState(null);

  useEffect(() => {
    setSplashShown(sessionStorage.getItem("splashShown"));
  }, []);

  const activeSection = currentSection || contextActiveSection;

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (navigateToSection) {
      navigateToSection("landing");
    } else {
      window.history.pushState(null, "", "#home");
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (navigateToSection) {
      navigateToSection("about");
    } else {
      window.history.pushState(null, "", "#about");
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (navigateToSection) {
      navigateToSection("projects");
    } else {
      window.history.pushState(null, "", "#projects");
    }
  };

  const getSectionForStyling = () => {
    if (currentSection) {
      const sectionMap = {
        landing: "home",
        about: "about",
        projects: "projects",
      };
      return sectionMap[currentSection] || currentSection;
    }
    return contextActiveSection;
  };

  const currentSectionForStyling = getSectionForStyling();

  return (
    <header className="hidden md:block absolute top-0 w-full h-12 sm:h-28 z-50 bg-green-400/60 sm:bg-transparent">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
      <div className="h-full w-full px-2 sm:px-10 flex justify-between items-center">
        <button
          onClick={handleHomeClick}
          aria-label="Navigate to Home"
          className="hover:scale-110 transform ease-in-out duration-300"
        >
          <Image
            className={`${
              currentSectionForStyling === "home" ? "hidden" : "block"
            }`}
            src={BigK}
            alt="Logo"
            width={40}
            height={40}
          />
          <Image
            className={`${
              currentSectionForStyling === "home" ? "block" : "hidden"
            }`}
            src={BigKW}
            alt="Logo"
            width={40}
            height={40}
          />
        </button>
        <ul className="flex font-bold raleway w-44 justify-between">
          <li>
            <button
              className={`navbarLink text-lg ${
                currentSectionForStyling === "about"
                  ? "active"
                  : currentSectionForStyling === "home"
                  ? ""
                  : "active"
              }`}
              onClick={handleAboutClick}
              aria-label="Navigate to About"
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`navbarLink text-lg ${
                currentSectionForStyling === "projects"
                  ? "active"
                  : currentSectionForStyling === "home"
                  ? ""
                  : "active"
              }`}
              onClick={handleProjectsClick}
              aria-label="Navigate to Projects"
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
