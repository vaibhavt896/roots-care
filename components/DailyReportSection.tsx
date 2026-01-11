"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
  {
    time: "09:30 AM",
    sender: "Roots Manager",
    text: "Reached home. Dad is having tea. BP checked: 128/82 (Normal).",
    type: "update",
  },
  {
    time: "09:45 AM",
    sender: "Roots Manager",
    text: "AC technician has arrived. I am supervising the repair.",
    type: "update",
  },
  {
    time: "11:15 AM",
    sender: "Roots Manager",
    text: "Repair done. Area cleaned. Dad is resting now.",
    type: "update",
  },
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[var(--gold-rich)]/30 bg-[var(--gold-rich)]/5 text-[var(--gold-rich)] text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold">
            Total Visibility
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            The Peace of Being There. <br />
            <span className="text-[var(--gold-rich)] italic">
              Without Being There.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 italic border-l-2 border-[var(--gold-rich)] pl-6">
            Trust requires proof. We give you plenty.
          </p>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            <p>
              Worrying from a distance is exhausting. We end that cycle.
            </p>
            <p>
              We act as your eyes and ears on the ground. You see exactly what we see—from their morning health stats to a fixed appliance. No filters. No guessing. Just the honest, detailed updates you need to live your life guilt-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div className="space-y-2">
              <h4 className="text-white font-semibold flex items-center gap-2 text-sm uppercase tracking-wider">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30"></span>
                  <svg
                    className="relative inline-flex h-5 w-5 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span> Live
                WhatsApp Updates
              </h4>
              <p className="text-xs text-gray-500">
                Real-time photos and replies. Feel like you&apos;re in the room.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold flex items-center gap-2 text-sm uppercase tracking-wider">
                <span className="text-[var(--gold-rich)]">📋</span> Morning
                Report
              </h4>
              <p className="text-xs text-gray-500">
                A clear summary of health, meals, and home maintenance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Side - The Phone Mockup */}
        <div className="relative flex justify-center order-1 lg:order-2">
          {/* Glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[400px] md:h-[500px] bg-[var(--gold-rich)]/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Phone Frame */}
          <div className="relative w-[280px] md:w-[320px] h-[550px] md:h-[600px] bg-black border-4 border-[#333] rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-5 md:h-6 bg-black rounded-b-xl z-20" />

            <div className="w-full h-full bg-[#0a0a0a] flex flex-col font-sans">
              <div className="px-4 pt-10 md:pt-12 pb-3 md:pb-4 bg-[#111] border-b border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--gold-rich)] to-[var(--gold-deep)] flex items-center justify-center text-[10px] text-black font-bold">
                  RC
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">
                    Roots & Care Manager
                  </div>
                  <div className="text-[10px] text-[var(--gold-rich)]">
                    Online
                  </div>
                </div>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                {MESSAGES.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{
                      opacity: index < activeMsg ? 1 : 0,
                      y: index < activeMsg ? 0 : 20,
                      scale: index < activeMsg ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-start max-w-[90%]"
                  >
                    <div className="bg-[#1a1a1a] border border-white/10 p-3 rounded-2xl rounded-tl-sm text-gray-200 text-xs leading-relaxed shadow-lg">
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-gray-600 mt-1 ml-1">
                      {msg.time}
                    </span>
                  </motion.div>
                ))}

                {activeMsg < MESSAGES.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1 ml-2 mt-2"
                  >
                    <span
                      className="w-1 h-1 bg-[var(--gold-rich)] rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    />
                    <span
                      className="w-1 h-1 bg-[var(--gold-rich)] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span
                      className="w-1 h-1 bg-[var(--gold-rich)] rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </motion.div>
                )}
              </div>

              <div className="p-4 bg-[#111] border-t border-white/10">
                <div className="h-8 bg-[#222] rounded-full w-full flex items-center px-4">
                  <div className="w-4 h-0.5 bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
