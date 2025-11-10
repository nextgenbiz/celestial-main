'use client';

import React, { useState, useEffect } from 'react';
import { Leaf, Zap, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CorePhilosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const philosophies = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Green logistics powered by electric vehicles.',
    },
    {
      icon: Zap,
      title: 'Speed & Reliability',
      description: 'Every parcel, delivered on time.',
    },
    {
      icon: Award,
      title: 'Operational Excellence',
      description: 'Advanced systems and quality control.',
    },
    {
      icon: Users,
      title: 'Customer Trust',
      description: 'Transparent communication and live tracking.',
    }
  ];

  return (
    <div className="min-h-screen py-14 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="text-center mb-16 transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)'
          }}
        >

          <motion.div className="text-center mb-20 max-w-3xl mx-auto" variants={headerVariants}>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5"
            >
              <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                Our Core Philosophy
              </span>
            </h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Building the future of logistics with innovation, integrity, and a commitment to excellence
            </motion.p>
            <motion.div
              className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-2xl shadow-lg transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: '#1B3A2B', // 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: isHovered
                    ? '0 20px 40px -10px rgba(176, 219, 156, 0.3)'
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    backgroundColor: '#234F3C', 
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scale(1)' : 'scale(0.95)'
                  }}
                ></div>

                {/* Content */}
                <div className="relative p-6">
                  <div
                    className="inline-flex p-3 rounded-xl mb-4 transition-all duration-500 relative"
                    style={{
                      backgroundColor: '#B0DB9C',
                      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    {isHovered && (
                      <div
                        className="absolute inset-0 rounded-xl animate-ping"
                        style={{ backgroundColor: '#B0DB9C', opacity: 0.3 }}
                      ></div>
                    )}
                    <Icon
                      className="w-7 h-7 relative z-10 transition-transform duration-500"
                      style={{
                        color: '#1B3A2B',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                  </div>

                  <h3
                    className="text-xl font-bold mb-2 transition-all duration-300"
                    style={{
                      color: '#E9F8E5',
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed transition-all duration-300 delay-75"
                    style={{
                      color: '#CDECC2',
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)'
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="mt-4 h-1 rounded-full transition-all duration-700 ease-out"
                    style={{
                      backgroundColor: '#B0DB9C',
                      width: isHovered ? '100%' : '48px'
                    }}
                  ></div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{
                    border: '2px solid #B0DB9C',
                    opacity: isHovered ? 0.5 : 0
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-16 text-center rounded-2xl shadow-xl p-12 transition-all duration-1000 delay-700"
          style={{
            backgroundColor: '#E5F3DD',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#171717' }}>
            Experience the Difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Join thousands of satisfied customers who trust us with their deliveries every day
          </p>
          <button
            className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg relative overflow-hidden group"
            style={{ backgroundColor: '#B0DB9C', color: '#27391C' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(176, 219, 156, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span className="relative z-10">Get Started Today</span>
            <div
              className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: '#27391C',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.1'}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}