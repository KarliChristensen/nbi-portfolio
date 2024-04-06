/* Icon images */

import JSIcon from "../public/icons/file-type-js-official.256x256.png";
import HTMLIcon from "../public/icons/file-type-html.226x256.png";
import CSSIcon from "../public/icons/file-type-css.226x256.png";
import NodeJS from "../public/icons/node-js.227x256.png";
import React from "../public/icons/react.256x228.png";
import Mongo from "../public/icons/mongodb-original.116x256.png";
import Tailwind from "../public/icons/tailwind-css.256x154.png";
import Git from "../public/icons/git.256x256.png";

/* Project images */

import Gogoes from "../public/images/Gogos.png";
import Padle from "../public/images/PadleClient.png";
import SecondServing from "../public/images/SecondServing.png";
import PortfolioV2 from "../public/images/Portfolio V2.png";

module.exports = {
  email: "karlichristensen@post.com",

  svgElements: [
    /* Simple Wavbe BOT */
    {
      svgPath:
        "M-153.183 586.638s99.561 156.234 320.126 116.41c220.565-39.824 257.326-94.966 257.326-94.966S551.4 459.507 675.468 620.336c124.068 160.829 211.375-7.659 211.375-7.659",
      viewBoxConfig: "-136.41 -173.477 998.178 973.433",
      textString: "WEEEEEEEEEEEEE!!!!",
    },
    /* Loop 1 TOP */ {
      svgPath:
        "M-142.461 18.377S-39.837-145.515 68.914-73.525s220.565 44.419 264.985 1.531c44.42-42.888 171.55-56.673 272.643 58.205 101.093 114.878 220.565 209.843 143.98 356.887-76.585 147.044-261.921 0-166.956-81.181s332.379-36.76 332.379-36.76",
      viewBoxConfig: "-136.41 -173.477 998.178 973.433",
      textString: "HISSSSS I'M A SNAKE!",
    },
    /* Double Loop 1 BOT */
    {
      svgPath:
        "M-156.246 748.999S-67.407 545.282 3.051 637.184c70.458 91.902 162.36 47.483 176.146 3.064 13.786-44.419-33.698-75.054-65.863-49.015s-47.483 176.146 85.775 128.663c133.258-47.483 59.736-87.307 171.551-116.409 111.815-29.102 148.575 111.814 75.053 113.346-73.522 1.532-91.902-61.268-38.293-93.434s196.058-6.127 226.692 49.015c30.634 55.142 223.629 104.155 252.731 42.887",
      viewBoxConfig: "-136.41 -173.477 998.178 973.433",
      textString: "THEY SEE ME ROLLING...",
    },
  ],

  navLinks: [
    {
      linkName: "home",
      url: "/#home",
    },
    {
      linkName: "about",
      url: "/#about",
    },
    {
      linkName: "work",
      url: "/#work",
    },
  ],

  workLinks: [
    {
      time: [2023, 2024],
      title: "Junior Frontend developer",
      text: `Starting with the Ironhack Bootcamp, I spent 6 months learning the essentials before voulenteering my work to old contacts. Some of those projects are listed here.`,
      tools: [],
    },
    {
      time: [2018, 2022],
      title: "Crowd-Collective",
      subtitle: "Co-Founder",
      text: "After collaborating with other freelancers, and finding that we were mutually benefitting from sharing skills, know-how and clients, we eventually came together under the banner Crowd-Collective and operated as a comunally driven informal digital bureau.",
      tools: [],
    },
    {
      time: [2013, 2023],
      title: "Translator",
      subtitle: "Freelance",
      text: "In 2013 I started as a small-scale freelancer but quickly grew my business into a full-time job that kept me, as well as the people I relied on for external review both busy and engaged. In 2015 expanded my business to provide niche services, such as editing and transcription.",
      tools: [],
    },
  ],

  projectLinks: [
    {
      name: "Padle League",
      github: "https://github.com/KarliChristensen/padel-app-client",
      url: "https://adorable-concha-1ef0b2.netlify.app/",
      image: Padle,
      imageAlt: "Padle League website screenshot.",
      text: "At the end of the Ironhack bootcamp, students are tasked with completing a fully functional CRUD project, building the front and backend sepperately before deploying these inside of a 3-month time-limit.",
      tools: ["React", "Next.js", "Node.js", "Tailwind", "Netfliy"],
      deployment: "Deployed on Netlify",
    },
    {
      name: "Portfolio V2",
      github: "https://github.com/KarliChristensen/SPPortfolio",
      url: "https://master--heartfelt-cendol-ac77bd.netlify.app/",
      image: PortfolioV2,
      imageAlt: "Portfolio v2 website screenshot.",
      text: "A expanded series of projects, this is the second version - Built after setting myself a 48-hour time limit, to produce something viable and reproduceable.",
      tools: ["React", "Next.js", "Node.js", "Tailwind", "Netfliy"],
      deployment: "Deployed on Netlify",
    },
    {
      name: "Second Serving",
      github: "https://github.com/KarliChristensen/Second-Serving",
      url: "https://bewildered-wig-mite.cyclic.app/",
      image: SecondServing,
      imageAlt: "SecondServing website screenshot",
      text: "A full-stack CRUD project made as part of a 3-man group for Ironhack. Features a user messaging service, cart, sales and purchase functionality.",
      tools: ["Express", "Node.js", "Tailwind", "Cyclic"],
      deployment: "Deployed on Cyclic",
    },
    {
      name: "Gogo's Kitchen",
      github:
        "https://github.com/KarliChristensen/nextjs-gogo-community-kitchen-template-2",
      url: "https://karlichristensen.github.io/nextjs-gogo-community-kitchen-template-2/",
      image: Gogoes,
      imageAlt: "Gogo's Kitchen website screenshot",
      text: "A WIP voulenteer project from Cape Town, South Africa. The specifications for this project included a customizeable layout with comprehensive documentation and thus relies on a template.",
      tools: [],
      deployment: "Deployed with Github",
    },
  ],

  techStack: [
    {
      icon: JSIcon,
      altText: "JavaScript icon",
      width: 0,
    },
    {
      icon: HTMLIcon,
      altText: "HTML icon",
      width: 0,
    },
    {
      icon: CSSIcon,
      altText: "CSS icon",
      width: 0,
    },
    {
      icon: NodeJS,
      altText: "NodeJS icon",
      width: 0,
    },
    {
      icon: React,
      altText: "React icon",
      width: 0,
    },
    {
      icon: Mongo,
      altText: "Mongo icon",
      width: 0,
    },
    {
      icon: Tailwind,
      altText: "Tailwind icon",
      width: 40,
    },
    {
      icon: Git,
      altText: "Git icon",
      width: 0,
    },
  ],
};
