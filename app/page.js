"use client";

import { useEffect } from "react";
import { useAppContext } from "./components/Context";
import TypeIt from "typeit-react";
import LinkBar from "./components/LinkBar";
import Landing from "./sections/Landing";
import About from "./sections/about";
import { workLinks } from "./config";
import Work from "./sections/Work";

export default function Home() {
  const { updateActiveSection } = useAppContext();

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
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Landing></Landing>
      <section
        id="about"
        className="snap-start bg-slate-400 flex justify-center items-center "
      >
        <div className="w-screen h-screen relative flex py-40 mx-10">
          <div className="bg-red-400 w-full md:w-1/2 h-full inline">
            <h1>About Me</h1>
            <TypeIt>
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
          <div className="w-1/2 h-full bg-slate-500 hidden md:block">
            <ol className="flex flex-col">
              {workLinks.map(({ time, title, subtitle, text, tools }, i) => (
                <li key={i} className="w-full h-full bg-blue-300 flex mb-5">
                  <header className="h-full mr-10 min-w-32">
                    {time.map((year, index) => (
                      <span key={index} className="text-slate-300 text-sm">
                        {year}
                        {index !== time.length - 1 && " — "}
                      </span>
                    ))}
                  </header>
                  <div>
                    <h1 className="mb-1 text-white font-semibold">{title}</h1>
                    <h1 className="mb-1 text-slate-500 font-semibold">
                      {subtitle}
                    </h1>
                    <p className="mb-1 text-sm">{text}</p>
                    <ul className="flex flex-row space-x-3">
                      {tools.map((tools, index) => (
                        <li key={index} className="bg-green-800 rounded-full font-medium py-1 px-3 text-green-500">
                          <span className="">{tools}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="absolute bottom-0 mb-40 flex justify-center md:justify-start w-full">
            <LinkBar></LinkBar>
          </div>
        </div>
      </section>
      {/* <About></About> */}
      <Work></Work>
    </main>
  );
}
