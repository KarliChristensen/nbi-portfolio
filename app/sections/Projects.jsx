import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import Monster1 from "../../public/images/Monster.png";
import Monster2 from "../../public/images/Monster2.png";
import Article from "../components/Article";

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
    <section id="projects" className="h-full flex flex-col pt-80 space-y-44 antialiased snap-start scroll-smooth overflow-y-scroll overflow-x-hidden bg-white">
      <Article
        imageOne={Monster1}
        imageTwo={Monster2}
        Title={"Monster"}
        Subtitle={"Jensen & Dalgaard"}
      />
      <Article imageOne={Monster1} imageTwo={Monster2} Title={"Monster"} />
      <Article imageOne={Monster1} imageTwo={Monster2} Title={"Monster"} />
      <Article imageOne={Monster1} imageTwo={Monster2} Title={"Monster"} />
      <Article imageOne={Monster1} imageTwo={Monster2} Title={"Monster"} />
      <Article imageOne={Monster1} imageTwo={Monster2} Title={"Monster"} />
    </section>
  );
};

export default Work;
