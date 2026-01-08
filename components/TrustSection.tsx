"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "@/lib/content";

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  
  return (
    <section 
      ref={containerRef} 
      className="container section-spacing relative flex flex-col items-center justify-center text-center overflow-hidden min-h-[60vh] !mt-0 !pt-0"
    >
        {/* Background Atmosphere - Cinematic Moving Spotlight */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary Moving Light - Gold */}
            <motion.div 
                animate={{ 
                    x: ["-20%", "20%", "-20%"],
                    y: ["-10%", "10%", "-10%"],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold-rich)] blur-[150px] rounded-full mix-blend-screen will-change-transform"
            />
            
            {/* Secondary Ambient Light - Deep Warmth */}
            <motion.div 
                animate={{ 
                    x: ["20%", "-20%", "20%"],
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-[var(--gold-deep)]/20 blur-[180px] rounded-full mix-blend-screen will-change-transform" 
            />
            
            {/* Subtle Noise Texture overlay is handled globally, but we add a local vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80" />
        </div>
        
        {/* Content Wrapper that holds both the Border and Text */}
        <div className="relative w-full max-w-5xl mx-auto p-10 md:p-20 mt-10">
            
            {/* Border Frame - Now relative to this wrapper */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 border border-[var(--gold-rich)]/20 rounded-[40px] pointer-events-none"
            />

            <motion.div 
                style={{ y, scale }}
                className="relative z-10 px-6"
            >
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-8 px-5 py-2 rounded-full border border-[var(--gold-rich)]/30 bg-[var(--gold-rich)]/5 backdrop-blur-md text-[var(--gold-rich)] text-xs md:text-sm tracking-[0.3em] uppercase font-semibold"
                >
                    {CONTENT.trust.label}
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium leading-[1.1] mb-12 text-white"
                >
                    {CONTENT.trust.title.part1} <br />
                    <span className="relative inline-block mt-2">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-[var(--gold-champagne)] to-[var(--gold-rich)] italic pr-4">
                            {CONTENT.trust.title.highlight}
                        </span>
                        <motion.svg 
                            className="absolute -bottom-2 left-0 w-full h-3 md:h-6 text-[var(--gold-rich)] opacity-60"
                            viewBox="0 0 200 9" 
                            fill="none" 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <path d="M2.00025 7.00005C56.8486 3.19342 147.072 -1.97022 198.001 3.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </motion.svg>
                    </span>
                    <br className="md:hidden" />
                    {CONTENT.trust.title.part2}
                </motion.h2>

                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-[1px] w-32 bg-[var(--gold-rich)] mx-auto mb-12 opacity-60" 
                />

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
                >
                    {CONTENT.trust.statements.map((statement, index) => (
                        <span key={index}>
                            {statement.text} <span className="text-white font-normal">{statement.highlight}</span>
                            {statement.suffix && ` ${statement.suffix}`}
                            {index < CONTENT.trust.statements.length - 1 && <br className="hidden md:block" />}
                            {index < CONTENT.trust.statements.length - 1 && " "}
                        </span>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
}
