"use client";

import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import Logo from "../android-chrome-192x192.png";

const Splash = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(true);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1.1,
      duration: 600,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 600,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1.1,
      duration: 600,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 600,
      easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <Image id="logo" src={Logo} alt="logo" width={100} height={100} />
    </div>
  );
};

export default Splash;
