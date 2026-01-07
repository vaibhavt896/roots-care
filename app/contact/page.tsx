"use client";

import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gold-rich)]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Emotion */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[var(--gold-rich)] text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">
              Application for Care
            </span>
            <h1 className="text-5xl md:text-6xl font-playfair text-white leading-[1.1] mb-8">
              Let&apos;s determine <br />
              <span className="text-gray-500 italic">if we are</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)]">
                the right fit.
              </span>
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light mb-12">
              <p>
                We are not a volume-based agency. We operate with a limited capacity to ensure every parent gets the attention of a family member.
              </p>
              <p>
                This form is the first step. It helps us understand the medical and logistical complexity of your situation.
              </p>
            </div>

            <div className="border-t border-white/10 pt-10 mt-auto">
              <h3 className="text-white font-playfair text-xl mb-6">Direct Channels</h3>
              <div className="space-y-4">
                <a href="mailto:rootsandcare@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-[var(--gold-rich)] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--gold-rich)]/50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>rootsandcare@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Kanpur, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--gold-rich)]/10 to-transparent rounded-tr-3xl pointer-events-none" />
              
              <ContactForm />
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-gray-600 uppercase tracking-widest">
                <svg className="w-3 h-3 text-[var(--gold-rich)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                100% Private & Secure
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}