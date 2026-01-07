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
          <div className="solution-image-wrapper">
            <Image
              src="/elder-happy-couple.png"
              alt="Happy elderly couple cared for by Roots & Care"
              width={450}
              height={600}
              className="solution-image"
              priority
            />
            <div className="image-gold-border"></div>
          </div>
        </motion.div>
      </div>

      {/* The 3 Value Cards */}
      <div className="grid-3" style={{ marginTop: "200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card value-card"
        >
          <div className="value-icon">
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
          <div className="value-label">{CONTENT.solution.values[0].label}</div>
          <h3>{CONTENT.solution.values[0].title}</h3>
          <p>{CONTENT.solution.values[0].desc}</p>
          <div className="founder-tag">{CONTENT.solution.values[0].tag}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card value-card"
        >
          <div className="value-icon">
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
          <div className="value-label">{CONTENT.solution.values[1].label}</div>
          <h3>{CONTENT.solution.values[1].title}</h3>
          <p>{CONTENT.solution.values[1].desc}</p>
          <div className="founder-tag">{CONTENT.solution.values[1].tag}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card value-card"
        >
          <div className="value-icon">
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
          <div className="value-label">{CONTENT.solution.values[2].label}</div>
          <h3>{CONTENT.solution.values[2].title}</h3>
          <p>{CONTENT.solution.values[2].desc}</p>
          <div className="founder-tag">{CONTENT.solution.values[2].tag}</div>
        </motion.div>
      </div>
    </section>
  );
}
