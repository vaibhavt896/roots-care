"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CONTENT } from "@/lib/content";

export default function FoundersSection() {
  return (
    <section className="container section-spacing !mt-0 !pt-0 -mt-32 relative overflow-hidden z-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[var(--gold-rich)]/5 blur-[100px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-900/5 blur-[100px] rounded-full -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title mb-6"
          >
            {CONTENT.founders.title}{" "}
            <span className="text-[var(--gold-champagne)] italic">
              {CONTENT.founders.titleHighlight}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block text-xl text-gray-400 mx-auto leading-relaxed"
          >
            {CONTENT.founders.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-stretch">
          {CONTENT.founders.people.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 overflow-hidden hover:border-[var(--gold-rich)]/30 transition-colors duration-500 flex flex-col">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--gold-rich)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Header: Name & Role */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl md:text-4xl font-playfair text-white group-hover:text-[var(--gold-rich)] transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <span className="px-3 py-1 md:px-4 md:py-1 rounded-full border border-white/20 text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:border-[var(--gold-rich)]/50 group-hover:text-[var(--gold-champagne)] transition-all duration-300">
                      {founder.bg}
                    </span>
                  </div>
                  <p className="text-[var(--gold-champagne)] font-medium text-base md:text-lg border-l-2 border-[var(--gold-rich)] pl-4">
                    {founder.role}
                  </p>
                </div>

                {/* Description - Simplified on mobile */}
                <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8 flex-grow line-clamp-4 md:line-clamp-none">
                  {founder.desc}
                </p>

                {/* Visual Decorative Element (Abstract signature line) */}
                <motion.div
                  className="h-[1px] bg-gradient-to-r from-[var(--gold-rich)]/50 to-transparent w-full mt-auto"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Link href="/about" className="btn-secondary group">
            {CONTENT.founders.cta}
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
