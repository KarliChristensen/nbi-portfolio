import React from "react";
import Navbar from "../components/Navbar";

const About = ({
  navigateToSection,
  sectionStatus,
  isTransitioning,
  currentSection,
  ...restProps
}) => {
  return (
    <section
      id="about"
      className="flex items-center py-28 w-full h-screen bg-red-500/95"
      {...restProps}
    >
      <Navbar
        currentSection="about"
        navigateToSection={navigateToSection}
        sectionStatus={sectionStatus}
        isTransitioning={isTransitioning}
      />
      <div className="mx-[15%] md:w-[80%]">
        <p className="text-white font-serif font-bold text-sm sm:text-xl md:text-2xl leading-6 sm:leading-9">
          Hi, I&#39;m Karli! <br />
          <br />
          Back in 2019 when Covid wasn&#39;t yet a concern I made my living as a
          translator, subtitler, copywriter, and transcriptionist. The pandemic
          came and went, and with the world changing, and my clients adjusting
          to the new market, I found it an opportune time to realign. With a bit
          of guidance and help from friends, I made the move, the decision and
          then the leap towards becoming a frontend developer and had some
          success there, but ultimately my transition misaligned somewhat with
          the advent of LLM.
          <br />
          <br />
          Finally, as of 2025, I&#39;ve started retraining a data technician,
          where I can draw on all my skills, interests and experiences as both a
          freelancer, and developer.
          <br />
          <br />I now provide mediocre front-end code, sublime copywriting in
          elegant English, all the while laying down cables, talking about why{" "}
          <q>
            <i>have you tried rebooting it?</i>
          </q>{" "}
          is always an excellent first question.
        </p>

        <div>
          <div className="flex justify-between mr-8 pt-10 mb-3">
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

            <div className="hidden md:flex space-x-2 lg:space-x-10">
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
                href="tel:+4593870055"
                aria-label="Karli Christensen's Phone Number"
              >
                <svg
                  className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={35}
                  height={35}
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden flex space-x-3">
          <a
            href="https://github.com/KarliChristensen"
            aria-label="Karli Christensen's github profile"
          >
            <svg
              className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              height={30}
              strokeWidth="1.5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="tel:+4593870055"
            aria-label="Karli Christensen's Phone Number"
          >
            <svg
              className="stroke-white fill-none h-10 p-1 hover:stroke-slate-900 transform ease-in-out duration-300 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              height={30}
              strokeWidth="1.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
