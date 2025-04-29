// import React, { useState, useRef } from "react";

// const ProjectShowcase = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [currentPage, setCurrentPage] = useState(0);

//   // Enhanced project data structure
//   const projects = {
//     all: [
//       {
//         id: 1,
//         title: "Web Project 1",
//         type: "web",
//         description: "A modern web application built with React and TailwindCSS",
//         technologies: ["React", "TailwindCSS", "Node.js"],
//         image: "https://placehold.co/1920x1080/1a1a1a/7F1F9A?text=Project+1",
//         demo: "demo-link",
//         code: "github-link"
//       },
//       {
//         id: 2,
//         title: "Mobile Project 1",
//         type: "mobile",
//         description: "Cross-platform mobile app developed with Flutter",
//         technologies: ["Flutter", "Firebase", "Dart"],
//         image: "https://placehold.co/1920x1080/1a1a1a/7F1F9A?text=Project+2",
//         demo: "demo-link",
//         code: "github-link"
//       },
//       {
//         id: 3,
//         title: "Graphics Project 1",
//         type: "graphics",
//         description: "Creative design work using modern tools",
//         technologies: ["Photoshop", "Illustrator", "Figma"],
//         image: "https://placehold.co/1920x1080/1a1a1a/7F1F9A?text=Project+3",
//         demo: "",
//         code: ""
//       },
//     ],
//     // Filter projects by type for other tabs
//     web: [/* filtered web projects */],
//     mobile: [/* filtered mobile projects */],
//     graphics: [/* filtered graphics projects */]
//   };

//   // Initialize filtered arrays
//   projects.web = projects.all.filter(project => project.type === "web");
//   projects.mobile = projects.all.filter(project => project.type === "mobile");
//   projects.graphics = projects.all.filter(project => project.type === "graphics");

//   const rowsPerPage = 3;
//   const tabs = ["all", "web", "mobile", "graphics"];

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(0);
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage((prevPage) => prevPage + direction);
//   };

//   const paginatedProjects = projects[activeTab].slice(
//     currentPage * rowsPerPage,
//     (currentPage + 1) * rowsPerPage
//   );

//   // Image hover effect handler
//   const handleMouseMove = (e, cardRef) => {
//     if (!cardRef.current) return;

//     const { left, top, width, height } = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - left) / width;
//     const y = (e.clientY - top) / height;

//     cardRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
//     cardRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
//   };

//   return (
//     <div className="project-showcase max-w-7xl mx-auto px-4">
//       {/* Tabs */}
//       <div className="tabs flex justify-center mb-8 space-x-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`tab-button px-6 py-2 rounded-full transition-all duration-300
//               ${activeTab === tab
//                 ? "bg-[#7F1F9A] text-white"
//                 : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
//             onClick={() => handleTabClick(tab)}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Project Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {paginatedProjects.map((project) => {
//           const cardRef = useRef(null);

//           return (
//             <div
//               key={project.id}
//               ref={cardRef}
//               className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
//               onMouseMove={(e) => handleMouseMove(e, cardRef)}
//             >
//               {/* Image Container */}
//               <div className="relative h-48 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//                   style={{
//                     transform: "translate(calc(var(--mouse-x) * -5px), calc(var(--mouse-y) * -5px))"
//                   }}
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Project Type Badge */}
//                 <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#7F1F9A] text-white mb-4">
//                   {project.type}
//                 </span>

//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex space-x-3">
//                   {project.demo && (
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-[#7F1F9A] text-white rounded hover:bg-[#6a1a82] transition-colors"
//                     >
//                       Demo
//                     </a>
//                   )}
//                   {project.code && (
//                     <a
//                       href={project.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
//                     >
//                       Code
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Pagination */}
//       <div className="pagination flex justify-center mt-8 space-x-4">
//         <button
//           className={`px-6 py-2 rounded-full transition-all duration-300
//             ${currentPage === 0
//               ? "bg-gray-800 text-gray-500 cursor-not-allowed"
//               : "bg-gray-800 text-white hover:bg-gray-700"}`}
//           onClick={() => handlePageChange(-1)}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <button
//           className={`px-6 py-2 rounded-full transition-all duration-300
//             ${currentPage >= Math.ceil(projects[activeTab].length / rowsPerPage) - 1
//               ? "bg-gray-800 text-gray-500 cursor-not-allowed"
//               : "bg-gray-800 text-white hover:bg-gray-700"}`}
//           onClick={() => handlePageChange(1)}
//           disabled={currentPage >= Math.ceil(projects[activeTab].length / rowsPerPage) - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectShowcase;

