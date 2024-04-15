import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectLinks } from "../config";
import StraightLong from "../../public/graphics/StraightLong.png";

const Work = () => {
  return (
    <section
      id="work"
      className="h-dvh overflow-x-hidden overflow-y-hidden whitespace-nowrap snap-x snap-mandatory snap-start antialiased scroll-smooth bg-newBeige"
    >
      {projectLinks.map(
        (
          { name, image, imageAlt, text, tools, url, github, deployment },
          i
        ) => (
          <section
            id={`work-${name.toLowerCase()}`}
            key={i}
            className="inline-block max-w-screen snap-start"
          >
            <div className="w-screen h-screen flex flex-col justify-center items-start">
              <h1
                className="flex flex-col ml-5 md:ml-20 mb-5 indent-2 font-extrabold font-roboto text-3xl"
                style={{ maxWidth: `${name.length * 20}px` }}
              >
                {name}
                <Image src={StraightLong} alt="Straight underline"></Image>
              </h1>
              <div className="w-screen h-2/5 flex justify-center relative bg-newYellow">
                <a
                  className="w-full h-full"
                  href={url}
                  aria-label="Link to deployed site"
                >
                  <Image
                    className="inset-0 w-full h-full object-cover border-black border-y-4 opacity-60"
                    src={image}
                    alt={imageAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </a>
                {i > 0 && (
                  <Link
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    href={`#work-${projectLinks[i - 1].name.toLowerCase()}`}
                  >
                    <svg
                      className="stroke-newBlue fill-transparent left-0 w-20 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="m17 4-8.33057 6.0405c-2.22591 1.614-2.2259 2.305 0 3.919l8.33057 6.0405"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </Link>
                )}
                {i < projectLinks.length - 1 && (
                  <Link
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    href={`#work-${projectLinks[i + 1].name.toLowerCase()}`}
                  >
                    <svg
                      className=" stroke-newBlue fill-transparent w-20 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m7 4 8.3306 6.0405c2.2259 1.614 2.2259 2.305 0 3.919l-8.3306 6.0405"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
              <div className="mx-5 md:mx-20 mt-5 bg-newLightBlue md:w-2/3 lg:1/2">
                <p className="whitespace-normal mt-3 mx-3 text-newBlue font-bold font-roboto text-sm">
                  {text}
                </p>
                <ul className="ml-3 mt-3">
                  <a href={github} aria-label="GitHub repo">
                    <svg
                      className=" hover:stroke-newOrange hover:scale-110 transition-all ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4684e9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </ul>

                <ul className="flex flex-row my-3 ml-3 space-x-1.5">
                  {tools.map((tool, index) => (
                    <li
                      key={index}
                      className="bg-newBeige rounded-full font-bold text-newBlue text-sm py-1 px-2"
                    >
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )
      )}
    </section>
  );
};

export default Work;
