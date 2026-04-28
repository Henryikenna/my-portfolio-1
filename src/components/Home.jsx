import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import DecryptionText from "./DecryptionText";

const Home = () => {
  const stats = [
    { value: "3+", label: "Years Exp." },
    { value: "16+", label: "Projects" },
    { value: "7+", label: "Companies" },
  ];

  const mobileLinks = [
    { id: 1, icon: <FaWhatsapp size={18} />, href: "https://wa.me/+23409063203950" },
    { id: 2, icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/henry-unegbu-832838254" },
    { id: 3, icon: <FaGithub size={18} />, href: "https://github.com/Henryikenna" },
    { id: 4, icon: <FaXTwitter size={18} />, href: "https://x.com/henryoncode" },
    { id: 5, icon: <HiOutlineMail size={18} />, href: "mailto:ikennaunegbu10@gmail.com" },
  ];

  return (
    <div className="relative min-h-dvh w-full mt-10 flex flex-col bg-ink overflow-hidden" name="home">
      {/* Ambient glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 md:px-12 lg:px-24 max-w-screen-xl mx-auto w-full pt-24 pb-10 md:pt-0 md:pb-0 gap-12 md:gap-0">

        {/* Profile image */}
        <div className="md:w-2/5 flex justify-center md:justify-start shrink-0">
          <div className="relative group">
            {/* Gold corner brackets */}
            <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-gold/50 transition-all duration-500 group-hover:border-gold" />
            <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-gold/20 transition-all duration-500 group-hover:border-gold/50" />
            <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-gold/50 transition-all duration-500 group-hover:border-gold" />
            <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-gold/20 transition-all duration-500 group-hover:border-gold/50" />

            <img
              src={HeroImage}
              alt="Henry Unegbu"
              className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              style={{
                clipPath: "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)",
              }}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="md:w-3/5 md:pl-14 lg:pl-20 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="section-eyebrow mb-4">Software Developer</span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-warm-white leading-none mb-1">
            Henry
          </h1>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-gold leading-none mb-5">
            Unegbu
          </h1>

          <DecryptionText />

          <div className="gold-line w-24 my-5" />

          <p className="text-warm-white/65 text-sm md:text-base max-w-sm leading-relaxed mb-8">
            Building web & mobile frontends that are fast, precise, and remembered.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-5 mb-10">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center gap-2 px-6 py-3 border border-gold/60 text-gold font-mono text-[11px] uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-ink transition-all duration-300 cursor-pointer"
            >
              View Work
              <MdOutlineKeyboardArrowRight
                className="group-hover:translate-x-0.5 transition-transform duration-300"
                size={15}
              />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="font-mono text-[11px] uppercase tracking-widest text-warm-white/30 hover:text-gold transition-colors duration-300 underline underline-offset-4 decoration-warm-white/20 hover:decoration-gold/50"
            >
              Resume
            </a>
          </div>

          {/* Mobile social icons */}
          <div className="flex items-center md:hidden gap-5">
            {mobileLinks.map(({ id, icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-warm-white/25 hover:text-gold transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto flex justify-center md:justify-start">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center py-5 px-8 md:px-14 ${
                i < stats.length - 1 ? "border-r border-[#1a1a1a]" : ""
              }`}
            >
              <span className="font-display text-2xl text-gold">{stat.value}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-warm-white/45 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
