"use client";

import Image from "next/image";
import TypeIt from "typeit-react";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section id="home-section" className="h-screen w-screen snap-start flex">
        <div className="w-1/3 hidden md:block h-screen bg-slate-300"></div>
        <div className="w-screen md:w-2/3 h-screen bg-slate-800 flex items-center">
          <div className="mx-10 md:w-1/2 flex justify-center flex-col text-white">
            <h1 className="text-1xl">{`Hi, I'm Karli`}</h1>
            <TypeIt
              className="text-2xl md:text-5xl max-w-32 font-bold"
              getBeforeInit={(instance) => {
                instance
                  .type("I'm a translator.")
                  .pause(750)
                  .delete(11)
                  .pause(500)
                  .type("frontend developer!");

                return instance;
              }}
            />
          </div>
        </div>
      </section>
      <section id="about-section" className="snap-start">
        <div className="w-screen h-screen "></div>
      </section>
    </main>
  );
}
