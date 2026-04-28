import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const experiences = [
    {
      id: 0,
      role: "Flutter Mobile App Developer",
      company: "Edgo",
      companyUrl: "https://edgo.co",
      isCurrent: true,
      jobRoles: [
        "Developing and maintaining cross-platform mobile applications using Flutter and Dart for Edgo's growing platform.",
        "Building pixel-perfect, performant UI components from design specs, ensuring consistency across Android and iOS.",
        "Integrating RESTful APIs and implementing state management solutions to deliver new features on schedule.",
      ],
    },
    {
      id: 1,
      role: "Senior Developer",
      company: "Psilocybin",
      isCurrent: false,
      jobRoles: [
        "Architected and deployed NaijaBarter, a Flutter-based barter trading platform enabling cashless peer-to-peer exchanges, serving a growing user base with zero transaction fees.",
        "Engineered secure authentication infrastructure using Firebase Authentication, ensuring data privacy compliance and seamless user onboarding.",
        "Developed real-time chat system with Firebase Cloud Messaging, reducing communication latency by 85% and improving user engagement metrics.",
        "Implemented targeted push notification system that increased user retention by 40% through timely trade alerts and platform updates.",
        "Optimized data architecture with Cloud Firestore, achieving sub-100ms query response times and real-time synchronization across devices.",
        "Established scalable state management using Riverpod, reducing code complexity by 30% and improving performance benchmarks.",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Case Radar",
      isCurrent: false,
      jobRoles: [
        "Developed comprehensive frontend architecture for AI-powered legal research platform serving 5,000+ users and 1,000+ Play Store downloads.",
        "Built responsive web application using React and TailwindCSS, delivering optimized UX for legal professionals and clients seeking attorney services.",
        "Engineered Flutter-based mobile application for iOS and Android with intelligent case matching and real-time lawyer discovery.",
        "Collaborated with AI/ML team to integrate legal research capabilities into user-facing interfaces.",
        "Optimized application performance achieving sub-2-second page load times and offline-first architecture for mobile.",
      ],
    },
    {
      id: 3,
      role: "Founder & Lead Developer",
      company: "Segwae (Startup)",
      isCurrent: false,
      jobRoles: [
        "Founded and architected innovative digital networking platform combining software and hardware — NFC/QR business card integration.",
        "Led full-stack development of cross-platform mobile app (Flutter) and web platform (Next.js) enabling users to manage shareable digital profiles.",
        "Engineered seamless integration between physical NFC/QR business cards and cloud-based profile system.",
        "Implemented Supabase backend for real-time profile synchronization, user authentication, and analytics across web and mobile.",
        "Designed and executed go-to-market strategy, overseeing product development from concept to launch.",
      ],
    },
    {
      id: 4,
      role: "Senior Flutter Developer",
      company: "KekeDrop",
      isCurrent: false,
      jobRoles: [
        "Built production-ready ride-hailing app with real-time GPS tracking, Google Maps integration, and secure payment gateway processing 500+ daily rides.",
        "Engineered intelligent driver-passenger matching algorithm, reducing average wait times by 35%.",
        "Developed dual-platform solution — separate passenger and driver applications — maintaining feature parity across both interfaces.",
        "Implemented comprehensive ride history and analytics dashboard with trip insights and expense tracking.",
      ],
    },
    {
      id: 5,
      role: "Mobile Developer (Team Demerzel)",
      company: "HNG-X (2023)",
      isCurrent: false,
      jobRoles: [
        "Delivered multiple production-grade mobile applications within accelerated timelines, maintaining 95%+ code quality and zero critical bugs.",
        "Collaborated in cross-functional teams of 5–8, coordinating with designers and backend engineers across milestones.",
        "Implemented Agile/Scrum methodologies with bi-weekly sprints, contributing to 98% on-time delivery rate.",
        "Established Git workflow best practices, reducing merge conflicts by 60% and improving team velocity.",
      ],
    },
    {
      id: 6,
      role: "Junior Flutter Developer",
      company: "Attainbase ERP",
      isCurrent: false,
      jobRoles: [
        "Developed comprehensive ERP mobile app using Flutter and Isar database, enabling offline-first functionality for businesses with intermittent connectivity.",
        "Implemented inventory tracking, employee management, and automated reporting — reducing manual data entry time by 70%.",
        "Integrated Riverpod state management to ensure efficient data flow across complex business workflows.",
      ],
    },
    {
      id: 7,
      role: "Web Developer",
      company: "WebDerk",
      isCurrent: false,
      jobRoles: [
        "Developed e-commerce platform for digital subscription services with secure payment processing and automated delivery systems.",
        "Built user-friendly interface using React and TailwindCSS, optimizing conversion through streamlined checkout and subscription management.",
        "Integrated Paystack & Monnify APIs for reliable transaction processing and automated renewal handling.",
        "Implemented admin dashboard for inventory management, sales analytics, and customer relationship tracking.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="relative w-full min-h-screen bg-surface/30 py-24 md:py-32 overflow-hidden"
    >
      <span className="section-bg-number">04</span>

      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <FadeInSection>
          <div className="mb-14">
            <span className="section-eyebrow mb-3">// 04 — journey</span>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white">Experience</h2>
            <span className="gold-line mt-4 max-w-xs block" />
            <p className="text-warm-white/40 text-sm mt-4 max-w-lg">
              Professional journey delivering impactful solutions across diverse industries.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors duration-300">
                {/* Header */}
                <button
                  className="w-full flex justify-between items-center px-5 py-4 md:px-6 md:py-5 text-left group"
                  onClick={() => toggleItem(exp.id)}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-display text-lg md:text-xl text-warm-white/80 group-hover:text-warm-white transition-colors duration-200">
                        {exp.role}
                      </span>
                      {exp.isCurrent && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-ink bg-gold px-2 py-0.5">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-gold/60">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-gold transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </span>
                  </div>
                  <LuChevronDown
                    className={`text-warm-white/25 shrink-0 ml-4 transition-transform duration-300 ${
                      openItems[exp.id] ? "rotate-180" : "rotate-0"
                    }`}
                    size={18}
                  />
                </button>

                {/* Expanded content */}
                {openItems[exp.id] && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 border-t border-[#1a1a1a]">
                    <ul className="mt-4 space-y-3">
                      {exp.jobRoles.map((role, i) => (
                        <li key={i} className="flex gap-3 text-warm-white/45 text-sm leading-relaxed">
                          <span className="text-gold/40 mt-1.5 shrink-0">—</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Experience;
