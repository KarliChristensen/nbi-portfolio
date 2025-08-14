import React, { useState } from "react";
import TypeIt from "typeit-react";
import Navbar from "../components/Navbar";
import { useAppContext } from "../components/Context";

const Landing = ({
  navigateToSection,
  sectionStatus,
  isTransitioning,
  currentSection,
  ...restProps
}) => {
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { activeSection } = useAppContext();

  const getSectionForStyling = () => {
    if (currentSection) {
      const sectionMap = {
        landing: "home",
        about: "about",
        projects: "projects",
      };
      return sectionMap[currentSection] || currentSection;
    }
    return contextActiveSection;
  };

  const currentSectionForStyling = getSectionForStyling();

  const handleMouseOverWrangler = (event) => {
    const wranglerSpan = event.target;
    wranglerSpan.style.color = "white";
    wranglerSpan.style.webkitTextStroke = "0px rgb(255 255 255)";
    wranglerSpan.style.transition = `all .3s ease`;
    if (!animating) {
      setAnimating(true);
    }
  };

  const handleMouseOverSlayer = () => {
    const slayerSpans = document.querySelectorAll(".slayer");
    slayerSpans.forEach((span, index) => {
      span.style.color = "white";
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
    wranglerSpan.style.webkitTextStroke = "2px white";
    slayerSpans.forEach((span) => {
      span.style.color = "transparent";
      span.style.transform = "none";
    });
  };

  // Handle navigation
  const handleAboutClick = () => {
    if (navigateToSection) {
      navigateToSection("about");
    }
  };

  const handleProjectsClick = () => {
    if (navigateToSection) {
      navigateToSection("projects");
    }
  };

  return (
    <section
      id="home"
      className="h-dvh w-screen snap-start flex relative"
      {...restProps}
    >
      <Navbar
        currentSection="landing"
        navigateToSection={navigateToSection}
        sectionStatus={sectionStatus}
        isTransitioning={isTransitioning}
      />
      <div className="animateBg"></div>
      <div className="animateBg animateBg2"></div>
      <div className="animateBg animateBg3"></div>
      <div className="w-full h-full flex flex-col justify-center items-center text-center">
        <div className="text-center mx-5 md:w-1/2 min-h-[255px] sm:min-h-[400px] md:min-h-[450] lg:min-h-[500] z-10">
          <TypeIt
            className="clampDefault -w-32 font-roboto font-extrabold text-white"
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
                .type(`<span><strong><em>extraordinaire</em></strong></span>`)
                .break()
                .break()
                .move(null, { to: "END" })
                .type(
                  `<span style="white-space: nowrap;"><span id='wrangler' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0);'>Wrangler</span> of</span`
                )
                .break()
                .type(
                  "<span><span style='white-space: nowrap'>JS & HTML,</span><br><span style='white-space: nowrap;'><span class='slayer' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0); display: inline-block;'>S</span><span class='slayer' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0); display: inline-block;'>l</span><span class='slayer' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0); display: inline-block;'>a</span><span class='slayer' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0); display: inline-block;'>y</span><span class='slayer' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0); display: inline-block;'>e</span><span class='slayer' style='-webkit-text-stroke: 2px white; color: rgba(0, 0, 0, 0); display: inline-block;'>r</span> of<span> CSS</span></span>",
                  { speed: 50 }
                );
              return instance;
            }}
          />
        </div>
      </div>

      <div className="md:hidden scroll_indicator flex flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <button
          className={
            "navbarLink mb-6 text-white raleway font-extrabold text-xl"
          }
          onClick={handleProjectsClick}
          aria-label="Navigate to Projects"
        >
          Projects
        </button>
        <span className="bg-white w-[2px] h-[59px] self-center"></span>
      </div>

      <div className="md:hidden scroll_indicator flex absolute right-0 top-3/4 transform -translate-y-1/2">
        <button
          className="navbarLink mr-6 text-white raleway font-extrabold text-xl"
          onClick={handleAboutClick}
          aria-label="Navigate to About"
        >
          About
        </button>
        <span className="bg-white w-[50px] h-[2px] self-center"></span>
      </div>
      <div className="hidden md:flex scroll_indicator flex-col absolute transform bottom-0 left-1/2">
        <p
          className="text-center mb-6 text-white raleway font-extrabold text-xl"
          aria-label="Navigate to Projects"
        >
          Projects
        </p>
        <span className="bg-white w-[2px] h-[59px] self-center"></span>
      </div>
    </section>
  );
};

export default Landing;
