"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container">
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-title text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4"
        >
          - {CONTENT.faq.title} -
          <span className="text-2xl md:text-3xl font-light text-[var(--gold-champagne)] block mt-2 opacity-80 tracking-wide font-inter">
            {" "}
          </span>
        </motion.h2>
      </div>
      <div className="faq-wrapper max-w-3xl mx-auto flex flex-col gap-6">
        {CONTENT.faq.items.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`faq-item group rounded-2xl border transition-all duration-500 overflow-hidden ${
              openIndex === index
                ? "bg-[var(--gold-rich)]/10 border-[var(--gold-rich)]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                : "bg-white/5 border-white/10 hover:border-[var(--gold-rich)]/20 hover:bg-white/[0.07]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              className="faq-question w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-rich)] rounded-lg"
            >
              <span
                className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                  openIndex === index
                    ? "text-[var(--gold-champagne)]"
                    : "text-gray-200 group-hover:text-white"
                }`}
              >
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`text-2xl font-light ${
                  openIndex === index
                    ? "text-[var(--gold-rich)]"
                    : "text-gray-400"
                }`}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-2 text-gray-300 leading-relaxed text-lg border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
