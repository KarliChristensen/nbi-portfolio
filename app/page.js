"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "./components/Context";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";

export default function Home() {
  const { updateActiveSection } = useAppContext();
  const [isFirstScroll, setIsFirstScroll] = useState(true);

  useEffect(() => {
    let home = document.getElementById("home");
    let projects = document.getElementById("projects");

    let sections = [home, projects];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveSection(entry.target.id);
          if (entry.target.id === "projects" && isFirstScroll) {
            // Disable snap after the first scroll
            const mainContainer = document.querySelector("#main-container");
            if (mainContainer) {
              mainContainer.classList.remove("snap-mandatory");
            }
            setIsFirstScroll(false);
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <main
      id="main-container"
      className="h-screen overflow-x-hidden snap-y snap-mandatory antialiased scroll-smooth scrollbar-hide"
    >
      <Landing />
      <Projects />
      {/*       <About /> */}
    </main>
  );
}
