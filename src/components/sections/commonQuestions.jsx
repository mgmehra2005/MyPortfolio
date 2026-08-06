"use client";
import React, { useState } from "react";
import SideHeader from "../common/sideHeader";
import ScrollReveal from "../animation/scrollReveal";

export default function CommonQuestions() {
  const reasonList = [
    "Top 5% AI developers globally, based in London",
    "Primary stack: Claude (Anthropic), Lovable, Supabase and GitHub for fast, quality builds",
    "Faster delivery and lower build cost through AI-assisted engineering",
    "Modern React, TypeScript and cloud stack built to scale",
    "Enterprise-grade security, auth and data protection",
    "Ongoing optimisation as models and your needs evolve",
  ];
  return (
    <main className="flex items-center justify-center w-full mt-[32px]">
      <section className="relative items-end max-w-[1600px] w-full border-0 rounded-4xl border-white/10 bg-transparent p-[32px_44.6px_32px_44.6px] grid grid-cols-3 gap-12">
        {/* Left Section */}
       <SideHeader titleSet={{subTitle: "Common Questions", Title:"Frequently asked.", desc: "Quick answers to the things we get asked most. Still need clarity? Drop us a line."}}/>

        {/* Right Section */}
        <AccordionSection />
      </section>
    </main>
  );
}

function AccordionSection() {
  const faqData = [
    {
      id: "01",
      question: "What is an AI developer?",
      answer:
        "An AI developer specializes in designing, building, and deploying artificial intelligence models, machine learning algorithms, and intelligent software solutions that automate complex workflows and enhance business efficiency.",
    },
    {
      id: "02",
      question: "Do you work with clients outside London?",
      answer:
        "Yes! We work with clients globally across the UK, Europe, US, and MENA region. Our entire communication, development, and project management processes are optimized for seamless remote collaboration.",
    },
    {
      id: "03",
      question: "What can you build with AI?",
      answer:
        "We build custom AI chatbots, autonomous workflow agents, copilot integrations, predictive data analytics dashboards, fine-tuned LLM interfaces, and RAG systems connected to your internal documentation.",
    },
    {
      id: "04",
      question: "Which AI tools and models do you use?",
      answer:
        "We leverage state-of-the-art models including GPT-4o, Claude 3.5 Sonnet, Gemini 1.5, and LLaMA 3, integrated alongside platforms like Supabase, LangChain, and custom vector databases.",
    },
    {
      id: "05",
      question: "How long does an AI build take?",
      answer:
        "A standard AI prototype or MVP takes between 2 to 4 weeks. Enterprise-grade AI solutions with custom API integrations and complex data security pipelines usually take 6 to 10 weeks.",
    },
  ];

  // Track the currently opened question index
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollReveal>
    <div className="min-w-[1000px] flex">
      <div className="flex flex-col divide-y divide-white/10">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.id}
              className="py-6 first:pt-0 last:pb-0 transition-colors duration-200"
            >
              {/* Clickable Accordion Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left gap-6 group focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-6">
                  {/* Index Number */}
                  <span
                    className="text-sm font-bold tracking-wider font-mono shrink-0"
                    style={{ color: "#3067FF" }}
                  >
                    {item.id}
                  </span>

                  {/* Question Title */}
                  <h3
                    className={`text-base md:text-lg font-medium transition-colors duration-300 ease-in-out ${
                      isOpen
                        ? "text-white font-semibold"
                        : "text-slate-200 group-hover:text-[#3067FF]"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                {/* Rotating Chevron Arrow Indicator */}
                <div className="shrink-0">
                  <svg
                    className={`w-4 h-4 text-white/50    transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? "rotate-90 text-[#3067FF]"
                        : "group-hover:text-white/50"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    {/* Points to Right by default, rotates 90deg downwards on expand */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>

              {/* Collapsible Answer Panel */}
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden pl-12 pr-6">
                  <p className="text-sm md:text-base text-white/50 leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </ScrollReveal>
  );
}
