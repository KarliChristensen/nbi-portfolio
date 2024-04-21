import React from "react";
import { useEffect } from "react";
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

const Work = () => {
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

  return (
    <section
      id="projects"
      className="h-full flex flex-col py-40 space-y-32 antialiased snap-start scroll-smooth overflow-y-scroll overflow-x-hidden bg-white scrollbar-hide"
    >
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
        github={"https://github.com/KarliChristensen/monster-book"}
        deployment={"https://monster-taupe.vercel.app/"}
      />
      <ArticleAltOne
        imageOne={Padle}
        imageTwo={Padle2}
        title={
          <h2>
            Padle App - The Padle <span>League</span> Manager
          </h2>
        }
        text={
          "At the end of the Ironhack boot camp, students are tasked with completing a fully functional CRUD project, building the front and backend separately before deploying these inside of a 3-month time-limit."
        }
        github={"https://github.com/KarliChristensen/padel-app-client"}
        deployment={"https://adorable-concha-1ef0b2.netlify.app/"}
      />
      <ArticleAltTwo
        imageOne={SecondS}
        imageTwo={SecondS2}
        title={
          <h2>
            Second Serving - Giving <span>Food</span> A Second Home
          </h2>
        }
        text={
          "A full-stack CRUD project made as part of a 3-man group for Ironhack. Features a user messaging service, cart, sales and purchase functionality."
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
        github={"https://github.com/KarliChristensen/SPPortfolio"}
        deployment={"https://master--heartfelt-cendol-ac77bd.netlify.app/"}
      />
    </section>
  );
};

export default Work;
