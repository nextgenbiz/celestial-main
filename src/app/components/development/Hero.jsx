'use client';

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Zap } from "lucide-react";

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

export default function DevelopmentHero() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1920&q=90"; // logistics background

  return (
    <section
      id="insights-hero"
      className="pt-20 md:pt-24 min-h-[77vh] flex items-center justify-center relative overflow-hidden scroll-mt-[100px]"
    >
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
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
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
          <Zap className="w-4 h-4" style={{ color: ACCENT_COLOR }} />
          <span className="text-xs font-medium" style={{ color: ACCENT_COLOR }}>
            Trackon’s Development Vision
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight drop-shadow-lg text-white"
          variants={textVariants}
        >
          Why Choose Trackon Franchise
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
          Empowering Bhadrak’s logistics ecosystem through{" "}
          <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
            sustainable operations
          </span>
          ,{" "}
          <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
            smart technology
          </span>{" "}
          and{" "}
          <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
            trusted franchise networks
          </span>
          .
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row md:justify-center md:gap-10 gap-5 text-gray-100"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.8, duration: 0.7 },
            },
          }}
        >
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="w-6 h-6 mb-2" style={{ color: ACCENT_COLOR }} />
            <p className="text-xs max-w-[175px] leading-relaxed">
              <strong>Revenue Streams:</strong> Franchise units, delivery
              charges, and value-added services.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="w-6 h-6 mb-2" style={{ color: ACCENT_COLOR }} />
            <p className="text-xs max-w-[175px] leading-relaxed">
              <strong>STP:</strong> Targeting SMEs & corporates as Bhadrak’s
              trusted last-mile courier partner.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="w-6 h-6 mb-2" style={{ color: ACCENT_COLOR }} />
            <p className="text-xs max-w-[175px] leading-relaxed">
              <strong>Funding:</strong> ₹3 Cr to expand fleets, tech, and
              training for sustainable growth.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}