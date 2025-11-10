'use client';
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 

const COLORS = {
  primary: "#B0DB9C", 
  secondary: "#27391C",
  muted: "#64748B", 
  background: "#F8FAFC", 
  text: "#171717", 
};

const revenueData = [
  {
    title: "Franchise Operations",
    detail: "7 local units, forming our core market presence.",
    value: "CORE",
  },
  {
    title: "Delivery Charges",
    detail: "90% retained by franchisees for operational autonomy.",
    value: "HIGH MARGIN",
  },
  {
    title: "Value-Added Services",
    detail: "Packaging, COD, and priority fulfillment options.",
    value: "ADD-ONS",
  },
  {
    title: "Franchise Training & Support",
    detail: "Structured programs driving long-term stability and success.",
    value: "SUPPORT",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const WedgeRevenueCard = ({ title, detail, value, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text,
      }}
      className="relative p-4 sm:p-5 md:p-6 transition-all duration-300 shadow-xl rounded-lg cursor-pointer"
    >
      <div
        className="absolute inset-y-0 right-0 w-6 sm:w-8"
        style={{
          clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
          backgroundColor: COLORS.primary,
          transform: "translateX(100%)",
        }}
      >
        <span
          style={{
            backgroundColor: COLORS.secondary,
            color: COLORS.primary,
          }}
          className="absolute inset-0 m-auto w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-[7px] sm:text-[8px] font-bold"
        >
          {index + 1}
        </span>
      </div>

      <div className="flex flex-col h-full">
        <h3
          style={{ color: COLORS.secondary }}
          className="mb-1 text-lg sm:text-xl md:text-2xl font-extrabold"
        >
          {title}
        </h3>
        <p style={{ color: COLORS.muted }} className="flex-grow text-sm sm:text-base">
          {detail}
        </p>

        {/* Value Tag */}
        <span
          style={{
            backgroundColor: COLORS.primary,
            color: COLORS.secondary,
            borderColor: COLORS.primary,
          }}
          className="inline-block px-2 sm:px-3 py-1 mt-3 sm:mt-4 text-[10px] sm:text-xs font-semibold uppercase rounded border bg-opacity-30 self-start"
        >
          {value}
        </span>
      </div>
    </motion.div>
  );
};

const RevenueStreams = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/ac/e6/d9/ace6d91a508466539259627d74b5b0f4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container max-w-7xl mx-auto relative z-10">

        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto px-4"
          variants={headerVariants}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4 sm:mb-5"
          >
            <span className="bg-gradient-to-r from-[#B0DB9C] to-[#FFFFFF] bg-clip-text text-transparent">
              Revenue Streams
            </span>
          </h2>
          <p
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
          >
            Connected modules for a holistic view of financial channels. </p>

          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#FFFFFF] mt-6 sm:mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: '6rem' } : { width: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>



        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-y-6 sm:gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8"
        >
          {revenueData.map((item, index) => (
            <WedgeRevenueCard
              key={index}
              title={item.title}
              detail={item.detail}
              value={item.value}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default RevenueStreams;