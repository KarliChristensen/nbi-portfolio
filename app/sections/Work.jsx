import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectLinks } from "../config";

const Work = () => {
  return (
    <section
      id="work"
      className="h-dvh overflow-x-auto overflow-y-hidden whitespace-nowrap snap-x snap-mandatory snap-start antialiased scroll-smooth"
    >
      {projectLinks.map(({ name, image, imageAlt, text, tools }, i) => (
        <section
          id={`work-${name.toLowerCase()}`}
          key={i}
          className="inline-block max-w-screen snap-start"
        >
          <div className="w-screen h-screen flex flex-col justify-center items-start">
            <h1 className="ml-5 md:ml-20 mb-5 font-extrabold font-roboto text-3xl">
              {name}
            </h1>
            <div className="w-screen h-2/5 flex justify-center items-start relative inset-0 ">
              <Image
                className="inset-0 w-full h-full object-cover border-y-2 border-black"
                src={image}
                alt={imageAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></Image>
              {i > 0 && (
                <Link href={`#work-${projectLinks[i - 1].name.toLowerCase()}`}>
                  <svg
                    className="absolute stroke-pink-600 fill-transparent left-0 transform translate-y-48 w-20 opacity-70 hover:opacity-95 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="m17 4-8.33057 6.0405c-2.22591 1.614-2.2259 2.305 0 3.919l8.33057 6.0405"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                </Link>
              )}
              {i < projectLinks.length - 1 && (
                <Link
                  className="snap-mandatory snap-start"
                  href={`#work-${projectLinks[i + 1].name.toLowerCase()}`}
                >
                  <svg
                    className="absolute stroke-pink-600 fill-transparent right-0 transform translate-y-48 w-20 opacity-70 hover:opacity-95 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m7 4 8.3306 6.0405c2.2259 1.614 2.2259 2.305 0 3.919l-8.3306 6.0405"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                </Link>
              )}
            </div>
            <div className="bg-red-200 mx-5 md:mx-20 mt-5 md:w-2/3 lg:1/2">
              <p className="whitespace-normal font-roboto">{text}</p>
              <ul className="flex flex-row mt-3 space-x-1.5">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="bg-green-200 rounded-full font-medium text-sm py-1 px-2 text-secondary"
                  >
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Work;
