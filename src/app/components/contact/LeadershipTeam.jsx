'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PHOTO_JAHMED = "/images/Shaikh-Javed-Ahmed.jpg";
const PHOTO_NPARVEEN = "/images/Nargish-Parveen.jpeg";

const FocusIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const QuoteIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3.5-3.5 12-12 18-9-4 0-10-10.5-18-12.5z" />
    <path d="M15 15c-3.5 3.5-12 12-18 9 4 0 10 10.5 18 12.5z" />
  </svg>
);


const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M9 11l3 3L22 4" />
  </svg>
);

const QuoteBlock = () => {
  const COLOR_PRIMARY = '#B0DB9C'; // Primary Accent
  const COLOR_DARK = '#27391C'; // Dark Green
  const COLOR_TEXT = '#171717'; // Text color

  const quoteVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const pulsateQuoteMark = {
    initial: { opacity: 0.2 },
    animate: {
      opacity: [0.2, 0.35, 0.2],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textHighlightVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <motion.section
      className="py-16 sm:py-12 bg-transparent font-sans relative overflow-hidden mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={quoteVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center p-8 sm:p-12 relative bg-[#27391C] rounded-2xl border-l-8 border-[#B0DB9C] shadow-2xl shadow-black/50 transition duration-500 hover:shadow-3xl hover:shadow-[#B0DB9C]/20"
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-[#B0DB9C]/30 via-transparent to-[#27391C]/50 opacity-70" />

          <blockquote className="text-xl sm:text-2xl italic font-serif text-white leading-snug relative z-10">
            <motion.span
              className="absolute top-[-30px] left-[-20px] sm:left-[-30px] text-7xl sm:text-9xl text-[#B0DB9C] font-extrabold"
              variants={pulsateQuoteMark}
              initial="initial"
              animate="animate"
            >
              "
            </motion.span>

            <p className="relative z-10 text-lg">
              By leveraging Trackon's network, electric vehicles, and modern franchise infrastructure, we deliver
              <motion.span
                className="inline-block text-[#B0DB9C] font-extrabold"
                variants={textHighlightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
              >
                {" "}fast, reliable, and eco-friendly last-mile courier solutions{" "}
              </motion.span>
              — ensuring operational efficiency, cost savings, and superior customer satisfaction.
            </p>

            <motion.span
              className="absolute bottom-[-30px] right-[-20px] sm:right-[-30px] text-7xl sm:text-9xl text-[#B0DB9C] font-extrabold rotate-180"
              variants={pulsateQuoteMark}
              initial="initial"
              animate="animate"
            >
              "
            </motion.span>
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};


const LeadershipTeamSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const teamData = [
    {
      name: 'Shaikh Javed Ahmed',
      role: 'Co-Partner',
      photo: PHOTO_JAHMED,
      tagline: 'Transforming Supply Chains Through Innovation, driving data-driven decisions for superior procurement outcomes.',
      highlights: [
        '5+ years driving procurement excellence.',
        'SAP & e-auction specialist with robust data-driven approach.',
        'Pioneering AI integration in logistics operations and optimization.',
      ],
      expertise: ['Supply Chain Strategy', 'SAP Implementation', 'AI & Analytics', 'Procurement'],
      colorGradient: 'from-[#B0DB9C] to-[#27391C]',
      colorText: 'text-[#27391C]',
    },
    {
      name: 'Nargish Parveen',
      role: 'Partner',
      photo: PHOTO_NPARVEEN,
      tagline: 'Building lasting partnerships through meticulous client relations and driving internal operational excellence.',
      highlights: [
        'Proven track record in successful franchise growth at Trackon Couriers.',
        'Expert in client relations, negotiations, and sustainable business development.',
        'Streamlining end-to-end operations for maximum efficiency and throughput.',
      ],
      expertise: ['Business Development', 'Client Relations', 'Operational Efficiency', 'Partnership Management'],
      colorGradient: 'from-[#27391C] to-[#B0DB9C]',
      colorText: 'text-[#27391C]',
    },
  ];

  const PlaceholderText = (name) => name.split(' ').map(n => n[0]).join('');

  return (
    <section className="relative bg-[#F8FAFC] font-sans py-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
    
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-[5%] w-40 h-40 bg-[#B0DB9C] rounded-full blur-2xl mix-blend-multiply"></div>
        <div className="absolute bottom-1/4 right-[5%] w-40 h-40 bg-[#27391C] rounded-full blur-2xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
     
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#64748B]"></div>
            <FocusIcon className="w-5 h-5 text-[#27391C]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#27391C]">Our Leadership</span>
            <div className="h-px w-8 bg-[#64748B]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] mb-3 leading-tight">
            <span className="block">Visionary Direction.</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27391C] to-[#B0DB9C]">
              Proven Expertise.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Meet the partners driving our commitment to excellence and innovation.
          </p>
        </div>

        <div className="space-y-12">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${activeCard === index ? 'shadow-[#B0DB9C]/30' : 'shadow-gray-200'} bg-white`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>

         
                <div className={`lg:w-4/12 p-4 relative group ${member.colorText}`}>
                  <div className={`absolute inset-0 opacity-10 rounded-xl ${member.colorGradient} bg-gradient-to-br`}></div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-md aspect-[3/4] max-w-[280px] mx-auto">
                    <img
                      src={member.photo}
                      alt={member.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/300x400/B0DB9C/27391C?text=${PlaceholderText(member.name)}`;
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full shadow-xl p-2 border border-gray-100">
                    <QuoteIcon className="w-5 h-5 text-[#27391C] rotate-180" />
                  </div>
                </div>

             
                <div className="lg:w-8/12 p-6 sm:p-8 space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] mb-1">{member.name}</h3>
                    <p className={`text-lg font-medium mb-3 ${member.colorText}`}>{member.role}</p>
                    <div className={`h-1 w-10 ${member.colorGradient} bg-gradient-to-r rounded-full`}></div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] border-l-4 border-[#B0DB9C] rounded-lg shadow-sm">
                    <p className="text-sm italic text-[#64748B] leading-relaxed">
                      "{member.tagline}"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#171717] border-b pb-1 border-gray-100">Key Achievements:</h4>
                    {member.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircleIcon className={`flex-shrink-0 w-4 h-4 mt-0.5 ${member.colorText}`} />
                        <p className="text-sm text-[#64748B]">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-4 py-1.5 text-xs font-semibold rounded-full border ${member.colorText} border-[#B0DB9C]/30 bg-white shadow-sm hover:bg-[#27391C] hover:text-white transition-all`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <QuoteBlock />
      </div>
    </section>
  );
};

export default LeadershipTeamSection;