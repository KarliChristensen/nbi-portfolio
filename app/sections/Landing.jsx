import React, { useState, useEffect } from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { svgElements } from "../config";
import { useAppContext } from "../components/Context";
import Squiggly from "../../public/graphics/Squiggly.png";
import Straight from "../../public/graphics/Straight.png";

const Landing = () => {
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [svgObject, setSvgObject] = useState({});
  const { activeSection } = useAppContext();
  3;

  const handleMouseOverWrangler = (event) => {
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "black";
    wranglerSpan.style.webkitTextStroke = "0px rgb(255 255 255)";
    wranglerSpan.style.transition = `all .3s ease`;
    if (!animating) {
      setAnimating(true);
    }
  };

  const handleMouseOverSlayer = () => {
    const slayerSpans = document.querySelectorAll(".slayer");
    slayerSpans.forEach((span, index) => {
      span.style.color = "black";
      span.style.transition = `all .3s ease`;
      const transformStyles = [
        "rotate(5deg) translate(-20%, 15%)",
        "rotate(-8deg) translate(-10%, -20%)",
        "rotate(15deg) translate(10%, -15%)",
        "rotate(-10deg) translate(0%, 20%)",
        "rotate(-9deg) translate(20%, 30%)",
        "rotate(17deg) translate(40%, -10%)",
      ];
      span.style.transform = transformStyles[index % transformStyles.length];
    });
  };

  const handleMouseOut = (event) => {
    const wranglerSpan = event.target;
    const slayerSpans = document.querySelectorAll(".slayer");
    wranglerSpan.style.color = "transparent";
    wranglerSpan.classList.remove("hover-effect");
    wranglerSpan.style.webkitTextStroke = "2px black";
    slayerSpans.forEach((span) => {
      span.style.color = "transparent";
      span.style.transform = "none";
    });
  };

  useEffect(() => {
    let intervalId;
    if (animating) {
      const randomIndex = Math.floor(Math.random() * svgElements.length);
      setSvgObject(svgElements[randomIndex]);
      intervalId = setInterval(() => {
        setOffset((prevOffset) => {
          if (prevOffset >= 100) {
            clearInterval(intervalId);
            setAnimating(false);
            setSvgObject({});
            return 0;
          } else {
            return prevOffset + 1;
          }
        });
      }, 35);
    }
    return () => clearInterval(intervalId);
  }, [animating]);

  return (
    <section id="home" className="h-dvh w-screen snap-start flex relative">
      <div className="w-24 md:w-1/4 min-w-[350px] hidden lg:block h-screen bg-newBlue"></div>
      <div className="w-screen h-screen flex flex-col md:flex-row justify-center md:justify-start items-center text-center md:text-start bg-newBeige">
        {" "}
        <div className={`${activeSection === "home" ? "block" : "hidden"}`}>
{/*           <svg
            className="fixed bottom-0 left-0 h-screen w-screen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={svgObject.viewBoxConfig}
          >
            <path
              className="fill-transparent fixed left-0 "
              id="text-curvature-1"
              d={svgObject.svgPath}
            ></path>
            <motion.text className="text-3xl font-extrabold z-20">
              <motion.textPath
                href="#text-curvature-1"
                startOffset={offset + "%"}
                onAnimationComplete={() => {
                  setAnimating(false);
                  setSvgObject({});
                }}
                transition={{
                  duration: 0.5,
                  repeat: 0,
                }}
                style={{ fill: "#f2c064" }} // Change the color here
              >
                {svgObject.textString}
              </motion.textPath>
            </motion.text>
          </svg> */}
        </div>
        <div className="mx-5 md:w-1/2 min-h-[255px] sm:min-h-[400px] md:min-h-[450] lg:min-h-[500] z-10">
          <TypeIt
            className="clampDefault -w-32 font-roboto font-extrabold"
            options={{
              speed: 50, //50
              waitUntilVisible: true,
              lifeLike: true,
              afterComplete: async (instance) => {
                if (!instance._complete) {
                  const wranglerSpan = document.getElementById("wrangler");
                  const slayerSpans = document.getElementsByClassName("slayer");
                  if (wranglerSpan) {
                    wranglerSpan.addEventListener(
                      "mouseover",
                      handleMouseOverWrangler
                    );
                    wranglerSpan.addEventListener("mouseout", handleMouseOut);
                  }

                  if (slayerSpans) {
                    Array.from(slayerSpans).forEach((slayerSpan) => {
                      slayerSpan.addEventListener(
                        "mouseover",
                        handleMouseOverSlayer
                      );
                      slayerSpan.addEventListener("mouseout", handleMouseOut);
                    });
                  }
                }
                setTimeout(function () {
                  instance.destroy();
                }, 1000);
              },
            }}
            getAfterInit={(instance) => {
              instance
                .type("Hi,  I'm Karli!")
                .pause(1500)
                .delete(16)
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
                .break()
                .type(
                  `<span style="color: #4684e9;"><strong><em>extraordinaire</em></strong></span>`
                )
                .break()
                .break()
                .move(null, { to: "END" })
                .type(
                  `<span style="white-space: nowrap;"><span id='wrangler' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0);'>Wrangler</span> of</span`
                )
                .break()
                .type(
                  "<span><span style='white-space: nowrap; color: #4684e9;'>JS & HTML,</span><br><span style='white-space: nowrap;'><span class='slayer' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0); display: inline-block;'>S</span><span class='slayer' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0); display: inline-block;'>l</span><span class='slayer' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0); display: inline-block;'>a</span><span class='slayer' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0); display: inline-block;'>y</span><span class='slayer' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0); display: inline-block;'>e</span><span class='slayer' style='-webkit-text-stroke: 2px black; color: rgba(0, 0, 0, 0); display: inline-block;'>r</span> of<span style='color: #4684e9;'> CSS</span></span>",
                  { speed: 50 }
                );
              return instance;
            }}
          />
        </div>
        <div className="scroll_indicator flex flex-col absolute bottom-0 md:hidden">
          <p className="text-end bottom-0 mb-8 text-white font-roboto font-extrabold">
            Scroll
          </p>
          <span className="bg-white w-[2px] h-[59px] self-center"></span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
