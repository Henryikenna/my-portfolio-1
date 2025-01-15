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
  // const links = [
  //   {
  //     id: 1,
  //     child: (
  //       <>
  //         <FaLinkedin size={25} />
  //         LinkedIn
  //       </>
  //     ),
  //     href: "https://linkedin.com/in/henry-unegbu-832838254/",
  //   },
  //   {
  //     id: 2,
  //     child: (
  //       <>
  //         <FaGithub size={25} />
  //         Github
  //       </>
  //     ),
  //     href: "https://github.com/Henryikenna/",
  //   },
  //   {
  //     id: 3,
  //     child: (
  //       <>
  //         <HiOutlineMail size={25} />
  //         E-mail
  //       </>
  //     ),
  //     href: "mailto:ikennaunegbu10@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     child: (
  //       <>
  //         <BsFillPersonLinesFill size={25} />
  //         Resume
  //       </>
  //     ),
  //     href: "/resume.pdf",
  //     download: true,
  //   },
  // ];

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
    <div className="firstSection h-dvh w-full relative" name="home">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C1C1C] pointer-events-none"></div>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-0 relative md:bg-opacity-25 lg:justify-center">
        <img src={HeroImage} alt="" className="w-44 rounded-full bg-[#7F1F9A] mb-4 md:w-52" />
        {/* <h2 className=" text-2xl font-light text-white mt-20 md:text-6xl md:mt-[20%] lg:mt-[10%]"> */}
        {/* <h2 className=" text-2xl font-light text-white mt-4 md:text-4xl">
          Hello, I'm
        </h2>
        <h1 className=" text-white font-extrabold text-xl py-1 max-w-7xl md:py-1 md:text-5xl">
          Henry Unegbu
        </h1> */}
        <DecryptionText />
        {/* <h4 className=" text-gray-300 font-normal text-sm text-center py-1 max-w-xl md:py-3 md:text-sm">
        I'm a versatile Software Developer with 3+ years of experience turning innovative ideas into impactful web and mobile solutions, specializing in React, Dart, Flutter, and Firebase to craft seamless, scalable user experiences.
        </h4> */}
        <h4 className=" text-gray-300 font-medium text-sm text-center py-1 max-w-[80%] md:font-semibold md:max-w-xl md:py-3 md:text-lg">
        {/* I'm a Software Developer.
          <br /> */}
        I'm a Software Developer specialized in building ready-to-deploy websites and mobile applications.
        </h4>

        {/* <div className="grid flex-wrap grid-cols-3 gap-3 items-end py-3 px-3 my-3 rounded-md bg-[#7F1F9A] bg-opacity-50 lg:hidden">
          {links.map(({ id, child, href, download }) => (
            <a
              key={id}
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white flex flex-col items-center text-sm gap-1"
            >
              {child}
            </a>
          ))}
        </div> */}
        {/* <div
          // className="grid flex-wrap grid-cols-3 gap-3 items-end py-3 px-3 my-3 rounded-md bg-[#7F1F9A] bg-opacity-50 lg:hidden"
          className="grid flex-wrap grid-cols-3 items-end py-3 px-3 my-3 rounded-md bg-[#7F1F9A] bg-opacity-50 lg:hidden"
          style={{
            borderCollapse: "separate",
            borderSpacing: "0", // Ensure no extra space between cells
          }}
        >
          {links.map(({ id, child, href, download }, index) => (
            <a
              key={id}
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white flex flex-col items-center text-sm gap-1 p-3 border ${
                // index % 3 === 2 ? "border-r-0 border-l-0" : "" // Remove right border on the last column
                index % 3 === 3 ? "border-r-0 border-l-0" : "" // Remove right border on the last column
              } ${
                // Math.floor(index / 3) === Math.floor((links.length - 1) / 3)
                //   ? "border-b-0 border-t-0"
                index % 3 === 3 ? "border-b-0 border-t-0" : "" // Remove bottom border on the last row
              }`}
              style={{
                borderColor: "rgba(255, 255, 255, 0.3)", // Adjust border color
              }}
            >
              {child}
            </a>
          ))}
        </div> */}
        {/* <div
          // className="grid flex-wrap grid-cols-3 items-end py-3 px-3 my-3 rounded-md bg-[#7F1F9A] bg-opacity-50 lg:hidden"
          className="grid flex-wrap grid-cols-3 items-end py-1 px-1 my-3 rounded-md bg-[#7F1F9A] bg-opacity-50 md:hidden"
          style={{
            borderCollapse: "separate",
            borderSpacing: "0", // Ensure no extra space between cells
          }}
        >
          {links.map(({ id, child, href, download }, index) => (
            <a
              key={id}
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white flex flex-col items-center text-sm gap-1 p-3 border ${
                index % 3 === 0 ? "border-l-0" : ""
              } ${index % 3 === 2 ? "border-r-0" : ""} ${
                Math.floor(index / 3) === 0 ? "border-t-0" : ""
              } ${
                Math.floor(index / 3) === Math.floor((links.length - 1) / 3)
                  ? "border-b-0"
                  : ""
              }`}
              style={{
                borderColor: "rgba(255, 255, 255, 0.3)", // Adjust border color
              }}
            >
              {child}
            </a>
          ))}
        </div> */}

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
