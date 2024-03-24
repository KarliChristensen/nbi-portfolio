import React, { useState, useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { svgElements } from "../config";
import { useAppContext } from "../components/Context";

const Landing = () => {
  const [offset, setOffset] = useState(0);
  const [animationRunning, setAnimationRunning] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [svgObject, setSvgObject] = useState({});
  const { activeSection } = useAppContext();

  const handleMouseOverWrangler = (event) => {
    const wranglerSpan = event.target;
    const randomIndex = Math.floor(Math.random() * svgElements.length);
    setSvgObject(svgElements[randomIndex]);
    wranglerSpan.style.color = "rgb(22 101 52)";
    wranglerSpan.style.webkitTextStroke = "0px rgb(22 101 52)";
    if (!animationRunning && !animating) {
      setAnimationRunning(true); // Set animationRunning to true to trigger animation again
      setAnimating(true);
    }
  };

  const handleMouseOverSlayer = (event) => {
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "rgb(22 101 52)";
    wranglerSpan.style.webkitTextStroke = "0px rgb(22 101 52)";
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
            setAnimationRunning(false); // Set animationRunning to false when animation completes
            setAnimating(false);
            return 0;
          } else {
            return prevOffset + 1;
          }
        });
      }, 35);
    }
    return () => clearInterval(intervalId);
  }, [animationRunning]);

  return (
    <section id="home" className="h-screen w-screen snap-start flex relative">
      <div className={activeSection === "home" ? "block" : "hidden -z-10"}>
        <svg
          className="fixed right-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svgObject.viewBoxConfig}
        >
          <path
            className="fill-transparent" //fill-transparent
            id="text-curvature-1"
            d={svgObject.svgPath}
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
              {svgObject.textString}
            </motion.textPath>
          </motion.text>
        </svg>
      </div>
      <div className="w-1/5 md:w-1/4 hidden md:block h-screen bg-pink-100 z-10"></div>
      <div className="w-screen md:w-full h-screen bg-slate-200 flex items-center">
        <div className="mx-10 md:w-1/2 text-white z-10">
          <div className="flex">
            <span className="text-1xl rotate-[345deg]">{`Hi, I'm Karli`}</span>
          </div>
          <br></br>
          <TypeIt
            className="text-2xl md:text-5xl lg:text-6xl text-green-800 -w-32 font-roboto font-extrabold text-nowrap"
            options={{
              speed: 40, //50
              waitUntilVisible: true,
              lifeLike: true,
              afterComplete: async (instance) => {
                if (!instance._complete) {
                  const wranglerSpan = document.getElementById("wrangler");
                  const slayerSpan = document.getElementById("slayer");
                  if (wranglerSpan) {
                    wranglerSpan.addEventListener(
                      "mouseover",
                      handleMouseOverWrangler
                    );
                    wranglerSpan.addEventListener("mouseout", handleMouseOut);
                  }
                  if (slayerSpan) {
                    slayerSpan.addEventListener(
                      "mouseover",
                      handleMouseOverSlayer
                    );
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
