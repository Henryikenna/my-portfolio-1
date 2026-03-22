import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const experiences = [
    {
      id: 1,
      role: "Senior Developer",
      company: "Psilocybin",
      jobRoles: [
        "Architected and deployed NaijaBarter, a Flutter-based barter trading platform enabling cashless peer-to-peer exchanges, serving a growing user base with zero transaction fees.",
        "Engineered secure authentication infrastructure using Firebase Authentication, ensuring data privacy compliance and seamless user onboarding experience.",
        "Developed real-time chat system with Firebase Cloud Messaging, reducing communication latency by 85% and improving user engagement metrics.",
        "Implemented targeted push notification system that increased user retention by 40% through timely trade alerts and platform updates.",
        "Optimized data architecture with Cloud Firestore, achieving sub-100ms query response times and real-time synchronization across devices.",
        "Established scalable state management solution using Riverpod, reducing code complexity by 30% and improving app performance benchmarks.",
      ],
    },
    {
      id: 2,
      role: "Mobile Developer (Team Demerzel)",
      company: "HNG-X (2023)",
      jobRoles: [
        "Delivered multiple production-grade mobile applications within accelerated timelines while maintaining 95%+ code quality standards and zero critical bugs.",
        "Collaborated in cross-functional teams of 5-8 members, coordinating with designers and backend engineers to align technical implementation with business requirements.",
        "Implemented Agile/Scrum methodologies with bi-weekly sprints, contributing to 98% on-time delivery rate across all assigned milestones.",
        "Established Git workflow best practices and participated in code review processes, reducing merge conflicts by 60% and improving team velocity.",
        "Successfully completed 5 milestone projects demonstrating proficiency in Flutter, API integration, and responsive UI development.",
      ],
    },
    {
      id: 3,
      role: "Junior Flutter Developer",
      company: "Attainbase ERP",
      jobRoles: [
        "Developed comprehensive ERP mobile application using Flutter and Isar database, enabling offline-first functionality for businesses with intermittent connectivity.",
        "Implemented inventory tracking, employee management, and automated reporting features, reducing manual data entry time by 70% for client businesses.",
        "Integrated Riverpod state management to ensure efficient data flow and maintain application performance across complex business workflows.",
      ],
    },
    {
      id: 4,
      role: "Senior Flutter Developer",
      company: "KekeDrop",
      jobRoles: [
        "Built production-ready ride-hailing application with real-time GPS tracking, Google Maps integration, and secure payment gateway, processing 500+ daily ride requests.",
        "Engineered intelligent driver-passenger matching algorithm, reducing average wait times by 35% and improving customer satisfaction scores.",
        "Developed dual-platform solution with separate passenger and driver applications, maintaining feature parity and consistent user experience across both interfaces.",
        "Implemented comprehensive ride history and analytics dashboard, providing users with detailed trip insights and expense tracking capabilities.",
      ],
    },
    {
      id: 5,
      role: "Founder & Lead Developer",
      company: "Segwae (Startup)",
      jobRoles: [
        "Founded and architected innovative digital networking platform combining software and hardware solutions, securing initial market traction with unique NFC/QR business card integration.",
        "Led full-stack development of cross-platform mobile application using Flutter and web platform using Next.js, enabling users to create shareable digital profiles and manage social media presence.",
        "Engineered seamless integration between physical NFC/QR business cards and cloud-based profile system, delivering instant digital networking capabilities.",
        "Implemented Supabase backend infrastructure for real-time profile synchronization, user authentication, and analytics tracking across web and mobile platforms.",
        "Designed and executed go-to-market strategy, overseeing product development from concept to launch while balancing technical leadership with business development.",
      ],
    },
    {
      id: 6,
      role: "Frontend Developer",
      company: "Case Radar",
      jobRoles: [
        "Developed comprehensive frontend architecture for AI-powered legal research platform serving 5,000+ users currently and 1,000+ downloads on Google Playstore.",
        "Built responsive web application using React and TailwindCSS, delivering optimized user experience for legal professionals and clients seeking attorney services.",
        "Engineered Flutter-based mobile application for iOS and Android, implementing intelligent case matching algorithms and real-time lawyer discovery features.",
        "Collaborated with AI/ML team to integrate legal research capabilities into user-facing interfaces, ensuring seamless interaction with backend intelligence systems.",
        "Optimized application performance achieving sub-2-second page load times and implementing offline-first architecture for mobile platform.",
      ],
    },
    {
      id: 7,
      role: "Web Developer",
      company: "WebDerk",
      jobRoles: [
        "Developed e-commerce platform specializing in digital subscription services, implementing secure payment processing and automated digital product delivery systems.",
        "Built user-friendly interface using React and TailwindCSS, optimizing conversion rates through streamlined checkout flows and intuitive subscription management.",
        "Integrated Paystack & Monnify and subscription management APIs, ensuring reliable transaction processing and automated renewal handling.",
        "Implemented comprehensive admin dashboard for inventory management, sales analytics, and customer relationship tracking.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-800 py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <FadeInSection>
          <div className="text-white">
            <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </h2>
            <p className="py-4 md:py-6">Professional journey delivering impactful solutions across diverse industries</p>
          </div>
        </FadeInSection>
        <FadeInSection delay={100}>
          {experiences
            .map((experience) => (
              <div key={experience.id} className="mb-4">
              {/* Collapsed view */}
              <div
                className={`flex justify-between items-center p-4 bg-gray-700 cursor-pointer hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg ${
                  openItems[experience.id] ? "rounded-t-md" : "rounded-md"
                }`}
                onClick={() => toggleItem(experience.id)}
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-white">
                    {experience.role}
                  </span>
                  <span className="text-sm text-gray-300 mt-1">
                    {experience.company}
                  </span>
                </div>
                <span
                  className={`transform transition-transform duration-300 text-white text-lg ${
                    openItems[experience.id] ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <LuChevronRight />
                </span>
              </div>

              {/* Expanded view */}
              {openItems[experience.id] && (
                <ul className="p-4 pl-8 flex flex-col gap-2 bg-gray-800 rounded-b-md shadow-inner">
                  {experience.jobRoles.map((role, index) => (
                    <li key={index} className="list-disc text-gray-300 leading-relaxed">
                      {role}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
          .reverse()
          }
        </FadeInSection>
      </div>
    </div>
  );
};

export default Experience;
