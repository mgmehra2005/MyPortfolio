"use client";
import { LineHoverLink } from "@/components/ui/line-hover-link"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TopBar from "../fillBar/topBar";

export default function Header() {
  const menu = [
    { name: "Overview", href: "#overview" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];
  const [selection, setSelection] = useState("Home");

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down more than 0 pixels
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return (
    <header className="fixed flex flex-col top-0 left-0 right-0 align-middle justify-center items-center flex z-[100] pt-4 sm:pt-6 px-4 sm:px-6 lg:px-[1.6rem] font-HakenGrotesk">
      <TopBar />
      <nav className={`flex items-center align-middle justify-between p-[12px_12px_12px_36px] backdrop-blur-sm  text-[--foreground] ${isScrolled?"border-1":"border-0"} duration-200 ease-in-out transition-all rounded-full border-white/10 max-w-[1600px] w-full`}>
        <div className="flex flex-row items-center gap-5">
          {/* Logo Image */}
          <Image
            src="/img/MyLogo.png"
            alt="Matang Mehra Logo"
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
                  className={`${isActive ? "text-white" : "text-white/80"}  hover:text-[var(--primary-color)] duration-500 ease-in-out`}
                >
                  <LineHoverLink
                    href={item.href}
                    onClick={() => {
                      setSelection(item.name);
                    }}
                    variant="slide"
                  >
                    {item.name}
                  </LineHoverLink>
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
                <div className="fixed h-3 w-3 rounded-full bg-green-500 align-middle justify-center flex items-center animate-ping duration-200"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span className="text-white">AVAILABLE</span>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            {/* India Country Tag */}
            <div className="flex flex-row items-center gap-2 text-[16px]">
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
            <div className="flex flex-row items-center gap-2 text-[16px] text-white">
              {IndiaTime}
            </div>
          </div>
          <Link
            href="https://www.github.com/mgmehra2005"
            className="flex flex-row align-middle items-center justify-center py-3.5 px-4 rounded-full bg-black font-bold hover:bg-white group hover:text-black duration-600 ease-in-out shadow-white/50 shadow-[0_0_8px]"
            target="_blank"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[24px] h-[24px] fill-white group-hover:fill-black duration-600 ease-in-out">
              <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
            </svg>
            <span className="px-2 uppercase font-bold">Github</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
