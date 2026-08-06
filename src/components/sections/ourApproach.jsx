"use client";
import React from "react";
import TopHeader from "../common/topHeader";
import ScrollReveal from "../animation/scrollReveal";

export default function OurApproach() {
  const ourApproachSteps = [
    {
      id: "01",
      title: "Discovery & AI Strategy",
      desc: "We map the problem to the right AI approach - model choice, data sources, evaluation criteria and a clear, measurable business outcome before any code is written.",
    },
    {
      id: "02",
      title: "Design & Prototype",
      desc: "Rapid AI prototypes and UI designs that let you experience the product early, validate model behaviour and de-risk the build before full investment.",
    },
    {
      id: "03",
      title: "AI-Assisted Build",
      desc: "Senior engineers building production-grade systems with AI-accelerated workflows - typed, tested, observable, and ready for real users on day one.",
    },
    {
      id: "04",
      title: "Launch, Monitor & Iterate",
      desc: "Deployment with logging, evaluations and guardrails in place. We monitor model performance and iterate as your data, users and the AI landscape evolve.",
    },
  ];

  return (
    <main
      id="about"
      className="flex items-center justify-center w-full mt-[32px]"
    >
      <section className="relative items-start max-w-[1600px] w-full border-0 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12">
        <TopHeader
          titleSet={{
            subTitle: "Our Approach",
            Title: "How we deliver.",
            sideTitle: "Step by step",
          }}
        />

        {/* Cards Section */}
        <div className="flex gap-6 w-full justify-between overflow-hidden">
          {ourApproachSteps.map((items) => (
            <Card step={items} key={items.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Card(props) {
  const { id, title, desc } = props.step;
  return (
    <>
      <ScrollReveal>
        <main className="flex rounded-3xl flex-col gap-4 bg-[#161717] hover:bg-[#161717]/30 hover:border-[#3067FF] duration-600 ease-in-out p-8 border-0 border-white/10  min-w-[340px] max-w-[380px] max-h-[356px] min-h-[356px] transition-colors">
          <div className="font-medium text-5xl text-[#3067FF]">{id}</div>
          <div className="tracking-wide font-bold text-[20px]">{title}</div>
          <div className="text-wrap tracking-wide text-left text-white/50 text-[18px]">
            {desc}
          </div>
        </main>
      </ScrollReveal>
    </>
  );
}
