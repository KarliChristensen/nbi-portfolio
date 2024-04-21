import React from "react";
import Image from "next/image";
import Link from "next/link";
import BigK from "../android-chrome-192x192.png";
import BigKW from "../android-chrome-192x192w.png";
import { useAppContext } from "../components/Context";

const Navbar = () => {
  const { activeSection } = useAppContext();
  console.log;

  return (
    <header className="hidden sm:block absolute top-0 w-full h-28 z-50">
      <div className="h-full w-full px-10 flex justify-between items-center">
        <a href="/">
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
        </a>
        <ul className="flex font-bold raleway justify-between w-44">
          <li>
            <Link
              className={`navbarLink ${
                activeSection === "home" ? "" : "active"
              }`}
              href="/about"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className={`navbarLink ${
                activeSection === "home" ? "" : "active"
              }`}
              href="/projects"
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
