import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DecryptionText from "./DecryptionText";

const Home = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaWhatsapp size={22} />
          WhatsApp
        </>
      ),
      href: "https://wa.me/+23409063203950",
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={22} />
          LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/henry-unegbu-832838254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          <FaGithub size={22} />
          Github
        </>
      ),
      href: "https://github.com/Henryikenna",
    },
    {
      id: 4,
      child: (
        <>
          <FaXTwitter size={22} />
          Twitter/X
        </>
      ),
      href: "https://x.com/henryoncode",
    },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={22} />
          E-mail
        </>
      ),
      href: "mailto:ikennaunegbu10@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          <BsFillPersonLinesFill size={22} />
          Resume
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <div className="firstSection min-h-dvh w-full relative" name="home">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C1C1C] pointer-events-none"></div>
      <div className="flex flex-col items-center justify-center min-h-dvh bg-black bg-opacity-0 relative md:bg-opacity-25 lg:justify-center">
        <img src={HeroImage} alt="" className="w-44 h-44 rounded-full object-cover object-top aspect-square bg-[#7F1F9A] mb-4 md:w-52 md:h-52" />
        
        
        <DecryptionText />
        
        <h4 className=" text-gray-300 font-medium text-sm text-center py-1 max-w-[80%] md:font-semibold md:max-w-xl md:py-3 md:text-lg">

        A Software Developer delivering production-ready web and mobile solutions that drive business growth and user engagement.
        </h4>

        
        

        <div className=" ">
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 mt-4 flex items-center rounded-md bg-gradient-to-r from-[#7F1F9A] to-gray-950
            cursor-pointer "
          >
            Portfolio{" "}
            <span className=" rotate-90 md:rotate-0 md:group-hover:rotate-90 duration-300 ">
              <MdOutlineKeyboardArrowRight className=" ml-1" size={22} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
