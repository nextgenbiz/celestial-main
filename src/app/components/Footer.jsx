'use client';

import React, { useEffect, useState } from 'react'; 
import { motion } from 'framer-motion';
import { MdMailOutline } from 'react-icons/md';

const Icon = ({ path, className = "w-5 h-5" }) => (
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
        {path === 'phone' && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.72-6.72 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.73A15 15 0 0 0 15 15a15 15 0 0 0 6.08 2.18 2 2 0 0 1 1.92 1.74Z" />}
        {path === 'mail' && <><rect width="20" height="16" x="2" y="4" rx="2" ry="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>}
        {path === 'map-pin' && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>}
        {path === 'truck' && <path d="M10 17l-3-3m0 0l3-3m-3 3h10M2 17h14l4-5V5H2v12zm18 0h-2V7h2M4 20h2m4 0h2m-6-3h6" />}
    </svg>
);

const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };
    
    if (!isMounted) {
        return (
            <footer className="relative bg-[#27391C] text-gray-200 font-sans min-h-[50vh] flex flex-col justify-end">
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-green-950 opacity-70"></div>
                <div className="relative z-10 flex flex-col justify-end flex-grow">
                    {/* CTA Section Placeholder */}
                    <div className="bg-gradient-to-r from-gray-900/90 to-[#1e2a16]/90 py-8 sm:py-10 md:py-12">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3 md:mb-0">
                                Ready to Drive Excellence Together?
                            </h2>
                            <a 
                                href="mailto:celestialrift1@gmail.com" 
                                className="px-6 py-3 bg-[#B0DB9C] text-[#27391C] font-extrabold rounded-lg text-base sm:text-lg w-full sm:w-auto flex items-center justify-center space-x-2"
                            >
                                <MdMailOutline className="h-5 w-5 sm:h-6 sm:w-6" />
                                <span className="text-sm sm:text-base md:text-lg">Start Partnership</span>
                            </a>
                        </div>
                    </div>
                    {/* Copyright Placeholder */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-6">
                        <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 text-center">
                            <p className="text-xs sm:text-sm text-white">
                                © {new Date().getFullYear()} Celestial Rift LLP. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <motion.footer
            className="relative bg-[#27391C] text-gray-200 font-sans 
                        min-h-[50vh] flex flex-col justify-end overflow-hidden
                        sm:min-h-[40vh] md:min-h-[45vh]"
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >

            {/* Background */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2044&q=80')] 
                            bg-cover bg-center scale-105"
                style={{ zIndex: 0 }}
            />
            <div className="absolute inset-0 bg-green-950 opacity-70"></div>

            <div className="relative z-10 flex flex-col justify-end flex-grow">

                {/* CTA SECTION */}
                <div className="bg-gradient-to-r from-gray-900/90 to-[#1e2a16]/90 
                                 py-8 sm:py-10 md:py-12">

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 
                                     flex flex-col md:flex-row items-center 
                                     justify-between gap-4 md:gap-0 
                                     text-center md:text-left">

                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl 
                                         font-extrabold text-white tracking-tight 
                                         mb-2 sm:mb-3 md:mb-0"
                            variants={itemVariants}
                        >
                            Ready to Drive Excellence Together?
                        </motion.h2>

                        <motion.a
                            href="mailto:celestialrift1@gmail.com"
                            className="px-6 py-3 sm:px-8 sm:py-3 
                                         md:px-10 md:py-4 
                                         bg-[#B0DB9C] text-[#27391C] 
                                         font-extrabold rounded-lg text-base sm:text-lg 
                                         shadow-xl hover:bg-white 
                                         transition-all duration-300 transform hover:scale-[1.03]
                                         flex items-center justify-center space-x-2
                                         w-full sm:w-auto"
                            variants={itemVariants}
                        >
                            <MdMailOutline className="h-5 w-5 sm:h-6 sm:w-6" />
                            <span className="text-sm sm:text-base md:text-lg">Start Partnership</span>
                        </motion.a>

                    </div>
                </div>

                {/* MAIN FOOTER AREA */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 
                                 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8">

                    <div className="bg-[#27391C]/80 backdrop-blur-md border border-[#B0DB9C]/10 
                                     rounded-2xl sm:rounded-3xl 
                                     p-6 sm:p-8 md:p-10 lg:p-12 
                                     shadow-2xl shadow-black/50">

                        <div className="grid grid-cols-1 sm:grid-cols-2 
                                         md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 
                                         pb-6 sm:pb-8">

                            {/* BRAND */}
                            <motion.div
                                className="col-span-1 sm:col-span-2 md:col-span-1 
                                             space-y-3 sm:space-y-4"
                                variants={itemVariants}
                            >
                                <div className="flex items-center space-x-2 text-white">
                                    <Icon path="truck" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#B0DB9C] stroke-[3px]" />
                                    <span className="text-xl sm:text-2xl font-extrabold tracking-wider">
                                        Celestial Rift
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                    Innovating last-mile delivery with speed, sustainability, and trust.
                                </p>
                            </motion.div>

                            {/* NAVIGATION */}
                            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
                                <h3 className="text-base sm:text-lg font-semibold text-[#B0DB9C] uppercase tracking-wider mb-2">
                                    Navigation
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li><a href="/insights" className="text-sm text-gray-300 hover:text-white">Insights</a></li>
                                    <li><a href="/services" className="text-sm text-gray-300 hover:text-white">Services</a></li>
                                    <li><a href="/development" className="text-sm text-gray-300 hover:text-white">Development</a></li>
                                    <li><a href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</a></li>
                                </ul>
                            </motion.div>

                            {/* CONTACT */}
                            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
                                <h3 className="text-base sm:text-lg font-semibold text-[#B0DB9C] uppercase tracking-wider mb-2">
                                    Connect
                                </h3>

                                <a href="tel:+918114956770" className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-200 hover:text-[#B0DB9C]">
                                    <Icon path="phone" className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0DB9C]" />
                                    <span>+91 8114956770</span>
                                </a>

                                <a href="mailto:celestialrift1@gmail.com" className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-200 hover:text-[#B0DB9C]">
                                    <Icon path="mail" className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0DB9C]" />
                                    <span>celestialrift1@gmail.com</span>
                                </a>
                            </motion.div>

                            {/* ADDRESS */}
                            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
                                <h3 className="text-base sm:text-lg font-semibold text-[#B0DB9C] uppercase tracking-wider mb-2">
                                    Headquarters
                                </h3>

                                <div className="flex items-start space-x-2 sm:space-x-3 text-gray-400">
                                    <Icon path="map-pin" className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0DB9C]" />
                                    <address className="not-italic text-xs sm:text-sm leading-relaxed">
                                        Plot No-363/1734, New Market, 
                                        Bypass Road, Bhadrak, 
                                        Orissa, India, 756100.
                                    </address>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <motion.div className="mt-6 sm:mt-8 pt-3 sm:pt-4 text-center" variants={itemVariants}>
                        <p className="text-xs sm:text-sm text-white">
                            © {new Date().getFullYear()} Celestial Rift LLP. All rights reserved.
                        </p>
                    </motion.div>

                </div>
            </div>

        </motion.footer>
    );
};

export default Footer;