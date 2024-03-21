import React, { useState, useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";

const Landing = () => {
  const [offset, setOffset] = useState(0);

  const handleMouseOver = (event) => {
    console.log("Mouse over span");
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "rgb(22 101 52)";
    wranglerSpan.style.webkitTextStroke = "0px rgb(22 101 52)"; 
  };

  const handleMouseOut = (event) => {
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "transparent"; // Reset color
    wranglerSpan.classList.remove("hover-effect");
    wranglerSpan.style.webkitTextStroke = "2px rgb(22 101 52)"; 
  };

  return (
    <section id="home" className="h-screen w-screen snap-start flex">
      <svg
        className="w-screen h-screen absolute -z-10"
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 914.1 841.4"
      >
        <path
          id="text-curvature-1"
          className="fill-transparent"
          d="M12.92,901.78c55.41-52.18,90.11-122.33,121.5-190.56,17.06-37.08,32.74-74.83,46.46-113.27s25.65-76.32,33.88-115.58c7.94-37.87,11.78-77.14,4.77-115.47-5.43-29.69-19.66-73.98-55.58-77.29-17.51-1.61-32.54,10.36-42.67,23.39-10.32,13.28-17.88,28.74-22.94,44.74-10.37,32.78-9.83,68.31-2.89,101.71,6.81,32.79,19.63,66.53,40.59,92.97,10.27,12.96,23.23,23.53,38.7,29.61,16.16,6.35,34.23,6.26,50.88,1.94,34.2-8.88,62.55-33.57,84.79-60.06,22.09-26.31,39.05-56.23,51.97-87.99,13.05-32.08,21.71-65.86,27.17-100.02,5.87-36.74,6.97-73.83,10.34-110.83,1.76-19.3,4.36-38.56,9.17-57.36,4.35-17.01,10.02-34.49,20.58-48.74,8.19-11.06,21.61-23.16,36.52-20.9,16.58,2.52,26.9,21.59,34.51,34.61,17.91,30.62,32.37,66.12,65.16,84.02,15.06,8.23,32.23,10.83,48.96,6.69s32.77-14.99,45.54-27.24c45.46-43.59,64.33-106.66,105.7-153.38,9.68-10.93,20.51-20.71,32.81-28.6,8.1-5.19.59-18.18-7.57-12.95-52.19,33.47-75.71,93.04-108.41,142.95-16.32,24.9-37.32,53.31-66.72,63.19-15.18,5.1-30.65,3.45-44.47-4.6s-24.62-20.48-33.2-33.81c-9.95-15.46-17.7-32.2-27.25-47.9-8.76-14.39-19.33-30.09-35.89-36.03-34.17-12.25-61.21,24.58-72.03,51.74-13.87,34.83-17.49,72.74-20.1,109.82-2.46,34.98-4.68,69.81-11.48,104.29-12.73,64.57-38.21,128.57-84.57,176.49-22.19,22.94-52.02,45-85.43,44.72s-55.39-26.18-69.53-53.3c-29-55.61-40.02-130.48-6.06-186.4,7.19-11.84,18.23-26.89,33.42-27.85,14.5-.92,25.02,11.59,31.43,23.11,8.46,15.19,12.78,33.13,15.26,50.23,2.62,18.1,2.55,36.63,1.02,54.83-3.2,38.17-13.33,75.55-24.5,112.06-11.51,37.61-25.07,74.57-40.17,110.87s-31.08,70.62-48.63,104.92c-16.33,31.91-34.26,63.31-56.29,91.68-10.77,13.87-22.55,26.93-35.33,38.96-7.04,6.63,3.58,17.22,10.61,10.61h0Z"
        />
        <motion.text className="text-3xl text-black">
          <motion.textPath
            href="#text-curvature-1"
            startOffset={offset + "%"}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Curabitur mattis efficitur velit
          </motion.textPath>
        </motion.text>
      </svg>
      <div className="w-1/5 md:w-1/4 hidden md:block h-screen bg-pink-100 z-10"></div>
      <div className="w-screen md:w-full h-screen bg-slate-200 flex items-center">
        <div className="mx-10 md:w-1/2 text-white">
          <div className="flex">
            <span className="text-1xl rotate-[345deg]">{`Hi, I'm Karli`}</span>
          </div>
          <br></br>
          <TypeIt
            className="text-4xl md:text-5xl lg:text-6xl text-green-800 -w-32 font-roboto font-extrabold text-nowrap"
            options={{
              speed: 30, //50
              waitUntilVisible: true,
              lifeLike: true,
              afterComplete: async (instance) => {
                if (!instance._complete) {
                  const wranglerSpan = document.getElementById("wrangler");
                  const slayerSpan = document.getElementById("slayer");
                  if (wranglerSpan) {
                    wranglerSpan.addEventListener("mouseover", handleMouseOver);
                    wranglerSpan.addEventListener("mouseout", handleMouseOut);
                  }
                  if (slayerSpan) {
                    slayerSpan.addEventListener("mouseover", handleMouseOver);
                    slayerSpan.addEventListener("mouseout", handleMouseOut);
                  }
                }
              },
            }}
            getAfterInit={(instance) => {
              instance
                .type("I'm a translator.")
                .pause(750)
                .delete(11, { speed: 500 })
                .pause(500)
                .type(" developer.", { speed: 500 })
                .pause(500)
                .move(-10)
                .delete(7)
                .pause(200)
                .type(`<span>Frontend</span> `, { speed: 100 })
                .move(null, { to: "END" })
                .delete(1)
                .type(`<br><span> extraordinaire</span><br><br>`)
                .move(null, { to: "END" })
                .type(
                  `<span id='wrangler' style='-webkit-text-stroke: 2px rgb(22 101 52); color: rgba(0, 0, 0, 0); font-outline-1;'>Wrangler</span> of <br> JS & HTML <br> <span id='slayer' style='-webkit-text-stroke: 2px rgb(22 101 52); color: rgba(0, 0, 0, 0); font-outline-1;'>Slayer</span> of CSS</span>`,
                  { speed: 20 }
                );
              return instance;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
