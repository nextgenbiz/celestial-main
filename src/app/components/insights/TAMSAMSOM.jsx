'use client';

import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Target,
  MapPin,
  Percent,
  BarChart3,
  PieChart,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion'; 

export default function MarketAnalysis() {
  const [activeView, setActiveView] = useState('bar');
  const [hoveredBar, setHoveredBar] = useState(null);


  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const marketData = [
    {
      name: 'TAM',
      value: 8.62,
      fullName: 'Total Addressable Market',
      description: 'Total Indian Courier & Logistics Market',
      color: '#B0DB9C',
      percentage: 100,
    },
    {
      name: 'SAM',
      value: 4.3,
      fullName: 'Serviceable Addressable Market',
      description: 'Addressable Market for Regional Operators',
      color: '#64748B',
      percentage: 49.88,
    },
    {
      name: 'SOM',
      value: 0.6,
      fullName: 'Serviceable Obtainable Market',
      description: 'Target Market for Bhadrak & Eastern Odisha',
      color: '#27391C',
      percentage: 6.96,
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const maxValue = Math.max(...marketData.map((d) => d.value));

  return (
    <div className="min-h-screen p-4 sm:p-8" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4 flex-wrap gap-4">
            <div>
              <motion.div
                className="text-center mb-20 max-w-3xl mx-auto"
                variants={headerVariants}

                initial={mounted ? "hidden" : false}
                animate={mounted ? "visible" : false}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-5">
                  <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                    Market Analysis Dashboard
                  </span>
                </h2>

                <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  India Courier & Logistics Sector Opportunity
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
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {marketData.map((item, index) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderColor: item.color }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: '#64748B' }}>
                    {item.fullName}
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold" style={{ color: '#171717' }}>
                    ${item.value}B
                  </p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: item.color + '30' }}>
                  {index === 0 && <TrendingUp size={24} style={{ color: item.color }} />}
                  {index === 1 && <Target size={24} style={{ color: item.color }} />}
                  {index === 2 && <MapPin size={24} style={{ color: item.color }} />}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Percent size={16} style={{ color: '#64748B' }} />
                <span className="text-sm font-medium" style={{ color: '#64748B' }}>
                  {item.percentage}% of TAM
                </span>
              </div>
              <p className="text-sm" style={{ color: '#171717' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Donut Chart Section */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#171717' }}>
            Market Size Distribution
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-8">
            <div className="relative" style={{ width: '320px', height: '320px' }}>
              <svg viewBox="0 0 200 200" className="transform -rotate-90">
                {(() => {
                  let currentAngle = 0;
                  const total = marketData.reduce((sum, d) => sum + d.value, 0);

                  return marketData.map((item) => {
                    const percentage = item.value / total;
                    const angle = percentage * 360;
                    const largeArc = angle > 180 ? 1 : 0;

                    const startX = 100 + 70 * Math.cos((currentAngle * Math.PI) / 180);
                    const startY = 100 + 70 * Math.sin((currentAngle * Math.PI) / 180);
                    const endX = 100 + 70 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
                    const endY = 100 + 70 * Math.sin(((currentAngle + angle) * Math.PI) / 180);

                    const innerStartX = 100 + 40 * Math.cos((currentAngle * Math.PI) / 180);
                    const innerStartY = 100 + 40 * Math.sin((currentAngle * Math.PI) / 180);
                    const innerEndX = 100 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
                    const innerEndY = 100 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);

                    const path = `
                      M ${startX} ${startY}
                      A 70 70 0 ${largeArc} 1 ${endX} ${endY}
                      L ${innerEndX} ${innerEndY}
                      A 40 40 0 ${largeArc} 0 ${innerStartX} ${innerStartY}
                      Z
                    `;

                    currentAngle += angle;

                    return (
                      <path
                        key={item.name}
                        d={path}
                        fill={item.color}
                        stroke="white"
                        strokeWidth="2"
                        className="transition-all duration-300 hover:opacity-80"
                        style={{ cursor: 'pointer' }}
                      />
                    );
                  });
                })()}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-3xl font-bold" style={{ color: '#171717' }}>
                  $13.52B
                </p>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  Total Value
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-4">
              {marketData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <div className="flex-1">
                    <p className="font-bold" style={{ color: '#171717' }}>
                      {item.name}
                    </p>
                    <p className="text-sm" style={{ color: '#64748B' }}>
                      {item.fullName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold" style={{ color: item.color }}>
                      ${item.value}B
                    </p>
                    <p className="text-xs" style={{ color: '#64748B' }}>
                      {item.percentage.toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <div
          className="rounded-lg shadow-lg mb-8 p-6 flex items-start gap-4 transition duration-300 ease-in-out hover:shadow-xl"
          style={{
            backgroundColor: '#F8FAFC',
            borderLeft: '8px solid #B0DB9C',
          }}
        >
          <div className="flex-shrink-0 pt-1">
            <AlertCircle size={32} style={{ color: '#27391C' }} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#171717' }}>
              New Market Dynamic Alert
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
              While the logistics sector is growing fast, recent policy changes may shift the
              competitive landscape towards district-level and EV-centric delivery models sooner than
              projected.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
              <span
                className="px-3 py-1 rounded-full"
                style={{
                  color: '#27391C',
                  backgroundColor: '#B0DB9C',
                }}
              >
                +15% Projected EV growth
              </span>
              <span
                className="px-3 py-1 rounded-full"
                style={{
                  color: '#171717',
                  backgroundColor: '#64748B20',
                }}
              >
                Q4 Implementation deadline
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </div>
  );
}
