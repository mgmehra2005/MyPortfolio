"use client";
import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "../animation/scrollReveal";

export default function ClientFeedback() {
  const testimonials = [
    {
      title: "Sirshi Ladha",
      subTitle: "From Unnati Silks",
      desc: `CloudTrains transformed our platform into a powerful web portal with 200K+ monthly active users, ranking top in our category. They consistently deliver ahead of milestones — more than a vendor, they've become true partners in our growth.`,
      id: "01",
    },
    {
      title: "Margaret Wejnkaim",
      subTitle: "From WhatUni.com",
      desc: "Working with CloudTrains changed everything for us. They rebuilt our app and portal so smoothly that within weeks we hit 100K+ downloads and 2K reviews. Their tech skills truly speak for themselves",
      id: "02",
    },
    {
      title: "Manni Gupta",
      subTitle: "From Glazonoid.com",
      desc: "CloudTrains built our D2C mobile app with clear milestones and constant support. Despite the distance, communication felt seamless — like they were right next door. Their guidance at every step made the whole process effortless.",
      id: "03",
    },
    {
      title: "James Green",
      subTitle: "From Nutriseed UK",
      desc: "Working with CloudTrains felt effortless. They understood what Nutriseed stands for and translated it into a website that's simple, clear, and true to our mission. It finally feels like our online home reflects who we are.",
      id: "04",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const DURATION_MS = 8000; // 6 Seconds per slide
  const INTERVAL_MS = 50; // Update progress every 50ms for 60fps feel

  // Auto-progress timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextSlide();
            return 0;
          }
          return prev + (INTERVAL_MS / DURATION_MS) * 100;
        });
      }, INTERVAL_MS);
    }

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const handleNextSlide = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAnimateKey((prev) => prev + 1); // Trigger re-render slide-up animation
  };

  const handlePrevSlide = () => {
    setProgress(0);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setAnimateKey((prev) => prev + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* Slide Up Keyframe Animation Styles */}
      <style>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUpFade 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <ScrollReveal>
        <main
          id="journal"
          className="flex items-center justify-center w-full mt-[32px]"
        >
          
          <section className="relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12">
            {/* Top Label Row */}
            <div className="flex items-center justify-between mb-8 w-full">
              <span className="text-white/50 tracking-widest text-[12px] block mb-2 uppercase shrink-0">
                Client Feedback
              </span>

              <div className="h-px w-full bg-white/10 mx-5"></div>

              {/* Subtle Active Pulse Indicator */}
              <div className="relative flex flex-col items-center justify-center gap-1">
                <div className="absolute h-3 w-3 rounded-full bg-[var(--primary-color)] align-middle justify-center flex items-center animate-ping duration-200"></div>
                <div className="h-2 w-2 rounded-full bg-[var(--primary-color)]"></div>
              </div>
            </div>

            {/* Main Testimonial Content (Key triggers CSS Slide-Up) */}
            <div
              key={animateKey}
              className="animate-slide-up min-h-[220px] w-full flex flex-col justify-between"
            >
              <h2 className="text-2xl md:text-4xl font-normal leading-snug tracking-tight text-white max-w-6xl">
                {currentTestimonial.desc}
              </h2>

              <div className="mt-8">
                <p className="text-sm font-bold text-white tracking-wide">
                  {currentTestimonial.title}
                </p>
                <p className="text-xs font-mono text-white/50 mt-1 uppercase tracking-wider">
                  {currentTestimonial.subTitle}
                </p>
              </div>
            </div>

            {/* Bottom Navigation & Continuous Progress Bar Controls */}
            <div className="mt-14 pt-8 flex items-center gap-6 justify-between w-full">
              {/* Control Buttons Group */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Prev Button */}
                <button
                  onClick={handlePrevSlide}
                  className="w-10 h-10 rounded-full border border-white/10 bg-transparent hover:border-[#3067FF] flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 group"
                  aria-label="Previous Slide"
                >
                  <svg
                    className="w-4 h-4 group-hover:stroke-[#3067FF] duration-300 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Play / Pause Toggle Button */}
                <button
                  onClick={togglePlayPause}
                  className="w-10 h-10 rounded-full border border-white/10 bg-transparent hover:border-[#3067FF] flex items-center justify-center transition-all active:scale-95 group"
                  style={{ color: "white" }}
                  aria-label={isPlaying ? "Pause Slider" : "Play Slider"}
                >
                  {isPlaying ? (
                    // Pause Icon
                    <svg
                      className="w-4 h-4 fill-current group-hover:fill-[#3067FF] duration-300 ease-in-out"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    // Play Icon
                    <svg
                      className="w-4 h-4 fill-current ml-0.5 group-hover:fill-[#3067FF] duration-300 ease-in-out"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNextSlide}
                  className="w-10 h-10 rounded-full border border-white/10 bg-transparent hover:border-[#3067FF] flex items-center justify-center text-white hover:text-white transition-all active:scale-95 group"
                  aria-label="Next Slide"
                >
                  <svg
                    className="w-4 h-4 group-hover:stroke-[#3067FF] duration-300 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dynamic Progress Bar Rail */}
              <div className="flex-1 h-[2px] bg-slate-800/80 rounded-full overflow-hidden relative">
                <div
                  className="h-full transition-all duration-75 ease-linear rounded-full shadow-[0_0_8px_#3067FF]"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#3067FF",
                  }}
                />
              </div>

              {/* Slide Index Counter */}
              <div className="shrink-0 text-xs font-mono font-bold tracking-widest text-white/50">
                <span style={{ color: "#3067FF" }}>
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </div>
            </div>
          </section>
        </main>
      </ScrollReveal>
    </>
  );
}
