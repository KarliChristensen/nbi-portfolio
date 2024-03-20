import React from "react";
import TypeIt from "typeit-react";
import { AppContext } from "next/app";

const Landing = () => {
  return (
    <section id="home" className="h-screen w-screen snap-start flex">
      <div className="w-1/5 md:w-1/4 hidden md:block h-screen bg-pink-100"></div>
      <div className="w-screen md:w-full h-screen bg-amber-50 flex items-center">
        <div className="mx-10 md:w-1/2 text-white">
          <div className="flex">
            <span className="text-1xl rotate-[345deg]">{`Hi, I'm Karli`}</span>
          </div>
          <br></br>
          <TypeIt
            className="text-4xl md:text-5xl lg:text-6xl text-green-800 -w-32 font-bold text-nowrap"
            options={{
              speed: 30, //50
              waitUntilVisible: true,
              lifeLike: true,
            }}
            getBeforeInit={(instance) => {
              instance
                .type("I'm a translator.")
                .pause(750)
                .delete(11, { speed: 500 })
                .pause(500)
                .type(" developer.", { speed: 500 })
                .pause(500)
                .move(-10)
                .delete(7)
                .pause(200)
                .type(`<span>Frontend</span> `, {
                  speed: 100,
                })
                .move(null, { to: "END" })
                .delete(1)
                .type(`<br><em><span> extraordinaire</span></em><br><br>`)
                .move(null, { to: "END" })
                .type(
                  "<span style='-webkit-text-stroke: 2px orange; color: rgba(0, 0, 0, 0); font-outline-1;'>Wrangler</span> of <br> JS & HTML <br> <span style='-webkit-text-stroke: 2px orange; color: rgba(0, 0, 0, 0); font-outline-1;'>Slayer</span> of CSS</span>",
                  { speed: 20 }
                );
              return instance;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
