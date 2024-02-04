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

const Experience = () => {

    const techs = [
        {
          id: 1,
          src: html,
          name: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          name: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          name: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          name: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          name: "Tailwind CSS",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: nextjs,
          name: "Next JS",
          style: "shadow-white",
        },
        {
          id: 7,
          src: dart,
          name: "Dart",
          style: "shadow-[#00C4B3]",
        },
        {
          id: 8,
          src: github,
          name: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: flutter,
          name: "Flutter",
          style: "shadow-[#00B5F8]",
        },
        {
          id: 10,
          src: firebase,
          name: "Firebase",
          style: "shadow-[#FFA000]",
        },
        {
          id: 11,
          src: rive,
          name: "Rive",
          style: "shadow-gray-100",
        },
      ];


  return (
    <div name="experience" className=" bg-gradient-to-b from-gray-800 via-gray-950 to-black w-full py-12 md:h-dvh">
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
        <p className="py-6">These are the technologies i've woked with</p>
        </div>

      <div className="hidden w-full md:grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({id, src, name, style}) => (
            <div key={id} className={`shadow-md cursor-pointer hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img className=" w-14 m-auto" src={src} alt="" /> 
          <p className="mt-4">{name}</p>
        </div>
        ))}
        
      </div>

      <div className="flex md:hidden gap-8 text-center overflow-auto py-8 pr-3 ">
        {techs.map(({id, src, name, style}) => (
            <div key={id} className={` flex flex-col justify-center items-center shadow-md cursor-pointer hover:scale-105 px-14 duration-500 py-6 rounded-lg ${style}`}>
          <img className=" w-16 m-auto" src={src} alt="" /> 
          <p className=" text-lg">{name}</p>
        </div>
        ))}
        
      </div>
      </div>
    </div>
  );
};

export default Experience;
