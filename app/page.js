"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "./components/Context";
import Head from "next/head";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";

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
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <>
      <main className="h-screen overflow-x-hidden snap-y snap-mandatory antialiased scroll-smooth scrollbar-hide">
        <Head>
          <title>Karli Christensen - Portfolio</title>
          <meta
            name="description"
            content="Web Developer Portfolio for Karli Christensen"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
