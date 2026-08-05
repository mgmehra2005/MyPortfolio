"use client";
import React from "react";
import ScrollReveal from "../animation/scrollReveal";

export default function GetQuote() {
  return (
    <ScrollReveal>
      <main
        id="contact"
        className="flex items-center justify-center w-full mt-[32px]"
      >
        <section className="relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12">
          <div className="flex justify-between p-8 items-center w-full">
            <h1 className="max-w-3xl text-8xl font-light">
              Get a quote <br />
              for your{" "}
              <span className="text-[var(--primary-color)]">project</span>
            </h1>
            <RotatingQuoteButton />
          </div>
        </section>
      </main>
    </ScrollReveal>
  );
}

function RotatingQuoteButton({ href = "#contact" }) {
  const text = "REQUEST A QUOTE • REQUEST A QUOTE • ";

  return (
    <>
      {/* 1. Continuous Spin Animation Keyframes */}
      <style>{`
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
      `}</style>

      {/* Main Interactive Button Container */}
      <a
        href={href}
        className="relative group inline-flex items-center justify-center w-54 h-54 rounded-full overflow-hidden focus:outline-none"
        aria-label="Request a quote"
      >
        {/* Outer Dark Glass Background Container */}
        <div className="absolute inset-0 rounded-full bg-transparent border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105" />

        {/* 2. Rotating Circular Text Ring (SVG) */}
        <div className="absolute inset-0 w-full h-full animate-spin-slow origin-center pointer-events-none p-1">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              {/* Circular path that the text will follow */}
              <path
                id="textCircle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="fill-white/50 text-[8.2px] font-light tracking-[0.18em] uppercase">
              <textPath href="#textCircle" startOffset="0%">
                {text}
              </textPath>
            </text>
          </svg>
        </div>

        {/* 3. Inner Center Solid Circle (#3067FF) */}
        <div
          className="relative z-12 w-25 h-25 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_#3067FF]"
          style={{ backgroundColor: "#3067FF" }}
        >
          {/* Arrow Icon (Static - doesn't spin with text) */}
          <svg
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H9M17 7V15"
            />
          </svg>
        </div>
      </a>
    </>
  );
}
