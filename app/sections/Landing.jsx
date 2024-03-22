import React, { useState, useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";

const Landing = () => {
  const [offset, setOffset] = useState(0);
  const [animationRunning, setAnimationRunning] = useState(false);

  const handleMouseOver = (event) => {
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "rgb(22 101 52)";
    wranglerSpan.style.webkitTextStroke = "0px rgb(22 101 52)";
    if (!animationRunning) {
      setAnimationRunning(true);
    }
  };

  const handleMouseOut = (event) => {
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "transparent";
    wranglerSpan.classList.remove("hover-effect");
    wranglerSpan.style.webkitTextStroke = "2px rgb(22 101 52)";
  };

  useEffect(() => {
    let intervalId;
    if (animationRunning) {
      intervalId = setInterval(() => {
        setOffset((prevOffset) => {
          if (prevOffset >= 100) {
            setAnimationRunning(false);
            return prevOffset;
          } else {
            return prevOffset + 1;
          }
        });
      }, 35);
      // Update timer for animation, (Sets speed)
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [animationRunning]);

  return (
    <section id="home" className="h-screen w-screen snap-start flex relative">
      <div className="hidden">
        <svg
          className="fill-black fixed right-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 914.1 841.4"
        >
          <path
            id="text-curvature-1"
            d="M34.73 968.41c-18.31-58.79-23.82-121-16.86-182.15 3.44-30.3 10.17-60.28 19.76-89.22 9.28-28.01 21-56.23 37.23-80.99 14.84-22.64 36.2-41.85 64.77-41.39 31.25.5 59.26 20.44 84.27 37.06 25.15 16.7 54.37 33.47 85.52 33.14 30.52-.33 53.79-19.33 69.5-44.12 16.83-26.56 27.49-57.41 35.93-87.52s13.99-63.53 21.64-95.18c2.97-12.28 7.98-25.62 21.77-28.52 12.84-2.71 26.25 3.86 36.45 11.04 12.11 8.52 22.73 19.18 35.87 26.21 12.29 6.58 26.24 9.52 40.14 8.41 28.01-2.22 53.6-17.61 70.96-39.35 18.7-23.41 29.14-51.84 37.24-80.37 8.77-30.87 15.24-62.99 30.47-91.54 2.61-4.89 5.8-11.55 11.22-13.91 6.3-2.74 13.45 3.19 18.34 6.46 13.09 8.75 27.04 16.48 42.13 21.18 26 8.09 53.84 4.54 76.05-11.47 20.45-14.75 34.99-36.24 45.99-58.62 21.71-44.18 28.87-98.59 65.27-134.38 8.01-7.88 17.43-14.3 27.95-18.33 3.78-1.45 6.39-5.05 5.24-9.23-.99-3.62-5.42-6.7-9.23-5.24-50.05 19.22-69.9 73.3-86.2 119.94-8.37 23.96-18 47.59-32.9 68.34-13.41 18.66-32.24 34.68-55.69 37.88-14.96 2.04-30.32-1.57-43.96-7.65-7.19-3.21-14.09-7.05-20.75-11.24-6.48-4.08-12.56-8.87-19.81-11.57-15.49-5.76-27.72 4.52-35 17.36-7.96 14.03-13.76 29.33-18.63 44.67-17.06 53.76-24.51 126.04-81.25 154.18-11.97 5.93-25.44 8.98-38.8 7.88s-25.87-8.28-36.69-16.72c-11.71-9.13-22.73-19.08-36.64-24.77-13.11-5.37-28.56-6.92-41.43-.01s-18.86 20.6-22.23 33.94c-3.89 15.42-6.54 31.19-9.89 46.73-7.01 32.48-15.06 64.91-27.54 95.78-10.33 25.56-24.21 55.32-49.91 68.61-27.88 14.41-60.2.97-85.08-13.42-27.61-15.97-52.5-36.71-83.47-46.21-14.82-4.54-30.66-5.93-45.85-2.4-13.77 3.2-26.15 10.59-36.55 20.02-21.08 19.13-34.4 46-45.64 71.69-12.55 28.67-22.2 58.54-28.6 89.18-12.75 61.08-13.18 124.54-.87 185.73 3 14.88 6.79 29.59 11.3 44.09 2.86 9.19 17.35 5.27 14.46-3.99Z"
          ></path>
          <motion.text className="text-3xl text-black">
            <motion.textPath
              href="#text-curvature-1"
              startOffset={offset + "%"}
              transition={{
                duration: 1,
                repeat: 0,
              }}
            >
              Curabitur mattis efficitur velit
            </motion.textPath>
          </motion.text>
        </svg>
      </div>
      <div className="w-1/5 md:w-1/4 hidden md:block h-screen bg-pink-100"></div>
      <div className="w-screen md:w-full h-screen bg-slate-200 flex items-center">
        <div className="mx-10 md:w-1/2 text-white z-10">
          <div className="flex">
            <span className="text-1xl rotate-[345deg]">{`Hi, I'm Karli`}</span>
          </div>
          <br></br>
          <TypeIt
            className="text-4xl md:text-5xl lg:text-6xl text-green-800 -w-32 font-roboto font-extrabold text-nowrap"
            options={{
              speed: 0, //50
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
