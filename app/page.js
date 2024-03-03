"use client";

import Image from "next/image";
import TypeIt from "typeit-react";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-screen snap-start flex flex-col justify-center items-center">
        <div className="mx-10 md:right-0 md:w-1/2">
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
      </section>
    </main>
  );
}
