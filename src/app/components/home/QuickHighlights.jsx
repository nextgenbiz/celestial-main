'use client';

import React from "react";
import { motion } from "framer-motion";

const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {path === "location-pin" && (
            <>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </>
        )}
        {path === "electric-bolt" && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />}
        {path === "trending-up" && (
            <>
                <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                <path d="M16 7h6v6" />
            </>
        )}
        {path === "shield-check" && (
            <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
            </>
        )}
    </svg>
);

const HighlightCard = ({ icon, title, description, index, colorClass }) => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            className="group relative h-full"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#B0DB9C] overflow-hidden h-full rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B0DB9C]/5 via-transparent to-[#27391C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 bg-[#B0DB9C]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <motion.div
                        className={`mb-4 w-20 h-20 ${colorClass} rounded-full flex items-center justify-center shadow-xl relative`}
                        whileHover={{
                            rotate: 360,
                            scale: 1.15,
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-75 group-hover:scale-100 transition-transform duration-500" />
                        <Icon path={icon} className="w-10 h-10 text-white relative z-10" />
                    </motion.div>

                    <div className="flex-grow space-y-3">
                        <h3 className="text-2xl font-black text-[#27391C] leading-tight group-hover:text-[#1a2514] transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                            {description}
                        </p>
                    </div>

                    <motion.div
                        className="mt-6 w-full h-1 bg-gradient-to-r from-[#B0DB9C] to-[#27391C] rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#B0DB9C]/10 to-[#27391C]/10 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4" />
        </motion.div>
    );
};

const QuickHighlights = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    const highlights = [
        {
            icon: "location-pin",
            title: "District-level Trackon Super Franchise",
            description:
                "Operating as an authorized franchise in Bhadrak, Odisha, bringing national-level courier excellence to the local market.",
            colorClass: "bg-gradient-to-br from-[#2d4621] to-[#27391C]",
        },
        {
            icon: "electric-bolt",
            title: "Electric Vehicle-based Eco-friendly Logistics",
            description:
                "Committed to sustainable delivery solutions using electric vehicles, reducing carbon footprint while ensuring efficient operations.",
            colorClass: "bg-gradient-to-br from-[#2d4621] to-[#27391C]",
        },
        {
            icon: "trending-up",
            title: "High ROI & Franchise Growth Opportunities",
            description:
                "Proven business model with strong return on investment and scalable franchise opportunities for sustainable growth.",
            colorClass: "bg-gradient-to-br from-[#2d4621] to-[#27391C]",
        },
        {
            icon: "shield-check",
            title: "Transparent, Technology-driven Operations",
            description:
                "Leveraging cutting-edge technology for real-time tracking, transparent processes, and seamless customer experience.",
            colorClass: "bg-gradient-to-br from-[#2d4621] to-[#27391C]",
        },
    ];

    return (
        <motion.section
            id="quick-highlights"
            className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 selection:bg-[#B0DB9C] selection:text-[#27391C] font-sans overflow-hidden"
            initial="hidden"
            animate="visible"  
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariants}
        >
          
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-32 right-20 w-[500px] h-[500px] bg-[#B0DB9C]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-[#27391C]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            
                <motion.div className="text-center mb-20" variants={sectionVariants}>
                    <motion.div
                        className="inline-flex items-center space-x-3 px-8 py-3 bg-gradient-to-r from-[#B0DB9C]/10 via-[#B0DB9C]/5 to-transparent border-2 border-[#B0DB9C]/50 rounded-full mb-8 backdrop-blur-sm"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, borderColor: "rgba(176, 219, 156, 1)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <svg
                                className="w-5 h-5 text-[#27391C]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.div>
                        <span className="text-sm font-extrabold text-[#27391C] uppercase tracking-wider">
                            Why Choose Us
                        </span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5">
                        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                            Quick Highlights
                        </span>
                    </h2>

                    <motion.p
                        className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Discover what makes Celestial Rift LLP your trusted partner in
                        modern logistics solutions.
                    </motion.p>
                    <motion.div
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-8 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto mb-24"
                    variants={sectionVariants}
                >
                    {highlights.map((highlight, index) => (
                        <HighlightCard key={index} {...highlight} index={index} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default QuickHighlights;
