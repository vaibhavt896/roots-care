"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { useRef } from "react";
import HeroVideo from "./HeroVideo";

// Extracted Content Component to reuse in both Mobile and Desktop views
const HeroContent = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="max-w-4xl lg:-ml-12 w-full"
  >
    <h1 className="text-3xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-[1.2] md:leading-[1.1] mb-5 md:mb-8 drop-shadow-xl text-center md:text-left">
      {CONTENT.hero.headline.part1} <br />
      {/* Solid Gold for mobile readability */}
      <span className="md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-[var(--gold-rich)] md:to-[var(--gold-champagne)] text-[var(--gold-rich)] italic">
        {CONTENT.hero.headline.highlight1}
      </span>
      <br />
      {CONTENT.hero.headline.part2} <br />
      <span className="md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-[var(--gold-rich)] md:to-[var(--gold-champagne)] text-[var(--gold-rich)] italic">
        {CONTENT.hero.headline.highlight2}
      </span>
    </h1>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-8 md:mb-10 max-w-2xl w-full md:w-fit mx-auto md:mx-0"
    >
      {/* Clean text block without heavy card */}
      <div className="relative w-full md:w-fit px-2 md:px-6 py-0 md:py-4 md:bg-white/5 md:backdrop-blur-md md:border-l-4 md:border-[var(--gold-rich)] md:rounded-r-xl md:overflow-hidden md:shadow-lg text-center md:text-left">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--gold-rich)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <p className="text-base md:text-xl text-gray-200 md:text-gray-100 font-normal md:font-light leading-relaxed relative z-10 drop-shadow-md">
          {CONTENT.hero.subheadline}
          <span className="block mt-1 md:mt-2 text-[var(--gold-champagne)] font-medium tracking-wide">
            {CONTENT.hero.tagline}
          </span>
        </p>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-12 w-full md:w-auto"
    >
      <motion.div whileTap={{ scale: 0.96 }} className="w-full md:w-auto">
        <Link 
          href="/contact" 
          className="main-cta btn-primary w-full text-base md:text-lg px-6 py-3.5 md:px-10 md:py-5 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-300 text-center font-medium block"
        >
          {CONTENT.hero.cta.primary}
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.96 }} className="w-full md:w-auto">
        <a 
          href="#how-it-works" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('how-it-works');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="btn-secondary w-full text-base md:text-lg px-6 py-3.5 md:px-10 md:py-5 backdrop-blur-md bg-white/10 md:bg-white/5 border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-center block cursor-pointer"
        >
          {CONTENT.hero.cta.secondary}
        </a>
      </motion.div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex items-center gap-2 md:gap-4 text-[11px] md:text-base text-gray-400 md:text-gray-300 font-medium tracking-widest uppercase mt-4 md:mt-0 justify-center md:justify-start whitespace-nowrap"
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--gold-rich)] animate-pulse" />
        {CONTENT.hero.trust.families}
      </div>
      <span className="text-[var(--gold-rich)]">|</span>
      <div>{CONTENT.hero.trust.availability}</div>
    </motion.div>
  </motion.div>
);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-center">
      
      {/* --- UNIFIED BACKGROUND (Video + Parallax) --- */}
      <motion.div 
        style={{ scale }} 
        className="absolute inset-0 z-0"
      >
        <HeroVideo />
        {/* Responsive Gradient Overlay: Vertical for Mobile, Horizontal for Desktop */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />
      </motion.div>

      {/* --- UNIFIED CONTENT CONTAINER (Parallax) --- */}
      <motion.div 
        style={{ y, opacity }} 
        className="flex container relative z-20 px-4 md:px-6 pb-16 pt-20 flex-col justify-center h-full"
      >
        <HeroContent />
      </motion.div>

    </section>
  );
}