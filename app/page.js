"use client";

import React from "react";
import SpatialNavigation from "./components/SpatialNavigation";
import Landing from "./sections/Landing.jsx";
import Projects from "./sections/Projects.jsx";
import About from "./sections/About.jsx";

export default function Home() {
  return (
    <SpatialNavigation 
      landingContent={<Landing />}
      aboutContent={<About />}
      projectsContent={<Projects />}
    />
  );
}