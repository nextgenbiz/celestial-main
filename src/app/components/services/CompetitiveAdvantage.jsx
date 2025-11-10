'use client';

import React, { useEffect, useRef, useState } from "react";
import { Check, X, Minus } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const CompetitiveAdvantage = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            controls.start("visible");
            setHasPlayed(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const competitors = [
    {
      name: "Celestial Rift LLP",
      highlight: true,
      features: {
        reach: { status: "success", label: "District-level" },
        efficiency: { status: "success", label: "EV-driven" },
        costEfficiency: { status: "success", label: "50% savings" },
        franchiseModel: { status: "success", label: "90% revenue share" },
      },
    },
    {
      name: "Delhivery",
      features: {
        reach: { status: "success", label: "Pan-India" },
        efficiency: { status: "success", label: "Optimized" },
        costEfficiency: { status: "error", label: "High cost" },
        franchiseModel: { status: "error", label: "No" },
      },
    },
    {
      name: "DTDC",
      features: {
        reach: { status: "success", label: "National" },
        efficiency: { status: "neutral", label: "Moderate" },
        costEfficiency: { status: "neutral", label: "Medium" },
        franchiseModel: { status: "success", label: "Yes" },
      },
    },
    {
      name: "Blue Dart",
      features: {
        reach: { status: "success", label: "Metro" },
        efficiency: { status: "error", label: "High cost" },
        costEfficiency: { status: "error", label: "Premium" },
        franchiseModel: { status: "error", label: "No" },
      },
    },
    {
      name: "Ecom Express",
      features: {
        reach: { status: "success", label: "Expanding" },
        efficiency: { status: "success", label: "E-com focus" },
        costEfficiency: { status: "neutral", label: "Medium" },
        franchiseModel: { status: "neutral", label: "Centralized" },
      },
    },
  ];

  const parameters = [
    { key: "reach", label: "Reach" },
    { key: "efficiency", label: "Efficiency" },
    { key: "costEfficiency", label: "Cost Efficiency" },
    { key: "franchiseModel", label: "Franchise Model" },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <Check className="w-5 h-5 text-green-600" />;
      case "error":
        return <X className="w-5 h-5 text-red-600" />;
      case "neutral":
        return <Minus className="w-5 h-5 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "success":
        return "bg-green-50";
      case "error":
        return "bg-red-50";
      case "neutral":
        return "bg-yellow-50";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="text-center mb-20 max-w-3xl mx-auto"
            variants={headerVariants}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5">
              <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                Competitive Advantage
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              See how we stand out from the competition with superior service, efficiency, and partnership opportunities
            </p>
            <motion.div
              className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-8 rounded-full"
              variants={{
                hidden: { width: 0 },
                visible: { width: 96, transition: { duration: 0.8 } },
              }}
              initial="hidden"
              animate={controls}
            />
          </motion.div>
        </div>

        <div className="hidden lg:block bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <motion.table
              className="w-full text-[15px] font-medium"
              initial="hidden"
              animate={controls}
            >
              <thead>
                <motion.tr
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="bg-gradient-to-r from-[#27391C] to-[#3d5229]"
                >
                  <th className="px-5 py-3 text-left text-white uppercase tracking-wide">
                    Parameter
                  </th>

                  {competitors.map((competitor, idx) => (
                    <th
                      key={idx}
                      className={`px-5 py-3 text-center uppercase tracking-wide ${
                        competitor.highlight
                          ? "text-[#B0DB9C] bg-[#1F2D17]"
                          : "text-white"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        {competitor.name}
                        {competitor.highlight && (
                          <div className="text-xs mt-0.5 font-normal normal-case text-[#B0DB9C]">
                            Our Solution
                          </div>
                        )}
                      </motion.div>
                    </th>
                  ))}
                </motion.tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {parameters.map((param, paramIdx) => (
                  <motion.tr
                    key={paramIdx}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: paramIdx * 0.1 },
                      },
                    }}
                    initial="hidden"
                    animate={controls}
                    className="hover:bg-[#F5F9F3] hover:shadow-sm transition-all duration-200 even:bg-gray-50/50"
                  >
                    <td className="px-5 py-3 font-semibold text-gray-900 bg-slate-50/60">
                      {param.label}
                    </td>

                    {competitors.map((competitor, compIdx) => {
                      const feature = competitor.features[param.key];
                      return (
                        <td
                          key={compIdx}
                          className={`px-5 py-3 text-center ${
                            competitor.highlight
                              ? "bg-green-50/50 border-x border-[#B0DB9C]/40"
                              : ""
                          }`}
                        >
                          <motion.div
                            className="flex flex-col items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <div
                              className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${getStatusBg(
                                feature.status
                              )} shadow-sm`}
                            >
                              {React.cloneElement(getStatusIcon(feature.status), {
                                className: "w-4 h-4",
                              })}
                            </div>
                            <span className="text-sm text-gray-700 font-medium">
                              {feature.label}
                            </span>
                          </motion.div>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {competitors.map((competitor, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                competitor.highlight ? "ring-4 ring-[#B0DB9C] ring-offset-2" : ""
              }`}
            >
              <div
                className={`px-6 py-5 ${
                  competitor.highlight
                    ? "bg-gradient-to-r from-[#27391C] to-[#3d5229]"
                    : "bg-gradient-to-r from-slate-700 to-slate-600"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    competitor.highlight ? "text-[#B0DB9C]" : "text-white"
                  }`}
                >
                  {competitor.name}
                </h3>

                {competitor.highlight && (
                  <p className="text-sm text-[#B0DB9C] mt-1">Our Solution</p>
                )}
              </div>

              <div className="p-6 space-y-4">
                {parameters.map((param, paramIdx) => {
                  const feature = competitor.features[param.key];

                  return (
                    <div
                      key={paramIdx}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <span className="font-semibold text-gray-900">
                        {param.label}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-700">
                          {feature.label}
                        </span>

                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${getStatusBg(
                            feature.status
                          )}`}
                        >
                          {getStatusIcon(feature.status)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Advantage</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
              <Minus className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Moderate</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Disadvantage
            </span>
          </div>
        </div>

        {/* Logo carousel placeholder */}
        <div className="mt-20 overflow-hidden"></div>
      </div>
    </div>
  );
};

export default CompetitiveAdvantage;
