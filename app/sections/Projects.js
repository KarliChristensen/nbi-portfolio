import React from "react";
import { useEffect, useRef } from "react";
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const article = document.querySelectorAll("article");

    const observerOptions = {
      root: sectionRef.current, // Use the projects section as the root
      rootMargin: "0px",
      threshold: 0.3, // Reduced threshold for better mobile experience
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elem = entry.target.querySelectorAll(
            ".articleDiv, .articleSecondaryDiv"
          );
          if (elem.length > 0) {
            // Add a small delay to make animations feel more natural
            setTimeout(() => {
              elem[0]?.classList.add("show");
              elem[1]?.classList.add("show");
            }, 100);
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
      ref={sectionRef}
      id="projects"
      className={`
        h-full flex flex-col space-y-32 antialiased 
        scroll-smooth overflow-x-hidden bg-white 
        scrollbar-hide relative
        ${sectionStatus === "active" ? "overflow-y-auto" : "overflow-y-hidden"}
      `}
      style={{
        // Ensure the section takes full height
        minHeight: "100vh",
      }}
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
          "An expanding series of projects, the hone shown being the second version - Built after setting myself a 48-hour time limit, to produce something viable and reproducible - The one you're on, is the 5th iteration, though not much of the original design remains."
        }
        shortText={"v2 of a series, the one you're on, is v5."}
        github={"https://github.com/KarliChristensen/SPPortfolio"}
        deployment={"https://master--heartfelt-cendol-ac77bd.netlify.app/"}
      />
      <footer className="h-full py-6 w-full flex justify-between items-center bg-blue-400/40 px-2 sm:px-10">
        <p className="text-white text-sm">
          © 2025 Karli Christensen. All rights reserved.
        </p>
        <div className="hidden sm:flex space-x-2">
          <a
            href="https://github.com/KarliChristensen"
            aria-label="Karli Christensen's github profile"
          >
            <svg
              className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={35}
              height={35}
              strokeWidth="1.5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="tel:+4593870055"
            aria-label="Karli Christensen's Phone Number"
          >
            <svg
              className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={35}
              height={35}
              strokeWidth="1.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Projects;