import React, { useState, useRef } from "react";
import { TbExternalLink } from "react-icons/tb";
import amiriCar from "../assets/portfolio/amiriCar.jpeg";
import anirivic from "../assets/portfolio/anirivic.jpeg";
// import disneyClone from "../assets/portfolio/disneyClone.jpeg";
import zws from "../assets/portfolio/zws.jpeg";
import nbLogo from "../assets/portfolio/nblogo.png";
import nbDemoVideo from "../assets/portfolio/nbdemovideo.png";
import conferenceFlyer from "../assets/portfolio/conference_flyer.png";
import picoMascot from "../assets/portfolio/pico_mascot.jpg";
import picoAppReview from "../assets/portfolio/picoapppreview.png";
import dilBusCard from "../assets/portfolio/dilinna_business_card2.png";
import eazilink from "../assets/portfolio/eazilinkLs.png";
import monarc from "../assets/portfolio/monarc.png";
import propertyPro from "../assets/portfolio/propertypro.png";
import sunlit from "../assets/portfolio/sunlit.png";
import disneyClone from "../assets/portfolio/disneyClone2.png";
import aiObjectDetector from "../assets/portfolio/aiobjdetectorpreview.png";
import starPowr from "../assets/portfolio/starPowr.png";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const cardRefs = useRef([]);

  const projectsData = [
    {
      id: 1,
      title: "Amari Cars Clone",
      type: "web",
      description: "A modernized version of the Amari™ website.",
      technologies: ["HTML", "CSS"],
      image: amiriCar,
      demo: "https://amaricarsclone.vercel.app/",
      code: "https://github.com/Henryikenna/amari-website-fake/",
    },

    {
      id: 2,
      title: "NaijaBarter",
      type: "mobile",
      description:
        "An app where individuals can easily barter their unwanted possessions for desired ones.",
      technologies: ["Flutter", "Dart", "Riverpod"],
      image: nbDemoVideo,
      demo: "https://drive.google.com/file/d/1SSZISriaTz8daILLb8OvMUxnUu7bUCZr/view?usp=sharing",
      code: "https://github.com/Henryikenna/naijabarterapp",
    },
    {
      id: 3,
      title: "Business Conference Flyer",
      type: "graphics",
      //   description: "Creative design work using modern tools",
      technologies: ["Canva"],
      image: conferenceFlyer,
      demo: "",
      code: "",
    },
    {
      id: 4,
      title: "Monarc",
      titleAddonTitle: "Post on X",
      titleAddonURL: "https://x.com/henryoncode/status/1818310259875762461",
      type: "web",
      description:
        "A collaboration website with my UI/UX friend @markuiux on X. A crypto-trading website.",
      technologies: ["React JS", "TailwindCSS", "JavaScript"],
      image: monarc,
      demo: "https://monarc.vercel.app/",
      code: "https://github.com/Henryikenna/monarc",
    },
    {
      id: 5,
      title: "Pico",
      type: "mobile",
      description:
        "An app where users can access AI functionalities outside the main app with the use of an overlay (shown in the image above).",
      technologies: ["Flutter", "Dart", "Riverpod", "Firebase", "OpenAI API"],
      image: picoAppReview,
      demo: "https://www.linkedin.com/posts/henry-unegbu-832838254_flutter-firebase-ugcPost-7254965470720614400-2Nth?utm_source=share&utm_medium=member_desktop",
      code: "https://github.com/Henryikenna/Pico",
    },
    {
      id: 6,
      title: "Business Card Design",
      type: "graphics",
      //   description: "Creative design work using modern tools",
      technologies: ["Canva"],
      image: dilBusCard,
      demo: "",
      code: "",
    },
    {
      id: 7,
      title: "Sunlit Carribean Estate",
      type: "web",
      description: "A vacation home listing and renting website.",
      technologies: ["Next.js", "TailwindCSS", "TypeScript"],
      image: sunlit,
      demo: "https://sunlit-caribbean-estate.vercel.app/",
      code: "https://github.com/Henryikenna/sunlit-estate-website",
    },
    {
      id: 8,
      title: "Eazilink",
      titleAddonTitle: "My Eazilink profile",
      titleAddonURL: "https://eazilink.com/qr/DHSXENIPnY0s7wVRDnlW",
      type: "mobile",
      description:
        "An app that lets users store their social media handles and create web profiles that they can share to friends. In the newer versions it has an AI Resume checker and other features.",
      technologies: [
        "Flutter",
        "Dart",
        "Riverpod",
        "Firebase",
        "Rive",
        "AnthropicAI API",
      ],
      image: eazilink,
      demo: "https://drive.google.com/drive/folders/17OpKLL4gizLH9RT9Hx-f8XBiBBlpoAEw",
      code: "https://github.com/Eazi-Link/Eazilink",
    },
    {
      id: 10,
      title: "Disney Website Clone",
      type: "web",
      description: "A clone of the disney website the uses the 'themoviedb' API to get current released movies across different genres.",
      technologies: ["React JS", "TailwindCSS", "themoviedb API", "Axios"],
      image: disneyClone,
      demo: "https://disney-clone-henryoncode.vercel.app/",
      code: "https://github.com/Henryikenna/disney-clone-react-app",
    },
    {
      id: 11,
      title: "PropertyPro",
      // titleAddonTitle: "My Eazilink Web profile",
      // titleAddonURL: "https://eazilink.com/qr/DHSXENIPnY0s7wVRDnlW",
      type: "mobile",
      description:
        "A collaboration app with a UI/UX friend @Seky_t on X. A real estate property app.",
      technologies: [
        "Flutter",
        "Dart"
      ],
      image: propertyPro,
      demo: "https://x.com/henryoncode/status/1740171358213197929",
      code: "https://github.com/Henryikenna/property_pro_app",
    },
    
    {
      id: 13,
      title: "Star Powr",
      type: "web",
      description: "A website for Agencies & Businesses.",
      technologies: ["React JS", "TailwindCSS"],
      image: starPowr,
      demo: "https://star-powr.vercel.app/",
      code: "https://github.com/Henryikenna/star_powr",
    },
    {
      id: 14,
      title: "Object Detector with TFlite",
      // titleAddonTitle: "My Eazilink Web profile",
      // titleAddonURL: "https://eazilink.com/qr/DHSXENIPnY0s7wVRDnlW",
      type: "mobile",
      description:
        "An app that automatically detects objects in the camera.",
      technologies: [
        "Flutter",
        "Dart", "Tensor Flow"
      ],
      image: aiObjectDetector,
      demo: "httpswww.linkedin.compostshenry-unegbu-832838254_flutter-tflite-ai-activity-7270122097920671745-zWfButm_source=share&utm_medium=member_desktop",
      code: "https://github.com/Henryikenna/TFlite-AI-Object-Detector",
    },
    {
      id: 16,
      title: "Aniri Vinchgrine",
      type: "web",
      description: "A home listing website.",
      technologies: ["HTML", "CSS"],
      image: anirivic,
      demo: "https://aniri-vinchgrine.vercel.app/",
      code: "https://github.com/Henryikenna/Aniri-Vinchgrine/",
    },
  ];

  const projects = {
    all: projectsData,
    web: projectsData.filter((project) => project.type === "web"),
    mobile: projectsData.filter((project) => project.type === "mobile"),
    graphics: projectsData.filter((project) => project.type === "graphics"),
  };

  const rowsPerPage = 3;
  const tabs = ["all", "web", "mobile", "graphics"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => prevPage + direction);
  };

  const paginatedProjects = projects[activeTab].slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const handleMouseMove = (e, index) => {
    if (!cardRefs.current[index]) return;

    const { left, top, width, height } =
      cardRefs.current[index].getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    cardRefs.current[index].style.setProperty("--mouse-x", `${x * 100}%`);
    cardRefs.current[index].style.setProperty("--mouse-y", `${y * 100}%`);
  };

  const handleViewClick = (image) => {
    setFullscreenImage(image);
  };
  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="project-showcase flex flex-col gap-6 max-w-7xl mx-auto md:gap-20 md:flex-row">
      {/* Tabs */}
      {/* <div className="tabs flex flex-col w-[20%] justify-center mb-8 space-x-4"> */}
      <div className="tabs flex gap-x-1 justify-center md:flex-col md:w-[10%] md:justify-start md:gap-x-0 md:gap-y-[0.125rem]">
        {tabs.map((tab) => (
          //   <button
          //     key={tab}
          //     className={`tab-button px-6 py-2 rounded-full transition-all duration-300 ${
          //       activeTab === tab
          //         ? "bg-[#7F1F9A] text-white"
          //         : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          //     }`}
          //     onClick={() => handleTabClick(tab)}
          //   >
          //     {tab.charAt(0).toUpperCase() + tab.slice(1)}
          //   </button>
          <button
            key={tab}
            className={`tab-button px-3 py-2 rounded-full text-sm md:text-base md:text-left md:rounded-tl-none md:rounded-tr-md md:rounded-bl-none md:rounded-br-md transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#7F1F9A] text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className=" mx-2 md:w-[90%]">
        {/* Project Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative bg-gray-800 rounded-xl border border-[#7F1F9A] overflow-hidden transform transition-all duration-300 md:border-none hover:-translate-y-2"
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Image Container */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div> */}
              <div className="relative h-44 overflow-hidden md:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  //   className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  className="project-image w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  //   style={{
                  //     transform:
                  //       "translate(calc(var(--mouse-x) * -5px), calc(var(--mouse-y) * -5px))",
                  //   }}
                />
              </div>

              {/* Project Type Badge */}
              <span className="inline-block px-3 py-1 font-medium text-xs rounded-br-sm bg-[#7F1F9A] text-white">
                {project.type}
                {/* {project.type.charAt(0).toUpperCase() + project.type.slice(1)} */}
              </span>

              {/* Content */}
              <div className="p-4">
                {/* Project Type Badge */}
                {/* <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#7F1F9A] text-white mb-4">
                {project.type}
              </span> */}

                {/* <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3> */}
                <div className="flex items-center gap-2">
                  <h3
                    className="text-xl font-bold text-white mb-1 overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.titleAddonTitle && (
                    <a
                      href={project.titleAddonURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium underline text-[#7F1F9A]"
                    >
                      {project.titleAddonTitle} <TbExternalLink />
                    </a>
                  )}
                </div>

                {/* <p className="text-gray-400 mb-3 text-sm overflow-ellipsis">{project.description}</p> */}
                <p
                  className="text-gray-400 mb-3 text-sm overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 7,
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                {/* <div className="flex scroll-auto gap-2 mb-6 pr-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
                <div className="custom-projects-scrollbar flex gap-2 mt-3 mb-5 pb-1 overflow-x-auto whitespace-nowrap md:mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded inline-block"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#7F1F9A] text-sm font-medium text-white rounded hover:bg-[#6a1a82] transition-colors"
                    >
                Demo
              </a>
            )}
            {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-sm font-medium text-white rounded hover:bg-gray-600 transition-colors"
                    >
                Code
              </a>
                  )} */}
                  {project.type === "graphics" ? (
                    <button
                      onClick={() => handleViewClick(project.image)}
                      //   className="px-4 py-2 bg-blue-600 text-sm font-medium text-white rounded hover:bg-blue-500 transition-colors"
                      className="px-4 py-2 bg-gray-700 text-sm font-medium text-white rounded hover:bg-gray-600 transition-colors"
                    >
                      {" "}
                      View{" "}
                    </button>
                  ) : (
                    <>
                      {" "}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#7F1F9A] text-sm font-medium text-white rounded hover:bg-[#6a1a82] transition-colors"
                        >
                          {" "}
                          Demo{" "}
                        </a>
                      )}{" "}
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-700 text-sm font-medium text-white rounded hover:bg-gray-600 transition-colors"
                        >
                          {" "}
                          Code{" "}
                        </a>
                      )}{" "}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fullscreen Image Popup */}{" "}
        {fullscreenImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeFullscreen}
          >
            {" "}
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-full max-h-full"
            />{" "}
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeFullscreen}
            >
              {" "}
              &times;{" "}
            </button>{" "}
          </div>
        )}
        {/* Pagination */}
        <div className="pagination flex justify-center mt-8 space-x-4">
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => handlePageChange(-1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              currentPage >=
              Math.ceil(projects[activeTab].length / rowsPerPage) - 1
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => handlePageChange(1)}
            disabled={
              currentPage >=
              Math.ceil(projects[activeTab].length / rowsPerPage) - 1
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
