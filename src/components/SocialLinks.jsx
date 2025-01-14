import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          WhatsApp <FaWhatsapp size={27} />
        </>
      ),
      href: "https://wa.me/+23409063203950",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={27} />
        </>
      ),
      href: "https://www.linkedin.com/in/henry-unegbu-832838254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={27} />
        </>
      ),
      href: "https://github.com/Henryikenna",
    },
    {
      id: 4,
      child: (
        <>
          Twitter/X <FaXTwitter size={27} />
        </>
      ),
      href: "https://x.com/henryoncode",
    },
    {
      id: 5,
      child: (
        <>
          E-mail <HiOutlineMail size={27} />
        </>
      ),
      href: "mailto:ikennaunegbu10@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={27} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul className="">
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-[#7F1F9A] bg-opacity-50 cursor-pointer hover:ml-[-5px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href} download={download} target="_blank" rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
