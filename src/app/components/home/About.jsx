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
        {path === 'truck' && <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>}
        {path === 'handshake' && <><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></>}
        {path === 'cloud-data' && <><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></>}
        {path === 'leaf' && <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>}
        {path === 'eye' && <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>}
        {path === 'target' && <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>}
        {path === 'chart' && <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></>}
        {path === 'lightning' && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />}
        {path === 'location' && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>}
        {path === 'google-images' && <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>}
    </svg>
);

const VisionMissionCard = ({ title, content, icon, isVision, delay }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }
        }
    };

    return (
        <motion.div
            className={`group relative p-8 sm:p-10 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl flex flex-col space-y-6 h-full overflow-hidden ${isVision
                ? 'bg-white text-gray-800 border-2 border-[#B0DB9C]'
                : 'bg-gradient-to-br from-[#27391C] to-[#1a2514] text-white'
                }`}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 ${isVision ? 'bg-[#B0DB9C]' : 'bg-[#B0DB9C]'
                }`} />
            <div className={`absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-10 ${isVision ? 'bg-[#27391C]' : 'bg-white'
                }`} />

            <div className="relative flex items-center space-x-4 z-10">
                <motion.div
                    className={`p-4 rounded-2xl shadow-lg ${isVision
                        ? 'bg-gradient-to-br from-[#B0DB9C] to-[#a0cb8c]'
                        : 'bg-gradient-to-br from-[#B0DB9C] to-[#8bc97a]'
                        }`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon
                        path={icon}
                        className={`w-8 h-8 ${isVision ? 'text-[#27391C]' : 'text-white'} stroke-[2.5px]`}
                    />
                </motion.div>
                <h3 className={`text-3xl font-black ${isVision ? 'text-[#27391C]' : 'text-[#B0DB9C]'}`}>
                    {title}
                </h3>
            </div>

            <p className={`relative text-base sm:text-lg leading-relaxed z-10 ${isVision ? 'text-gray-700' : 'text-gray-100'
                }`}>
                {content.split(/(\b\w+:\s*)/).map((part, index) =>
                    part.includes(':')
                        ? <strong key={index} className={`font-extrabold ${isVision ? 'text-[#27391C]' : 'text-[#B0DB9C]'}`}>{part}</strong>
                        : part
                )}
            </p>

            <div className={`absolute bottom-0 left-0 w-full h-1.5 ${isVision
                ? 'bg-gradient-to-r from-[#B0DB9C] to-[#27391C]'
                : 'bg-gradient-to-r from-[#B0DB9C] to-white'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
        </motion.div>
    );
};

