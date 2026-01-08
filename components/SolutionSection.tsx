"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONTENT } from "@/lib/content";

export default function SolutionSection() {
  return (
    <section id="solution" className="container solution-section section-spacing !mt-0 !pt-0 scroll-mt-32">
      {/* New Split Header: Text + Emotional Image */}
      <div className="solution-header-split pt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="solution-text-col"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
              {CONTENT.solution.header.title} {CONTENT.solution.header.subtitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)] italic px-2">{CONTENT.solution.header.highlight}</span>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="lead">
              {CONTENT.solution.header.desc1}
            </p>
            <p className="lead">
              {CONTENT.solution.header.desc2}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="solution-image-col"
        >
          <div className="solution-image-wrapper max-h-[400px] md:max-h-none">
            <Image
              src="/elder-happy-couple.png"
              alt="Happy elderly couple cared for by Roots & Care"
              width={450}
              height={600}
              className="solution-image object-cover h-full w-full"
              priority
            />
            <div className="image-gold-border"></div>
          </div>
        </motion.div>
      </div>

      {/* The 3 Value Cards - Swipeable on Mobile */}
      <div className="relative mt-12 lg:mt-48">
        <div className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x md:snap-none snap-mandatory gap-4 md:gap-[60px] pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            animate={{ y: [0, -8, 0] }}
            // @ts-ignore
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }
            }}
            whileTap={{ scale: 0.98 }}
            className="card value-card min-w-[85vw] md:min-w-0 snap-center relative overflow-hidden group"
          >
            {/* Sheen Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
            
            <div className="value-icon relative z-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="value-label relative z-10">{CONTENT.solution.values[0].label}</div>
            <h3 className="relative z-10">{CONTENT.solution.values[0].title}</h3>
            <p className="relative z-10">{CONTENT.solution.values[0].desc}</p>
            <div className="founder-tag relative z-10">{CONTENT.solution.values[0].tag}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            animate={{ y: [0, -8, 0] }}
            // @ts-ignore
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            whileTap={{ scale: 0.98 }}
            className="card value-card min-w-[85vw] md:min-w-0 snap-center relative overflow-hidden group"
          >
            {/* Sheen Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
            />

            <div className="value-icon relative z-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12l.01.01"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="value-label relative z-10">{CONTENT.solution.values[1].label}</div>
            <h3 className="relative z-10">{CONTENT.solution.values[1].title}</h3>
            <p className="relative z-10">{CONTENT.solution.values[1].desc}</p>
            <div className="founder-tag relative z-10">{CONTENT.solution.values[1].tag}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            animate={{ y: [0, -8, 0] }}
            // @ts-ignore
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            whileTap={{ scale: 0.98 }}
            className="card value-card min-w-[85vw] md:min-w-0 snap-center relative overflow-hidden group"
          >
            {/* Sheen Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />

            <div className="value-icon relative z-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="value-label relative z-10">{CONTENT.solution.values[2].label}</div>
            <h3 className="relative z-10">{CONTENT.solution.values[2].title}</h3>
            <p className="relative z-10">{CONTENT.solution.values[2].desc}</p>
            <div className="founder-tag relative z-10">{CONTENT.solution.values[2].tag}</div>
          </motion.div>
        </div>

        {/* Mobile Swipe Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--gold-rich)] pointer-events-none"
        >
          <span>Swipe</span>
          <motion.span 
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
