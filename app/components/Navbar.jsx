"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BigK from "../android-chrome-192x192.png";
import BigKW from "../android-chrome-192x192w.png";
import { useAppContext } from "../components/Context";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { activeSection } = useAppContext();
  const router = useRouter();
  const [splashShown, setSplashShown] = useState(null);

  useEffect(() => {
    setSplashShown(sessionStorage.getItem("splashShown"));
  }, []);

  const NavbarLink = ({
    section,
    children,
    navigateToSection,
    activeSection,
  }) => {
    return (
      <button
        className={`navbarLink ${activeSection === section ? "active" : ""}`}
        onClick={() => navigateToSection(section)}
        aria-label={`Navigate to ${section}`}
      >
        {children}
      </button>
    );
  };
  const handleNavClick = (target) => {
    if (target === "about") {
      // Trigger slide to about
      if (typeof navigateToSection !== "undefined") {
        navigateToSection("about");
      } else {
        router.push("/about");
      }
    } else {
      // Handle regular section navigation
      if (typeof navigateToSection !== "undefined") {
        navigateToSection(target);
      } else {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="sm:block absolute top-0 w-full h-12 sm:h-28 z-50 bg-green-400/60 sm:bg-transparent">
      <div className="h-full w-full px-2 sm:px-10 flex justify-between items-center">
        <Link
          href={sessionStorage.getItem("splashShown") === "true" ? "/" : "/#home"}
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
              onClick={(e) => {
                e.preventDefault();

                if (window.location.pathname !== "/") {
                  // Navigate to home with hash
                  router.push("/#projects");
                } else {
                  // Already on home, just scroll
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
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
