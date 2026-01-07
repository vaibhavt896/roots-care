"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [highFit, setHighFit] = useState<boolean | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/lead", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setHighFit(data.highFit);
    setStatus("done");
  }

  if (status === "done") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-[var(--gold-rich)]/10 flex items-center justify-center mb-6 border border-[var(--gold-rich)]/20">
          <svg className="w-10 h-10 text-[var(--gold-rich)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-playfair text-white mb-4">Request Received</h2>

        {highFit ? (
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Your situation requires careful attention. A care manager will
            personally review your request and reach out within 24 hours.
          </p>
        ) : (
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Thank you for sharing the details. We will review your request and
            respond honestly if we are the right fit for your needs.
          </p>
        )}

        <div className="mt-8 text-sm text-[var(--gold-champagne)] tracking-widest uppercase opacity-70">
          - The Roots & Care Team -
        </div>
      </motion.div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Living Status */}
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold pl-1">
            Parent&apos;s Living Situation
          </label>
          <div className="relative">
            <select 
              name="living" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[var(--gold-rich)] focus:ring-1 focus:ring-[var(--gold-rich)] transition-all duration-300 hover:bg-white/[0.08]"
            >
              <option value="" disabled selected className="bg-[#1a1a1a] text-gray-500">Select option...</option>
              <option value="alone" className="bg-[#1a1a1a]">Yes, completely alone</option>
              <option value="partial" className="bg-[#1a1a1a]">Occasional help</option>
              <option value="family" className="bg-[#1a1a1a]">Living with family</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Medical Condition */}
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold pl-1">
            Medical Complexity
          </label>
          <div className="relative">
            <select 
              name="medical" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[var(--gold-rich)] focus:ring-1 focus:ring-[var(--gold-rich)] transition-all duration-300 hover:bg-white/[0.08]"
            >
              <option value="" disabled selected className="bg-[#1a1a1a] text-gray-500">Select option...</option>
              <option value="high" className="bg-[#1a1a1a]">Ongoing / Serious conditions</option>
              <option value="medium" className="bg-[#1a1a1a]">Minor age-related issues</option>
              <option value="low" className="bg-[#1a1a1a]">No major conditions</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Concern */}
      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold pl-1">
          Primary Concern
        </label>
        <div className="relative">
          <select 
            name="concern" 
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[var(--gold-rich)] focus:ring-1 focus:ring-[var(--gold-rich)] transition-all duration-300 hover:bg-white/[0.08]"
          >
            <option value="" disabled selected className="bg-[#1a1a1a] text-gray-500">What worries you the most?</option>
            <option value="emergency" className="bg-[#1a1a1a]">Medical emergencies (Response time)</option>
            <option value="loneliness" className="bg-[#1a1a1a]">Loneliness & daily companionship</option>
            <option value="home" className="bg-[#1a1a1a]">Household & Maintenance issues</option>
            <option value="all" className="bg-[#1a1a1a]">All of the above</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold pl-1">
          Your Email Address
        </label>
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="name@example.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--gold-rich)] focus:ring-1 focus:ring-[var(--gold-rich)] transition-all duration-300 hover:bg-white/[0.08]"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="btn-primary w-full shadow-lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Processing...
            </span>
          ) : "Submit for Review"}
        </button>
      </div>
    </form>
  );
}