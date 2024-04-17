import React from "react";
import Image from "next/image";

function Article({ imageOne, imageTwo, Title, Subtitle }) {
  return (
    <article className="article md:px-0 w-full md:py-20 flex justify-center">
      <div className="group relative w-full">
        <div className="articleDiv relative flex justify-center items-center">
          <Image
            className="md:w-[90%] md:max-w-[70%]"
            src={imageOne}
            alt="Primary article image"
          />
        </div>
        <div className="articleSecondaryDiv w-[40%] max-w-[1200px] bottom-[-25%] right-[10%] absolute hidden md:block z-10">
          <Image
            className="z-20"
            src={imageTwo}
            alt="Secondary article image"
          />
          <div className="flex flex-col w-[90%] absolute -z-20 bottom-[5%] left-[10%] transform group-hover:-translate-x-[95%] duration-1000 ease-in-out space-y-1 ">
            <h1 className="font-bold text-lg">{Title}</h1>
            <span className="w-[90%] h-[1px] bg-black"></span>
            <h2>{Subtitle}</h2>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
