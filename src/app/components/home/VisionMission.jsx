'use client';

import React from 'react';
import { motion } from 'framer-motion';


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
        {path === 'eye' && (
            <>
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
            </>
        )}
        {path === 'target' && (
            <>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </>
        )}
    </svg>
);

const VisionMissionCard = ({ type, title, content, icon, index }) => {
    const isVision = type === 'vision';

    const cardVariants = {
        hidden: { opacity: 0, x: isVision ? -60 : 60, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.div
            className="group relative h-full"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className={`relative p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden h-full min-h-[350px] rounded-2xl ${isVision
                    ? 'bg-gradient-to-br from-white to-[#B0DB9C]/5 border-gray-100 hover:border-[#B0DB9C]/50'
                    : 'bg-gradient-to-br from-[#27391C] to-[#1a2514] border-[#B0DB9C]/10 hover:border-[#B0DB9C]/30'
                    }`}
            >

                <motion.div
                    className={`absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl ${isVision ? 'bg-[#B0DB9C]/15' : 'bg-[#B0DB9C]/20'
                        }`}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="relative z-10 h-full flex flex-col">

                    <div className="flex items-center justify-between mb-6"> 
                        <motion.div
                            className={`flex items-center space-x-3 ${ 
                                isVision ? 'text-[#27391C]' : 'text-[#B0DB9C]'
                                }`}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className={`p-3 rounded-xl shadow-lg ${isVision
                                    ? 'bg-gradient-to-br from-[#B0DB9C] to-[#8bc97a] text-white'
                                    : 'bg-gradient-to-br from-[#B0DB9C]/20 to-[#8bc97a]/10 border-2 border-[#B0DB9C]/30 text-[#B0DB9C]'
                                    }`}
                                whileHover={{ rotate: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Icon
                                    path={icon}
                                    className={`w-7 h-7 ${isVision ? 'text-[#27391C]' : 'text-[#B0DB9C]'}`}
                                />
                            </motion.div>
                            <span className={`text-base font-black uppercase tracking-wider ${ 
                                isVision ? 'text-[#27391C]' : 'text-[#B0DB9C]'
                                }`}>
                                {type}
                            </span>
                        </motion.div>

                        <motion.div
                            className="w-16 h-1 rounded-full bg-gradient-to-r from-[#B0DB9C] to-[#27391C]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl sm:text-3xl font-black mb-4 leading-tight ${ // <-- Reduced font size to text-2xl/text-3xl
                        isVision ? 'text-[#27391C]' : 'text-white'
                        }`}>
                        {title}
                    </h3>

                    {/* Content */}
                    <div className="flex-grow">
                        <p className={`text-sm sm:text-base leading-relaxed ${ // <-- Reduced font size to text-sm/text-base
                            isVision ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                            {content}
                        </p>
                    </div>

                    {/* Bottom decorative line */}
                    <motion.div
                        className={`mt-6 w-full h-1.5 rounded-full ${ // Reduced margin-top
                            isVision
                                ? 'bg-gradient-to-r from-[#B0DB9C] to-[#27391C]'
                                : 'bg-gradient-to-r from-white/30 to-[#B0DB9C]'
                            }`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>

            {/* Floating shadow (Simplified) */}
            <div
                className={`absolute inset-0 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isVision ? 'bg-[#B0DB9C]/15' : 'bg-[#27391C]/20'
                    } transform translate-y-2 scale-[0.98]`}
            />
        </motion.div>
    );
};

const VisionMission = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const visionMissionData = [
        {
            type: 'vision',
            title: 'Our Vision',
            content: 'To become the leading district-level courier network in Odisha, offering eco-friendly, fast, and reliable delivery services through sustainable franchise expansion.',
            icon: 'eye'
        },
        {
            type: 'mission',
            title: 'Our Mission',
            content: 'To empower local entrepreneurs under the Trackon Super Franchise model, optimize last-mile delivery using EVs, and deliver service excellence with efficiency, transparency, and trust.',
            icon: 'target'
        }
    ];

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
    };

    return (
        <motion.section
            id="vision-mission"
            className="relative py-14 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 selection:bg-[#B0DB9C] selection:text-[#27391C] font-sans overflow-hidden"
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariants}
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#B0DB9C]/4 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#27391C]/4 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Header Section */}
                <motion.div className="text-center mb-16" variants={sectionVariants}>

                    <motion.div
                        className="inline-flex items-center space-x-2 px-6 py-2 bg-[#B0DB9C]/10 border-2 border-[#B0DB9C]/50 rounded-full mb-6"
                        variants={itemVariants}
                    >
                        <div className="w-2 h-2 bg-[#B0DB9C] rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-[#27391C] uppercase tracking-wide">Our Direction</span>
                    </motion.div>

                    <motion.div className="text-center mb-20 max-w-3xl mx-auto" variants={headerVariants}>

                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5"
                        >
                            <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                                Vision & Mission
                            </span>
                        </h2>

                        <motion.p
                            className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Guiding our journey towards excellence and sustainable growth
                        </motion.p>
                        <motion.div
                            className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-8 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        />
                    </motion.div>
                </motion.div>

                {/* Vision & Mission Cards */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto"
                    variants={sectionVariants}
                >
                    {visionMissionData.map((item, index) => (
                        <VisionMissionCard
                            key={index}
                            type={item.type}
                            title={item.title}
                            content={item.content}
                            icon={item.icon}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Bottom Decorative Element */}
                <motion.div
                    className="mt-16 flex justify-center"
                    variants={itemVariants}
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#B0DB9C] rounded-full" />
                        <motion.div
                            className="w-3 h-3 bg-[#B0DB9C] rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#27391C] rounded-full" />
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default VisionMission;