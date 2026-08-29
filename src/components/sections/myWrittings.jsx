"use client";
import React from "react";
import TopHeader from "../common/topHeader";
import ScrollReveal from "../animation/scrollReveal";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MyWrittings() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/medium")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.slice(0,4));
        setLoading(false);
      })
      .catch((Err) => {
        console.log("Error loading Articles: ", Err);
        setLoading(false);
      });
  }, []);

  return (
    <main
      id="blogs"
      className="flex items-center justify-center w-full mt-[32px]"
    >
      <section className="relative items-start max-w-[1600px] w-full border-0 rounded-4xl border-white/10 bg-[var(--glass-background)]/40 p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12">
        <TopHeader
          titleSet={{
            subTitle: "MY WRITING",
            Title: "What I’m Learning, Building & Sharing.",
            sideTitle: "Ideas, Lessons, Experiments & Insights",
          }}
        />

        {/* Cards Section */}
        <div className="flex gap-6 w-full justify-between overflow-hidden">
          {loading
            ? (<p className="text-white/50 align-middle content-center my-2 mx-auto">Loading Blogs.....</p>)  : blogs.length ? blogs.map((items) => (
                <Card step={items} key={items.id} />
              )) : (<p className="text-white/50 align-middle content-center my-2 mx-auto">Blogs Not Found</p>)}
        </div>
      </section>
    </main>
  );
}

function Card(props) {
  const { id, title, snippet, pubDate, thumbnail, link } = props.step;
  return (
    <>
      <ScrollReveal>
        <Link className="flex rounded-3xl flex-col gap-4 bg-[#161717]/60 hover:bg-[#161717] hover:border-[#3067FF] duration-600 ease-in-out p-8 border-0 border-white/10  min-w-[340px] max-w-[380px] max-h-[480px] min-h-[480px] align-middle transition-colors overflow-hidden relative" href={link}>
          <p className="text-wrap tracking-wide text-left text-white/50 text-[16px]">
            {pubDate.slice(0,16)}
          </p>
          <Image src={thumbnail} width={350} height={200} />
          <h3 className="tracking-wide font-bold text-[18px] w-full">{title}</h3>
          <p className="text-wrap tracking-wide text-left text-white/50 text-[16px]">
            {snippet}
          </p>
          {/* <Link href={link} className="border-[2px] mx-auto px-4 py-2 align-bottom">Read Article</Link> */}
        </Link>
      </ScrollReveal>
    </>
  );
}
