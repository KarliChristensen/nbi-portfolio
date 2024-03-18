"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "./components/Context";
import TypeIt from "typeit-react";
import LinkBar from "./components/LinkBar";
import Landing from "./sections/Landing";
/* import About from "./sections/about"; */
import { workLinks } from "./config";
import Work from "./sections/Work";

export default function Home() {
  const { updateActiveSection } = useAppContext();
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    let home = document.getElementById("home");
    let about = document.getElementById("about");
    let skills = document.getElementById("work");

    let sections = [about, home, skills];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <Landing />
      <section id="about" className="snap-start bg-primaryAccent">
        <div className="w-screen h-screen relative flex justify-center py-40">
          <div className="w-full lg:max-w-[550px] md:max-w-[650px] w-min-[450px] md:w-full lg:w-4/5 h-full inline px-10">
            <h1>About Me</h1>
            <TypeIt options={{ speed: 0 }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                rerum libero. Ipsa et ex nesciunt ab alias ipsum odio accusamus
                quo, aspernatur reiciendis, voluptatibus suscipit, fuga dolorem
                cumque excepturi officia!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                molestiae natus odit iste autem possimus, molestias, illo
                aspernatur quos, quas vitae earum fuga enim. Provident id odit
                quisquam aliquam voluptates.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                quisquam quasi pariatur aliquid nam voluptatem praesentium iure
                facilis esse? Veritatis, natus nemo facere eum dignissimos ipsum
                eligendi corporis labore eaque!
              </p>
            </TypeIt>
          </div>

          <div className="w-full max-w-[600px] w-min-[570px] h-full hidden lg:block overflow-y-scroll scrollbar-hide">
            <ol className="flex flex-col">
              {workLinks.map(({ time, title, subtitle, text, tools }, i) => (
                <li
                  key={i}
                  className={`group w-full h-full rounded-xl flex px-5 py-3 hover:opacity-100 hover:shadow-inner hover:bg-slate-600/30 ${
                    hoveredItem !== null && hoveredItem !== i
                      ? "opacity-60"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <header className="h-full mr-5 min-w-32">
                    {time.map((year, index) => (
                      <span key={index} className="text-slate-300 text-xs">
                        {year}
                        {index !== time.length - 1 && " — "}
                      </span>
                    ))}
                  </header>
                  <div>
                    <h1 className="mb-1 text-slate-200 font-semibold leading-tight group-hover:text-green-300">
                      {title}
                    </h1>
                    <h1 className="mb-1 text-slate-400 font-semibold leading-snug">
                      {subtitle}
                    </h1>
                    <p className="mb-1 text-slate-300 text-sm font-medium">
                      {text}
                    </p>
                    <ul className="flex flex-row mt-3 space-x-1.5">
                      {tools.map((tools, index) => (
                        <li
                          key={index}
                          className="bg-green-800 rounded-full font-medium text-sm py-1 px-2 text-green-500"
                        >
                          <span className="">{tools}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <LinkBar />
        </div>
      </section>
      <Work />
    </main>
  );
}
