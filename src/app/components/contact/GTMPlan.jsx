'use client';
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const COLORS = {
    primary: "#B0DB9C", 
    secondary: "#27391C", 
    muted: "#64748B", 
    background: "#F8FAFC", 
    cardBg: "#FFFFFF", 
    text: "#171717",
};

const MapPinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const ChartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 3v18h18" />
        <path d="m18 17-5-5-5 5H4V7l6-6 6 6 4-4v7" />
    </svg>
);

const HandshakeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 21v-3.5a2 2 0 1 0 0-4.5H5a2 2 0 0 0 0 4.5V21" />
        <path d="M14 21v-4.5a2 2 0 1 1 0-4.5h5a2 2 0 1 1 0 4.5V21" />
        <path d="m15 11 1.7 1.7a2 2 0 0 1 0 2.8l-1.6 1.6" />
        <path d="m9 11-1.7 1.7a2 2 0 0 0 0 2.8l1.6 1.6" />
    </svg>
);

const gtmData = [
    {
        id: 'phase1',
        title: "District Strengthening",
        subtitle: "Phase 1: Initial Market Penetration (Bhadrak)",
        icon: MapPinIcon,
        metric: "7 Outlets, EV Fleet",
        details: "Launch 7 optimized, eco-friendly franchise outlets with a full EV fleet to establish market dominance and operational excellence in the target district.",
    },
    {
        id: 'phase2',
        title: "Regional Expansion",
        subtitle: "Phase 2: Scaling Across Eastern Odisha (3 Years)",
        icon: ChartIcon,
        metric: "15–20 Units Total",
        details: "Execute the replication strategy to scale operations across Eastern Odisha, achieving a total network of 15–20 high-performing franchise units through synergy.",
    },
];

const SteppedPhaseCard = ({ data, isRight }) => {
    const IconComponent = data.icon;
    const baseClasses = `p-6 md:p-8 rounded-xl shadow-xl transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden`;

    return (
        <div
            className={baseClasses}
            style={{
                backgroundColor: COLORS.cardBg,
                border: `1px solid ${COLORS.primary}`,
                boxShadow: `0 10px 20px rgba(39, 57, 28, 0.08)`,
            }}
        >
            <div
                className={`absolute inset-0 z-0 opacity-10`}
                style={{
                    backgroundColor: COLORS.primary,
                    clipPath: isRight
                        ? 'polygon(100% 0, 100% 100%, 0% 100%, 15% 0)'
                        : 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
                }}
            ></div>

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                    <IconComponent className="flex-shrink-0" style={{ color: COLORS.secondary }} />
                    <span className="text-lg font-bold uppercase tracking-widest" style={{ color: COLORS.secondary }}>
                        {data.id.toUpperCase()}
                    </span>
                </div>

                <h3 style={{ color: COLORS.secondary }} className="text-3xl font-black tracking-tight mb-1">
                    {data.title}
                </h3>
                <p style={{ color: COLORS.muted }} className="text-base italic font-light mb-4">
                    {data.subtitle}
                </p>

                <div className="mb-6 border-t pt-4" style={{ borderColor: COLORS.background }}>
                    <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: COLORS.muted }}>Target Metric</p>
                    <span
                        style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
                        className="inline-block px-4 py-1 text-base font-bold rounded-full"
                    >
                        {data.metric}
                    </span>
                </div>

                <p style={{ color: COLORS.text }} className="text-base leading-relaxed">
                    {data.details}
                </p>
            </div>
        </div>
    );
};

const immediateHeaderVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const dividerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};


const SynergyEngine = () => (
    <div className="flex flex-col items-center justify-center p-8 relative z-20">
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-full mx-auto shadow-2xl transition-transform duration-500 hover:scale-[1.05] w-48 h-48 flex flex-col items-center justify-center text-center flex-shrink-0"
            style={{
                backgroundColor: COLORS.secondary,
                color: COLORS.primary,
                border: `3px solid ${COLORS.primary}`,
                boxShadow: `0 0 0 12px ${COLORS.primary}20, 0 15px 30px -10px ${COLORS.secondary}80`,
            }}
        >
            <HandshakeIcon className="w-10 h-10 mb-2" />
            <p className="text-lg font-extrabold uppercase leading-tight">
                Synergy Engine
            </p>
            <p className="text-xs font-light italic mt-1" style={{ color: COLORS.background }}>
                Replication Core
            </p>
        </motion.div>

        <div className="lg:hidden w-1 h-12 my-4" style={{ backgroundColor: COLORS.primary }}></div>
    </div>
);

const GTMPlan = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); 

    React.useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <section
            className="py-16 md:py-24 px-4 min-h-screen font-sans"
            style={{
                backgroundColor: COLORS.background,
                fontFamily: "Inter, sans-serif"
            }}
            ref={ref}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    variants={immediateHeaderVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5">
                        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                            GTM Strategic Pipeline
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        A clear, two-stage <strong>Strategic Flow</strong> designed for maximum market penetration and sustainable regional scaling.
                    </p>

                    <motion.div
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 rounded-full"
                        variants={dividerVariants}
                        initial="hidden"
                        whileInView="visible" 
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="relative pt-12">
                    <div
                        className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 z-10"
                        style={{
                            background: `repeating-linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primary} 10px, ${COLORS.background} 10px, ${COLORS.background} 20px)`,
                        }}
                    ></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 items-center">
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10 mb-8 lg:mb-0"
                        >
                            <SteppedPhaseCard data={gtmData[0]} isRight={false} />
                        </motion.div>

                        <div className="relative z-30 mb-8 lg:mb-0 -mt-10 lg:mt-0">
                            <SynergyEngine />
                        </div>

                        <motion.div 
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <SteppedPhaseCard data={gtmData[1]} isRight={true} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GTMPlan;