const CoreValueCard = ({ title, icon, delay }) => (
    <motion.div
        className="group relative p-6 flex flex-col items-center bg-white rounded-2xl border-2 border-gray-100 shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#B0DB9C] overflow-hidden"
        variants={{
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, delay: delay }
            }
        }}
        whileHover={{ y: -10, scale: 1.05 }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-[#B0DB9C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
            className="relative mb-4 p-4 bg-gradient-to-br from-[#27391C] to-[#1a2514] rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute inset-0 bg-[#B0DB9C]/20 rounded-2xl blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
            <Icon path={icon} className="relative w-10 h-10 text-[#B0DB9C]" />
        </motion.div>

        <p className="relative text-base sm:text-lg font-bold text-gray-800 text-center group-hover:text-[#27391C] transition-colors duration-300">
            {title}
        </p>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#B0DB9C] to-[#27391C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
);

const About = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
        }
    };

    const content = {
        about: [
            "Celestial Rift LLP is a forward-thinking logistics enterprise specializing in last-mile courier solutions under the Trackon Super Franchise model.",
            "Operating in Bhadrak, Odisha, we leverage Trackon Couriers Pvt. Ltd.'s network of 1000+ cities to ensure fast, reliable, and efficient deliveries at the district level."
        ],
    };

    return (
        <motion.section
            id="about"
            className="relative py-14 sm:py-14 bg-gradient-to-b from-gray-50 to-white text-gray-800 selection:bg-[#B0DB9C] selection:text-[#27391C] font-sans overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} 
            variants={sectionVariants}
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-[#B0DB9C]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#27391C]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                <motion.div className="text-center mb-20" variants={sectionVariants}>
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] mb-4 tracking-tight leading-tight"
                        variants={itemVariants}
                        viewport={{ once: true }} 
                    >
                        Celestial Rift LLP: <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                            Pioneering Last-Mile Excellence
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto"
                        variants={itemVariants}
                        viewport={{ once: true }} 
                    >
                        Bridging connections with speed, reliability, and innovation.
                    </motion.p>
                    <motion.div
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 rounded-full"
                        variants={itemVariants}
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    className="mb-20"
                    variants={itemVariants}
                    viewport={{ once: true }} 
                >
                    <div className="grid lg:grid-cols-5 gap-8 items-start">

                        <motion.div
                            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group h-full"
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="/images/about-1.jpg"
                                alt="Trackon Courier Office / Logistics Hub"
                                className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#27391C]/90 via-[#27391C]/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-3 leading-none drop-shadow-lg">
                                </h2>
                                <motion.div
                                    className="p-3 w-fit bg-[#B0DB9C] rounded-xl shadow-lg mb-3"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon path="truck" className="w-6 h-6 text-[#27391C]" />
                                </motion.div>
                                <h4 className="text-white text-xl sm:text-2xl font-black mb-2">
                                    Our Operations Hub
                                </h4>
                                <p className="text-[#B0DB9C] text-sm sm:text-base font-semibold">
                                    District-level logistics excellence
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full"
                            whileHover={{ y: -5 }}
                        >

                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <motion.div
                                        className="p-3 bg-gradient-to-br from-[#27391C] to-[#1a2514] rounded-2xl shadow-lg"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon path="location" className="w-7 h-7 text-[#B0DB9C]" />
                                    </motion.div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#27391C]">
                                        About Our Operations
                                    </h3>
                                </div>

                                <div className="space-y-6 text-sm sm:text-base leading-relaxed">
                                    <p className="text-gray-800">
                                        <strong className="text-[#27391C] font-extrabold">Celestial Rift LLP</strong> is a forward-thinking logistics enterprise specializing in <strong className="text-[#27391C] font-extrabold">last-mile courier solutions</strong> under the Trackon Super Franchise model.
                                    </p>

                                    <motion.div
                                        className="relative p-6 bg-gradient-to-br from-[#B0DB9C]/10 to-[#B0DB9C]/5 rounded-2xl border-l-4 border-[#B0DB9C] shadow-inner"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute top-3 right-3 w-12 h-12 bg-[#B0DB9C]/20 rounded-full blur-xl" />
                                        <p className="relative text-gray-700">
                                            Strategically based in <strong className="text-gray-900 font-bold">Bhadrak, Odisha</strong>, we seamlessly leverage the expansive <strong className="text-[#27391C] font-extrabold">Trackon Couriers Pvt. Ltd.'s network of 1000+ cities</strong> to ensure fast, reliable, and efficient deliveries at the critical district level.
                                        </p>
                                    </motion.div>

                                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                        <div className="flex items-start space-x-3 p-4 bg-[#E5F3DD] rounded-xl">
                                            <div className="p-2 bg-[#27391C] rounded-lg">
                                                <Icon path="lightning" className="w-5 h-5 text-[#B0DB9C]" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#27391C] mb-1">Fast Delivery</h5>
                                                <p className="text-xs text-gray-600">Quick turnaround times</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 p-4 bg-[#E5F3DD] rounded-xl">
                                            <div className="p-2 bg-[#27391C] rounded-lg">
                                                <Icon path="leaf" className="w-5 h-5 text-[#B0DB9C]" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#27391C] mb-1">Eco-Friendly</h5>
                                                <p className="text-xs text-gray-600">Sustainable solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default About;