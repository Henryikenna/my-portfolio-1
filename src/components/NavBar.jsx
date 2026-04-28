import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about me", label: "About" },
    { id: 3, link: "portfolio", label: "Work" },
    { id: 4, link: "technologies", label: "Stack" },
    { id: 5, link: "experience", label: "Experience" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-6 md:px-10 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer flex items-baseline gap-0">
          <span className="font-mono text-sm text-warm-white/40">H</span>
          <span className="font-mono text-sm text-gold">.</span>
          <span className="font-mono text-sm text-warm-white/40">U</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-warm-white/35 hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden text-warm-white/50 hover:text-gold transition-colors z-10"
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes size={19} /> : <FaBars size={19} />}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {nav && (
        <div className="fixed inset-0 bg-ink flex flex-col items-center justify-center md:hidden">
          {/* Decorative corner */}
          <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-gold/20" />
          <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-gold/20" />

          <ul className="flex flex-col items-center gap-7">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="font-display text-4xl text-warm-white/60 hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
