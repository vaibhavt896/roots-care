"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { useRef } from "react";
import Image from "next/image";

// --- Components ---

function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Video Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110" // scale-110 prevents white edges during parallax
        >
          <source src="/about-us.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Premium Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />

      <div className="container relative z-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 text-[var(--gold-rich)] text-sm tracking-[0.4em] uppercase font-semibold"
          >
            {CONTENT.about.hero.label}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-white leading-[1.1] mb-12 drop-shadow-2xl"
          >
            {CONTENT.about.hero.title} <br />
            <span className="italic text-gray-300">{CONTENT.about.hero.titleHighlight1}</span>, <br />
            not <span className="text-[var(--gold-champagne)]">{CONTENT.about.hero.titleHighlight2}</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {CONTENT.about.hero.desc} <br />
            <span className="text-white font-normal italic">{CONTENT.about.hero.quote}</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function StorySegment() {
  return (
    <section className="container section-spacing relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-8 leading-tight">
            {CONTENT.about.story.title} <br />
            <span className="text-[var(--gold-rich)]">{CONTENT.about.story.titleHighlight}</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              {CONTENT.about.story.p1}
            </p>
            <p>
              {CONTENT.about.story.p2.split('Presence.')[0]} <strong>Presence.</strong>
            </p>
            <p>
              {CONTENT.about.story.p3}
            </p>
            <p className="text-white font-medium text-xl border-l-2 border-[var(--gold-rich)] pl-6 py-2 my-8">
              {CONTENT.about.story.highlight}
            </p>
          </div>
        </motion.div>
        
        <div className="relative h-[600px] w-full">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
           >
              <Image 
                src="/Trustt.png" 
                alt="Trust and Connection - Holding hands" 
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
           </motion.div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[var(--gold-rich)]/30 rounded-full opacity-50" />
           <div className="absolute -top-10 -right-10 w-60 h-60 bg-[var(--gold-rich)]/5 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}

function FounderDeepDive({ name, role, align = "left", bio, quote, imageSrc }: { name: string, role: string, align?: "left" | "right", bio: string[], quote: string, imageSrc: string }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center py-20 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto bg-white/5 rounded-2xl overflow-hidden border border-white/10 group">
           <Image
             src={imageSrc}
             alt={name}
             fill
             className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
           <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
             <div className="text-[var(--gold-champagne)] uppercase tracking-widest text-sm mb-2">{role}</div>
             <div className="text-4xl font-playfair text-white">{name}</div>
           </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-playfair text-white mb-8">
          The <span className="text-[var(--gold-rich)]">{role.split(' ')[0]}</span> Mindset
        </h3>
        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed mb-10">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <blockquote className="text-xl md:text-2xl font-playfair italic text-white/90 leading-normal">
          &quot;{quote}&quot;
        </blockquote>
      </motion.div>
    </div>
  );
}

function Founders() {
  return (
    <section className="container section-spacing">
      <div className="text-center mb-24">
        <h2 className="section-title">{CONTENT.about.founders.title}</h2>
        <div className="h-[1px] w-24 bg-[var(--gold-rich)] mx-auto mt-8 opacity-50" />
      </div>
      
      <FounderDeepDive 
        name={CONTENT.about.founders.sunit.name}
        role={CONTENT.about.founders.sunit.role}
        bio={CONTENT.about.founders.sunit.bio}
        quote={CONTENT.about.founders.sunit.quote}
        imageSrc="/Sunit.png"
      />
      
      <FounderDeepDive 
        name={CONTENT.about.founders.vaibhav.name}
        role={CONTENT.about.founders.vaibhav.role}
        align="right"
        bio={CONTENT.about.founders.vaibhav.bio}
        quote={CONTENT.about.founders.vaibhav.quote}
        imageSrc="/Vaibhav.png"
      />
    </section>
  );
}

function Manifesto() {
  return (
    <section className="w-full bg-white/[0.02] border-y border-white/5 py-32 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm tracking-[0.3em] text-[var(--gold-rich)] uppercase mb-8 font-semibold">{CONTENT.about.manifesto.label}</h2>
            <h3 className="text-4xl md:text-5xl font-playfair text-white leading-tight mb-8">
              {CONTENT.about.manifesto.title} <br />
              <span className="text-gray-500">{CONTENT.about.manifesto.titleHighlight}</span>
            </h3>
          </div>
          <div className="space-y-8 text-lg text-gray-300 font-light">
            <p>
              {CONTENT.about.manifesto.desc[0].split('Roots & Care is different.')[0]} <strong>Roots & Care is different.</strong>
            </p>
            <p>
              {CONTENT.about.manifesto.desc[1]}
            </p>
            <p>
              {CONTENT.about.manifesto.desc[2]}
            </p>
            <Link href="/contact" className="inline-block mt-4 text-white border-b border-[var(--gold-rich)] pb-1 hover:text-[var(--gold-rich)] transition-colors">
              {CONTENT.about.manifesto.link} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <main className="main home-main">
      <AboutHero />
      <StorySegment />
      <Founders />
      <Manifesto />
      
      <section className="container py-24 text-center">
        <p className="text-2xl font-playfair italic text-white/60 mb-8">
          {CONTENT.about.footerQuote}
        </p>
      </section>
    </main>
  );
}
