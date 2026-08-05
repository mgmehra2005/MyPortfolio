"use client";
import React from "react";
import TopHeader from "../common/topHeader";
import Link from "next/link";
import ScrollReveal from "../animation/scrollReveal";

export default function RelatedServices() {
  const services = [
    {
      subTitle: "Custom-built from scratch",
      title: "Web Development",
      link: "",
    },
    {
      subTitle: "Proactive & reliable",
      title: "Website Support",
      link: "",
    },
    {
      subTitle: "Expert Guidance",
      title: "Consultancy",
      link: "",
    },
    {
      subTitle: "Connect Everything",
      title: "API & Integrations",
      link: "",
    },
    {
      subTitle: "Pixel-Perfect Creativity",
      title: "Web Design",
      link: "",
    },
  ];

  return (
    <main className="flex items-center justify-center w-full mt-[32px]">
      <section className="relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12">
        <TopHeader
          titleSet={{
            subTitle: "Related Services",
            Title: "You might also need.",
            sideTitle: "All Services",
          }}
        />

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-6 w-full h-full py-0 justify-between">
          {services.map((items, itemsIdx) => (
            <Card service={items} key={itemsIdx} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Card(props) {
  return (
    <>
      <ScrollReveal>
        <main className="flex rounded-3xl flex-col gap-4 bg-[#161717] hover:bg-[#161717]/30 hover:border-[#3067FF] duration-600 ease-in-out p-4 border-1 border-white/10  w-full my-0 h-full items-start group transition-colors">
          <div className="font-medium text-[16px] text-white/50 text-pretty flex align-middle w-full h-full flex flex-col px-4">
            <div className="flex flex-col py-4">
              <span className="text-white/50 tracking-widest text-[12px] block mb-2 uppercase">
                {props.service.subTitle}
              </span>
              <h1 className="text-[24px] font-extralight text-white leading-[60px]">
                {props.service.title}
              </h1>
            </div>
            <div className="flex justify-between min-w-full mt-3">
              <span className="text-white/50 tracking-widest text-[12px] block mb-2 uppercase">
                EXPLORE
              </span>
              <Link href={props.service.link} className="">
                <div className="border-1 border-white/10 rounded-full p-3 group-hover:bg-[var(--primary-color)] duration-300 ease-in-out transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-[12px] h-[12px] fill-white/80  rotate-[320deg] group-hover:fill-black duration-600 ease-in-out"
                  >
                    <path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </ScrollReveal>
    </>
  );
}
