"use client";
import React from "react";
import TopHeader from "../common/topHeader";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "/mgmehra2005",
      link: "https://github.com/mgmehra2005",
      icon: "github.svg",
    },
    {
      platform: "LinkedIn",
      username: "/matang_mehra",
      link: "https://www.linkedin.com/in/matangmehra",
      icon: "linkedIn.svg",
    },
    {
      platform: "Medium",
      username: "@matangmehra",
      link: "https://medium.com/@matangmehra",
      icon: "medium.svg",
    },
    {
      platform: "X",
      username: "@matang_mehra",
      link: "https://x.com/matang_mehra",
      icon: "x.svg",
    },
    {
      platform: "Instagram",
      username: "/matang_mehra",
      link: "https://www.instagram.com/matang_mehra/",
      icon: "instagram.svg",
    },
    {
      platform: "Facebook",
      username: "Matang Mehra",
      link: "https://www.facebook.com/people/Matang-Mehra/pfbid0NnBr56KDNCLiPToHAwN8pXN7vCUARY41kzYHnhJPhRCrCLu5kf799vBUHydk414Tl/",
      icon: "facebook.svg",
    },
    {
      platform: "Reddit",
      username: "u/mgmehra",
      link: "https://www.reddit.com/user/mgmehra/",
      icon: "reddit.svg",
    },
  ];

  return (
    <main
      id="contact"
      className="flex items-center justify-center w-full mt-[32px]"
    >
      <section className="relative items-start max-w-[1600px] w-full border-0 rounded-4xl p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12">
        <TopHeader
          titleSet={{
            subTitle: "LET’S CONNECT",
            Title: "Have an idea, opportunity, or just want to talk tech?",
            // sideTitle: "Ideas, Lessons, Experiments & Insights",
          }}
        />

        {/* Cards Section */}
        <div className="flex gap-6 w-full justify-between overflow-hidden">
            {socialLinks.map((social, idx) => <Cards platform={social.platform} username={social.username} link={social.link} icon={social.icon} key={idx}/>)}
        </div>
      </section>
    </main>
  );
}

function Cards({ platform, username, link, icon }) {
  return (
    <div className="group h-54 w-54 perspective-1000 cursor-pointer">
      {/* Inner wrapper for 3D transform */}
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face: Icon */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] border-white/10 bg-[var(--glass-background)]/40 rounded-3xl flex items-center justify-center">
            <Image src={`/img/social-media-icons/${icon}`} className="" width={100} height={100} alt={`Matang Mehra - ${platform}`}/>
        </div>

        {/* Back Face: Platform name and username */}
        <Link href={link} className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#161717]/60 rounded-3xl flex items-center justify-center text-white p-4 flex-col">
          <h4 className="font-bold mb-3 text-4xl">{platform}</h4>
          <p className="text-center font-semibold text-white/70">{username}</p>
        </Link>
      </div>
    </div>
  );
}
