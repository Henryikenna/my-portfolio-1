import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "WhatsApp",
      icon: <FaWhatsapp size={15} />,
      href: "https://wa.me/+23409063203950",
      style: "rounded-tr-sm",
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: <FaLinkedin size={15} />,
      href: "https://www.linkedin.com/in/henry-unegbu-832838254",
    },
    {
      id: 3,
      label: "GitHub",
      icon: <FaGithub size={15} />,
      href: "https://github.com/Henryikenna",
    },
    {
      id: 4,
      label: "Twitter/X",
      icon: <FaXTwitter size={15} />,
      href: "https://x.com/henryoncode",
    },
    {
      id: 5,
      label: "Email",
      icon: <HiOutlineMail size={15} />,
      href: "mailto:ikennaunegbu10@gmail.com",
    },
    {
      id: 6,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={15} />,
      href: "/resume.pdf",
      style: "rounded-br-sm",
      download: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, label, icon, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-36 h-11 px-4 ml-[-104px] bg-[#0e0e0e] border border-[#222] border-r-0 cursor-pointer hover:ml-[-4px] transition-all duration-300 hover:bg-surface-2 ${style || ""}`}
          >
            <a
              className="flex justify-between items-center w-full text-warm-white/55 hover:text-gold transition-colors duration-300"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest">{label}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
