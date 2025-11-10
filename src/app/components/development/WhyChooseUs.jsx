'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Icon component
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
        {path === 'badge' && <path d="M3.8 21.3a.9.9 0 0 0 .9 0L12 17.5l7.3 3.8a.9.9 0 0 0 .9 0L12 2.5 3.8 21.3z" />}
        {path === 'zap' && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />}
        {path === 'users' && <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m16-11C20 8 16 4 12 4s-8 4-8 8m10-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />}
        {path === 'satellite' && <path d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8h2zM2 12A10 10 0 0 1 12 22v-2a8 8 0 0 0-8-8H2zM12 2v10M22 12H12" />}
        {path === 'leaf' && <path d="M11 20A7 7 0 0 0 18.5 13H15L11 20ZM3.5 3.5a10 10 0 0 1 8.5 8.5L20 4V2l-4 4-2.5 2.5" />}
        {path === 'truck' && <path d="M10 17l-3-3m0 0l3-3m-3 3h10M2 17h14l4-5V5H2v12zm18 0h-2V7h2M4 20h2m4 0h2m-6-3h6" />}
        {path === 'briefcase' && (<><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 7h20" /><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /></>)}
        {path === 'clock' && (<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>)}
        {path === 'check-circle' && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />}
        {path === 'trending-up' && (<><path d="M23 6L13.5 15.5 8.5 10.5 1 18" /><path d="M17 6h6v6" /></>)}
        {path === 'settings' && (<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.22l-.79.79a2 2 0 0 1-2.47.27l-1.46-.98a2 2 0 0 0-2.31.84l-.38.79a2 2 0 0 0 .55 2.57l.79.79-.22 1.34a2 2 0 0 0 1.9 1.54h1.77a2 2 0 0 0 1.9-1.54l.22-1.34.79-.79a2 2 0 0 1 2.47-.27l1.46.98a2 2 0 0 0 2.31-.84l.38-.79a2 2 0 0 0-.55-2.57l-.79-.79.22-1.34a2 2 0 0 0-1.9-1.54h-1.77a2 2 0 0 0-1.9 1.54z" /><circle cx="12" cy="12" r="3" /></>)}
    </svg>
);

const FeatureListItem = ({ title, description, icon, delay }) => {
    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    };

    return (
        <motion.div
            className="flex items-start space-x-4 p-4 border-b border-[#B0DB9C] last:border-b-0 transition duration-300 rounded-lg group cursor-pointer"
            variants={itemVariants}
            whileHover={{
                y: -5,
                boxShadow: "0 10px 20px -5px rgba(39, 57, 28, 0.2)", // Subtle green shadow for lift
                transition: { duration: 0.2, type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.99 }}
        >
            <div className="flex-shrink-0 mt-1">
                <div className="p-2 bg-[#27391C] rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#B0DB9C]/50">
                    <Icon
                        path={icon}
                        className="w-5 h-5 text-white stroke-[2.5px]"
                    />
                </div>
            </div>

            <div>
                <h3 className="**text-lg** font-bold text-[#27391C] leading-snug">
                    {title}
                </h3>
                <p className="mt-1 text-gray-700 leading-relaxed">
                    {description.split(/(\*\*.*?\*\*)/g).map((part, index) =>
                        part.startsWith('**') && part.endsWith('**')
                            ? <strong key={index} className="text-[#27391C] font-extrabold">{part.slice(2, -2)}</strong>
                            : part
                    )}
                </p>
            </div>
        </motion.div>
    );
};

const WhyChooseUs = () => {
    const features = [
        {
            title: "Trusted Franchise Network",
            description: "Backed by **Trackon Couriers Pvt. Ltd.**—a brand with **20+ years** in logistics and a presence across **1000+ cities**.",
            icon: 'badge', 
            id: 1
        },
        {
            title: "Sustainable Cost Efficiency",
            description: "Use of **electric three-wheeler** cargo vehicles reduces operational costs by **~50%** while promoting sustainable logistics.",
            icon: 'leaf', 
            id: 2
        },
        {
            title: "Advanced Technology Integration",
            description: "Integrated **real-time tracking**, digital MIS dashboards, and optimized routes provide full transparency and timely services.",
            icon: 'settings', 
            id: 3
        },
        {
            title: "Customized Service Solutions",
            description: "Tailored courier packages for **e-commerce sellers, SMEs, corporates, and individuals**, designed to match unique delivery needs.",
            icon: 'briefcase',
            id: 4
        },
        {
            title: "Operational Consistency",
            description: "Strong **District-level super franchise** oversight ensures operational efficiency and **consistent quality** across all 7 units.",
            icon: 'trending-up', 
            id: 5
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const imagePanelVariants = {
        hidden: { opacity: 0, x: -100, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                type: 'spring',
                bounce: 0.4,
                delay: 0.2 
            }
        }
    };

    return (
        <motion.section
            id="why-choose-us"
            className="py-20 sm:py-16 bg-white font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <motion.div className="text-center mb-20" variants={headerVariants}>
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] mb-4 tracking-tight leading-tight"
                        variants={headerVariants}
                    >
                        Your Edge in Logistics <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                            Why Partner With Celestial Rift?
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }} 
                    />

                </motion.div>

                <div className="md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">

                    <motion.div
                        className="relative h-[580px] w-[500px] overflow-hidden rounded-3xl shadow-2xl bg-[#27391C] p-8 mb-12 md:mb-0 hidden md:flex flex-col justify-center items-center"
                        variants={imagePanelVariants}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center w-full opacity-80"
                            style={{
                                backgroundImage: "url('./images/development-bg.png')",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-gray-900/40"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23B0DB9C\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

                        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full mt-40">

                            <motion.h3
                                className="text-3xl font-black text-white text-center mb-3 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                viewport={{ once: true }} 
                            >
                                Drive Your Success.
                            </motion.h3>

                            <motion.p
                                className="text-lg text-[#B0DB9C] font-medium text-center max-w-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                viewport={{ once: true }} 
                            >
                                Empowering franchisees with leading logistics technology.
                            </motion.p>

                            <div className="flex space-x-4 mt-6">
                                <motion.div
                                    className="p-3 bg-[#B0DB9C] rounded-full"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9, duration: 0.4 }}
                                    viewport={{ once: true }} 
                                >
                                    <Icon path="users" className="w-6 h-6 text-white" />
                                </motion.div>

                                <motion.div
                                    className="p-3 bg-[#B0DB9C] rounded-full"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.4 }}
                                    viewport={{ once: true }} 
                                >
                                    <Icon path="briefcase" className="w-6 h-6 text-white" />
                                </motion.div>

                                <motion.div
                                    className="p-3 bg-[#B0DB9C] rounded-full"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1, duration: 0.4 }}
                                    viewport={{ once: true }} 
                                >
                                    <Icon path="clock" className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <FeatureListItem
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                delay={index * 0.15 + 0.3} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default WhyChooseUs;