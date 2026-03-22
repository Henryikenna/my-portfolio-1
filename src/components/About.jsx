// import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about me"
//       className=" w-full h-dvh bg-[#151515] text-white"
//     >
//       <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:p-20 lg:p-4">
//         <div className="pb-4 md:pb-8">
//           <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
//             About Me
//           </p>
//         </div>
        
//         <p className="about-text text-base mt-3 lg:mt-12 md:text-xl">
//         Hi, I'm <b>Henry</b>, a passionate and versatile <b>Software Developer</b> with over <b>3 years of experience</b> building engaging, efficient, and scalable solutions. I specialize in modern web and mobile technologies like <b>React</b>, <b>JavaScript</b>, <b>Dart</b>, and <b>Flutter</b>, blending creativity with technical expertise to craft seamless user experiences.

//         </p>

//         <br />

//         <p className="about-text text-base md:text-xl">
//         I don't just write code, I solve problems. Whether it's crafting responsive UIs, developing cross-platform apps, or integrating backend services like <b>Firebase</b>, my goal is to turn innovative ideas into reality. I thrive on tackling challenges, learning new tools, and staying ahead of industry trends.
//         </p>

//         <br />

//         <p className="about-text text-base md:text-xl">
//         When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or sharing insights on development best practices. I believe in delivering not just software, but impactful solutions that make a difference.
//         </p>

//         <br />

//         <p className="about-text text-base md:text-xl">
//         Let's build something amazing together.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;













import React from "react";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <div
      name="about me"
      className=" w-full min-h-dvh bg-[#151515] text-white py-16"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:p-20 lg:p-4">
        <FadeInSection>
          <div className="pb-4 md:pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              About Me
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <p className="about-text text-base mt-3 lg:mt-12 md:text-xl">
          I'm <b>Henry Unegbu</b>, a <b>Software Developer</b> with over <b>3 years of professional experience</b> delivering high-impact web and mobile applications. I specialize in transforming complex business requirements into intuitive, scalable solutions that enhance operational efficiency and user satisfaction.
          </p>
        </FadeInSection>

        <br />

        <FadeInSection delay={200}>
          <p className="about-text text-base md:text-xl">
          My technical expertise spans <b>React</b>, <b>JavaScript</b>, <b>Flutter</b>, and <b>Dart</b>, with proven capabilities in full-stack development. From architecting responsive user interfaces to implementing robust backend integrations with <b>Firebase</b>, <b>Supabase</b>, and RESTful APIs, I consistently deliver production-ready applications that meet stringent performance and security standards.
          </p>
        </FadeInSection>

        <br />

        <FadeInSection delay={300}>
          <p className="about-text text-base md:text-xl">
          Throughout my career, I've successfully contributed to multiple projects across diverse industries, including e-commerce platforms, real estate applications, and enterprise resource planning systems. My approach combines technical precision with strategic problem-solving, ensuring solutions align with both user needs and business objectives.
          </p>
        </FadeInSection>

        <br />

        <FadeInSection delay={400}>
          <p className="about-text text-base md:text-xl">
          I maintain active involvement in the developer community through open-source contributions and continuous learning, staying current with emerging technologies and industry best practices to deliver cutting-edge solutions.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;