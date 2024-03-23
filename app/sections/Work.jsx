import React from "react";
import Image from "next/image";
import { projectLinks } from "../config";

const Work = () => {
  return (
    <section id="work" className="snap-start">
      {projectLinks.map(({ name, github, url, image, text, tools }, i) => (
        <div key={i} className="w-screen h-screen flex flex-col items-center">
          <div className="h-2/4 bg-blue-400">
            <h1>{name}</h1>
            <a href={url}>
              <Image alt="test" className="w-screen h-2/4 bg-black"></Image>
            </a>
          </div>
          <div className="bg-red-200">
            <p>{text}</p>
            <ul className="flex flex-row mt-3 space-x-1.5">
              {tools.map((tools, index) => (
                <li
                  key={index}
                  className="bg-green-200 rounded-full font-medium text-sm py-1 px-2 text-secondary"
                >
                  <span className="">{tools}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
