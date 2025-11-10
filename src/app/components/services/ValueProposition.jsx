'use client';

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ValueProposition = () => {
  const values = [
    {
      title: "Eco-Friendly Operations",
      description:
        "Achieve significant cost reduction through strategic EV deployment, ensuring sustainable logistics while maximizing profitability.",
      highlight: "50% Efficiency Boost",
    },
    {
      title: "Brand Assurance",
      description: "Operate under the trusted banner of ",
      highlight: "Trackon Couriers Pvt. Ltd.",
      suffix:
        ", bringing decades of proven logistics expertise to your doorstep.",
    },
    {
      title: "High ROI Potential",
      description: "Franchisees typically achieve breakeven within ",
      highlight: "12–24 months",
      suffix:
        ", backed by proven business models and comprehensive support systems.",
    },
    {
      title: "Operational Transparency",
      description: "Leverage ",
      highlight: "Real-time data visibility",
      suffix:
        " and customer tracking systems ensuring complete operational transparency and accountability.",
    },
  ];

  const reduceMotion = useReducedMotion();

  const [disableAnim, setDisableAnim] = useState(false);
  useEffect(() => {
    try {
      const played = sessionStorage.getItem("vpPlayed");
      if (played) setDisableAnim(true);
      else sessionStorage.setItem("vpPlayed", "1");
    } catch (e) {}
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .circle-card-container {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          border: 2px solid #27391C;
          background-color: #27391C;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.7s ease-out, background-color 0.5s ease-out;
          position: relative;
        }

        .circle-card-container::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid #B0DB9C;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0.8) rotate(0deg);
          transition: transform 0.7s ease-out, opacity 0.5s ease-out;
          z-index: 0;
        }

        .circle-card-container:hover {
          transform: scale(1.05);
          background-color: #1F2D17;
        }

        .circle-card-container:hover::before {
          opacity: 1;
          transform: scale(1.2) rotate(15deg);
          box-shadow: 0 0 40px rgba(176, 219, 156, 0.4);
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out;
          animation-fill-mode: both;
        }
      `,
        }}
      />

      <div
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F8FAFC", color: "#171717" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* ✅ Section Header */}
          <div className="text-center mb-16 animate-fade-in-down">
            <motion.div
              className="text-center mb-20 max-w-3xl mx-auto"
              variants={disableAnim || reduceMotion ? {} : headerVariants}
              initial={disableAnim || reduceMotion ? false : "hidden"}
              whileInView={disableAnim || reduceMotion ? false : "visible"}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5"
              >
                <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                  Our Core Value Proposition
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Experience the difference of innovative solutions and trusted
                partnerships.
              </p>

              <motion.div
                className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-8 rounded-full"
                initial={disableAnim || reduceMotion ? false : { width: 0 }}
                whileInView={disableAnim || reduceMotion ? false : { width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>

          {/* ✅ Value Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full group animate-fade-in-up"
                style={{
                  animationDelay: disableAnim || reduceMotion ? "0ms" : `${index * 150}ms`,
                }}
              >
                <div className="relative shadow-2xl transition-all duration-700 ease-out z-10 circle-card-container">
                  <div className="p-8 text-center transition-opacity duration-300 z-20">
                    <h3
                      className="text-xl font-bold mb-2 transition-colors duration-300"
                      style={{ color: "#B0DB9C" }}
                    >
                      {value.title}
                    </h3>

                    <p
                      className="text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out"
                      style={{ color: "#E5E7EB" }}
                    >
                      {value.description}
                      <span
                        className="font-bold block mt-1"
                        style={{ color: "#B0DB9C" }}
                      >
                        {value.highlight}
                      </span>
                      {value.suffix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueProposition;
