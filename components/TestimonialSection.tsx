"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I slept through the night for the first time in 3 years. Knowing someone is just 15 minutes away from Ma changes everything.",
    author: "Rohan",
    location: "San Jose, CA",
    role: "Son of Mrs. Gupta (Civil Lines)",
  },
  {
    quote: "Living in Bangalore, I felt helpless when Papa got dengue. Roots & Care handled the hospital, the meds, everything. It felt like I was there.",
    author: "Ananya",
    location: "Bangalore",
    role: "Daughter of Mr. Verma (Swaroop Nagar)",
  },
  {
    quote: "I used to fly down from Delhi every weekend just to check the BP meds. Now Vaibhav sends me the chart every Monday. The guilt is gone.",
    author: "Vikram",
    location: "New Delhi",
    role: "Son of Col. Singh (Cantt)",
  },
  {
    quote: "The detailed WhatsApp updates are a godsend. I know exactly when the maid arrived and what Dad ate. It’s better than CCTV.",
    author: "Priya",
    location: "London, UK",
    role: "Daughter of Mrs. Tandon (Tilak Nagar)",
  },
  {
    quote: "When Mom slipped in the bathroom at 2 AM, Sunit was there before the ambulance. That 10-minute difference saved her hip.",
    author: "Amit",
    location: "Toronto, Canada",
    role: "Son of Mrs. Kapoor (Arya Nagar)",
  },
  {
    quote: "I was worried about Dad's dialysis appointments. They didn't just drop him off; they sat with him for 4 hours. Who does that?",
    author: "Meera",
    location: "Dubai, UAE",
    role: "Daughter of Mr. Saxena (Kakadeo)",
  },
  {
    quote: "My parents are stubborn. They refused help. But the Roots team visited as 'friends' first. Now Dad waits for their weekly chess game.",
    author: "Arjun",
    location: "Singapore",
    role: "Son of Mr. & Mrs. Agarwal (Civil Lines)",
  },
  {
    quote: "Navigating the Kanpur medical system from Berlin was a nightmare. Roots & Care cut through the chaos. They know every doctor in town.",
    author: "Sneha",
    location: "Berlin, Germany",
    role: "Daughter of Dr. Mishra (Swaroop Nagar)",
  },
  {
    quote: "I don't worry about the house repairs anymore. Plumbing, electrical, AC—Vaibhav handles it. My parents just relax.",
    author: "Rahul",
    location: "Pune",
    role: "Son of Mrs. Trivedi (Kidwai Nagar)",
  },
  {
    quote: "It's not a service, it's an extension of our family. They celebrated Diwali with my parents when I couldn't make it back.",
    author: "Kavita",
    location: "Mumbai",
    role: "Daughter of Mr. Bhatia (Lajpat Nagar)",
  },
];

// Duplicate for seamless loop
const marqueeContent = [...testimonials, ...testimonials];

export default function TestimonialSection() {
  return (
    <section className="section-spacing !mt-0 !pt-0 relative overflow-hidden py-20">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--gold-rich)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 text-center mb-16">
        <span className="text-[var(--gold-rich)] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
          Letters from Families
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
          Trust isn&apos;t claimed. It&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-rich)] to-[var(--gold-champagne)] italic">earned.</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-8 w-max"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 60, // Slow, elegant speed
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: "paused" }} // Note: Framer Motion handles this differently, but we can simulate pause with variants or just let it flow. 
          // Actually, for pure CSS pause on hover, we might need a wrapper class, but let's stick to a slow speed that is readable.
        >
          {marqueeContent.map((item, index) => (
            <div 
              key={index}
              className="w-[85vw] sm:w-[400px] md:w-[500px] shrink-0 bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-2xl relative hover:bg-white/[0.06] hover:border-[var(--gold-rich)]/30 transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="absolute top-6 left-6 text-4xl text-[var(--gold-rich)] font-serif opacity-20 group-hover:opacity-40 transition-opacity">
                &ldquo;
              </div>

              <div className="mb-8 pl-6 relative z-10">
                <p className="text-lg text-gray-300 font-light leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-rich)]/20 to-[var(--gold-rich)]/5 border border-[var(--gold-rich)]/20 flex items-center justify-center text-[var(--gold-champagne)] font-bold font-playfair text-xl shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-base">
                    {item.author}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
                    <span className="text-[var(--gold-rich)] opacity-80">{item.location}</span>
                    <span>•</span>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
