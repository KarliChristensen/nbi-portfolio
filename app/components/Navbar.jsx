"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="hidden sm:block absolute top-0 w-full h-16 z-50">
      <div className="h-full w-full px-10 flex justify-between items-center">
        <Image src={""} alt="Logo" width={20} height={20}></Image>
        <div className="flex justify-between w-44">
          <Link className="navbarLink" href="here">
            About me
          </Link>
          <Link className="navbarLink" href="here">
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
