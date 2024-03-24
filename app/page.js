"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "./components/Context";
import Landing from "./sections/Landing";
import About from "./sections/about";
import Work from "./sections/Work";

export default function Home() {
  const { updateActiveSection } = useAppContext();

  useEffect(() => {
    let home = document.getElementById("home");
    let about = document.getElementById("about");
    let skills = document.getElementById("work");

    let sections = [about, home, skills];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory antialiased scroll-smooth scrollbar-hide">
      <Landing />
      <About />
      <Work />
    </main>
  );
}
