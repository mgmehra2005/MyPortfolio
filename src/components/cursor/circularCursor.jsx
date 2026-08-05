'use client';

import React, { useEffect, useState } from 'react';

export default function CircularCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    // Track real mouse position
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Linear Interpolation (LERP) loop for the smooth trailing lag effect
    const render = () => {
      setTrailingPosition((prev) => {
        // Higher value (0.2) = faster follow, Lower value (0.05) = more lag/inertia
        const ease = 0.08;
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Precise Center Dot Circle */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: '#3067FF',
        }}
      />

      {/* 2. Trailing Outer Circle Shadow with Border & Transparent BG */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/60 bg-transparent pointer-events-none z-[9998]"
        style={{
          transform: `translate3d(${trailingPosition.x}px, ${trailingPosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}