import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "portfolio", label: "Work" },
    { id: 3, link: "experience", label: "Experience" },
    { id: 4, link: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-ink border-t border-[#151515]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-baseline gap-0.5">
          <span className="font-mono text-sm text-warm-white/35">H</span>
          <span className="font-mono text-sm text-gold/50">.</span>
          <span className="font-mono text-sm text-warm-white/35">U</span>
          <span className="font-mono text-[10px] text-warm-white/30 ml-4">
            © {new Date().getFullYear()} Henry Unegbu
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="font-mono text-[10px] uppercase tracking-widest text-warm-white/35 hover:text-gold/60 transition-colors duration-300 cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
