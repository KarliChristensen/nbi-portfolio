import React from "react";
import Image from "next/image";
import { projectLinks } from "../config";

const Work = () => {
  return (
    <section
      id="work"
      className="snap-start overflow-x-auto whitespace-nowrap snap-x snap-mandatory"
    >
      {projectLinks.map(
        ({ name, github, url, image, imageAlt, text, tools }, i) => (
          <div key={i} className="inline-block max-w-screen snap-start">
            <div className="w-screen h-screen flex flex-col justify-center items-start">
              <h1 className="text-xl ml-5 md:ml-20 mb-2">{name}</h1>
              <div className="w-screen h-2/5 flex justify-center items-start relative">
                <Image
                  className="w-full h-full bg-black"
                  src={image}
                  alt="test"
                ></Image>
              </div>
              <div className="bg-red-200 mx-5 md:mx-20 mt-5 md:w-2/3 lg:1/2">
                <p className="whitespace-normal">{text}</p>
                <ul className="flex flex-row mt-3 space-x-1.5">
                  {tools.map((tools, index) => (
                    <li
                      key={index}
                      className="bg-green-200 rounded-full font-medium text-sm py-1 px-2 text-secondary"
                    >
                      <span>{tools}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Work;
