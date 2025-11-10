'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: "Services", href: "/services" },
    { name: "Development", href: "/development" },
    { name: "Contact", href: "/contact" }
  ];

  const mobileNavItems = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: "Services", href: "/services" },
    { name: "Development", href: "/development" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#B0DB9C] py-3 sm:py-4 md:py-6 shadow-lg rounded-2xl sm:rounded-3xl md:rounded-4xl w-[90%] sm:w-[95%]"
          : "bg-[#B0DB9C] py-4 sm:py-6 md:py-8 rounded-none w-full"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-16">
        <nav className="grid grid-cols-3 gap-2 items-center">
          {/* Left Side Logo with Image */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-start z-10 h-[25px] sm:h-[30px]"
          >
            <Link href="/" className="flex items-center justify-center h-full">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className={`object-contain transition-transform duration-300 ${
                  scrolled 
                    ? "w-[90px] h-auto sm:w-[120px] md:w-[168px]" 
                    : "w-[110px] h-auto sm:w-[140px] md:w-[210px] lg:w-[300px]"
                }`}
                style={{
                  transformOrigin: "center center",
                }}
              />
            </Link>
          </motion.div>

          {/* Company Name - Center */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <Link href="/">
              <div
                className={`font-serif font-bold text-center transition-all duration-300 whitespace-nowrap ${
                  scrolled
                    ? "text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                    : "text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                }`}
                style={{ color: "#27391C" }}
              >
                <span className="hidden md:inline">CELESTIAL RIFT LLP</span>
                <span className="inline md:hidden">CELESTIAL RIFT</span>
              </div>
            </Link>
          </motion.div>

          {/* Right Side - Desktop Navigation / Mobile Menu Button */}
          <div className="flex justify-end items-center">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-4 2xl:space-x-6 font-bold">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  custom={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="relative group cursor-pointer"
                >
                  <Link href={item.href}>
                    <motion.span
                      className="font-sans text-[10px] lg:text-xs xl:text-sm tracking-wider whitespace-nowrap inline-block text-black"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 10 }}
              className="md:hidden text-xl sm:text-2xl z-50 text-black p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            y: mobileMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.4 }}
          className={`md:hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 pt-2"
              : "max-h-0 opacity-0 overflow-hidden"
          } bg-[#B0DB9C] text-right pr-4 sm:pr-6 md:pr-8`}
        >
          <ul className="py-3 sm:py-4 space-y-2 sm:space-y-3 md:space-y-4">
            {mobileNavItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : 20,
                }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  x: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="font-sans block py-2 text-base sm:text-lg relative text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative">
                    {item.name}
                    <motion.span
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-black origin-right"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.header>
  );
}