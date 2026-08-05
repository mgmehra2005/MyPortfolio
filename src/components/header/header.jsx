"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TopBar from "../fillBar/topBar";

export default function Header() {
  const menu = [
    { name: "Service", href: "#service" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ];
  const [selection, setSelection] = useState("Service");

  const [londonTime, setLondonTime] = useState("");

  // Live London Clock Timer Engine
  useEffect(() => {
    const updateLondonTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Set to true if you prefer 12-hour AM/PM format
      });
      setLondonTime(formatter.format(new Date()));
    };

    // Initialize immediately on mount
    updateLondonTime();

    // Re-calculate time every 10 seconds to keep the clock lightweight
    const interval = setInterval(updateLondonTime, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed flex flex-col top-0 left-0 right-0 align-middle justify-center items-center flex z-[100] pt-4 sm:pt-6 px-4 sm:px-6 lg:px-[1.6rem] font-HakenGrotesk">
      <TopBar/>
      <nav className="flex items-center align-middle justify-between p-[12px_12px_12px_36px] bg-[var(--glass-background)] text-[--foreground] border-1 rounded-full border-white/10 max-w-[1600px] w-full">
        <div className="flex flex-row items-center gap-5">
          {/* Logo Image */}
          <Image
            src="/img/cloudTrainsLogo.png"
            alt="Cloud Trains Logo"
            width={180}
            height={80}
          />
          <div className="h-7 w-px bg-white/10"></div>
        </div>
        {/* Navigation Links */}
        <div className="">
          <ul className="flex items-center gap-8 text-[17px] w-full">
            {menu.map((item, itemIndex) => {
              const isActive = selection == item.name;
              return (
                <li
                  key={item.name}
                  className={`${isActive ? "text-white" : "text-white/80"}  hover:text-[var(--primary-color)] duration-300 ease-in-out`}
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      setSelection(item.name);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="h-7 w-px bg-white/10"></div>
          <div className="p-[12px] border-1 border-white/10 rounded-full flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-2 text-[16px]">
              {/* Ping Dot Animation */}
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="fixed h-3 w-3 rounded-full bg-[var(--primary-color)] align-middle justify-center flex items-center animate-ping duration-200"></div>
                <div className="h-2 w-2 rounded-full bg-[var(--primary-color)]"></div>
              </div>
              <span className="text-[var(--primary-text-color)]">
                AVAILABLE
              </span>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            {/* London Country Tag */}
            <div className="flex flex-row items-center gap-2 text-[16px]">
              <Image
                className="opacity-60"
                src="/img/united-kingdom.svg"
                alt="United Kingdom Flag"
                width={14}
                height={10}
              />
              <span className="text-white/80 font-light">LONDON</span>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            {/* Lodon Clock */}
            <div className="flex flex-row items-center gap-2 text-[16px] text-white">
              {londonTime}
            </div>
          </div>
        <Link href="#contact" className="flex flex-row align-middle items-center justify-center py-3.5 px-4 rounded-full bg-[var(--primary-color)] font-semibold hover:bg-white group hover:text-black duration-300 ease-in-out">
            <span className="px-2">GET A QUOTE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-[18px] h-[18px] fill-white/80  rotate-[320deg] group-hover:fill-black duration-600 ease-in-out"
            >
              <path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
        </Link>
        </div>
      </nav>
    </header>
  );
}
