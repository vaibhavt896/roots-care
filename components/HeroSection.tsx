"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/homepage-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay - Stronger on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent/20 z-10" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 pb-20 pt-20"> {/* Adjusted padding to move content slightly lower */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl -ml-4 lg:-ml-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
            {CONTENT.hero.headline.part1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)] italic">
              {CONTENT.hero.headline.highlight1}
            </span>
            <br />
            {CONTENT.hero.headline.part2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)] italic">
              {CONTENT.hero.headline.highlight2}
            </span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-2xl w-fit"
          >
            <div className="relative w-fit px-6 py-4 bg-white/5 backdrop-blur-md border-l-4 border-[var(--gold-rich)] rounded-r-xl overflow-hidden group hover:bg-white/10 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-rich)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed relative z-10">
                {CONTENT.hero.subheadline}
                <span className="block mt-2 text-[var(--gold-champagne)] font-medium tracking-wide">
                  {CONTENT.hero.tagline}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link 
              href="/contact" 
              className="btn-primary text-lg px-10 py-5 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {CONTENT.hero.cta.primary}
            </Link>
            <Link 
              href="/#solution" 
              className="btn-secondary text-lg px-10 py-5 backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {CONTENT.hero.cta.secondary}
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-4 text-sm md:text-base text-gray-300 font-medium tracking-widest uppercase"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--gold-rich)] animate-pulse" />
              {CONTENT.hero.trust.families}
            </div>
            <span className="text-[var(--gold-rich)]">|</span>
            <div>{CONTENT.hero.trust.availability}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
