"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../animation/scrollReveal";

export default function Footer() {
  const [IndiaTime, setIndiaTime] = useState("");
  // Live India Clock Timer Engine
  useEffect(() => {
    const updateIndiaTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Calcutta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Set to true if you prefer 12-hour AM/PM format
      });
      setIndiaTime(formatter.format(new Date()));
    };

    // Initialize immediately on mount
    updateIndiaTime();

    // Re-calculate time every 10 seconds to keep the clock lightweight
    const interval = setInterval(updateIndiaTime, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollReveal>
      <main
        id="footer"
        className="relative flex items-center justify-center w-full mt-[32px] flex-col overflow-hidden"
      >
        <div className="bg-[#3067FF] w-[300px] h-[300px] absolute -z-1 rounded-full blur-[115px] -left-30 -bottom-50"></div>
        <FooterSection1 />

        <FooterSection2 IndiaTime={IndiaTime} />
      </main>
    </ScrollReveal>
  );
}

function FooterSection1() {
  return (
    <section className="relative items-start max-w-[1600px] w-full border-0 backdrop-blur-sm rounded-4xl border-white/10 bg-[var(--glass-background)]/40 p-[44.6px_44.6px_32px_44.6px] flex flex-col gap-12">
      <div className="w-full grid grid-cols-4">
        {/* Logo, Subtitle & social links */}
        <ScrollReveal>
          <div className="flex flex-col items-start">
            <figure className="my-2">
              <Image
                src="/img/MyLogo.png"
                alt="Matang Mehra Logo"
                width={200}
                height={100}
              />
            </figure>
            {/* <p className="text-white/30 text-[14px] pl-2">
              Web design, development and <br />
              support agency based in India.
            </p> */}

            {/* Social Media Links */}
            <div className="flex gap-5 py-7 w-auto">
              <Link
                href=""
                className="flex items-center w-14 h-14 p-4 border-1 border-white/10 rounded-full hover:border-[var(--primary-color)] group duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[var(--primary-color)] fill-white/50 duration-300 ease-in-out"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z" />
                </svg>
              </Link>
              <Link
                href=""
                className="flex w-14 h-14 items-center p-4 border-1 border-white/10 rounded-full hover:border-[var(--primary-color)] group duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="group-hover:fill-[var(--primary-color)] fill-white/50 duration-300 ease-in-out"
                >
                  <path d="M194.4 211.7a53.3 53.3 0 1 0 59.2 88.6 53.3 53.3 0 1 0 -59.2-88.6zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9 .1-11.2 .1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1s7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4l0 .2zm-67.1 44.5c18.1 12.1 30.6 30.9 34.9 52.2s-.2 43.5-12.3 61.6c-6 9-13.7 16.6-22.6 22.6s-19 10.1-29.6 12.2c-21.3 4.2-43.5-.2-61.6-12.3s-30.6-30.9-34.9-52.2 .2-43.5 12.2-61.6 30.9-30.6 52.2-34.9 43.5 .2 61.6 12.2l.1 0zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2l-.1 0zM448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM357 389c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67l0 .1z" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* discover */}
          <div className="flex flex-col gap-4">
            <p className="text-[var(--primary-color)] text-[14px] tracking-wide uppercase mb-3">
              Discover
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase duration-300 ease-in-out transition-colors">
              About
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase duration-300 ease-in-out transition-colors">
              Experience
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase duration-300 ease-in-out transition-colors">
              Blogs
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase duration-300 ease-in-out transition-colors">
              Projects
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          {/* services */}
          <div className="flex flex-col gap-4">
            <p className="text-[var(--primary-color)] text-[14px] tracking-wide uppercase mb-3">
              LinkedIn
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              Instagram
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              Facebook
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              X/Twitter
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              Reddit
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              Medium
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              Github
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          {/* take action */}
          <div className="flex flex-col gap-4">
            <p className="text-[var(--primary-color)] text-[14px] tracking-wide uppercase mb-3">
              Take Action
            </p>
            <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              start a conversation
            </p>
            {/* <p className="text-white/50 hover:text-[var(--primary-color)] tracking-wide text-[13px] uppercase uppercase duration-300 ease-in-out transition-colors">
              request a quote
            </p> */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FooterSection2({ IndiaTime }) {
  return (
    <section className="relative items-center max-w-[1600px] w-full border-0 bg-[var(--glass-background)]/40 backdrop-blur-sm rounded-4xl border-white/10 p-[14.6px_44.6px_14.6px_44.6px] flex gap-12 mt-[32px] mb-[32px] justify-between">
      <div className="flex gap-6">
        <span className="text-white/60 uppercase tracking-widest text-[13px]">
          © 2026 Matang mehra
        </span>{" "}
        {/* <span className="text-white/50 hover:text-white uppercase tracking-widest text-[13px] duration-300 transition-colors ease-in-out cursor-pointer">
                  privacy policy
                </span> */}
      </div>

      <div className="flex shrink-0 gap-4 justify-center items-center">
        {/* India Country Tag */}
        <div className="flex flex-row items-center gap-2 text-[13px]">
          <Image
            className="opacity-100"
            src="/img/india.png"
            alt="India Flag"
            width={20}
            height={16}
          />
          <span className="text-white/80 font-medium uppercase">India</span>
        </div>
        <div className="h-4 w-px bg-white/10"></div>
        {/* India Clock */}
        <div className="flex flex-row items-center gap-2 text-[13px] text-white">
          {IndiaTime}
        </div>
        <div className="h-4 w-px bg-white/10"></div>
        <Link
          href="#overview"
          className="uppercase text-[13px] text-white/50 flex gap-2 flex items-center justify-center hover:text-white group duration-300 transition-colors ease-in-out"
        >
          back to top
          <div className="border-1 border-white/10 rounded-full p-2 group-hover:bg-[#3067FF] duration-300 transition-colors ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="fill-white/50 w-3 h-3 group-hover:bg-[#3067FF] duration-300 transition-colors ease-in-out group-hover:fill-black"
            >
              <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
