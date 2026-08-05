import React from "react";
import ScrollReveal from "../animation/scrollReveal";

export default function TopHeader(props) {
  return (
    <ScrollReveal>
      <div className="relative flex flex-row justify-between min-w-full flex-wrap h-full items-end ">
        {/* RIght Side */}
        <div className="py-4">
          <span className="text-white/50 tracking-widest text-[12px] block mb-6 uppercase">
            {props.titleSet.subTitle}
          </span>
          <h1 className="text-5xl font-extralight leading-[60px]">
            {props.titleSet.Title}
          </h1>
        </div>

        {/* Left Side */}
        <div className="relative flex align-bottom justify-end items-end h-full ">
          <span className="px-3 h-full text-white/50 tracking-widest text-[12px] block uppercase">
            {props.titleSet.sideTitle}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}
