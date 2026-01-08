"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormDataState = {
  living: string;
  medical: string;
  concern: string;
  email: string;
};

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormDataState>({
    living: "",
    medical: "",
    concern: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [highFit, setHighFit] = useState<boolean | null>(null);

  const totalSteps = 4;

  const handleSelection = (field: keyof FormDataState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Auto-advance after a short delay for feedback
    setTimeout(() => {
      if (step < totalSteps - 1) {
        setStep(step + 1);
      }
    }, 250);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // Create FormData for the API
    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    const res = await fetch("/api/lead", {
      method: "POST",
      body: submissionData,
    });

    const data = await res.json();

    setHighFit(data.highFit);
    setStatus("done");
  }

  // --- Success State ---
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

  // --- Selection Card Component ---
  const SelectionCard = ({ 
    label, 
    value, 
    currentValue, 
    onClick 
  }: { 
    label: string, 
    value: string, 
    currentValue: string, 
    onClick: () => void 
  }) => (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
        currentValue === value
          ? "bg-[var(--gold-rich)]/10 border-[var(--gold-rich)] shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      }`}
    >
      <span className={`text-lg font-medium ${currentValue === value ? "text-[var(--gold-rich)]" : "text-gray-200"}`}>
        {label}
      </span>
      {currentValue === value && (
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
          className="w-6 h-6 rounded-full bg-[var(--gold-rich)] flex items-center justify-center text-black"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="flex gap-2 mb-8">
        {[0, 1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              s <= step ? "bg-[var(--gold-rich)]" : "bg-white/10"
            }`} 
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Living Situation */}
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair text-white mb-2">First, tell us about the situation.</h3>
            <p className="text-gray-400 mb-6">Who are we caring for and where do they live?</p>
            
            <div className="space-y-3">
              <SelectionCard 
                label="Living Completely Alone" 
                value="alone" 
                currentValue={formData.living} 
                onClick={() => handleSelection("living", "alone")} 
              />
              <SelectionCard 
                label="Living with Spouse / Family" 
                value="family" 
                currentValue={formData.living} 
                onClick={() => handleSelection("living", "family")} 
              />
              <SelectionCard 
                label="Has Occasional Help" 
                value="partial" 
                currentValue={formData.living} 
                onClick={() => handleSelection("living", "partial")} 
              />
            </div>
          </motion.div>
        )}

        {/* Step 2: Medical Complexity */}
        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair text-white mb-2">Are there medical concerns?</h3>
            <p className="text-gray-400 mb-6">This helps us assign the right care manager.</p>
            
            <div className="space-y-3">
              <SelectionCard 
                label="Serious / Ongoing Conditions" 
                value="high" 
                currentValue={formData.medical} 
                onClick={() => handleSelection("medical", "high")} 
              />
              <SelectionCard 
                label="Minor Age-Related Issues" 
                value="medium" 
                currentValue={formData.medical} 
                onClick={() => handleSelection("medical", "medium")} 
              />
              <SelectionCard 
                label="Generally Healthy" 
                value="low" 
                currentValue={formData.medical} 
                onClick={() => handleSelection("medical", "low")} 
              />
            </div>
          </motion.div>
        )}

        {/* Step 3: Primary Concern */}
        {step === 2 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair text-white mb-2">What worries you the most?</h3>
            <p className="text-gray-400 mb-6">We will prioritize this in our care plan.</p>
            
            <div className="space-y-3">
              <SelectionCard 
                label="Medical Emergencies" 
                value="emergency" 
                currentValue={formData.concern} 
                onClick={() => handleSelection("concern", "emergency")} 
              />
              <SelectionCard 
                label="Loneliness & Isolation" 
                value="loneliness" 
                currentValue={formData.concern} 
                onClick={() => handleSelection("concern", "loneliness")} 
              />
              <SelectionCard 
                label="Household Maintenance" 
                value="home" 
                currentValue={formData.concern} 
                onClick={() => handleSelection("concern", "home")} 
              />
              <SelectionCard 
                label="All of the above" 
                value="all" 
                currentValue={formData.concern} 
                onClick={() => handleSelection("concern", "all")} 
              />
            </div>
          </motion.div>
        )}

        {/* Step 4: Email & Submit */}
        {step === 3 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair text-white mb-2">Where should we send the plan?</h3>
            <p className="text-gray-400 mb-6">We&apos;ll review your details and get back to you.</p>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <input 
                  type="email" 
                  name="email" 
                  required 
                  autoFocus
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--gold-rich)] focus:ring-1 focus:ring-[var(--gold-rich)] transition-all duration-300"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  if (formData.email) handleSubmit(e as any);
                }}
                disabled={status === "submitting" || !formData.email}
                className="btn-primary w-full shadow-lg text-lg py-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : "Submit Request"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="mt-8 flex justify-between items-center border-t border-white/5 pt-6">
        {step > 0 ? (
          <button 
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2 px-2 py-1"
          >
            ← Back
          </button>
        ) : <div />}
        
        <div className="text-xs text-gray-600 uppercase tracking-widest">
          Step {step + 1} of 4
        </div>
      </div>
    </div>
  );
}
