"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "../animation/scrollReveal";
import AnimatedButton from "../ui/animated-button";

export default function Overview() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    // 1. Globe Configuration Parameters
    const DOT_COUNT = 1200; // Total dots mapping the sphere surface
    const GLOBE_RADIUS = Math.min(width, height) * 0.38;
    const SPHERE_CENTER_X = width / 2;
    const SPHERE_CENTER_Y = height / 2;
    const PERSPECTIVE = width * 0.8; // Perspective projection distance

    // Accent color matching the lime/green in your image
    const DOT_COLOR = { r: 48, g: 103, b: 255 }; // #a3e635 (lime-400)

    // 2. Generate 3D Points using Fibonacci Sphere Algorithm
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < DOT_COUNT; i++) {
      const y = 1 - (i / (DOT_COUNT - 1)) * 2; // Range from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * GLOBE_RADIUS,
        y: y * GLOBE_RADIUS,
        z: z * GLOBE_RADIUS,
      });
    }

    // Rotation angles
    let angleX = 0.2; // Tilt angle
    let angleY = 3; // Continuous spin angle

    // 3. Render & Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.002; // Rotation speed

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Store projected points to sort by depth (Z-index)
      const projectedPoints = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Y-axis rotation
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // X-axis rotation (tilt)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective 3D to 2D projection
        const scale = PERSPECTIVE / (PERSPECTIVE + z2);
        const projX = SPHERE_CENTER_X + x1 * scale;
        const projY = SPHERE_CENTER_Y + y2 * scale;

        projectedPoints.push({
          x: projX,
          y: projY,
          z: z2,
          scale: scale,
        });
      }

      // Sort points so back dots render behind front dots
      projectedPoints.sort((a, b) => b.z - a.z);

      // Render dots onto canvas
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];

        // Depth calculations for opacity and dot radius
        const alpha = Math.max(
          0.1,
          Math.min(1, (p.z + GLOBE_RADIUS) / (2 * GLOBE_RADIUS)),
        );
        const dotRadius = Math.max(0.5, p.scale * 2.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT_COLOR.r}, ${DOT_COLOR.g}, ${DOT_COLOR.b}, ${alpha * 0.95})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Handle Window Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ScrollReveal>
      <section
        className="flex items-center justify-center w-full pt-[128px]"
        id="overview"
      >
        {/* bg-[var(--glass-background)] */}
        <div className="max-w-[1600px] w-full border-1 rounded-4xl border-white/10 overflow-hidden bg-[var(--glass-background)]/40">
          {/* top section */}
          <div className="relative py-[16px] px-[40px] w-full">
            <div className="flex justify-between w-full gap-3 items-center">
              <h6 className="uppercase flex gap-3 text-[12px] shrink-0 mx-3 tracking-widest">
                <span className="text-white">Full stack development</span> /{" "}
                <span className="text-white">AI</span> /{" "}
                <span>Cyber Security Enthusiasts</span>{" "}
              </h6>
              <div className="h-px w-full bg-white/10"></div>
              <div className="uppercase text-white/50 flex items-center shrink-0 mx-3 tracking-widest text-[12px]">
                AI-POWERED WEBSITES, APPS & DIGITAL PRODUCTS
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-white/10"></div>

          {/* middle section */}
          <div className="relative px-[40px] flex flex-row justify-between h-full w-full">
            {/* right section */}
            <div className="relative flex flex-col items-start justify-center w-[60%] h-[500px] px-5 py-[40px]">
              <span className="text-[var(--primary-color)] tracking-widest text-[28px] block mb-4 uppercase flex items-center gap-3 font-bold">
                Hi, I'm
              </span>
              <h1 className="relative z-2 font-extrabold text-8xl max-w-[50%] leading-[110px] uppercase">
                Matang
                <span className="text-[var(--primary-color)]">Mehra</span>
              </h1>
              <p className="max-w-[90%] mt-3 text-[20px]">
                {/* Engineering secure, user-centric digital experiences that
                transform ideas into high-performing products through web
                development, SEO, and cybersecurity—building solutions designed
                for real-world impact. */}
                Building secure, scalable digital experiences through full-stack development, AI, and modern web technologies.
              </p>
              <div className="mt-8">
                <AnimatedButton className="bg-transparent font-border-0 text-white ">
                  Connect With Me
                </AnimatedButton>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="relative min-h-full w-px bg-white/10"></div>
            {/* left Section */}
            <div className="flex flex-col w-[30%] py-[20px] items-center justify-center text-wrap px-[20px]">
              <div className="flex justify-start flex-col">
                <p className="leading-[30px] text-white/80 text-justify text-[16px]">
                  I’m a B.Tech Computer Science student and full-stack web developer focused on building practical digital products. My work spans full-stack development, AI-integrated applications, UI/UX, SEO, and cybersecurity.
                </p>
                <br />
                <p className="leading-[30px] text-white/80 text-justify text-[16px]">
                  I enjoy taking ideas from concept to working product—from backend architecture and APIs to responsive interfaces and security. Along the way, I learn by building real-world projects, working with clients, and exploring emerging technologies.
                </p>

                <Link
                  href=""
                  className="pt-[40px] flex flex-row gap-4 items-center group"
                >
                  <div className="border-1 border-white/10 rounded-full p-3 group-hover:bg-[var(--primary-color)] duration-600 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-[12px] h-[12px] fill-white/80  rotate-[320deg] group-hover:fill-black duration-300 ease-in-out"
                    >
                      <path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                  </div>
                  <span className="uppercase">More About Me</span>
                </Link>
              </div>
            </div>
          </div>

          {/* bottom section */}
          <div className="h-px w-full bg-white/10"></div>
          <div className="py-[16px] px-[40px] flex justify-between">
            <div className="flex flex-row gap-5 shrink-0 items-center justify-center">
              {/* Ping Dot Animation */}
              <div className="relative flex flex-col items-center justify-center gap-1">
                <div className="absolute h-3 w-3 rounded-full bg-[var(--primary-color)] align-middle justify-center flex items-center animate-ping duration-200"></div>
                <div className="h-2 w-2 rounded-full bg-[var(--primary-color)]"></div>
              </div>
              <span className="text-white/50 tracking-widest text-[16px] capitalize">
                {/* Crafting secure and performant digital experiences. */}
                BUILDING. LEARNING. SOLVING REAL-WORLD PROBLEMS.
              </span>
            </div>
            <ScrollToExplore />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function ScrollToExplore() {
  return (
    <>
      {/* 1. Keyframe animation for moving light segment */}
      <style>{`
        @keyframes lineTravel {
          0% {
            left: -35%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="flex items-center gap-4 px-2">
        {/* Text Label */}
        <span
          className="text-[12px] tracking-[0.25em] uppercase select-none"
          style={{ color: "#3067FF" }}
        >
          Scroll to Explore
        </span>

        {/* Animated Line Container */}
        <div className="relative w-36 md:w-48 h-[2px] overflow-hidden rounded-full bg-white/10">
          {/* Moving Light Beam Element */}
          <div
            className="absolute top-0 h-full w-[35%] rounded-full shadow-[0_0_8px_#3067FF]"
            style={{
              background: "#3067FF",
              animation: "lineTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            }}
          />
        </div>
      </div>
    </>
  );
}
