'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fuel, Clock, EyeOff, Building, Scale, Swords, Sparkles, ArrowRight, Zap } from 'lucide-react';


const PRIMARY_TEXT_COLOR = '#1F2937'; 
const SECONDARY_TEXT_COLOR = '#6B7280'; 
const THEME_DARK_COLOR = '#27391C'; 
const THEME_LIGHT_COLOR = '#B0DB9C'; 

const CARD_BG_DARK = '#27391C'; 
const CARD_BORDER_DARK = '#3F5734'; 
const CARD_TEXT_LIGHT = '#FFFFFF'; 
const CARD_TEXT_SECONDARY = '#D1D5DB'; 

const challenges = [
    {
        icon: Fuel,
        title: "Rising Fuel Costs",
        detail: "Hybrid networks and fluctuating global oil prices significantly increase operational costs, pressuring margins.",
        stat: "↑25%",
        color: THEME_LIGHT_COLOR,
        bgGlow: "rgba(176, 219, 156, 0.15)"
    },
    {
        icon: Clock,
        title: "Last-Mile Delays",
        detail: "Over 40% of shipments encounter last-mile inefficiencies due to traffic, poor address data, and high delivery volumes.",
        stat: "40%",
        color: THEME_LIGHT_COLOR,
        bgGlow: "rgba(176, 219, 156, 0.15)"
    },
    {
        icon: EyeOff,
        title: "Lack of Real-Time Visibility",
        detail: "Over 60% of logistics managers report gaps in end-to-end tracking, leading to poor customer experience.",
        stat: "60%",
        color: THEME_LIGHT_COLOR,
        bgGlow: "rgba(176, 219, 156, 0.15)"
    },
    {
        icon: Building,
        title: "Infrastructure Bottlenecks",
        detail: "Limited modern warehousing capacity, coupled with poor urban connectivity, creates critical supply chain choke points.",
        stat: "Critical",
        color: THEME_LIGHT_COLOR,
        bgGlow: "rgba(176, 219, 156, 0.15)"
    },
    {
        icon: Scale,
        title: "Regulatory Complexities",
        detail: "Frequent updates to compliance laws, customs procedures, and emerging EV norms demand continuous adaptation.",
        stat: "High",
        color: THEME_LIGHT_COLOR,
        bgGlow: "rgba(176, 219, 156, 0.15)"
    },
    {
        icon: Swords,
        title: "Intense Competition",
        detail: "The dominance of large global courier giants creates fierce pricing pressure, squeezing profit margins for regional players.",
        stat: "Extreme",
        color: THEME_LIGHT_COLOR,
        bgGlow: "rgba(176, 219, 156, 0.15)"
    },
];

const FloatingParticles = ({ color }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-50"
                    style={{ backgroundColor: color }}
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -50 - 20],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 1,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
};

const ChallengeCard = ({ challenge, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = challenge.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group cursor-pointer h-full"
        >
            <motion.div
                className="relative rounded-xl p-6 md:p-8 h-full overflow-hidden flex flex-col transition-all duration-300 ease-out"
                style={{
                    backgroundColor: CARD_BG_DARK,
                    border: `1px solid ${CARD_BORDER_DARK}`,
                    boxShadow: isHovered
                        ? `0 12px 20px -5px ${THEME_LIGHT_COLOR}55`
                        : 'none'
                }}
                whileHover={{ y: -4 }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ background: `linear-gradient(to right, ${challenge.color} 5%, transparent 95%)` }}
                />

                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center relative border-2 transition-colors duration-300"
                            style={{
                                borderColor: challenge.color,
                                backgroundColor: `${challenge.color}22`
                            }}
                        >
                            <Icon size={24} color={challenge.color} strokeWidth={2} />
                        </div>

                        <div
                            className="px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors duration-300"
                            style={{
                                backgroundColor: `${challenge.color}22`,
                                color: challenge.color,
                            }}
                        >
                            {challenge.stat}
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight" style={{ color: CARD_TEXT_LIGHT }}>
                        {challenge.title}
                    </h3>

                    <p className="text-base leading-relaxed mb-6 flex-grow" style={{ color: CARD_TEXT_SECONDARY }}>
                        {challenge.detail}
                    </p>

                    <div
                        className="flex items-center gap-2 text-sm font-semibold pt-4 border-t"
                        style={{ color: challenge.color, borderColor: `${challenge.color}44` }}
                    >
                        <span>Explore solution</span>
                        <motion.div
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowRight size={16} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const Header = () => (
    <div className="text-center mb-16 relative">
        <motion.div className="text-center mb-20 max-w-3xl mx-auto" variants={headerVariants}>
            <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5"
            >
                <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                  The Real Challenges
                </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Critical obstacles reshaping the logistics industry and demanding breakthrough innovation.
            </p>
            <motion.div
                className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-8 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
            />
        </motion.div>
    </div>
);

const StatsBar = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative"
    >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: "Cost Impact", value: "↑25%", color: THEME_LIGHT_COLOR, statColor: PRIMARY_TEXT_COLOR },
                { label: "Delay Rate", value: "40%", color: THEME_LIGHT_COLOR, statColor: PRIMARY_TEXT_COLOR },
                { label: "Tracking Gap", value: "60%", color: THEME_LIGHT_COLOR, statColor: PRIMARY_TEXT_COLOR },
                { label: "Competition", value: "9.5/10", color: THEME_LIGHT_COLOR, statColor: PRIMARY_TEXT_COLOR },
            ].map((stat, i) => (
                <motion.div
                    key={i}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                    <motion.div
                        className="relative rounded-xl p-4 md:p-6 overflow-hidden transition-all duration-300 ease-out"
                        style={{
                            backgroundColor: '#FFFFFF',
                            border: `1px solid #E5E7EB`,
                            borderLeft: `5px solid ${stat.color}`
                        }}
                        whileHover={{
                            boxShadow: `0 8px 15px -5px ${stat.color}44`,
                            y: -2
                        }}
                    >
                        <div className="relative z-10 text-center">
                            <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: stat.statColor }}>
                                {stat.value}
                            </div>
                            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: SECONDARY_TEXT_COLOR }}>
                                {stat.label}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const BottomCTA = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
    >
        <div className="relative max-w-4xl mx-auto">
            <motion.div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
                style={{ backgroundColor: THEME_LIGHT_COLOR }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    </motion.div>
);

export default function Challenges() {

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; 

    return (
        <section className="relative min-h-screen py-8 md:py-14 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <Header />
                <StatsBar />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {challenges.map((challenge, index) => (
                        <ChallengeCard key={index} challenge={challenge} index={index} />
                    ))}
                </div>

                <BottomCTA />
            </div>
        </section>
    );
}
