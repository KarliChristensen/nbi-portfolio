"use client";

import React from "react";
import SpatialNavigation from "./components/SpatialNavigation";
import Landing from "./sections/Landing.js";
import About from "./sections/About.js";
import Projects from "./sections/Projects.js";

export default function Home() {
  return (
    <SpatialNavigation 
      landingContent={<Landing />}
      aboutContent={<About />}
      projectsContent={<Projects />}
    />
  );
}