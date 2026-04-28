import React from "react";
import FadeInSection from "./FadeInSection";
import ProjectShowcase from "./ProjectShowcase";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="relative w-full bg-surface/30 py-24 md:py-32 overflow-hidden"
    >
      <span className="section-bg-number">02</span>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <FadeInSection>
          <div className="mb-14">
            <span className="section-eyebrow mb-3">// 02 — work</span>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white">Portfolio</h2>
            <span className="gold-line mt-4 max-w-xs block" />
            <p className="text-warm-white/40 text-sm mt-4 max-w-lg">
              A selection of projects spanning web, mobile, and design, built for real users.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <ProjectShowcase />
        </FadeInSection>
      </div>
    </div>
  );
};

export default Portfolio;
