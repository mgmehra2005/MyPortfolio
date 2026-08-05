"use client";
import React, { useState, useEffect } from 'react';

export default function TopBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate how far the user has scrolled
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    // 2. Attach scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[9999] pointer-events-none">
      <div
        className="h-full transition-all duration-[50] ease-out shadow-[0_0_8px_#3067FF]"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: '#3067FF'
        }}
      />
    </div>
  );
}