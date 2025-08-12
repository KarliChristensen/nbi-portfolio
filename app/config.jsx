/* Project images */

import Gogoes from "../public/images/Gogos.png";
import Padle from "../public/images/PadleClient.png";
import SecondServing from "../public/images/SecondServing.png";
import PortfolioV2 from "../public/images/Portfolio V2.png";
import Monster from "../public/images/Monster.png"

module.exports = {
  email: "karlichristensen@proton.me",

  projectLinks: [
    {
      name: "Lille Monster",
      github: "https://github.com/KarliChristensen/monster-book",
      url: "https://monster-taupe.vercel.app/",
      image: Monster,
      imageAlt: "Lille Monster website screenshot.",
      text: "A small project I put together for the launch of a children's book I wrote with my wife on the subject of becoming a parent, and not knowing what ever loving hell you're doing.",
      tools: ["React", "Next.js", "Node.js", "Tailwind", "Vercel"],
      deployment: "Deployed with Vercel",
    },
    {
      name: "Padle League",
      github: "https://github.com/KarliChristensen/padel-app-client",
      url: "https://adorable-concha-1ef0b2.netlify.app/",
      image: Padle,
      imageAlt: "Padle League website screenshot.",
      text: "At the end of the Ironhack boot camp, students are tasked with completing a fully functional CRUD project, building the front and backend separately before deploying these inside of a 3-month time-limit.",
      tools: ["React", "Next.js", "Node.js", "Tailwind", "Netfliy"],
      deployment: "Deployed on Netlify",
    },
    {
      name: "Portfolio V2",
      github: "https://github.com/KarliChristensen/SPPortfolio",
      url: "https://master--heartfelt-cendol-ac77bd.netlify.app/",
      image: PortfolioV2,
      imageAlt: "Portfolio v2 website screenshot.",
      text: "An expanded series of projects, this is the second version - Built after setting myself a 48-hour time limit, to produce something viable and reproducible.",
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
      text: "A WIP volunteer project from Cape Town, South Africa. The specifications for this project included a customizable layout with comprehensive documentation and thus relies on a template.",
      tools: [],
      deployment: "Deployed with Github",
    },
  ],
};
