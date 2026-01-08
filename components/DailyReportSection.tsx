"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
  {
    time: "09:30 AM",
    sender: "Roots Manager",
    text: "Reached home. Dad is having tea. BP checked: 128/82 (Normal).",
    type: "update"
  },
  {
    time: "09:45 AM",
    sender: "Roots Manager",
    text: "AC technician has arrived. I am supervising the repair.",
    type: "update"
  },
  {
    time: "11:15 AM",
    sender: "Roots Manager",
    text: "Repair done. Area cleaned. Dad is resting now.",
    type: "update"
  }
];

export default function DailyReportSection() {
  const [activeMsg, setActiveMsg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMsg((prev) => (prev + 1) % (MESSAGES.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container section-spacing relative !mt-0 !pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[var(--gold-rich)]/30 bg-[var(--gold-rich)]/5 text-[var(--gold-rich)] text-xs tracking-[0.2em] uppercase font-semibold">
            Radical Transparency
          </div>
          <h2 className="section-title mb-8">
            You don&apos;t just pay for care. <br />
            You pay for <span className="text-white italic">information.</span>
          </h2>
          <p className="lead mb-8">
            Anxiety comes from the unknown. We kill the unknown.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            You get a <strong>Daily Sitrep</strong> every morning. Not a generic &quot;all is well,&quot; but specific, timestamped updates. You will know exactly when the maid came, what the vitals were, and if the plumber actually fixed the leak.
          </p>
          <div className="flex items-center gap-4 text-[var(--gold-champagne)] font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
              Real-time WhatsApp Updates
            </span>
          </div>
        </motion.div>

        {/* Visual Side - The Phone Mockup */}
        <div className="relative flex justify-center mt-8 lg:mt-0">
          {/* Glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[400px] md:h-[500px] bg-[var(--gold-rich)]/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Phone Frame */}
          <div className="relative w-[280px] md:w-[320px] h-[550px] md:h-[600px] bg-black border-4 border-[#333] rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden z-10">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-5 md:h-6 bg-black rounded-b-xl z-20" />
            
            {/* Screen Content */}
            <div className="w-full h-full bg-[#0a0a0a] flex flex-col font-sans">
              
              {/* Chat Header */}
              <div className="px-4 pt-10 md:pt-12 pb-3 md:pb-4 bg-[#111] border-b border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--gold-rich)] to-[var(--gold-deep)] flex items-center justify-center text-[10px] text-black font-bold">
                  RC
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Roots & Care Manager</div>
                  <div className="text-[10px] text-[var(--gold-rich)]">Online</div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                {/* Background Pattern for Chat */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                {MESSAGES.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ 
                      opacity: index < activeMsg ? 1 : 0, 
                      y: index < activeMsg ? 0 : 20,
                      scale: index < activeMsg ? 1 : 0.95
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-start max-w-[85%]"
                  >
                    <div className="bg-[#1a1a1a] border border-white/10 p-3 rounded-2xl rounded-tl-sm text-gray-200 text-xs leading-relaxed shadow-lg">
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-gray-600 mt-1 ml-1">{msg.time}</span>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {activeMsg < MESSAGES.length && (
                   <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1 ml-2 mt-2"
                   >
                     <span className="w-1 h-1 bg-[var(--gold-rich)] rounded-full animate-bounce" style={{ animationDelay: "0s" }}/>
                     <span className="w-1 h-1 bg-[var(--gold-rich)] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}/>
                     <span className="w-1 h-1 bg-[var(--gold-rich)] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}/>
                   </motion.div>
                )}
              </div>

              {/* Input Area (Static) */}
              <div className="p-4 bg-[#111] border-t border-white/10">
                <div className="h-8 bg-[#222] rounded-full w-full" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
