"use client";

import React from "react";
import SpatialNavigation from "./components/SpatialNavigation";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";

export default function Home() {
  return (
    <SpatialNavigation 
      landingContent={<Landing />}
      aboutContent={<About />}
      projectsContent={<Projects />}
    />
  );
}