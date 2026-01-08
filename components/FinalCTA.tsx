"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "@/lib/content";

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <footer 
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-black py-32"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--gold-rich)]/5 blur-[120px] rounded-full" />
      </div>

      {/* Large Background Text Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none"
      >
        <span className="text-[20vw] font-playfair font-bold text-white whitespace-nowrap leading-none">
          ROOTS & CARE
        </span>
      </motion.div>

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-white mb-12 leading-tight">
            {CONTENT.cta.title} <br />
            <span className="text-[var(--gold-champagne)] italic">{CONTENT.cta.subtitle}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            {CONTENT.cta.desc}
          </p>

          <div className="flex flex-col items-center gap-12">
            <Link 
              href="/contact" 
              className="main-cta group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-black bg-gradient-to-r from-[var(--gold-rich)] to-[#c99c2e] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {CONTENT.cta.button}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-[var(--gold-champagne)] opacity-80 font-medium tracking-wide">
              {CONTENT.cta.badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {badge}
                  </span>
                  {index < CONTENT.cta.badges.length - 1 && (
                    <span className="hidden md:block">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom Links - Ultra Premium Mobile Optimized */}
        <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* Links - Mobile: Stacked/Spacious, Desktop: Horizontal */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 order-1 md:order-2">
            <Link href="/privacy" className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 hover:text-[var(--gold-rich)] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 hover:text-[var(--gold-rich)] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="mailto:rootsandcare@gmail.com" className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 hover:text-[var(--gold-rich)] transition-colors duration-300">
              Contact Support
            </Link>
          </div>

          {/* Copyright - Subtler */}
          <div className="text-gray-600 text-[10px] md:text-xs uppercase tracking-widest order-2 md:order-1 font-medium opacity-60">
            &copy; {new Date().getFullYear()} Roots & Care. Built with responsibility.
          </div>
        </div>
      </div>
    </footer>
  );
}
