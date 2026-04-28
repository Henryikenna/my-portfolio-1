import React from "react";
import FadeInSection from "./FadeInSection";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import dart from "../assets/dart.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import flutter from "../assets/flutter.png";
import firebase from "../assets/firebase.png";
import rive from "../assets/rive.png";

const Technologies = () => {
  const groups = [
    {
      category: "Web",
      techs: [
        { id: 1, src: html, name: "HTML", level: "Advanced" },
        { id: 2, src: css, name: "CSS", level: "Advanced" },
        { id: 3, src: javascript, name: "JavaScript", level: "Advanced" },
        { id: 4, src: reactImage, name: "React", level: "Advanced" },
        { id: 5, src: tailwind, name: "Tailwind CSS", level: "Advanced" },
        { id: 6, src: nextjs, name: "Next.js", level: "Intermediate" },
      ],
    },
    {
      category: "Mobile",
      techs: [
        { id: 7, src: dart, name: "Dart", level: "Advanced" },
        { id: 9, src: flutter, name: "Flutter", level: "Advanced" },
      ],
    },
    {
      category: "Tools & Services",
      techs: [
        { id: 10, src: firebase, name: "Firebase", level: "Intermediate" },
        { id: 8, src: github, name: "GitHub", level: "Advanced" },
        { id: 11, src: rive, name: "Rive", level: "Intermediate" },
      ],
    },
  ];

  return (
    <div
      name="technologies"
      className="relative w-full min-h-screen bg-ink py-24 md:py-32 overflow-hidden"
    >
      <span className="section-bg-number">03</span>

      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <FadeInSection>
          <div className="mb-14">
            <span className="section-eyebrow mb-3">// 03 — stack</span>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white">Technologies</h2>
            <span className="gold-line mt-4 max-w-xs block" />
            <p className="text-warm-white/60 text-sm mt-4 max-w-lg">
              Tools and frameworks I use to build production-grade applications.
            </p>
          </div>
        </FadeInSection>

        <div className="space-y-12">
          {groups.map((group, gi) => (
            <FadeInSection key={group.category} delay={gi * 100}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-white/45">
                    {group.category}
                  </span>
                  <span className="flex-1 h-px bg-[#1e1e1e]" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.techs.map(({ id, src, name, level }) => (
                    <div
                      key={id}
                      className="group relative bg-surface border border-[#1e1e1e] hover:border-gold/30 transition-all duration-300 p-4 flex flex-col items-center gap-3 cursor-default"
                    >
                      {/* Level badge */}
                      <span
                        className={`absolute top-0 right-0 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 ${
                          level === "Advanced"
                            ? "bg-gold/10 text-gold/70"
                            : "bg-[#1e1e1e] text-warm-white/50"
                        }`}
                      >
                        {level}
                      </span>

                      <img
                        src={src}
                        alt={name}
                        className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300 mt-2"
                      />
                      <span className="font-mono text-[11px] text-warm-white/70 group-hover:text-warm-white/90 transition-colors duration-300 text-center">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
