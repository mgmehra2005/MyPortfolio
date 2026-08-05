"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0.1 }) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Smooth ease-out curve
      }}
    >
      {children}
    </motion.div>
  );
}
