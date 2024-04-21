import React from "react";

function page() {
  return (
    <div id="about" className="flex items-center pt-28 w-full h-screen bg-red-500/95">
      <div className="ml-[15%] md:w-[60%] lg:w-[40%]">
        <p className="text-white raleway text-2xl  leading-9">
          Hi, I&#39;m Karli! <br />
          <br />
          Back in 2019 when Corona wasn&#39;t yet a concern I made my living as a
          translator, subtitler, copywriter, and transcriptionist. Covid came
          and went, and with the world changing, and my clients adjusting to the
          new market, I found it an opportune time to realign. With a bit of
          guidance and help from friends, I made the move, the decision and then
          the leap towards becoming a developer. Since 2023 I&#39;ve been providing
          mediocre front-end code containing excellent copywriting and exquisite
          flow while I still find my feet in the industry.
        </p>
        <div className="py-10">
          <a
            className="text-black font-bold flex"
            href="mailto:karlichristensen@post.com"
          >
            <svg className="stroke-white fill-white w-6 mr-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m497.9 142.1-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zm-213.7-42.3-262.6 262.6-21.2 121.5c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zm-160.1 240.1c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zm-36.1 84.1h48v36.3l-64.5 11.3-31.1-31.1 11.3-64.5h36.3z" />
            </svg>
            karlichristensen@post.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
