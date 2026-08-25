import React from "react";
import SideHeader from "../common/sideHeader";
import ScrollReveal from "../animation/scrollReveal";

export default function WhyWorkWithUs() {
  const reasonList = [
    "Top 5% AI developers globally, based in London",
    "Primary stack: Claude (Anthropic), Lovable, Supabase and GitHub for fast, quality builds",
    "Faster delivery and lower build cost through AI-assisted engineering",
    "Modern React, TypeScript and cloud stack built to scale",
    "Enterprise-grade security, auth and data protection",
    "Ongoing optimisation as models and your needs evolve",
  ];
  return (
    <main
      id="work"
      className="flex items-center justify-center w-full mt-[32px]"
    >
      <section className="relative items-end max-w-[1600px] w-full border-0 rounded-4xl border-white/10 p-[24.6px_44.6px_32px_44.6px] grid grid-cols-3 gap-12">
        {/* Left Section */}
        <ScrollReveal>
        <SideHeader
          titleSet={{
            subTitle: "Why work with us",
            Title: "The benefits of partnering with us.",
            desc: "We pair deep WordPress expertise with a transparent, collaborative approach --- so every project lands with clarity and confidence.",
          }}
        />
        </ScrollReveal>

        {/* Right Section */}
        <div className="grid col-span-2 grid-cols-2 items-start justify-start p-8 h-full gap-5">
          {reasonList.map((items, itemIdx) => {
            return <NarrowCards reasons={items} key={itemIdx} />;
          })}
        </div>
      </section>
    </main>
  );
}

function NarrowCards(props) {
  return (
    <>
      <ScrollReveal delay={0.1}>
        <main className="flex rounded-3xl flex-col gap-4 bg-[var(--glass-background)]/40 hover:border-1 hover:border-[#3067FF] transition-all duration-600 ease-in-out p-4 border-0 border-white/10  w-full my-3 h-full items-start">
          <div className="font-medium text-[16px] text-white/50 text-pretty flex items-center align-middle h-full">
            <div className="relative flex flex-col items-center justify-center gap-1 pl-5 pr-4 items-start h-full">
              <div className="h-2 w-2 rounded-full bg-[var(--primary-color)]"></div>
            </div>
            {props.reasons}
          </div>
        </main>
      </ScrollReveal>
    </>
  );
}
