"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function SmartFixedCTA() {
  const [isVisible, setIsVisible] = useState(false);
  // We use a timestamp to throttle or debounce checks if needed, but intersection observer is efficient.
  
  useEffect(() => {
    // Only run on mobile - visual check via media query in JS
    const checkMobile = () => window.innerWidth < 768;
    
    if (!checkMobile()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // If ANY main CTA is visible, we hide the fixed button
        const isAnyCtaVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!isAnyCtaVisible);
      },
      {
        root: null, // viewport
        threshold: 0, // trigger as soon as even 1px is visible
        rootMargin: "0px 0px -50px 0px", // adjust slightly to trigger earlier/later if needed
      }
    );

    // Track all primary buttons
    const ctaElements = document.querySelectorAll(".main-cta");
    ctaElements.forEach((el) => observer.observe(el));

    return () => {
      ctaElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []); // Run once on mount

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="rounded-full"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-[var(--gold-rich)] to-[#c99c2e] text-black font-bold text-[11px] uppercase tracking-wider py-3 px-6 rounded-full border border-white/20 relative overflow-hidden group whitespace-nowrap"
              >
                {/* Animated Shimmer Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 -skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                
                <span className="relative z-10">Book Visit</span>
                <svg className="relative z-10 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
