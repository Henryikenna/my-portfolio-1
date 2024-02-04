import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
          LinkedIn
        </>
      ),
      href: "https://linkedin.com/in/henry-unegbu-832838254",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
          Github
        </>
      ),
      href: "https://github.com/Henryikenna",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={25} />
          E-mail
        </>
      ),
      href: "mailto:ikennaunegbu10@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={25} />
          Resume
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <div
      className=" h-dvh w-full bg-gradient-to-b from-black via-gray-950 to-gray-800"
      name="home"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-dvh px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl font-bold text-white md:text-7xl">
            I'm a Frontend Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-7xl">
            I have 3 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind and NextJS, and mobile applications with
            Flutter, Dart and Firebase.
          </p>

          <div className="flex justify-between items-center py-3 lg:hidden">
            {links.map(({ id, child, href, download }) => (
              <a
                key={id}
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                className=" text-white flex flex-col items-center text-sm gap-1"
              >
                {child}
              </a>
            ))}
          </div>

          <div className=" ">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-gray-800 via-slate-900 to-gray-950
              cursor-pointer "
            >
              Portfolio{" "}
              <span className=" rotate-90 md:rotate-0 md:group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight className=" ml-1" size={22} />
              </span>
            </Link>
          </div>
        </div>

        <div className=" -mt-[20%] md:mt-0">
          <img
            className=" rounded-2xl mx-auto w-2/4 object-cover md:w-full"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
