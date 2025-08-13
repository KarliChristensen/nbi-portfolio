"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ContextProvider from "./components/Context";
import Splash from "./components/Splash";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isHome) {
      const hasShownSplash = sessionStorage.getItem("splashShown");
      if (!hasShownSplash) {
        setIsLoading(true);
      }
    }
  }, [isHome]);

  const handleFinishLoading = () => {
    sessionStorage.setItem("splashShown", "true");
    setIsLoading(false);
  };

  if (!isMounted) {
    return (
      <html lang="en">
        <title>Karli Christensen - Portfolio</title>
        <ContextProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </ContextProvider>
      </html>
    );
  }

  return (
    <html lang="en">
      <title>Karli Christensen - Portfolio</title>
      <ContextProvider>
        <body className={inter.className}>
          {isLoading && isHome ? (
            <Splash finishLoading={handleFinishLoading} />
          ) : (
            <>
              {/*    <Navbar /> */}
              {children}
            </>
          )}
        </body>
      </ContextProvider>
    </html>
  );
}
