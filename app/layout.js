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
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <title>Karli Christensen - Portfolio</title>
      <ContextProvider>
        <body className={inter.className}>
          {isLoading && isHome ? (
            <Splash finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Navbar />
              {children}
            </>
          )}
        </body>
      </ContextProvider>
    </html>
  );
}
