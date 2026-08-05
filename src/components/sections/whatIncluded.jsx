"use client";
import React from "react";
import ScrollReveal from "../animation/scrollReveal";

export default function WhatIncluded() {
  const topicList = [
    {
      topic: "AI-Assisted Web Development",
      desc: "AI-accelerated websites and web apps built with Lovable and React. Faster delivery, lower cost, no compromise on code quality or performance.",
    },
    {
      topic: "AI Web Apps & SaaS",
      desc: "Custom AI-powered web applications and SaaS products - chat interfaces, copilots, dashboards and internal platforms built on a secure, scalable architecture.",
    },
    {
      topic: "Custom AI Tools & Agents",
      desc: "Bespoke AI tools and autonomous agents powered by Claude that automate research, content, support and back-office workflows specific to your business.",
    },
    {
      topic: "LLM & API Integrations",
      desc: "Production integrations with Claude, OpenAI and Gemini - with prompt engineering, evaluation and cost controls. We primarily use Claude for its reliability and reasoning, and Supabase for secure data storage and real-time APIs.",
    },
    {
      topic: "RAG & Knowledge Bases",
      desc: "Retrieval-augmented generation systems that let AI answer accurately from your own documents, data and policies - with citations and access controls.",
    },
    {
      topic: "AI Automation & Workflows",
      desc: "End-to-end AI automations across your stack - CRM, email, Slack, Notion and custom APIs - removing manual work and unlocking real operational leverage.",
    },
  ];

  return (
    <section
      id="service"
      className="flex items-center justify-center w-full mt-[32px]"
    >
      <div className="relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_24.6px] grid grid-cols-[39%_60%]">
        <ScrollReveal>
          <div className="p-[12px_150px_12px_20px] sticky self-start top-28">
            <span className="text-white/50 tracking-widest text-[12px] block mb-6 uppercase">
              What's Included
            </span>
            <h1 className="text-5xl font-extralight leading-[60px]">
              Everything needed to design, build & evolve a WordPress website.
            </h1>
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
