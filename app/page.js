"use client";

import React, { useEffect } from "react";
import { useAppContext } from "./components/Context";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const { updateActiveSection } = useAppContext();

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
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <main className="h-screen overflow-x-hidden snap-y snap-mandatory antialiased scroll-smooth scrollbar-hide">
      <Landing />
      <Projects />
      <Footer />
    </main>
  );
}
