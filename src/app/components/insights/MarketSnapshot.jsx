'use client';

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Globe, Target, Maximize2 } from "lucide-react";

const BG_LIGHT_REPORT = '#FFFFFF';
const REPORT_CARD_BG = '#F0F0F0';
const ACCENT_GREEN = '#4B7742';
const PRIMARY_TEXT_DARK = '#1A2A1E';

import { useEffect, useState } from "react";

const DataPoint = ({ to, decimals = 2, prefix = '', suffix = '' }) => {
    const formatNumber = (num) => {
        if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
        return num.toFixed(decimals);
    };

    return (
        <motion.span
            className="text-3xl sm:text-4xl md:text-5xl font-black block leading-none tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            style={{ color: ACCENT_GREEN }}
        >
            {prefix}{formatNumber(to)}{suffix}
        </motion.span>
    );
};


const statsData = [
    {
        icon: Globe,
        title: "Global CEP Industry Value",
        value: 508.25,
        unit: ' USD',
        context: 'Expected by 2025',
    },
    {
        icon: DollarSign,
        title: "Global Parcel Delivery Size",
        value: 576.79,
        unit: ' USD',
        context: 'Total Addressable Market',
    },
    {
        icon: Target,
        title: "Indian Market Value (2025)",
        value: 8.62,
        unit: ' USD',
        context: 'Valuation: ₹71,000 Crore',
    },
    {
        icon: TrendingUp,
        title: "Indian Market Growth Rate",
        value: 10.72,
        unit: '%',
        prefix: '+',
        context: 'CAGR until 2030',
    },
];

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


const DataRow = ({ stat, index, isLast }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
    };

    return (
        <motion.div
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-5 px-3 sm:px-4 md:px-8 border-b transition-all duration-300 gap-3 sm:gap-4`}
            style={{
                borderColor: ACCENT_GREEN,
                borderBottom: isLast ? 'none' : `1px solid ${ACCENT_GREEN}`,
            }}
            variants={itemVariants}
            whileHover={{
                backgroundColor: `${ACCENT_GREEN}15`,
                paddingLeft: window.innerWidth >= 640 ? '1.5rem' : '1rem',
                paddingRight: window.innerWidth >= 640 ? '1.5rem' : '1rem'
            }}
        >
           
            <div className="flex flex-col flex-1 min-w-0 w-full sm:w-auto">
                <div className="flex items-center mb-1 sm:mb-1">
                    <stat.icon size={16} color={PRIMARY_TEXT_DARK} strokeWidth={2} className="mr-2 sm:mr-3 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold truncate" style={{ color: PRIMARY_TEXT_DARK }}>
                        {stat.title}
                    </h3>
                </div>
                <p className="text-xs sm:text-sm font-medium ml-5 sm:ml-7" style={{ color: PRIMARY_TEXT_DARK }}>
                    {stat.context}
                </p>
            </div>

            <div className="flex-shrink-0 ml-5 sm:ml-8 self-end sm:self-auto">
                <DataPoint
                    to={stat.value}
                    decimals={stat.value > 100 ? 2 : 2}
                    prefix={stat.prefix}
                    suffix={stat.unit}
                />
            </div>
        </motion.div>
    );
};


const MarketSnapshot = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

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

    const headerItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="market-snapshot"
            className="relative py-12 sm:py-16 md:py-20 lg:py-28 font-sans overflow-hidden"
            style={{ backgroundColor: BG_LIGHT_REPORT }}

            initial={mounted ? "hidden" : false}
            whileInView={mounted ? "visible" : false}

            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">

                <motion.div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto" variants={sectionVariants}>
                    <motion.div
                        className="inline-flex items-center space-x-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#27391C]/5 border-2 border-[#27391C]/10 rounded-full mb-4 sm:mb-6"
                        variants={headerItemVariants}
                    >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_TEXT_DARK }} />
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wide" style={{ color: PRIMARY_TEXT_DARK }}>
                            Official Market Report
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3 sm:mb-4 px-2"
                        style={{ color: PRIMARY_TEXT_DARK }}
                        variants={headerItemVariants}
                    >
                        Market Data Analysis & Scale <span className="bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0" style={{ backgroundImage: `linear-gradient(to right, ${PRIMARY_TEXT_DARK}, ${ACCENT_GREEN})` }}>Logistics Landscape</span>
                    </motion.h2>

                    <motion.div
                        className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-4 sm:mt-6 rounded-full"
                        variants={headerVariants}
                        initial={{ width: 0 }}
                        whileInView={{ width: '6rem' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div
                    className="p-2 sm:p-3 md:p-6 rounded-lg shadow-xl"
                    style={{ backgroundColor: REPORT_CARD_BG, border: `2px solid ${ACCENT_GREEN}` }}
                >
                    <div className="hidden sm:flex justify-between py-2 px-4 md:px-8 border-b-2" style={{ borderColor: ACCENT_GREEN }}>
                        <p className="text-xs sm:text-sm font-bold uppercase" style={{ color: PRIMARY_TEXT_DARK }}>Data Point & Context</p>
                        <p className="text-xs sm:text-sm font-bold uppercase" style={{ color: PRIMARY_TEXT_DARK }}>Reported Value</p>
                    </div>

                    <div className="divide-y" style={{ borderColor: ACCENT_GREEN }}>
                        {statsData.map((stat, index) => (
                            <DataRow
                                key={index}
                                stat={stat}
                                index={index}
                                isLast={index === statsData.length - 1}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center sm:justify-end pt-3 px-3 sm:pr-8">
                        <p className="text-xs font-semibold italic text-center sm:text-right" style={{ color: PRIMARY_TEXT_DARK }}>
                            <Maximize2 size={12} className="inline-block mr-1 sm:mr-2" style={{ color: ACCENT_GREEN }} /> Data validated by internal analytics team.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default MarketSnapshot;
