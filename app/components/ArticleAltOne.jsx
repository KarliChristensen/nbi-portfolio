import React from "react";
import Image from "next/image";

function Article({ imageOne, imageTwo, github, deployment, text, title }) {
  return (
    <article className="article md:px-0 w-full md:py-20 flex justify-center">
      <div className="relative flex justify-center w-full m-5 md:m-0">
        <div className="articleDiv w-full flex justify-center items-center ">
          <figure className="overlayHover w-full md:w-[80%] lg:w-[60%] max-w-[1000px] imgTiltAlt rounded-md">
            <Image
              className="overlayHover"
              src={imageOne}
              alt="Primary article imgLayover"
            />
            <figcaption>
              {title}
              <p>{text}</p>
            </figcaption>
          </figure>
        </div>
        <div className="articleSecondaryDiv w-full absolute hidden bottom-[-20%] inset-x-[27%] md:block z-1">
          <div className="max-w-[450px] md:max-w-[350px]">
            <figure className="overlayHover w-full max-w-[1000px] imgTiltTwoAlt rounded-md">
              <Image
                className="overlayHover"
                src={imageTwo}
                alt="Secondary article image"
              />
              <figcaption>
                <h2 className="h-full w-full">
                  <span>Tools</span> of the trade
                  <div className="flex items-center justify-center h-full w-full">
                    <a className="w-[35px] mr-8" href={github}>
                      <svg
                        className="w-full fill-white hover:fill-slate-500 transform duration-300 ease-in-out"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m0 0h24v24h-24z"
                          opacity="0"
                          transform="matrix(-1 0 0 -1 24 24)"
                        />
                        <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77" />
                      </svg>
                    </a>
                    <a className="w-[39px]" href={deployment}>
                      <svg
                        className="w-full fill-white hover:fill-slate-500 transform duration-300 ease-in-out"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-3.35 12.77c-.11.3-.4.49-.7.49-.09 0-.17-.01-.26-.05-.81-.3-1.49-.89-1.92-1.66-1-1.8-.38-4.15 1.37-5.24l2.34-1.45c.86-.53 1.87-.69 2.83-.44s1.77.88 2.26 1.76c1 1.8.38 4.15-1.37 5.24l-.26.19c-.34.24-.81.16-1.05-.17-.24-.34-.16-.81.17-1.05l.31-.22c1.12-.7 1.5-2.15.89-3.26-.29-.52-.76-.89-1.32-1.04s-1.15-.06-1.66.26l-2.36 1.46c-1.08.67-1.46 2.12-.85 3.24.25.45.65.8 1.13.98.39.14.59.57.45.96zm8.27.88-2.34 1.45c-.59.37-1.25.55-1.92.55-.3 0-.61-.04-.91-.12-.96-.25-1.77-.88-2.25-1.76-1-1.8-.38-4.15 1.37-5.24l.26-.19c.34-.24.81-.16 1.05.17.24.34.16.81-.17 1.05l-.31.22c-1.12.7-1.5 2.15-.89 3.26.29.52.76.89 1.32 1.04s1.15.06 1.66-.26l2.34-1.45c1.08-.67 1.46-2.12.85-3.24-.25-.45-.65-.8-1.13-.98-.39-.14-.59-.57-.44-.96.14-.39.58-.59.96-.44.81.3 1.49.89 1.92 1.66.99 1.8.38 4.15-1.37 5.24z" />
                      </svg>
                    </a>
                  </div>
                </h2>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
