import React from "react";
import amiriCar from "../assets/portfolio/amiriCar.jpeg";
import anirivic from "../assets/portfolio/anirivic.jpeg";
import disneyClone from "../assets/portfolio/disneyClone.jpeg";
import zws from "../assets/portfolio/zws.jpeg";
import ProjectShowcase from "./ProjectShowcase";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: amiriCar,
    //   desc: "A more modern clone of the amiri website.",
      demoLink: "https://amaricarsclone.vercel.app/",
      codeLink: "https://github.com/Henryikenna/amari-website-fake",
    },
    {
      id: 2,
      src: anirivic,
      demoLink: "https://aniri-vinchgrine.vercel.app/",
      codeLink: "https://github.com/Henryikenna/Aniri-Vinchgrine",
    },
    {
      id: 3,
      src: disneyClone,
      demoLink: "https://disney-clone-henryoncode.vercel.app/",
      codeLink: "https://github.com/Henryikenna/disney-clone-react-app",
    },
    {
      id: 4,
      src: zws,
      demoLink: "https://zazzywebservices.vercel.app/",
      codeLink: "https://github.com/Henryikenna/ZazzyWebServices",
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-[#151515] via-gray-950 to-gray-800 w-full text-white md:h-dvh"
      // className=" bg-[#151515] w-full text-white md:h-dvh"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-5 md:pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" pt-3 md:pt-6">Check out some of my work right here</p>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className=" flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg">
              <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className=" flex justify-center items-center">
                <button onClick={() => window.open(demoLink, '_blank')} className=" w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(codeLink, '_blank')} className=" w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <ProjectShowcase />
      </div>
    </div>
  );
};

export default Portfolio;
