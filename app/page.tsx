import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import TrustTicker from "../components/TrustTicker";
import DailyReportSection from "../components/DailyReportSection";

// Lazy load below-the-fold components
const ProblemSection = dynamic(() => import("../components/ProblemSection"));
const SolutionSection = dynamic(() => import("../components/SolutionSection"));
const HowItWorks = dynamic(() => import("../components/HowItWorks"));
const TrustSection = dynamic(() => import("../components/TrustSection"));
const FoundersSection = dynamic(() => import("../components/FoundersSection"));
const TestimonialSection = dynamic(() => import("../components/TestimonialSection"));
const FAQ = dynamic(() => import("../components/FAQ"));
const FinalCTA = dynamic(() => import("../components/FinalCTA"));

export const metadata = {
  title: "Trusted Elder Care in Kanpur for NRIs",
  description:
    "Reliable, on-ground elder care in Kanpur for parents living alone. Emergency response, companionship, and trusted local presence.",
};

export default function Home() {
  return (
    <main className="main home-main">
      {/* HERO WITH VIDEO (Animated) */}
      <HeroSection />

      {/* TRUST TICKER */}
      <TrustTicker />

      {/* DAILY REPORT PREVIEW - New York Standard */}
      <DailyReportSection />

      {/* PROBLEM SECTION (Animated) */}
      <ProblemSection />

      {/* SOLUTION SECTION (Animated) */}
      <SolutionSection />

      {/* HOW IT WORKS (Animated) */}
      <HowItWorks />

      {/* TRUST SECTION (Animated Premium) */}
      <TrustSection />

      {/* FOUNDERS SECTION (Animated Premium) */}
      <FoundersSection />

      {/* TESTIMONIALS - Social Proof */}
      <TestimonialSection />

      {/* FAQs */}
      <div className="section-spacing" style={{ marginTop: "100px" }}>
        <FAQ />
      </div>

      {/* FINAL CTA - EMOTIONAL CLOSE & FOOTER */}
      <FinalCTA />
    </main>
  );
}