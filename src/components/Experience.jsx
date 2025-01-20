// import React, { useState } from "react";
// import { LuChevronRight } from "react-icons/lu";

// const Experience = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const experiences = [
//     {
//       id: 1,
//       role: "Mobile Developer",
//       company: "Psilocybin",
//       jobRoles: [
//         "Collaborated with cross-functional teams to optimize mobile app architecture, reducing load times and improving overall app efficiency.",
//         "Revamped applications navigation system and implemented custom routes to improve apps seamlessness and boost performance.",
//       ],
//     },
//     {
//       id: 2,
//       role: "Mobile Developer",
//       company: "HNG-X (2023)",
//       jobRoles: [
//         "Collaborated with cross-functional teams to optimize mobile app architecture, reducing load times and improving overall app efficiency.",
//         "Revamped applications navigation system and implemented custom routes to improve apps seamlessness and boost performance.",
//       ],
//     },
//   ];

//   return (
//     <div
//       name="experience"
//       className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-800 py-16"
//     >
//       <div className="max-w-screen-lg mx-auto p-4">
//         <div className="text-white">
//           <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Experience
//           </h2>
//           <p className="py-4 md:py-6">My Work Experience</p>
//         </div>
//         {experiences.map((experience) => (
//           <div className="mb-4">
//             {/* Collapsed view */}
//             <div
//               className={`flex justify-between items-center p-4 bg-gray-700 cursor-pointer ${
//                 isOpen ? "rounded-t-md" : "rounded-md"
//               }`}
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <span className="font-semibold text-white">
//                 {experience.role} at {experience.company}
//               </span>
//               <span
//                 className={`transform transition-transform duration-20 text-white text-lg ${
//                   isOpen ? "rotate-90" : "rotate-0"
//                 }`}
//               >
//                 <LuChevronRight />
//               </span>
//             </div>

//             {/* Expanded view */}
//             {isOpen && (
//               <ul className="p-4 pl-8 flex flex-col gap-1 bg-gray-50 rounded-b-md">
//                 {experience.jobRoles.map((role, index) => (
//                   <li key={index} className="list-disc text-gray-700">
//                     {role}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )).reverse()}

//         {/* Desktop Grid */}
//         {/* <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 text-white">
//           {techs.map(({ id, src, name, style, level }) => (
//             <div
//               key={id}
//               className={`group relative bg-gray-800 rounded-lg hover:bg-gray-700 
//                 transition-all duration-300 transform hover:-translate-y-2 ${style}`}
//             >
//               <div className="flex justify-between">
//                 <span></span>
//               <span className="px-3 py-1 text-sm font-medium bg-[#7F1F9A] rounded-bl-md rounded-tr-lg">
//                   {level}
//                 </span>
//               </div>
//               <div className="flex flex-col items-center p-6">
//                 <img
//                   src={src}
//                   alt={name}
//                   className="w-16 mb-4 transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <h3 className="text-lg font-semibold">{name}</h3>
//               </div>
//             </div>
//           ))}
//         </div> */}

//         {/* Mobile Carousel */}
//         {/* <div className="md:hidden">
//           <div className="grid grid-cols-2 gap-6 pb-6">
//             {techs.map(({ id, src, name, style, level }) => (
//               <div
//                 key={id}
//                 className={`flex-shrink-0 w-auto bg-gray-800 rounded-lg ${style}`}
//               >
//                 <div className="flex justify-between">
//                 <span></span>
//               <span className="px-3 py-1 text-sm font-medium text-white bg-[#7F1F9A] rounded-bl-md rounded-tr-lg">
//                   {level}
//                 </span>
//               </div>
//                 <div className="flex flex-col items-center p-3">
//                   <img src={src} alt={name} className="w-11 mb-3" />
//                   <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Experience;





import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";

const Experience = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific item by id
    }));
  };

  const experiences = [
    {
      id: 1,
      role: "Mobile Developer",
      company: "Psilocybin",
      jobRoles: [
        "Developed a barter trading mobile app called NaijaBarter using Flutter and Firebase, enabling users to exchange goods and services without cash.",
        "Implemented a secure authentication system with Firebase Authentication for user registration and login.",
        "Integrated real-time chat functionality to facilitate smooth communication between users.",
        "Added push notifications to keep users informed of trade offers, new chats and updates.",
        "Utilized Firestore to store and manage user data efficiently with real-time updates.",
        "Ensured scalability and performance optimization through efficient state management with Riverpod.",
      ],
    },
    {
      id: 2,
      role: "Mobile Developer (Team Demerzel)",
      company: "HNG-X (2023)",
      jobRoles: [
        "Developed and optimized mobile applications, focusing on performance, responsiveness, and scalability.",
        "Collaborated with designers, backend developers, and project managers to deliver high-quality solutions within tight deadlines.",
        "Gained hands-on experience in Agile methodologies, version control (Git), and CI/CD pipelines.",
        "Successfully completed several milestone projects, demonstrating problem-solving skills and technical proficiency.",
      ],
    },
    {
      id: 3,
      role: "Mobile Engineer",
      company: "Attainbase ERP",
      jobRoles: [
        "Developed a comprehensive ERP mobile application using Flutter and Isar for offline-first data management, enabling businesses to track inventory, manage employees, and generate reports seamlessly. Integrated Riverpod for efficient state management.",
        
      ],
    },
    {
      id: 4,
      role: "Mobile Developer",
      company: "KekeDrop",
      jobRoles: [
        "Developed a Flutter-based ride-hailing application with Google Maps integration, real-time tracking, and payment gateway support.",
        "Implemented features such as driver and passenger matching, ride history, and push notifications to enhance user experience.",
        "Built a driver app for drivers to manage rides and with Flutter",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-800 py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-white">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="py-4 md:py-6">My Work Experience</p>
        </div>
        {experiences
          .map((experience) => (
            <div key={experience.id} className="mb-4">
              {/* Collapsed view */}
              <div
                className={`flex justify-between items-center p-4 bg-gray-700 cursor-pointer ${
                  openItems[experience.id] ? "rounded-t-md" : "rounded-md"
                }`}
                onClick={() => toggleItem(experience.id)}
              >
                <span className="font-semibold text-white">
                  {experience.role} at {experience.company}
                </span>
                <span
                  className={`transform transition-transform duration-200 text-white text-lg ${
                    openItems[experience.id] ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <LuChevronRight />
                </span>
              </div>

              {/* Expanded view */}
              {openItems[experience.id] && (
                <ul className="p-4 pl-8 flex flex-col gap-1 bg-gray-50 rounded-b-md">
                  {experience.jobRoles.map((role, index) => (
                    <li key={index} className="list-disc text-gray-700">
                      {role}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Experience;
