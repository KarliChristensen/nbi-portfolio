import React from "react";
import Navbar from "../components/Navbar";

function About({
  navigateToSection,
  sectionStatus,
  isTransitioning,
  currentSection,
  ...restProps
}) {
  return (
    <div
      id="about"
      className="flex items-center pt-28 w-full h-screen bg-red-500/95"
      {...restProps}
    >
      <Navbar
        currentSection="about"
        navigateToSection={navigateToSection}
        sectionStatus={sectionStatus}
        isTransitioning={isTransitioning}
      />
      <div className="mx-[15%] md:w-[60%] lg:w-[70%]">
        <p className="text-white font-serif font-bold text-sm sm:text-xl md:text-3xl leading-6 sm:leading-9">
          Hi, I&#39;m Karli! <br />
          <br />
          Back in 2019 when Covid wasn&#39;t yet a concern I made my living as a
          translator, subtitler, copywriter, and transcriptionist. The pandemic
          came and went, and with the world changing, and my clients adjusting
          to the new market, I found it an opportune time to realign. With a bit
          of guidance and help from friends, I made the move, the decision and
          then the leap towards becoming a developer. Since 2023 I&#39;ve been
          providing mediocre front-end code containing excellent copywriting and
          exquisite flow while I still find my feet in the industry.
        </p>

        <div>
          <div className="flex justify-between mr-8 py-10">
            <a
              className="text-white font-bold flex items-center hover:text-gray-200 transition-colors"
              href="mailto:karlichristensen@proton.me"
              aria-label="Link to Email"
            >
              <svg
                className="stroke-white fill-white w-6 mr-2"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m497.9 142.1-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zm-213.7-42.3-262.6 262.6-21.2 121.5c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zm-160.1 240.1c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zm-36.1 84.1h48v36.3l-64.5 11.3-31.1-31.1 11.3-64.5h36.3z" />
              </svg>
              karlichristensen@proton.me
            </a>

            <div className="hidden md:flex space-x-0 lg:space-x-10">
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
                href="mailto:karlichristensen@proton.me"
                aria-label="Karli Christensen's email"
              >
                <svg
                  className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={35}
                  height={35}
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/karlichristensen/"
                aria-label="Karli Christensen's LinkedIn"
              >
                <svg
                  className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={35}
                  height={35}
                  strokeWidth="1.5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;