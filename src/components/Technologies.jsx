import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import dart from "../assets/dart.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import flutter from "../assets/flutter.png";
import firebase from "../assets/firebase.png";
import rive from "../assets/rive.png";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style: "shadow-orange-500",
      level: "Advanced",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: "shadow-blue-500",
      level: "Advanced",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style: "shadow-yellow-500",
      level: "Advanced",
    },
    {
      id: 4,
      src: reactImage,
      name: "React",
      style: "shadow-blue-600",
      level: "Advanced",
    },
    {
      id: 5,
      src: tailwind,
      name: "Tailwind CSS",
      style: "shadow-sky-400",
      level: "Advanced",
    },
    {
      id: 6,
      src: nextjs,
      name: "Next JS",
      style: "shadow-white",
      level: "Intermediate",
    },
    {
      id: 7,
      src: dart,
      name: "Dart",
      style: "shadow-[#00C4B3]",
      level: "Advanced",
    },
    {
      id: 8,
      src: github,
      name: "GitHub",
      style: "shadow-gray-400",
      level: "Advanced",
    },
    {
      id: 9,
      src: flutter,
      name: "Flutter",
      style: "shadow-[#00B5F8]",
      level: "Advanced",
    },
    {
      id: 10,
      src: firebase,
      name: "Firebase",
      style: "shadow-[#FFA000]",
      level: "Intermediate",
    },
    {
      id: 11,
      src: rive,
      name: "Rive",
      style: "shadow-gray-100",
      level: "Intermediate",
    },
  ];

  return (
    <div
      name="technologies"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-gray-950 to-black py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-white">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Technologies
          </h2>
          <p className="py-4 md:py-6">Technologies I work with</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 text-white">
          {techs.map(({ id, src, name, style, level }) => (
            <div
              key={id}
              className={`group relative bg-gray-800 rounded-lg hover:bg-gray-700 
                transition-all duration-300 transform hover:-translate-y-2 ${style}`}
            >
              <div className="flex justify-between">
                <span></span>
              <span className="px-3 py-1 text-sm font-medium bg-[#7F1F9A] rounded-bl-md rounded-tr-lg">
                  {level}
                </span>
              </div>
              <div className="flex flex-col items-center p-6">
                <img
                  src={src}
                  alt={name}
                  className="w-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
                {/* <span className="px-3 py-1 text-sm bg-[#7F1F9A] rounded-full opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300">
                  {level}
                </span> */}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          {/* <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-6"> */}
          <div className="grid grid-cols-2 gap-6 pb-6">
            {techs.map(({ id, src, name, style, level }) => (
              <div
                key={id}
                // className={`flex-shrink-0 w-48 bg-gray-800 rounded-lg ${style}`}
                className={`flex-shrink-0 w-auto bg-gray-800 rounded-lg ${style}`}
              >
                <div className="flex justify-between">
                <span></span>
              <span className="px-3 py-1 text-sm font-medium text-white bg-[#7F1F9A] rounded-bl-md rounded-tr-lg">
                  {level}
                </span>
              </div>
                <div className="flex flex-col items-center p-3">
                  <img src={src} alt={name} className="w-11 mb-3" />
                  <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>
                  {/* <span className="px-3 py-1 text-sm text-white bg-[#7F1F9A] rounded-full">
                    {level}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
