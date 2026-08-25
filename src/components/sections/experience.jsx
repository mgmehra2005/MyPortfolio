"use client";
import React from "react";
import ScrollReveal from "../animation/scrollReveal";

export default function ExperienceSection() {
  const topicList = [
    {
      topic: "Full Stack Development",
      subHead: "Full Stack Intern — CloudTrains Global",
      desc: "Developing and integrating production-ready pages for the company’s official GitHub site using Next.js and Tailwind CSS. Working with component-based architecture, responsive design, performance optimisation, and Git-based workflows.",
    },
    {
      topic: "Client Product Development",
      subHead: "Full Stack Web Developer — We-dials.com",
      desc: "Building a production-ready service marketplace for local businesses, covering service discovery, appointment booking, ratings, and onboarding. Working across backend development, secure data pipelines, APIs, frontend implementation, and AI-assisted development.",
    },
    {
      topic: "Web Development & SEO",
      subHead: "Web Development & SEO Specialist — We-dials & mybookhomes.com",
      desc: "Improving websites through content updates, UI/UX enhancements, new service-provider pages, and SEO strategies designed to improve organic visibility and site navigation.",
    },
    {
      topic: "Cybersecurity",
      subHead: "Cybersecurity Intern — Threat Prism",
      desc: "Worked on an automated penetration-testing tool for scanning and simulating attacks on target hosts, while gaining practical experience in ethical hacking and vulnerability assessment",
    },
    {
      topic: "Hackathons & Product Building",
      subHead: "4 Hackathons — AI, Collaboration & Problem Solving",
      desc: "Built projects including EDUBA/EduSX, an AI-adaptive learning platform; SurplusX, a food-waste reduction platform; and a real-time team management system. These projects involved technologies and concepts including Flask, REST APIs, JWT authentication, Docker, adaptive learning, multilingual interaction, and real-time collaboration.",
    },
  ];

  return (
    <section
      id="experience"
      className="flex items-center justify-center w-full mt-[32px]"
    >
      <div className="relative items-start max-w-[1600px] w-full border-0 rounded-4xl border-white/10 bg-transparent p-[24.6px_44.6px_32px_24.6px] grid grid-cols-[39%_60%]">
        <ScrollReveal>
          <div className="p-[12px_150px_12px_20px] sticky self-start top-28">
            <span className="text-white/50 tracking-widest text-[12px] block mb-6 uppercase">
              My Experience
            </span>
            <h1 className="text-5xl font-extralight leading-[60px]">
              Building, Learning & Solving Real Problems.
            </h1>
            <p className="mt-4 md:text-[20px] text-white/50 font-normal leading-relaxed text-left">
              From building production applications to experimenting under 8- and 48-hour constraints, I learn by turning ideas into working systems.
            </p>
          </div>
        </ScrollReveal>
        <div className="">
          <div className="max-w-6xl mx-auto flex flex-col">
            {topicList.map((item, itemsIdx) => (
              <ScrollReveal key={itemsIdx}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10 items-start group transition-colors duration-600 px-4">
                  <div className="md:col-span-1">
                    <span
                      className="text-sm font-bold tracking-wider"
                      style={{ color: "#3067FF" }}
                    >
                      0{itemsIdx + 1}
                    </span>
                  </div>

                  <div className="md:col-span-5">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white duration-300 ease-in-out group-hover:text-[var(--primary-color)]">
                      {item.topic}
                    </h3>
                    <p className="text-sm md:text-base text-white/50 font-normal leading-relaxed text-left">
                      {item.subHead}
                    </p>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-sm md:text-base text-white/50 font-normal leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
