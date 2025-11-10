'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, PackageCheck, ArrowRight, Sparkles } from "lucide-react";

const BACKGROUND_IMAGE_URL = "http://googleusercontent.com/image_collection/image_retrieval/3025554444485352813_0";

const PRIMARY_GREEN = "#B0DB9C";
const DARK_GREEN = "#27391C";
const SLATE = "#64748B";
const LIGHT_BG = "#F8FAFC"; 
const TEXT_COLOR = "#171717";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    },
});

const slideIn = (direction = "left", delay = 0) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay, ease: "easeOut" },
    },
});

const CardBackgroundPattern = ({ icon: Icon, color }) => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-10 -right-10 w-48 h-48 rotate-45" style={{ color }}>
            <Icon className="w-full h-full" style={{ opacity: 0.3 }} />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 -rotate-12" style={{ color }}>
            <Icon className="w-full h-full" style={{ opacity: 0.15 }} />
        </div>
    </div>
);

export default function STPHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            id="stp-hero"
            className="pt-16 md:pt-24 pb-12 md:pb-20 relative overflow-hidden scroll-mt-[100px]"
            style={{
                backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.85)), url(${BACKGROUND_IMAGE_URL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
                <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="250" fill={PRIMARY_GREEN} opacity="0.15" />
                    <circle cx="400" cy="200" r="150" fill={PRIMARY_GREEN} opacity="0.1" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10">
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="400" height="400" rx="80" fill={DARK_GREEN} opacity="0.08" />
                </svg>
            </div>

            <div
                className="absolute inset-0 opacity-[0.01]"
                style={{
                    backgroundImage: `linear-gradient(${SLATE} 1px, transparent 1px), linear-gradient(90deg, ${SLATE} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <motion.div
                ref={ref} 
                className="container mx-auto px-6 max-w-7xl relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
                variants={containerVariants}
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 md:mb-16">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        variants={fadeUp(0)} 
                    >
                        <div>
                            <p className="inline-block text-xs font-bold text-[#27391C] uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-[#B0DB9C]/10 rounded-full border border-[#B0DB9C]/30">
                                STP FRAMEWORK
                            </p>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5">
                            Segmentation <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                                Targeting & Positioning
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            A strategic approach to dominate Bhadrak's logistics market through precise targeting and distinctive positioning.
                        </p>
                        
                        <motion.div
                            className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 max-w-4xl mx-auto"
                >
                    {[
                        { icon: Users, label: "Customer Segments", value: "3 Major Groups" },
                        { icon: Target, label: "Target Markets", value: "5+ Categories" },
                        { icon: PackageCheck, label: "Service Zones", value: "10+ Areas" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp(i * 0.15)} 
                            className="p-5 border-2 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer"
                            style={{
                                backgroundColor: 'white',
                                borderColor: SLATE,
                                borderRadius: '12px'
                            }}
                            whileHover={{
                                y: -3,
                                borderColor: PRIMARY_GREEN,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ backgroundColor: `${PRIMARY_GREEN}10` }}
                            />
                            <div
                                className="w-10 h-10 flex items-center justify-center mb-3 relative z-10"
                                style={{ backgroundColor: LIGHT_BG, borderRadius: '8px' }}
                            >
                                <stat.icon className="w-5 h-5" style={{ color: DARK_GREEN }} />
                            </div>
                            <div className="text-xl font-bold mb-1 relative z-10" style={{ color: DARK_GREEN }}>
                                {stat.value}
                            </div>
                            <div className="text-xs font-semibold relative z-10" style={{ color: SLATE }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content Cards - Stacked Layout */}
                <motion.div
                    variants={containerVariants}
                    className="space-y-6 max-w-5xl mx-auto"
                >
                    {/* Segmentation Card */}
                    <motion.div
                        variants={slideIn("left", 0.5)} // Adjusted delay
                        className="p-8 border-l-6 relative overflow-hidden group"
                        style={{
                            backgroundColor: 'white',
                            borderColor: PRIMARY_GREEN,
                            borderRadius: '0 20px 20px 0',
                            boxShadow: '0 3px 20px rgba(0,0,0,0.05)'
                        }}
                        whileHover={{
                            x: 6,
                            boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                            transition: { duration: 0.3 }
                        }}
                    >
                        <CardBackgroundPattern icon={Users} color={PRIMARY_GREEN} />

                        <div className="flex items-start gap-4 relative z-10">
                            <div
                                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                                style={{
                                    backgroundColor: `${PRIMARY_GREEN}20`,
                                    borderRadius: '12px'
                                }}
                            >
                                <Users className="w-6 h-6" style={{ color: DARK_GREEN }} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2" style={{ color: TEXT_COLOR }}>
                                    Segmentation
                                </h2>
                                <p className="text-base leading-relaxed" style={{ color: SLATE }}>
                                    Dividing the market into <span className="font-bold" style={{ color: DARK_GREEN }}>e-commerce sellers</span>, <span className="font-bold" style={{ color: DARK_GREEN }}>corporate clients</span>, and <span className="font-bold" style={{ color: DARK_GREEN }}>individual customers</span> based on unique logistics needs and service expectations.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Targeting Card */}
                    <motion.div
                        variants={slideIn("right", 0.65)} // Adjusted delay
                        className="p-8 border-r-6 relative overflow-hidden group ml-auto"
                        style={{
                            backgroundColor: 'white',
                            borderColor: DARK_GREEN,
                            borderRadius: '20px 0 0 20px',
                            boxShadow: '0 3px 20px rgba(0,0,0,0.05)'
                        }}
                        whileHover={{
                            x: -6,
                            boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                            transition: { duration: 0.3 }
                        }}
                    >
                        <CardBackgroundPattern icon={Target} color={DARK_GREEN} />

                        <div className="flex items-start gap-4 flex-row-reverse relative z-10">
                            <div
                                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                                style={{
                                    backgroundColor: `${DARK_GREEN}15`,
                                    borderRadius: '12px'
                                }}
                            >
                                <Target className="w-6 h-6" style={{ color: DARK_GREEN }} />
                            </div>
                            <div className="flex-1 text-right">
                                <h2 className="text-2xl font-bold mb-2" style={{ color: TEXT_COLOR }}>
                                    Targeting
                                </h2>
                                <div className="space-y-2 text-base" style={{ color: SLATE }}>
                                    <p className="leading-relaxed">
                                        <span className="font-bold" style={{ color: DARK_GREEN }}>→ SMEs</span> seeking cost-effective and reliable delivery solutions
                                    </p>
                                    <p className="leading-relaxed">
                                        <span className="font-bold" style={{ color: DARK_GREEN }}>→ Corporates</span> requiring secure, tracked shipment management
                                    </p>
                                    <p className="leading-relaxed">
                                        <span className="font-bold" style={{ color: DARK_GREEN }}>→ Individuals</span> wanting convenient pickup and delivery services
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Positioning Card */}
                    <motion.div
                        variants={slideIn("left", 0.8)} 
                        className="p-8 border-l-6 relative overflow-hidden group"
                        style={{
                            backgroundColor: DARK_GREEN,
                            borderColor: PRIMARY_GREEN,
                            borderRadius: '0 20px 20px 0',
                            boxShadow: '0 3px 20px rgba(0,0,0,0.05)'
                        }}
                        whileHover={{
                            x: 6,
                            boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                            transition: { duration: 0.3 }
                        }}
                    >
                        <CardBackgroundPattern icon={PackageCheck} color={LIGHT_BG} />

                        <div className="flex items-start gap-4 relative z-10">
                            <div
                                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                                style={{
                                    backgroundColor: PRIMARY_GREEN,
                                    borderRadius: '12px'
                                }}
                            >
                                <PackageCheck className="w-6 h-6" style={{ color: DARK_GREEN }} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-3" style={{ color: PRIMARY_GREEN }}>
                                    Positioning
                                </h2>
                                <p className="text-xl font-bold italic mb-3 leading-relaxed" style={{ color: 'white' }}>
                                    "Bhadrak's trusted last-mile courier partner"
                                </p>
                                <p className="text-base leading-relaxed" style={{ color: LIGHT_BG }}>
                                    We deliver <span className="font-bold" style={{ color: PRIMARY_GREEN }}>green, tech-enabled logistics</span> with complete reliability and transparency at every step.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}