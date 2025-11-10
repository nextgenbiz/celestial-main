'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const CourierLogisticsLandscape = () => {

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const challengeData = [
        {
            title: "Inefficient Last-Mile",
            content: "Current models affect cost, speed, and overall efficiency, particularly in rural and sub-urban areas.",
            icon: 1
        },
        {
            title: "Sustainability Concerns",
            content: "The reliance on traditional fossil fuels raises environmental impact issues in logistics.",
            icon: 2
        },
        {
            title: "Lack of Local Focus",
            content: "Insufficient district-level network depth hinders localized entrepreneurship and rapid service expansion.",
            icon: 3
        },
    ];

    return (
        <motion.section
            id="logistics-landscape"
            className="relative py-12 md:py-14 **bg-white text-gray-800** font-sans overflow-hidden" // Clean background
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-[#B0DB9C]/10 rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-[#27391C]/10 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                <motion.div className="text-center mb-16 max-w-4xl mx-auto" variants={sectionVariants}>
                    <motion.div
                        className="inline-flex items-center space-x-2 px-6 py-2 bg-[#27391C]/5 border-2 border-[#27391C]/10 rounded-full mb-6"
                        variants={itemVariants}
                    >
                        <div className="w-2 h-2 bg-[#27391C] rounded-full" />
                        <span className="text-sm font-bold text-[#27391C] uppercase tracking-wide">
                            Industry Context
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl font-black text-[#27391C] leading-tight mb-4"
                        variants={itemVariants}
                    >
                        The Evolving <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">Logistics Landscape</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 font-medium"
                        variants={itemVariants}
                    >
                        The courier and logistics industry is evolving rapidly — driven by e-commerce growth and digital transformation. Yet, key challenges persist that affect cost, speed, and efficiency.
                    </motion.p>
                    <motion.div
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 rounded-full"
                        variants={headerVariants}
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="relative max-w-6xl mx-auto mt-20">

                    <motion.div
                        className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#B0DB9C]/50"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
                        {challengeData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative group p-6 sm:p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#B0DB9C] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-[#B0DB9C] text-[#27391C] font-extrabold shadow-xl border-4 border-white transition-all duration-300 group-hover:bg-[#27391C] group-hover:text-[#B0DB9C]">
                                    {item.icon}
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-bold text-[#27391C] mb-3 text-center">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-gray-600 text-center">
                                        {item.content}
                                    </p>
                                </div>

                                <motion.div
                                    className="w-12 h-1 mx-auto mt-6 bg-gradient-to-r from-[#B0DB9C] to-[#27391C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default CourierLogisticsLandscape;
