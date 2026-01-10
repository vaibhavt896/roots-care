"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "The Discovery Call",
    desc: "We start by listening. We map out medical history, routines, and the unspoken worries keeping you up at night.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "The Trust Visit",
    desc: "We don't send a stranger. We come as friends. We sit down for tea, break the ice, and let your parents get comfortable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="7"
          r="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13a4 4 0 010 7.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "The Safety Net Activates",
    desc: "Routine visits, health monitoring, and home audits start immediately. You get your first detailed Sitrep within 24 hours.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Total Visibility",
    desc: "The distance dissolves. You see what we see. You know they are safe. You focus on your life, knowing we are guarding theirs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={containerRef} className="container how-it-works section-spacing relative !mt-0 !pt-10 scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--gold-rich)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight"
        >
          A System Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)] italic px-2">Your Peace of Mind.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mx-auto text-xl leading-relaxed max-w-3xl"
        >
          We don&apos;t just react to emergencies. We build a proactive safety net around your parents.
        </motion.p>
      </div>

      <div className="relative">
        {/* Animated Connecting Line (Desktop: Horizontal) */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-white/5 z-0 mx-16">
          <motion.div 
            style={{ width: lineWidth }} 
            className="h-full bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)] shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
          />
        </div>

        {/* Animated Connecting Line (Mobile: Vertical) */}
        <div className="lg:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-white/5 z-0">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-gradient-to-b from-[var(--gold-rich)] to-[var(--gold-champagne)] shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group relative pl-20 lg:pl-0 lg:pt-12"
            >
              {/* Step Node (Circle on the line) */}
              <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-8 lg:top-[5.5rem] w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/20 group-hover:border-[var(--gold-rich)] group-hover:bg-[var(--gold-rich)] transition-all duration-500 z-20 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />

              <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/[0.06] hover:border-[var(--gold-rich)]/30 transition-all duration-500 flex flex-col items-start relative overflow-hidden group-hover:-translate-y-2">
                {/* Large Watermark Number */}
                <div className="absolute -right-4 -top-6 text-8xl font-playfair font-bold text-white/[0.03] select-none group-hover:text-[var(--gold-rich)]/[0.05] transition-colors duration-500">
                  {step.number}
                </div>

                {/* Text Content */}
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[var(--gold-champagne)] w-6 h-6">{step.icon}</div>
                    <div className="text-xs font-bold text-[var(--gold-rich)] tracking-widest uppercase">
                      Step {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-playfair text-white mb-3 leading-tight group-hover:text-[var(--gold-champagne)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}