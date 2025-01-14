import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className=" w-full h-dvh bg-[#151515] text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:p-20 lg:p-4">
        <div className="pb-4 md:pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        {/* <p className=" text-base mt-3 md:mt-12 md:text-xl">
          Hello! My name is Henry, a passionate software developer with over three
          years of experience in web and mobile app development. My skills
          include HTML, CSS, JavaScript, Dart, Flutter, React JS, Next JS,
          Tailwind, Firebase, and Rive among many others.
        </p> */}
        <p className="about-text text-base mt-3 lg:mt-12 md:text-xl">
        Hi, I'm <b>Henry</b>, a passionate and versatile <b>Software Developer</b> with over <b>3 years of experience</b> building engaging, efficient, and scalable solutions. I specialize in modern web and mobile technologies like <b>React</b>, <b>JavaScript</b>, <b>Dart</b>, and <b>Flutter</b>, blending creativity with technical expertise to craft seamless user experiences.

        </p>

        <br />

        <p className="about-text text-base md:text-xl">
        I don't just write code, I solve problems. Whether it's crafting responsive UIs, developing cross-platform apps, or integrating backend services like <b>Firebase</b>, my goal is to turn innovative ideas into reality. I thrive on tackling challenges, learning new tools, and staying ahead of industry trends.
        </p>

        <br />

        <p className="about-text text-base md:text-xl">
        When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or sharing insights on development best practices. I believe in delivering not just software, but impactful solutions that make a difference.
        </p>

        <br />

        <p className="about-text text-base md:text-xl">
        Let's build something amazing together.
        </p>
      </div>
    </div>
  );
};

export default About;
