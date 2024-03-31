import React from "react";
import Image from "next/image";
import { techStack } from "../config";

const TechStack = () => {
  return (
    <div className="w-full mt-1 md:mt-10 ">
      <h1 className="text-black font-extrabold mb-3">Tech Stack</h1>
      <ul className="flex mb-3 flex-row justify-center space-x-5">
        {techStack &&
          techStack.map(({ icon, altText }, i) => (
            <li key={i} className="flex items-center">
              <Image src={icon} alt={altText} height={40}></Image>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TechStack;
