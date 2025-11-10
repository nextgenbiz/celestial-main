'use client';

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const COLORS = {
  accent: "#B0DB9C",
  dark: "#27391C",
};

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactHero() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=90";

  return (
    <section
      id="contact-hero"
      className="pt-20 md:pt-24 min-h-[77vh] flex items-center justify-center relative overflow-hidden scroll-mt-[100px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 py-10 max-w-3xl text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
     
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5"
          variants={textVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Mail className="w-4 h-4" style={{ color: COLORS.accent }} />
          <span className="text-xs font-medium" style={{ color: COLORS.accent }}>
            Contact Celestial Rift LLP
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight drop-shadow-lg text-white"
          variants={textVariants}
        >
          Partner With Us – Drive Courier Excellence
        </motion.h1>

        <motion.p
          className="text-sm md:text-base font-light mt-3 mx-auto max-w-2xl leading-relaxed text-gray-100"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.7 },
            },
          }}
        >
          Let’s redefine last-mile logistics with{" "}
          <span style={{ color: COLORS.accent }}>eco-friendly operations</span>,{" "}
          <span style={{ color: COLORS.accent }}>advanced tracking</span>, and{" "}
          <span style={{ color: COLORS.accent }}>strong local entrepreneurship</span>.
          Join hands with <strong>Celestial Rift LLP</strong> — where every parcel
          represents trust, innovation, and growth.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row md:justify-center md:gap-10 gap-5 text-gray-100"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.8, duration: 0.6 },
            },
          }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" style={{ color: COLORS.accent }} />
            <p className="text-xs md:text-sm">Bhadrak, Odisha</p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" style={{ color: COLORS.accent }} />
            <a
              href="mailto:contact@celestialriftllp.com"
              className="text-xs md:text-sm hover:underline"
            >
              contact@celestialriftllp.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}