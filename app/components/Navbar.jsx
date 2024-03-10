"use client"

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { navLinks } from "../config";
import { useAppContext } from "./Context";

const Navbar = () => {
 const { activeSection } = useAppContext();
 const [linkTexts, setLinkTexts] = useState({});

 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 useEffect(() => {
    const initialLinkTexts = {};
    navLinks.forEach(({ name }) => {
      initialLinkTexts[name] = name.toLocaleUpperCase();
    });
    setLinkTexts(initialLinkTexts);
 }, []);

 const handleMouseOver = (name) => {
    let iteration = 0;
    const originalText = name.toLocaleUpperCase();
    const interval = setInterval(() => {
      const newText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setLinkTexts((prev) => ({ ...prev, [name]: newText }));

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
 };

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
                      onMouseOver={() => handleMouseOver(name)}
                      className={`cursor-pointer font-mono ${
                        activeSection == name && "text-orange-500"
                      }`}
                    >
                      {linkTexts[name] || name.toLocaleUpperCase()}
                    </span>
                 </Link>
                </li>
              ))}
          </ol>
        </div>
        <div className="hidden md:block">
          <p className="nav-text font-mono">DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </header>
 );
};

export default Navbar;
