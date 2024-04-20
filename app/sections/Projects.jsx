import React from "react";
import { useEffect } from "react";
import { projectLinks } from "../config";
import Monster1 from "../../public/images/Monster.png";
import Monster2 from "../../public/images/Monster2.png";
import Article from "../components/Article";
import ArticleAltOne from "../components/ArticleAltOne";
import ArticleAltTwo from "../components/ArticleAltTwo";

const Work = () => {
  useEffect(() => {
    const article = document.querySelectorAll("article");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
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
      className="h-full flex flex-col py-40 space-y-44 antialiased snap-start scroll-smooth overflow-y-scroll overflow-x-hidden bg-white scrollbar-hide"
    >
      <Article
        imageOne={Monster1}
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
      <ArticleAltOne imageOne={Monster2} imageTwo={Monster2} />
      <ArticleAltTwo imageOne={Monster2} imageTwo={Monster2} />
    </section>
  );
};

export default Work;
