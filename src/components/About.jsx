import React from "react";
import FadeInSection from "./FadeInSection";

const About = () => {
  const quickFacts = [
    { label: "Speciality", value: "Web & Mobile Frontend" },
    { label: "Stack", value: "React · Next.js · Flutter · Dart" },
    { label: "Backend", value: "Firebase · Supabase · REST APIs" },
    { label: "Location", value: "Nigeria" },
    { label: "Status", value: "Open to opportunities" },
  ];

  return (
    <div
      name="about me"
      className="relative w-full min-h-dvh bg-ink py-24 md:py-32 overflow-hidden"
    >
      <span className="section-bg-number">01</span>

      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <FadeInSection>
          <div className="mb-14">
            <span className="section-eyebrow mb-3">// 01 — about</span>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white">About Me</h2>
            <span className="gold-line mt-4 max-w-xs block" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Bio text */}
          <div className="md:col-span-3 space-y-6">
            <FadeInSection delay={100}>
              <p className="about-text text-warm-white/55 leading-relaxed text-base">
                I'm <b>Henry Unegbu</b>, a <b>Software Developer</b> with over{" "}
                <b>3 years of professional experience</b> delivering high-impact web and mobile
                applications. I specialize in transforming complex business requirements into
                intuitive, scalable solutions that enhance operational efficiency and user
                satisfaction.
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="about-text text-warm-white/55 leading-relaxed text-base">
                My technical expertise spans <b>React</b>, <b>JavaScript</b>, <b>Flutter</b>, and{" "}
                <b>Dart</b>, with proven capabilities in full-stack development. From architecting
                responsive user interfaces to implementing robust backend integrations with{" "}
                <b>Firebase</b>, <b>Supabase</b>, and RESTful APIs, I consistently deliver
                production-ready applications that meet stringent performance standards.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="about-text text-warm-white/55 leading-relaxed text-base">
                I've contributed to projects across diverse industries — e-commerce, real estate,
                legal tech, and enterprise platforms. My approach combines technical precision with
                strategic problem-solving, ensuring solutions align with both user needs and
                business objectives.
              </p>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="about-text text-warm-white/55 leading-relaxed text-base">
                I maintain active involvement in the developer community through open-source
                contributions and continuous learning, staying current with emerging technologies
                to deliver cutting-edge solutions.
              </p>
            </FadeInSection>
          </div>

          {/* Quick facts panel */}
          <div className="md:col-span-2">
            <FadeInSection delay={250}>
              <div className="border border-[#1e1e1e] bg-surface/50">
                <div className="border-b border-[#1e1e1e] px-5 py-4">
                  <span className="section-eyebrow">Quick Facts</span>
                </div>
                <ul className="divide-y divide-[#1a1a1a]">
                  {quickFacts.map(({ label, value }, i) => (
                    <li key={i} className="px-5 py-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-warm-white/25 block mb-1">
                        {label}
                      </span>
                      <span className="text-warm-white/70 text-sm">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
