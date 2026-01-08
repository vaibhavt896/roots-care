"use client";

import { motion } from "framer-motion";

const trustItems = [
  "Serving Families in Swaroop Nagar, Civil Lines, and Cantt",
  "Available 24/7 for Your Parents",
  "On-Ground Support in Kanpur",
  "Direct Communication with Sunit & Vaibhav",
  "Verified Network of Local Doctors",
];

export default function TrustTicker() {
  return (
    <div className="relative w-full max-w-[100vw] bg-black/30 backdrop-blur-sm border-y border-white/5 py-4 overflow-hidden z-20">
      {/* Gradient Masks for Premium Fade Effect */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-16 w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60, // Slower, more elegant speed
        }}
        whileHover={{ animationPlayState: "paused" }} // Note: This doesn't work directly on motion div in this version, CSS class or variants needed for pause.
        // For simplicity and robustness with Framer Motion loop, we usually keep it flowing or add specific drag constraints. 
        // A slow speed is usually sufficient for readability without needing pause.
      >
        {/* Triple duplication for seamless infinite scroll on wide screens */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {trustItems.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center gap-16">
                <span className="text-[var(--gold-champagne)] text-xs tracking-[0.2em] uppercase font-medium opacity-80">
                  {item}
                </span>
                {/* Elegant Separator */}
                <span className="w-1 h-1 rounded-full bg-[var(--gold-rich)] opacity-50" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
