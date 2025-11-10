'use client';

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react"; 

const ACCENT_COLOR = "#B0DB9C";
const SECONDARY_COLOR = "#27391C";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=100";

  return (
    <section
      id="insights-hero"
      className="pt-20 md:pt-24 min-h-[77vh] flex items-center justify-center relative overflow-hidden scroll-mt-[100px]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Overlay */}
     <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Foreground Content */}
      <motion.div
        className="container mx-auto px-6 py-10 max-w-3xl text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn} 
      >
        {/* Tag / Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Mail className="w-4 h-4" style={{ color: ACCENT_COLOR }} />
          <span className="text-sm font-medium" style={{ color: ACCENT_COLOR }}>
            Services Celestial Rift LLP
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg"
          variants={fadeIn}
        >
          Empowering a Sustainable Future
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base font-light leading-relaxed text-gray-100 max-w-2xl mx-auto"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.7 },
            },
          }}
        >
          Celestial Rift LLP integrates advanced technology and renewable energy
          to drive the next generation of efficient, eco-conscious logistics.
          Our mission is to deliver performance with purpose.
        </motion.p>

        {/* Metrics */}
        <motion.div
          className="mt-8 text-sm text-gray-300"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8, duration: 0.6 } },
          }}
        >
          <span style={{ color: ACCENT_COLOR }}>
            50% Lower Emissions • 30% Faster Deliveries • 100% Sustainable
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
