import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {

const [nav, setNav] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about me",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "technologies",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact",
    },
  ];


  useEffect(() => { const handleScroll = () => { if (window.scrollY > 0) { setIsScrolled(true); } else { setIsScrolled(false); } }; window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);

  return (
    // <nav className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-40 bg-opacity-30 backdrop-filter backdrop-blur-lg">
    // <nav className="flex justify-center items-center w-full h-20 text-white fixed bg-black px-4 z-40 bg-opacity-30 backdrop-filter backdrop-blur-lg">
    <nav className={`flex justify-end items-center w-full h-20 text-white fixed px-4 z-50 transition-colors duration-300 md:justify-center ${isScrolled ? "bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg" : "bg-transparent"}`}>
      {/* <div className="">
        <h1 className=" text-5xl font-signature ml-2">Henry</h1>
      </div> */}

      {/* LANDSCAPE */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>


        {/* POTRAIT */}
      <div onClick={() => setNav(!nav)} className={`cursor-pointer z-10 flex justify-end items-end md:hidden ${isScrolled ? "text-white pr-2" : "bg-black text-white p-2 rounded-full"}`}>
        {nav ? <FaTimes size={27} /> : <FaBars size={27} />}
      </div>

      {nav && (
        // <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#7F1F9A] to-gray-950 text-white">
        {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}

      
    </nav>
  );
};

export default NavBar;
