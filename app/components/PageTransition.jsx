"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [displayLocation, setDisplayLocation] = useState(pathname);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (pathname !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [pathname, displayLocation]);

  return (
    <div className={`page-transition ${transitionStage}`}>
      {children}
    </div>
  );
};

export default PageTransition;