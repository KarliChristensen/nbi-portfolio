"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { navLinks } from "../config";
import { useAppContext } from "./Context";

const Navbar = () => {
  const { activeSection } = useAppContext();
  const [linkTexts, setLinkTexts] = useState({});
  const [processedLinks, setProcessedLinks] = useState(new Set());

  useEffect(() => {
    const matchingLinkName = navLinks.find(
      ({ linkName }) => linkName === activeSection
    );
    if (matchingLinkName && !processedLinks.has(matchingLinkName.linkName)) {
      handleMagic(matchingLinkName.linkName);
    }
  }, [activeSection, processedLinks]);

  useEffect(() => {
    const initialLinkTexts = {};
    navLinks.forEach(({ linkName }) => {
      initialLinkTexts[linkName] = linkName.toLocaleUpperCase();
    });
    setLinkTexts(initialLinkTexts);
  }, []);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMagic = (linkName) => {
    let iteration = 0;
    const originalText = linkName.toLocaleUpperCase();
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
      setLinkTexts((prev) => ({ ...prev, [linkName]: newText }));
      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  };

  return (
    <header
      className={`absolute top-0 w-full z-50 transition-colors ease-in-out duration-300 ${
        activeSection == "about" ? "bg-red-500" : "bg-transparent"
      }`}
    >
      <div className="flex justify-evenly md:justify-between md:ml-10 px-10 py-2 md:py-7">
        <div className="flex justify-evenly md:w-auto">
          <ol className="flex flex-row">
            {navLinks &&
              navLinks.map(({ url, linkName }, i) => (
                <li key={i}>
                  <Link href={url}>
                    <span
                      className={`cursor-pointer font-mono text-2xl text-slate-400 hover:text-slate-300 rounded-full ${
                        activeSection == linkName && "!text-orange-400"
                      } `}
                    >
                      {linkTexts[linkName] || linkName.toLocaleUpperCase()}
                    </span>
                  </Link>
                </li>
              ))}
          </ol>
        </div>
        <div className="hidden md:block">
          <p className="nav-text font-mono text-2xl mr-20 inline-block text-orange-400">
            DIGITAL PORTFOLIO
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
