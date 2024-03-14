"use client";

import React from "react";
import Image from "next/image";
import githubIcon from "../../public/icons/githubNew.svg";
import linkedinIcon from "../../public/icons/linkedinNew.svg";
import mailIcon from "../../public/icons/mailNew.svg";

const LinkBar = () => {
  return (
    <div className="m-0">
      <ul className="flex flex-row justify-center md:justify-start space-x-20 md:space-x-10">
        <li className="w-[30px] h-[30px] hover:scale-110 ease-out duration-200">
          <a href="https://github.com/KarliChristensen" className="">
            {" "}
            <Image src={githubIcon} alt="Check out this Github" />
          </a>
        </li>
        <li className="w-[30px] h-[30px] hover:scale-110 ease-out duration-200">
          <a href="https://www.linkedin.com/in/karlichristensen/">
            {" "}
            <Image src={linkedinIcon} alt="And then look at this LinkedIn" />
          </a>
        </li>
        <li className="w-[30px] h-[30px] hover:scale-110 ease-out duration-200">
          <a href="mailto:karlichristensen@post.com?subject=Mail%20from%20Portfolio.com">
            {" "}
            <Image src={mailIcon} alt="What about this rocking mail link!" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkBar;
