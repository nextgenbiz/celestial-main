'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const ACCENT_COLOR = "#B0DB9C"; // Light Green
const SECONDARY_COLOR = "#27391C"; // Dark Green

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
 

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1920&q=80"; // Modern business/market bg

  return (
    <section
      id="insights-hero"
      className="pt-20 md:pt-24 min-h-[77vh] flex items-center justify-center relative overflow-hidden scroll-mt-[100px]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundAttachment: "scroll",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 py-10 max-w-3xl text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5"
          variants={textVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Zap className="w-4 h-4" style={{ color: ACCENT_COLOR }} />
          <span className="text-xs font-medium" style={{ color: ACCENT_COLOR }}>
            Trackon’s Super Franchise System
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight drop-shadow-lg text-white"
          variants={textVariants}
        >
          Business Model & Market Insights
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base font-light mt-3 mx-auto max-w-2xl leading-relaxed text-gray-100"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.7 },
            },
          }}
        >
          India’s courier and logistics sector is rapidly evolving — driven by{" "}
          <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
            e-commerce
          </span>
          ,{" "}
          <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
            digital transformation
          </span>{" "}
          and{" "}
          <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
            sustainability
          </span>
          . Trackon is unlocking scalable, tech-driven franchise opportunities.
        </motion.p>

        {/* Optional CTA or small highlight */}
        <motion.div
          className="mt-8 text-sm text-gray-300"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.9, duration: 0.6 } },
          }}
        >
          <span style={{ color: ACCENT_COLOR }}>
            TAM: $8.62B | SAM: $4.30B | SOM: $0.60B
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
