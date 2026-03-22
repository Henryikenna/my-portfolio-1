import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import FadeInSection from "./FadeInSection";

const Contact = () => {

   const links = [
      {
        id: 1,
        child: <FaWhatsapp size={25} />,
        href: "https://wa.me/+23409063203950",
      },
      {
        id: 2,
        child: <FaLinkedin size={25} />,
        href: "https://www.linkedin.com/in/henry-unegbu-832838254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        id: 3,
        child: <FaGithub size={25} />,
        href: "https://github.com/Henryikenna",
      },
      {
        id: 4,
        child: <FaXTwitter size={25} />,
        href: "https://x.com/henryoncode",
      },
      {
        id: 5,
        child: <HiOutlineMail size={25} />,
        href: "mailto:ikennaunegbu10@gmail.com",
      },
      {
        id: 6,
        child: <BsFillPersonLinesFill size={25} />,
        href: "/resume.pdf",
        download: true,
      },
    ];


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name === "",
      email: formData.email === "" || !validateEmail(formData.email),
      message: formData.message === ""
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      setIsSubmitting(true);
      e.target.submit();
    }
  };

  return (
    <div name="contact" className="w-full min-h-dvh bg-gradient-to-b from-gray-800 via-gray-950 to-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <FadeInSection>
          <div className="pb-2 md:pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-5 md:py-6">Submit the form below to get in touch with me.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} action="https://getform.io/f/eapddkra" method="POST" className="flex flex-col w-full md:w-1/2">
              <section className="flex flex-col gap-y-4">
                <input
                  className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-[#7F1F9A] transition-colors duration-300 ${errors.name ? 'border-red-500 shake' : 'border-gray-500'}`}
                  name="name"
                  type="text"
                  placeholder="Please enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="text-red-500 text-sm -mt-3">Name is required</span>}

                <input
                  className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-[#7F1F9A] transition-colors duration-300 ${errors.email ? 'border-red-500 shake' : 'border-gray-500'}`}
                  name="email"
                  type="email"
                  placeholder="Please enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="text-red-500 text-sm -mt-3">Valid email is required</span>}

                <textarea
                  className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-[#7F1F9A] transition-colors duration-300 resize-none ${errors.message ? 'border-red-500 shake' : 'border-gray-500'}`}
                  name="message"
                  placeholder="Please enter your message"
                  rows="8"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm -mt-3">Message is required</span>}
              </section>

              <button
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-[#7F1F9A] to-purple-700 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md transition-all duration-300 text-white font-semibold shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl'}`}
              >
                {isSubmitting ? 'Sending...' : "Let's Talk"}
              </button>
            </form>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="flex w-auto justify-between md:hidden">
            {links.map(({id, child, href, style, download}) => (
              <section
                key={id}
                className={"flex justify-between items-center " + (style || "")}
              >
                <a
                  className="flex justify-between items-center w-full text-white"
                  href={href} download={download} target="_blank" rel="noreferrer"
                >
                  {child}
                </a>
              </section>
            ))}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Contact;
