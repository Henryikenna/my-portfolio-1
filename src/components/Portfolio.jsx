import React from "react";
import FadeInSection from "./FadeInSection";
import ProjectShowcase from "./ProjectShowcase";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-[#151515] via-gray-950 to-gray-800 w-full text-white md:min-h-dvh py-16"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <FadeInSection>
          <div className=" pb-5 md:pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className=" pt-3 md:pt-6">Explore a selection of projects demonstrating technical expertise across web, mobile, and design disciplines</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <ProjectShowcase />
        </FadeInSection>
      </div>
    </div>
  );
};

export default Portfolio;
