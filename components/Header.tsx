"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Logo from "./graphics/Logo Design.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Smart Hide Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> Hide Header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up -> Show Header
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0)",
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at 100% 0)",
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out border-b ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-white/5 py-3 shadow-lg"
            : "bg-transparent border-transparent py-5"
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group z-50 relative"
          >
            <motion.div 
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110"
            >
              <Image
                src={Logo}
                alt="Roots & Care"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg md:text-xl font-bold text-white tracking-wide leading-none group-hover:text-[var(--gold-rich)] transition-colors duration-300">
                Roots & Care
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.2em] text-[var(--gold-champagne)] uppercase font-semibold">
                Elder Care Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-300 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--gold-rich)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold-rich)] text-black font-semibold text-xs tracking-wide uppercase rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
            >
              Care Assessment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="md:hidden z-50 relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 group rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 8, width: 24 } : { rotate: 0, y: 0, width: 24 }
              }
              className="h-[2px] bg-[var(--gold-rich)] block transition-all origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-16 h-[2px] bg-white block transition-all"
              style={{ width: 16 }}
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 24 }
              }
              className="h-[2px] bg-[var(--gold-rich)] block transition-all origin-center"
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Ultra Premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants as any}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#050505] flex items-center justify-center overflow-hidden"
          >
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold-rich)]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            <nav className="relative z-10 flex flex-col items-center gap-10 p-6 w-full max-w-md text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[var(--gold-rich)] text-xs tracking-[0.4em] uppercase font-semibold mb-4"
              >
                Menu
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants as any}
                  initial="closed"
                  animate="open"
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-5xl md:text-6xl font-playfair text-white hover:text-[var(--gold-rich)] hover:scale-105 transition-all duration-500"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={3}
                variants={linkVariants as any}
                initial="closed"
                animate="open"
                className="w-full pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative inline-flex items-center justify-center w-full px-8 py-5 text-lg font-bold text-black bg-gradient-to-r from-[var(--gold-rich)] to-[#c99c2e] rounded-full overflow-hidden transition-transform duration-300 active:scale-95 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.4)]"
                >
                  {/* Animated Shimmer Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-white/30 -skew-x-12"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                  <span className="relative z-10">Care Assessment</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 text-[10px] uppercase tracking-widest text-white/50"
              >
                Roots & Care • Kanpur
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
