import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { TbExternalLink } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import amiriCar from "../assets/portfolio/amiriCar.jpeg";
import anirivic from "../assets/portfolio/anirivic.jpeg";
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
import caseradar from "../assets/portfolio/caseradar.png";
import caseradarMobile from "../assets/portfolio/caseradarMobile.png";
import segwaeApp from "../assets/portfolio/segwaeApp.jpg";
import webDerk from "../assets/portfolio/webDerk.png";
import grammar234 from "../assets/portfolio/grammar234.png";
import screenguard from "../assets/portfolio/screenguard.jpg";
import chip from "../assets/portfolio/chip.png";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const cardRefs = useRef([]);

  useEffect(() => {
    if (selectedProject) {
      requestAnimationFrame(() => setIsPanelVisible(true));
    }
  }, [selectedProject]);

  const closeProjectPanel = () => {
    setIsPanelVisible(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const projectsData = [
    {
      id: 101,
      title: "Case Radar",
      type: "web",
      description:
        "AI-powered legal research platform connecting clients with qualified attorneys. Developed comprehensive frontend architecture for web and mobile, serving 1,000+ downloads with intelligent case matching and lawyer discovery.",
      technologies: ["React", "TailwindCSS"],
      image: caseradar,
      demo: "https://caseradar.ai/",
      code: "",
    },
    {
      id: 106,
      title: "ScreenGuard",
      type: "mobile",
      isPersonal: true,
      description:
        "Android utility app that places a translucent, touch-proof overlay over your screen so audio and video keep playing uninterrupted — no accidental taps from pockets or bags. Unlock with a U-shape swipe gesture. No background processes, no data collection, no internet required.",
      technologies: ["Flutter", "Dart"],
      image: screenguard,
      demo: "https://play.google.com/store/apps/details?id=com.screenguard.app",
      code: "",
    },
    {
      id: 102,
      title: "Case Radar Mobile",
      type: "mobile",
      description:
        "Mobile companion to Case Radar's legal platform, bringing AI-powered legal research and attorney connections to iOS and Android. Implements responsive UI with seamless synchronization and offline capabilities.",
      technologies: ["Flutter", "Dart"],
      image: caseradarMobile,
      demo: "https://play.google.com/store/apps/details?id=ai.caseradar.app",
      code: "",
    },
    {
      id: 103,
      title: "Segwae",
      type: "mobile",
      isStartup: true,
      description:
        "Founded innovative digital networking solution combining software and hardware. Platform enables users to create shareable web profiles and manage social media presence, integrated with custom NFC/QR business cards.",
      technologies: ["Flutter", "Next.js", "Supabase", "NFC Technology"],
      image: segwaeApp,
      demo: "https://segwae.com",
      code: "",
    },
    {
      id: 200,
      title: "Chess in Public",
      type: "web",
      isStartup: true,
      description:
        "A platform bringing chess culture into everyday public life — making the game accessible, social, and engaging for players of all skill levels. Features tools for connecting local players.",
      technologies: ["Next.js", "TailwindCSS", "Supabase"],
      image: chip,
      demo: "https://chessinpublic.com",
      code: "",
    },
    {
      id: 105,
      title: "234Grammar",
      type: "web",
      isStartup: true,
      description:
        "Culturally-aware grammar and style checker built for Nigerian and West African English. Supports Nigerian English, Standard English, and Pidgin — validating expressions that standard tools incorrectly flag. Features cloud sync, document history, multi-format export, and Naira-based pricing.",
      technologies: ["Next.js", "TailwindCSS", "Supabase"],
      image: grammar234,
      demo: "https://234grammar.com/",
      code: "",
    },
    {
      id: 104,
      title: "WebDerk",
      type: "web",
      description:
        "E-commerce platform specialising in digital subscription services. Developed user-friendly interface with secure payment integration, subscription management, and automated delivery systems.",
      technologies: ["React", "JavaScript", "TailwindCSS", "Supabase"],
      image: webDerk,
      demo: "https://webderk.org",
      code: "",
    },
    {
      id: 1,
      title: "Amari Cars Clone",
      type: "web",
      isPersonal: true,
      description:
        "Modern recreation of premium automotive website featuring responsive design and optimised user experience. Demonstrates proficiency in semantic HTML and advanced CSS techniques.",
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
        "Peer-to-peer trading platform enabling cashless transactions through item exchanges. Features real-time chat, push notifications, and secure authentication serving a growing user community.",
      technologies: ["Flutter", "Dart", "Riverpod"],
      image: nbDemoVideo,
      demo: "https://drive.google.com/file/d/1SSZISriaTz8daILLb8OvMUxnUu7bUCZr/view",
      code: "https://github.com/Henryikenna/naijabarterapp",
    },
    {
      id: 3,
      title: "Business Conference Flyer",
      type: "graphics",
      technologies: ["Canva"],
      image: conferenceFlyer,
      demo: "",
      code: "",
    },
    {
      id: 4,
      title: "Monarc",
      isPersonal: true,
      titleAddonTitle: "Post on X",
      titleAddonURL: "https://x.com/henryoncode/status/1818310259875762461",
      type: "web",
      description:
        "Cryptocurrency trading platform developed in collaboration with UI/UX designer @markuiux. Features responsive design, real-time market data visualisation, and optimised performance for financial transactions.",
      technologies: ["React JS", "TailwindCSS", "JavaScript"],
      image: monarc,
      demo: "https://monarc.vercel.app/",
      code: "https://github.com/Henryikenna/monarc",
    },
    {
      id: 5,
      title: "Pico",
      type: "mobile",
      isPersonal: true,
      description:
        "AI-powered productivity tool with innovative overlay interface enabling cross-app AI assistance. Integrates OpenAI API with Firebase backend for seamless intelligent functionality accessible from any screen.",
      technologies: ["Flutter", "Dart", "Riverpod", "Firebase", "OpenAI API"],
      image: picoAppReview,
      demo: "https://www.linkedin.com/posts/henry-unegbu-832838254_flutter-firebase-ugcPost-7254965470720614400-2Nth",
      code: "https://github.com/Henryikenna/Pico",
    },
    {
      id: 6,
      title: "Business Card Design",
      type: "graphics",
      technologies: ["Canva"],
      image: dilBusCard,
      demo: "",
      code: "",
    },
    {
      id: 7,
      title: "Sunlit Caribbean Estate",
      type: "web",
      isPersonal: true,
      description:
        "Luxury vacation rental platform built with Next.js featuring property listings, advanced search filters, and optimised SEO. Delivers fast page loads and seamless booking experience for premium clientele.",
      technologies: ["Next.js", "TailwindCSS", "TypeScript"],
      image: sunlit,
      demo: "https://sunlit-caribbean-estate.vercel.app/",
      code: "https://github.com/Henryikenna/sunlit-estate-website",
    },
    {
      id: 8,
      title: "Eazilink",
      isPersonal: true,
      titleAddonTitle: "My profile",
      titleAddonURL: "https://eazilink.com/qr/DHSXENIPnY0s7wVRDnlW",
      type: "mobile",
      description:
        "Professional networking platform consolidating social media profiles with shareable web links and QR codes. Features AI-powered resume analysis using Anthropic API, animated UI with Rive, and Firebase cloud integration.",
      technologies: ["Flutter", "Dart", "Riverpod", "Firebase", "Rive", "Anthropic API"],
      image: eazilink,
      demo: "https://drive.google.com/drive/folders/17OpKLL4gizLH9RT9Hx-f8XBiBBlpoAEw",
      code: "https://github.com/Eazi-Link/Eazilink",
    },
    {
      id: 10,
      title: "Disney Website Clone",
      type: "web",
      isPersonal: true,
      description:
        "Entertainment streaming platform interface recreation featuring dynamic content fetching from TheMovieDB API. Demonstrates advanced React patterns, API integration, and responsive media-rich layouts.",
      technologies: ["React JS", "TailwindCSS", "TheMovieDB API", "Axios"],
      image: disneyClone,
      demo: "https://disney-clone-henryoncode.vercel.app/",
      code: "https://github.com/Henryikenna/disney-clone-react-app",
    },
    {
      id: 11,
      title: "PropertyPro",
      type: "mobile",
      isPersonal: true,
      description:
        "Real estate property discovery application developed with UI/UX designer @Seky_t. Features intuitive property browsing, advanced filters, and optimised mobile performance.",
      technologies: ["Flutter", "Dart"],
      image: propertyPro,
      demo: "https://x.com/henryoncode/status/1740171358213197929",
      code: "https://github.com/Henryikenna/property_pro_app",
    },
    {
      id: 13,
      title: "Star Powr",
      type: "web",
      isPersonal: true,
      description:
        "Corporate website solution for agencies and businesses featuring modern design, smooth animations, and conversion-optimised layouts. Built with performance and scalability in mind.",
      technologies: ["React JS", "TailwindCSS"],
      image: starPowr,
      demo: "https://star-powr.vercel.app/",
      code: "https://github.com/Henryikenna/star_powr",
    },
    {
      id: 14,
      title: "Object Detector (TFLite)",
      type: "mobile",
      isPersonal: true,
      description:
        "Real-time object detection mobile application powered by TensorFlow Lite. Demonstrates machine learning integration in Flutter with camera processing for intelligent object recognition.",
      technologies: ["Flutter", "Dart", "TensorFlow"],
      image: aiObjectDetector,
      demo: "https://www.linkedin.com/posts/henry-unegbu-832838254_flutter-tflite-ai-activity-7270122097920671745-zWfB",
      code: "https://github.com/Henryikenna/TFlite-AI-Object-Detector",
    },
    {
      id: 16,
      title: "Aniri Vinchgrine",
      type: "web",
      isPersonal: true,
      description:
        "Property listing website showcasing residential real estate with a clean, user-friendly interface. Emphasises visual presentation and easy navigation for property seekers.",
      technologies: ["HTML", "CSS"],
      image: anirivic,
      demo: "https://aniri-vinchgrine.vercel.app/",
      code: "https://github.com/Henryikenna/Aniri-Vinchgrine/",
    },
  ];

  const projects = {
    all: projectsData,
    web: projectsData.filter((p) => p.type === "web"),
    mobile: projectsData.filter((p) => p.type === "mobile"),
    graphics: projectsData.filter((p) => p.type === "graphics"),
  };

  const rowsPerPage = 3;
  const tabs = ["all", "web", "mobile", "graphics"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => prev + direction);
  };

  const paginatedProjects = projects[activeTab].slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const handleViewClick = (image) => setFullscreenImage(image);
  const closeFullscreen = () => setFullscreenImage(null);
  const handleProjectClick = (project) => setSelectedProject(project);

  const totalPages = Math.ceil(projects[activeTab].length / rowsPerPage);

  return (
    <div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        {/* Tabs — vertical on desktop */}
        <div className="flex gap-2 md:flex-col md:gap-1 md:w-24 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-left font-mono text-[10px] uppercase tracking-widest px-3 py-2 transition-all duration-200 ${
                activeTab === tab
                  ? "text-gold border-l-2 border-gold bg-gold/5"
                  : "text-warm-white/25 border-l-2 border-transparent hover:text-warm-white/50 hover:border-[#2a2a2a]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative bg-surface border border-[#1e1e1e] hover:border-[#2e2e2e] overflow-hidden transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-surface-2">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#0e0e0e]">
                      <span className="font-display text-7xl text-gold/10 select-none">♟</span>
                    </div>
                  )}
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300" />
                </div>

                {/* Type tag */}
                <div className="px-4 pt-3 pb-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold/50">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 pt-1">
                  <div className="flex items-start gap-2 flex-wrap mb-2">
                    <h3 className="font-display text-lg text-warm-white/85 group-hover:text-warm-white transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    {project.isStartup && (
                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 bg-gold/10 text-gold/70 shrink-0 mt-1">
                        Startup
                      </span>
                    )}
                    {project.isPersonal && (
                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 bg-[#1e1e1e] text-warm-white/30 shrink-0 mt-1">
                        Personal
                      </span>
                    )}
                    {project.titleAddonTitle && (
                      <a
                        href={project.titleAddonURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-gold/40 hover:text-gold/70 transition-colors duration-200 mt-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.titleAddonTitle} <TbExternalLink size={10} />
                      </a>
                    )}
                  </div>

                  <p
                    className="text-warm-white/65 text-xs leading-relaxed mb-3"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="custom-projects-scrollbar flex gap-1.5 mb-4 pb-1 overflow-x-auto whitespace-nowrap">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 bg-[#181818] text-warm-white/50 shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.type === "graphics" ? (
                      <button
                        onClick={() => handleViewClick(project.image)}
                        className="font-mono text-[10px] uppercase tracking-wider px-4 py-2 border border-[#2a2a2a] text-warm-white/40 hover:border-gold/40 hover:text-gold transition-all duration-200"
                      >
                        View
                      </button>
                    ) : (
                      <>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-wider px-4 py-2 border border-gold/40 text-gold/70 hover:bg-gold hover:border-gold hover:text-ink transition-all duration-200"
                          >
                            Demo
                          </a>
                        )}
                        {project.code && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-wider px-4 py-2 border border-[#2a2a2a] text-warm-white/55 hover:border-[#3a3a3a] hover:text-warm-white/80 transition-all duration-200"
                          >
                            Code
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#1a1a1a]">
            <button
              className={`flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                currentPage === 0
                  ? "text-warm-white/15 cursor-not-allowed"
                  : "text-warm-white/60 hover:text-gold cursor-pointer"
              }`}
              onClick={() => handlePageChange(-1)}
              disabled={currentPage === 0}
            >
              <MdOutlineKeyboardArrowLeft size={14} /> Prev
            </button>

            <span className="font-mono text-[10px] text-warm-white/20">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              className={`flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest transition-all duration-200 ${
                currentPage >= totalPages - 1
                  ? "text-warm-white/15 cursor-not-allowed"
                  : "text-warm-white/60 hover:text-gold cursor-pointer"
              }`}
              onClick={() => handlePageChange(1)}
              disabled={currentPage >= totalPages - 1}
            >
              Next <MdOutlineKeyboardArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen image */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-ink/95 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <img src={fullscreenImage} alt="Fullscreen" className="max-w-full max-h-full p-8" />
          <button className="absolute top-6 right-6 text-warm-white/40 hover:text-gold transition-colors duration-200">
            <IoMdClose size={28} />
          </button>
        </div>
      )}

      {/* Slide-in project detail panel */}
      {selectedProject &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-ink/70 z-50 transition-opacity duration-300"
              onClick={closeProjectPanel}
            />
            <div
              className={`fixed top-0 right-0 h-full w-full md:w-2/3 lg:w-[45%] bg-[#0c0c0c] border-l border-[#1e1e1e] shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ease-out ${
                isPanelVisible ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={closeProjectPanel}
                className="absolute top-5 right-5 text-warm-white/30 hover:text-gold transition-colors duration-200 z-10"
              >
                <IoMdClose size={22} />
              </button>

              <div className="p-7 md:p-10">
                {/* Image */}
                <div className="relative w-full h-56 md:h-72 overflow-hidden mb-8 bg-surface-2">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#0e0e0e]">
                      <span className="font-display text-9xl text-gold/8 select-none">♟</span>
                    </div>
                  )}
                </div>

                {/* Header */}
                <div className="mb-7">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold/50 block mb-2">
                    {selectedProject.type}
                  </span>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h2 className="font-display text-3xl md:text-4xl text-warm-white">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.isStartup && (
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-gold/10 text-gold/70">
                        Startup
                      </span>
                    )}
                    {selectedProject.isPersonal && (
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#1e1e1e] text-warm-white/30">
                        Personal
                      </span>
                    )}
                  </div>
                  <span className="gold-line block mt-3 max-w-xs" />
                </div>

                {/* Description */}
                {selectedProject.description && (
                  <div className="mb-7">
                    <span className="section-eyebrow mb-3">About</span>
                    <p className="text-warm-white/75 leading-relaxed text-sm">
                      {selectedProject.description}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <span className="section-eyebrow mb-3">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-[#2a2a2a] text-warm-white/65"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 flex-wrap">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] text-center font-mono text-[11px] uppercase tracking-widest px-6 py-3 border border-gold/60 text-gold hover:bg-gold hover:border-gold hover:text-ink transition-all duration-300"
                    >
                      View Demo
                    </a>
                  )}
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] text-center font-mono text-[11px] uppercase tracking-widest px-6 py-3 border border-[#2a2a2a] text-warm-white/60 hover:border-[#3a3a3a] hover:text-warm-white/85 transition-all duration-300"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};

export default ProjectShowcase;
