import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2023 Henry Unegbu. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#home" className="hover:text-[#7F1F9A]">Home</a>
          <a href="#about" className="hover:text-[#7F1F9A]">About</a>
          <a href="#portfolio" className="hover:text-[#7F1F9A]">Portfolio</a>
          <a href="#contact" className="hover:text-[#7F1F9A]">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 