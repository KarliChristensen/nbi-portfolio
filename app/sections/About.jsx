import React, { useState } from "react";
import { workLinks } from "../config";
import TypeIt from "typeit-react";
import LinkBar from "../components/LinkBar";

const About = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="about" className="snap-start bg-primaryAccent">
      <div className="w-screen h-auto md:h-screen relative flex flex-col lg:flex-row justify-center items-center py-14 md:py-40">
        <div className="w-full lg:max-w-[550px] md:max-w-[650px] w-min-[450px] md:w-full lg:w-4/5 leading-relaxed inline px-5 md:px-10 md:mt-5 mb-10">
          <h1 className="text-slate-100 mb-3">About Me</h1>
          <p className="text-slate-300 text-sm">
            <TypeIt options={{ speed: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              rerum libero. Ipsa et ex nesciunt ab alias ipsum odio accusamus
              quo, aspernatur reiciendis, voluptatibus suscipit, fuga dolorem
              cumque excepturi officia! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eum molestiae natus odit iste autem possimus,
              molestias, illo aspernatur quos, quas vitae earum fuga enim.
              Provident id odit quisquam aliquam voluptates. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Hic quisquam quasi
              pariatur aliquid nam voluptatem praesentium iure facilis esse?
              Veritatis, natus nemo facere eum dignissimos ipsum eligendi
              corporis labore eaque!
            </TypeIt>
          </p>
        </div>

        <div className="w-full max-w-[600px] w-min-[570px] h-full lg:block overflow-y-scroll scrollbar-hide">
        <h1 className="text-slate-100 mb-3 ml-5 md:hidden">Experience</h1>
          <ol className="flex flex-col">
            {workLinks.map(({ time, title, subtitle, text, tools }, i) => (
              <li
                key={i}
                className={`group transition-all duration-150 ease-in w-full h-full rounded-xl flex px-5 py-3 hover:opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] -inset-x-4 -inset-y-4 hover:drop-shadow-lg hover:bg-secondary/50 ${
                  hoveredItem !== null && hoveredItem !== i ? "opacity-60" : ""
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
                  <h1 className="mb-1 text-slate-100 font-semibold leading-tight group-hover:text-green-300">
                    {title}
                  </h1>
                  <h1 className="mb-1 text-slate-500 font-semibold leading-snug">
                    {subtitle}
                  </h1>
                  <p className="mb-1 text-slate-300 text-sm font-medium leading-tight">
                    {text}
                  </p>
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
              </li>
            ))}
          </ol>
        </div>
        <LinkBar />
      </div>
    </section>
  );
};

export default About;
