import React, { useState } from "react";
import { workLinks } from "../config";
import TypeIt from "typeit-react";
import LinkBar from "../components/LinkBar";
import TechStack from "../components/TechStack";

const About = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="about"
      className="snap-center h-dvh relative pt-14 bg-primaryAccent"
    >
      <div className="w-screen h-full flex flex-col lg:flex-row justify-center items-center lg:items-start md:pt-0 relative">
        <div className="lg:max-w-[550px] md:max-w-[650px] w-min-[400px] leading-relaxed inline md:py-3 px-5 md:mt-10">
          <h1 className="text-slate-100 mb-3">About Me</h1>
          <p className="text-slate-300 text-sm lg:text-base">
            <TypeIt options={{ speed: 0 }}>
              Back in 2019 when Corona wasn’t yet a concern I made my living as
              a translator, subtitler, copywriter, and transcriptionist. Covid
              came and went, and with the world changing, and my clients
              adjusting to the new market, I found it an opportune time to
              realign. With a bit of guidance and help from friends, I made the
              move, the decision and then the leap towards becoming a developer.
              Since 2023 I’ve been providing mediocre Frontend code containing
              excellent copywriting and exquisite flow while I still find my
              feet in the industry.
            </TypeIt>
            <br></br>
            <br></br>
            <TypeIt options={{ speed: 0 }} className="hidden md:block">
              My main interest these days is toying with CSS, finding ways to
              employ my new abilities to facilitate the superior deployment of
              my old ones, and improving reader and user experiences where I
              can, since - with all the advancements and developments to user
              content consumption, the internet is still primarily a written
              medium with well written words facilitating the exchange.
              <br></br>
              <br></br>
              In my free time, I confess to fully embracing my nerdy ways, I
              dominate at D&D, subjugate in games, both cardboard and computer
              and, I scoff to suggest, read poetry.
            </TypeIt>
          </p>
          <TechStack />
        </div>

        <div className="w-full md:max-w-[650px] lg:max-w-[650px] w-min-[570px] mb-14 md:mb-0 pt-3 mt-1 md:mt-10 overflow-y-scroll scrollbar-hide">
          <h1 className="text-slate-100 mt-1 ml-5">Experience</h1>
          <ol className="flex flex-col h-auto">
            {workLinks.map(({ time, title, subtitle, text, tools }, i) => (
              <li
                key={i}
                className={`group transition-all duration-150 ease-in w-full h-full rounded-xl flex px-5 py-3 hover:opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] -inset-x-4 -inset-y-4 hover:drop-shadow-lg hover:bg-secondary/50 ${
                  hoveredItem !== null && hoveredItem !== i ? "opacity-60" : ""
                }`}
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <header className="h-full mr-0 md:mr-5 min-w-28">
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
