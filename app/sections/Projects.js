import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Monster from "../../public/images/Monster.png";
import Monster2 from "../../public/images/Monster2.png";
import Padle from "../../public/images/PadleClient.png";
import Padle2 from "../../public/images/PadleClientSplash.png";
import SecondS from "../../public/images/SecondServing.png";
import SecondS2 from "../../public/images/SecondServingSplash.png";
import Version2 from "../../public/images/Portfolio V2.png";
import Version22 from "../../public/images/Portfolio V22.png";
import Article from "../components/Article";
import ArticleAltOne from "../components/ArticleAltOne";
import ArticleAltTwo from "../components/ArticleAltTwo";

const Projects = ({
  navigateToSection,
  sectionStatus,
  isTransitioning,
  currentSection,
  ...restProps
}) => {
  useEffect(() => {
    const article = document.querySelectorAll("article");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elem = entry.target.querySelectorAll(
            ".articleDiv, .articleSecondaryDiv"
          );
          if (elem.length > 0) {
            elem[0].classList.toggle("show");
            elem[1].classList.toggle("show");
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    article.forEach((elem) => {
      observer.observe(elem);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLandingClick = () => {
    if (navigateToSection) {
      navigateToSection("landing");
    }
  };

  const handleAboutClick = () => {
    if (navigateToSection) {
      navigateToSection("about");
    }
  };

  return (
    <section
      id="projects"
      className="h-full flex flex-col py-40 space-y-32 antialiased snap-start scroll-smooth overflow-y-scroll overflow-x-hidden bg-white scrollbar-hide relative"
      {...restProps}
    >
      <Navbar
        currentSection="projects"
        className="sticky top-0 w-full z-50"
        navigateToSection={navigateToSection}
        sectionStatus={sectionStatus}
        isTransitioning={isTransitioning}
      />

      <Article
        imageOne={Monster}
        imageTwo={Monster2}
        title={
          <h2>
            A very small <span>Monster</span>
          </h2>
        }
        text={
          "A site I put together for the launch of a children's book I co-wrote with my wife on the subject of becoming a parent, and not knowing what ever loving hell you're doing."
        }
        shortText={"A site for a children's I co-wrote with my wife."}
        github={"https://github.com/KarliChristensen/monster-book"}
        deployment={"https://monster-taupe.vercel.app/"}
      />
      <ArticleAltOne
        imageOne={Padle}
        imageTwo={Padle2}
        title={
          <h2>
            Padle <span>App</span>
          </h2>
        }
        text={
          "At the end of the Ironhack boot camp, students are tasked with completing a fully functional CRUD project, building the front and backend separately before deploying these inside of a 3-month time-limit."
        }
        shortText={
          "At the end of the Ironhack boot camp, students are tasked with completing a fully functional CRUD project, building the front and backend separately."
        }
        github={"https://github.com/KarliChristensen/padel-app-client"}
        deployment={"https://adorable-concha-1ef0b2.netlify.app/"}
      />
      <ArticleAltTwo
        imageOne={SecondS}
        imageTwo={SecondS2}
        title={
          <h2>
            Second <span>Serving</span>
          </h2>
        }
        text={
          "A full-stack CRUD project made as part of a 3-man group for Ironhack. Features a user messaging service, cart, sales and purchase functionality."
        }
        shortText={
          "A full-stack CRUD project made as part of a 3-man group for Ironhack."
        }
        github={"https://github.com/KarliChristensen/Second-Serving"}
        deployment={"https://bewildered-wig-mite.cyclic.app/"}
      />
      <Article
        imageOne={Version2}
        imageTwo={Version22}
        title={
          <h2>
            Portfolio <span>V2</span>
          </h2>
        }
        text={
          "An expanded series of projects, this being the second version - Built after setting myself a 48-hour time limit, to produce something viable and reproducible - The one you're on, is the 5th iteration, though not much of the original design remains."
        }
        shortText={"v2 of a series, this one is v5."}
        github={"https://github.com/KarliChristensen/SPPortfolio"}
        deployment={"https://master--heartfelt-cendol-ac77bd.netlify.app/"}
      />
    </section>
  );
};

export default Projects;
