import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-dvh bg-gradient-to-b from-gray-800 via-gray-950 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-base mt-3 md:mt-12 md:text-xl">
          Hello! My name is Henry, a passionate software developer with over three
          years of experience in web and mobile app development. My skills
          include HTML, CSS, JavaScript, Dart, Flutter, React JS, Next JS,
          Tailwind, Firebase, and Rive among many others.
        </p>

        <br />

        <p className=" text-base md:text-xl">
          I specialize in crafting seamless, user-friendly applications with a
          focus on clean, maintainable code. <br /> I am very fluent in English, which enables me to excel in communication and collaboration, ensuring clear project requirements.
          and updates.
        </p>

        <br />

        <p className=" text-base md:text-xl">
          My hobbies include Eating, Coding and Watching movies and shows.
        </p>

        <br />

        <p className=" text-base md:text-xl">
          Explore my portfolio to see my work, and let’s connect to bring your
          ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
