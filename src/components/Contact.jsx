import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  const links = [
    { id: 1, icon: <FaWhatsapp size={20} />, label: "WhatsApp", href: "https://wa.me/+23409063203950" },
    { id: 2, icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/henry-unegbu-832838254" },
    { id: 3, icon: <FaGithub size={20} />, label: "GitHub", href: "https://github.com/Henryikenna" },
    { id: 4, icon: <FaXTwitter size={20} />, label: "Twitter", href: "https://x.com/henryoncode" },
    { id: 5, icon: <HiOutlineMail size={20} />, label: "Email", href: "mailto:ikennaunegbu10@gmail.com" },
    { id: 6, icon: <BsFillPersonLinesFill size={20} />, label: "Resume", href: "/resume.pdf", download: true },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === "",
      email: formData.email === "" || !validateEmail(formData.email),
      message: formData.message === "",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const inputClass = (field) =>
    `w-full bg-transparent border-b ${
      errors[field] ? "border-red-500/60 shake" : "border-[#2a2a2a]"
    } focus:border-gold focus:outline-none py-3 text-warm-white/80 placeholder-warm-white/20 text-sm font-body transition-colors duration-300`;

  return (
    <div
      name="contact"
      className="relative w-full min-h-dvh bg-ink py-24 md:py-32 overflow-hidden"
    >
      <span className="section-bg-number">05</span>

      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <FadeInSection>
          <div className="mb-14">
            <span className="section-eyebrow mb-3">// 05 — contact</span>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white">Let's Talk</h2>
            <span className="gold-line mt-4 max-w-xs block" />
            <p className="text-warm-white/40 text-sm mt-4 max-w-lg">
              Have a project in mind or want to collaborate? Send a message.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Form */}
          <FadeInSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="section-eyebrow mb-3">Name</label>
                <input
                  className={inputClass("name")}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="font-mono text-[10px] text-red-400/70 mt-1 block">Required</span>
                )}
              </div>

              <div>
                <label className="section-eyebrow mb-3">Email</label>
                <input
                  className={inputClass("email")}
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="font-mono text-[10px] text-red-400/70 mt-1 block">Valid email required</span>
                )}
              </div>

              <div>
                <label className="section-eyebrow mb-3">Message</label>
                <textarea
                  className={`${inputClass("message")} resize-none`}
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="font-mono text-[10px] text-red-400/70 mt-1 block">Required</span>
                )}
              </div>

              <button
                disabled={isSubmitting}
                className={`group flex items-center gap-3 border border-gold/50 text-gold font-mono text-[11px] uppercase tracking-widest px-8 py-3 hover:bg-gold hover:border-gold hover:text-ink transition-all duration-300 ${
                  isSubmitting ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="font-mono text-xs text-gold/80 tracking-wider">Message sent — I'll be in touch.</p>
              )}
              {submitStatus === "error" && (
                <p className="font-mono text-xs text-red-400/70 tracking-wider">Something went wrong. Try again.</p>
              )}
            </form>
          </FadeInSection>

          {/* Social links */}
          <FadeInSection delay={200}>
            <div>
              <span className="section-eyebrow mb-6 block">Find Me Online</span>
              <ul className="space-y-4">
                {links.map(({ id, icon, label, href, download }) => (
                  <li key={id}>
                    <a
                      href={href}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 text-warm-white/35 hover:text-gold transition-colors duration-300"
                    >
                      <span className="shrink-0">{icon}</span>
                      <span className="font-mono text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                        {label}
                      </span>
                      <span className="flex-1 h-px bg-[#1e1e1e] group-hover:bg-gold/20 transition-colors duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
