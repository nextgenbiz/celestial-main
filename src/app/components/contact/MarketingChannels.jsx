'use client';

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { FaBullhorn, FaMobileAlt, FaHandshake, FaCalendarAlt } from 'react-icons/fa';

const MarketingChannelsListWithIcons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const channels = [
    {
      title: 'Digital Campaigns',
      detail: 'Run targeted ads and track performance across all digital platforms.',
      Icon: FaBullhorn,
    },
    {
      title: 'Social Media Engagement',
      detail: 'Cultivate community and drive traffic through active social media presence.',
      Icon: FaMobileAlt, 
    },
    {
      title: 'Corporate Partnerships',
      detail: 'Foster strategic alliances to expand reach and co-market products/services.',
      Icon: FaHandshake,
    },
    {
      title: 'Local Business Events',
      detail: 'Host and attend local events for direct customer interaction and networking.',
      Icon: FaCalendarAlt, 
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

  return (
    <div
      ref={ref}
      className="
        relative p-8 md:p-14 rounded-2xl shadow-2xl overflow-hidden
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=100')`,
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

   
      <div className="relative max-w-4xl mx-auto text-white z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
            <span className="bg-gradient-to-r from-[#B0DB9C] to-white bg-clip-text text-transparent">
              Core Marketing Channels
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
            Explore the key strategies driving engagement and growth across our marketing ecosystem.
          </p>

          <motion.div
            className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-white mt-6 rounded-full"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <ul
          role="list"
          className="divide-y divide-white/30 mt-10 backdrop-blur-sm bg-white/10 rounded-xl p-6"
        >
          {channels.map((channel, index) => (
            <li
              key={index}
              className="py-5 px-2 hover:bg-white/20 transition duration-300 ease-in-out rounded-lg transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start space-x-4">
               
                <div className="flex-shrink-0 text-2xl p-3 rounded-full bg-[#B0DB9C] text-[#27391C]">
                  <channel.Icon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-lg font-semibold text-white">
                    {channel.title}
                  </p>
                  <p className="text-sm text-gray-200 mt-1">
                    {channel.detail}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-[#B0DB9C] text-[#27391C]">
                    Active
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-40"></div>
    </div>
  );
};

export default MarketingChannelsListWithIcons;