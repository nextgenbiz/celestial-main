'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const sliderContent = [
  {
    bgUrl: "/images/bg-1.jpg", 
    title: "Celestial Rift Logistics",
    subtitle: "Trackon Partner Expansion",
    tagline: "Empowering Last-Mile Delivery with Speed, Reliability & Sustainability.",
  },
  {
    bgUrl: "/images/bg-2.jpg",
    title: "Reliability & Speed",
    subtitle: "Trackon Super Franchise",
    tagline: "We bridge the distance—securely and swiftly for a faster supply chain.",
  },
  {
    bgUrl: "/images/bg-3.jpg",
    title: "Sustainable Logistics",
    subtitle: "A Greener Tomorrow",
    tagline: "Partnering for a future where delivery is both fast and eco-conscious, reducing carbon footprint.",
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); 

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); 
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // --- NEW SLIDER VARIANTS ---
  const transitionDuration = 0.8; 

  const backgroundSlideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", 
      opacity: 1,
      scale: 1.05, 
    }),
    
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: transitionDuration },
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%", 
      opacity: 1,
      scale: 1, 
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        scale: { duration: transitionDuration },
      }
    })
  };
  
  const containerVariants = {
    hidden: { transition: { staggerChildren: 0, delayChildren: 0 } },
    visible: {
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.3, 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' }, 
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7, 
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };
  
  const contentSlideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "20%" : "-20%", 
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: {
        x: { duration: transitionDuration, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? "20%" : "-20%", 
      opacity: 0,
      transition: {
        x: { duration: transitionDuration, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      }
    })
  };


  return (
    <section
      ref={sectionRef}
      id="home"
      className="h-[100vh] flex items-center justify-center relative overflow-hidden px-0 bg-[#F5F5F5] selection:bg-[#B0DB9C] selection:text-[#27391C]"
    >

      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: bgY }} 
      >
      
        <AnimatePresence initial={false} custom={direction}>
          {sliderContent.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-center"
                custom={direction} 
                variants={backgroundSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ backgroundImage: `url('${slide.bgUrl}')` }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-[#27391C]/50 opacity-80"></div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-50"
        >
          <motion.div
            className="w-full h-full sm:w-1/2 sm:h-1/2 bg-[#B0DB9C]/10 rounded-full absolute"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: 'blur(100px)' }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-20 h-full py-0"
        style={{ opacity }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction} 
              variants={contentSlideVariants} 
              initial="enter"
              animate="center"
              exit="exit"
              
              className="max-w-5xl"
              style={{ y: contentY }}
            >
              
              <motion.div
                variants={containerVariants} 
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
              >
                <motion.h4
                  variants={itemVariants}
                  className="font-sans text-sm sm:text-base font-medium tracking-widest uppercase text-[#B0DB9C] mb-2"
                >
                  {sliderContent[currentSlide].subtitle}
                </motion.h4>

                <motion.h1
                  variants={itemVariants}
                  className="font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight text-white"
                  style={{ textShadow: '0 3px 5px rgba(0,0,0,0.4)' }}
                >
                  {sliderContent[currentSlide].title}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="font-sans text-sm sm:text-base md:text-lg text-gray-200 mt-4 mb-8 max-w-4xl mx-auto font-light tracking-wide italic"
                >
                  {sliderContent[currentSlide].tagline}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
                >

                  <motion.a
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-2.5 text-sm font-bold tracking-wider transition duration-300 ease-in-out uppercase bg-[#B0DB9C] text-[#27391C] hover:bg-[#6c9c57] shadow-xl rounded-lg ring-2 ring-[#B0DB9C]/50"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(176, 219, 156, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services
                  </motion.a>

                  <motion.a
                    href="#partner"
                    className="inline-flex items-center justify-center px-8 py-2.5 text-sm font-bold tracking-wider transition duration-300 ease-in-out uppercase border-2 border-white text-white hover:bg-white hover:text-[#27391C] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Us
                  </motion.a>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="font-sans text-xs sm:text-sm text-[#B0DB9C] mt-12 max-w-3xl mx-auto font-medium opacity-80"
                >
                  "Connecting continents, sustainably. Our global network ensures every package, big or small, contributes to a cleaner, more efficient world."
                </motion.p>

                <motion.div
                  variants={{
                      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 w-full max-w-2xl text-center mx-auto"
                >
                  <motion.div variants={itemVariants} className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h3 className="text-xl font-bold text-[#B0DB9C]">99.8%</h3>
                    <p className="text-[10px] uppercase tracking-wider text-gray-300 mt-1">On-Time Rate</p>
                  </motion.div>
                  <motion.div variants={itemVariants} className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h3 className="text-xl font-bold text-[#B0DB9C]">45+</h3>
                    <p className="text-[10px] uppercase tracking-wider text-gray-300 mt-1">Global Hubs</p>
                  </motion.div>
                  <motion.div variants={itemVariants} className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h3 className="text-xl font-bold text-[#B0DB9C]">100%</h3>
                    <p className="text-[10px] uppercase tracking-wider text-gray-300 mt-1">Carbon Neutral</p>
                  </motion.div>
                </motion.div>

              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

    </section>
  );
}