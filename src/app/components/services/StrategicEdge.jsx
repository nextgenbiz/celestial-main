'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

export default function StrategicEdge() {

    const [disableAnim, setDisableAnim] = useState(false);

    useEffect(() => {
        const alreadyAnimated = sessionStorage.getItem("strategicEdgePlayed");
        if (alreadyAnimated) {
            setDisableAnim(true);  
        } else {
            sessionStorage.setItem("strategicEdgePlayed", "true");
        }
    }, []);


    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const { scrollYProgress } = useScroll();

    const points = [
        {
            title: "Super Franchise Model",
            description:
                "Centralized quality control across 7 district units ensures brand consistency and operational excellence.",
        },
        {
            title: "Electric Vehicle Deployment",
            description:
                "Reducing fuel costs by up to 50% through sustainable EV integration in logistics operations.",
        },
        {
            title: "Tech-Enabled Operations",
            description:
                "Real-time tracking, MIS dashboards, and smart analytics for transparent, efficient logistics management.",
        },
        {
            title: "Infrastructure Readiness",
            description:
                "Fully equipped centers with CCTV, scanners, and high-speed internet to ensure seamless workflow.",
        },
        {
            title: "Revenue Share Model",
            description:
                "Franchisees retain up to 90% of earnings under a transparent and scalable business structure.",
        },
        {
            title: "Continuous Training",
            description:
                "Ongoing support, skill development, and franchise training for consistent operational growth.",
        },
    ];

    const duplicatedPoints = [...points, ...points, ...points];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId;
        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const animate = () => {
            if (!isPaused && container) {
                scrollPosition += scrollSpeed;
                const maxScroll = container.scrollWidth / 3;
                if (scrollPosition >= maxScroll) scrollPosition = 0;
                container.scrollLeft = scrollPosition;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const cardVariants = {
        rest: {
            scale: 1,
            y: 0,
            boxShadow: "0 10px 30px -5px rgba(39, 57, 28, 0.1), 0 0 0 1px rgba(176, 219, 156, 0.2)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        hover: {
            scale: 1.03,
            y: -8,
            boxShadow: "0 30px 60px -15px rgba(39, 57, 28, 0.25), 0 0 0 2px rgba(176, 219, 156, 0.5)",
            transition: { type: "spring", stiffness: 300, damping: 15 }
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <>
            <style jsx global>{`
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>

            <div ref={sectionRef} className="relative min-h-screen bg-[#F8FAFC] overflow-hidden py-16 md:py-24">

                <motion.div
                    initial={disableAnim ? {} : { scale: 0.5, opacity: 0 }}
                    animate={disableAnim ? {} : isInView ? {
                        scale: [0.5, 1, 0.9, 1],
                        opacity: [0, 0.6, 0.4, 0.6],
                        y: [0, -20, 0]
                    } : {}}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-[#B0DB9C]/30 to-transparent blur-3xl"
                />

                <motion.div
                    initial={disableAnim ? {} : { scale: 0.3, opacity: 0 }}
                    animate={disableAnim ? {} : isInView ? {
                        scale: [0.3, 0.8, 0.7, 0.8],
                        opacity: [0, 0.5, 0.3, 0.5],
                        y: [0, 25, 0]
                    } : {}}
                    transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-[#27391C]/20 to-transparent blur-3xl"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 md:mb-16">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={disableAnim ? {} : { opacity: 0, y: 30 }}
                        animate={disableAnim ? {} : isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="inline-block text-xs font-bold text-[#27391C] uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-[#B0DB9C]/10 rounded-full border border-[#B0DB9C]/30">
                            Our Strategic Edge
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5">
                            Driving Innovation <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                                with Sustainable Solutions
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Celestial Rift LLP brings a <strong>modern, scalable logistics model</strong> that merges technology, sustainability, and franchise empowerment.
                        </p>
                    </motion.div>

                    <motion.div
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 rounded-full"
                        variants={headerVariants}
                        initial={disableAnim ? {} : { width: 0 }}
                        whileInView={disableAnim ? {} : { width: 96 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </div>

                <div className="relative pb-8">

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 py-8 items-center scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        <div className="w-6 flex-shrink-0"></div>

                        {duplicatedPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="relative flex-shrink-0 w-[340px] sm:w-[360px] cursor-pointer"
                                initial={disableAnim ? {} : { opacity: 0, y: 40 }}
                                animate={disableAnim ? {} : isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
                            >
                                <motion.div
                                    className="relative rounded-2xl overflow-hidden group bg-white border border-[#B0DB9C]/20"
                                    variants={cardVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#B0DB9C]/0 via-[#B0DB9C]/0 to-[#B0DB9C]/0 group-hover:from-[#B0DB9C]/20 group-hover:via-[#86EFAC]/10 group-hover:to-[#B0DB9C]/20 transition-all duration-500" />

                                    <div className="relative z-10 p-7 sm:p-8 min-h-[280px] flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-[#B0DB9C]/20 to-[#B0DB9C]/10 flex items-center justify-center border border-[#B0DB9C]/30 group-hover:from-[#B0DB9C]/30 group-hover:to-[#B0DB9C]/20 transition-all duration-300">
                                                <svg className="w-6 h-6 text-[#27391C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-[#27391C] transition-colors duration-300">
                                                {point.title}
                                            </h3>
                                            <p className="text-sm text-[#64748B] leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>
                                        <div className="mt-5 flex items-center text-sm text-[#27391C] font-semibold group-hover:text-[#B0DB9C] transition-colors duration-300">
                                            <span>Learn more</span>
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                        <div className="w-6 flex-shrink-0"></div>
                    </div>

                    <motion.div
                        className="text-center mt-8"
                        initial={disableAnim ? {} : { opacity: 0, y: 20 }}
                        animate={disableAnim ? {} : isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-[#B0DB9C]/30 shadow-sm">
                            <span className="text-sm font-medium text-[#64748B]">
                                {isPaused ? "Paused" : "Auto-scrolling"}
                            </span>
                            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isPaused ? "bg-red-500" : "bg-[#B0DB9C] animate-pulse"}`} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
