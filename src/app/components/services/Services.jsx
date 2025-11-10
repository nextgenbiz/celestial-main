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
        {path === 'zap' && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />}
        {path === 'briefcase' && (<><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 7h20" /><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /></>)}
        {path === 'box' && <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>}
        {path === 'package' && <><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>}
        {path === 'file-text' && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>}
        {path === 'map-pin' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
    </svg>
);

const ServiceCard = ({ service, delay, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.5,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] 
            } 
        }
    };

    return (
        <motion.div
            className="group relative flex flex-col items-start p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#B0DB9C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#B0DB9C]/10 rounded-full">
                <span className="text-sm font-bold text-[#27391C]/50">0{index + 1}</span>
            </div>

            <div className="relative mb-6 z-10">
                <motion.div 
                    className="absolute inset-0 bg-[#B0DB9C]/20 rounded-full blur-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: delay + 0.2 }}
                />
                <div className="relative p-3 bg-gradient-to-br from-[#27391C] to-[#1a2514] rounded-2xl text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <Icon path={service.icon} className="w-6 h-6 stroke-[2.5px] text-[#B0DB9C]" />
                </div>
            </div>

            <div className="relative z-10 flex-1">
                <h3 className="text-lg font-bold text-[#27391C] mb-3 leading-tight group-hover:text-[#1a2514] transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                    {service.description}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#B0DB9C] to-[#27391C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.div>
    );
};

const Services = () => {
    const services = [
        { 
            title: "Local Courier Pick-up & Delivery", 
            description: "Fast and reliable door-to-door service for time-sensitive local shipments.", 
            icon: 'box'
        },
        { 
            title: "E-commerce Last-Mile Logistics", 
            description: "Seamless final-mile fulfillment, ensuring a positive delivery experience for your customers.", 
            icon: 'package'
        },
        { 
            title: "Document & Parcel Express Service", 
            description: "Dedicated express service for crucial documents and parcels across your operating region.", 
            icon: 'file-text'
        },
        { 
            title: "Electric Vehicle-Enabled Deliveries", 
            description: "Leveraging our EV fleet for cost-effective and environmentally friendly transportation solutions.", 
            icon: 'zap'
        },
        { 
            title: "Real-Time Tracking & Support", 
            description: "Full visibility into every shipment's journey with advanced MIS and dedicated customer service.", 
            icon: 'map-pin'
        },
        { 
            title: "Franchise Training & Assistance", 
            description: "Comprehensive training and continuous operational support for our super-franchisees.", 
            icon: 'briefcase'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
    };

    return (
        <motion.section 
            id="our-services" 
            className="relative py-20 sm:py-16 bg-gradient-to-b from-[#1b2a17] via-[#22331b] to-[#1b2a17] font-sans overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#B0DB9C]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#27391C]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                
                <motion.div className="text-center mb-20 max-w-3xl mx-auto" variants={headerVariants}>
                    <motion.p 
                        className="inline-block text-xs font-bold text-[#B0DB9C] uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-[#B0DB9C]/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        What We Offer
                    </motion.p>
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-5"
                    >
                        Integrated, Sustainable <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#B0DB9C] to-[#FFFFFF] bg-clip-text text-transparent">
                            Logistics Services
                        </span>
                    </h2>
                    <p 
                        className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
                    >
                        Our solutions are built on a foundation of technology, sustainability, and franchisee empowerment.
                    </p>
                    <motion.div 
                        className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#FFFFFF] mt-8 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            delay={index * 0.12} 
                        />
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-24 px-4"
                    variants={ctaVariants}
                >
                    <div className="inline-block bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                        <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                            Ready to revolutionize your logistics network?
                        </p>
                        <motion.a 
                            href="#contact" 
                            className="group inline-flex items-center text-lg font-bold text-[#27391C] px-8 py-4 bg-gradient-to-r from-[#B0DB9C] to-[#B0DB9C]/80 rounded-full hover:from-[#27391C] hover:to-[#1a2514] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl transform hover:scale-105"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact us to discuss custom service bundles
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Services;
