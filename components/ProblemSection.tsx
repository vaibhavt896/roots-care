"use client";

import { motion, useInView, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CONTENT } from "@/lib/content";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const springValue = useSpring(from, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, to, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

export default function ProblemSection() {
  return (
    <section className="container problem-section section-spacing !mt-0 !pt-0 relative overflow-hidden">
        {/* Subtle background red glow for "danger/alert" theme of this section */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold mb-12 text-white leading-tight">
            {CONTENT.problem.title} <span className="text-[var(--gold-rich)]">{CONTENT.problem.titleHighlight}</span>
          </h2>
          
          <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
            <p className="pl-4 border-l-2 border-[var(--gold-rich)]/30">
              You&apos;re in <span className="text-white font-medium">{CONTENT.problem.scenario.location}</span>. It&apos;s {CONTENT.problem.scenario.time}. {CONTENT.problem.scenario.situation}
            </p>
            
            <p>
              {CONTENT.problem.scenario.details}
            </p>
            
            <div className="py-2">
                <p className="text-2xl md:text-3xl font-playfair italic text-white/90">
                {CONTENT.problem.scenario.reality.split('. ')[0]}. <span className="text-[var(--gold-champagne)] border-b border-[var(--gold-rich)]/50 pb-1">{CONTENT.problem.scenario.reality.split('. ')[1]}.</span>
                </p>
            </div>

            <p>
              {CONTENT.problem.emotional.split('Success over presence.')[0]} <span className="text-white font-medium">Success over presence.</span>
            </p>
            
            <p className="text-white font-medium text-xl">
              {CONTENT.problem.impact}
            </p>
            
            <div className="pt-8 pb-24">
              <Link 
                href="/contact" 
                className="main-cta btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg shadow-lg hover:shadow-[var(--gold-rich)]/20 transition-all duration-300"
              >
                {CONTENT.problem.cta}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Column - Simplified on mobile */}
        <div className="flex flex-col gap-4 md:gap-6">
            {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-[var(--gold-rich)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-[var(--gold-rich)]/40 transition-colors duration-300">
                <div className="flex items-baseline gap-1 mb-1 md:mb-2">
                    <span className="text-5xl md:text-6xl font-playfair font-bold text-white">
                        <Counter from={0} to={Number(CONTENT.problem.stats.anxiety.value)} />{CONTENT.problem.stats.anxiety.unit}
                    </span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase font-medium border-t border-white/10 pt-3 md:pt-4 mt-2">
                  {CONTENT.problem.stats.anxiety.label}
                </p>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
             <div className="absolute inset-0 bg-[var(--gold-rich)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[var(--gold-rich)]/40 transition-colors duration-300">
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-playfair font-bold text-white">{CONTENT.problem.stats.aloneTime.value}</span>
                    <span className="text-2xl text-[var(--gold-champagne)] font-medium">{CONTENT.problem.stats.aloneTime.unit}</span>
                </div>
                <p className="text-gray-400 text-sm tracking-widest uppercase font-medium border-t border-white/10 pt-4 mt-2">
                  {CONTENT.problem.stats.aloneTime.label}
                </p>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative"
          >
             <div className="absolute inset-0 bg-[var(--gold-rich)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[var(--gold-rich)]/40 transition-colors duration-300">
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-playfair font-bold text-white">
                        <Counter from={0} to={Number(CONTENT.problem.stats.emergency.value)} />{CONTENT.problem.stats.emergency.unit}
                    </span>
                    <span className="text-2xl text-[var(--gold-champagne)] font-medium">{CONTENT.problem.stats.emergency.unitLabel}</span>
                </div>
                <p className="text-gray-400 text-sm tracking-widest uppercase font-medium border-t border-white/10 pt-4 mt-2">
                  {CONTENT.problem.stats.emergency.label}
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}