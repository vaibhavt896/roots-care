import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import FoundersSection from "../components/FoundersSection";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import TrustSection from "../components/TrustSection";
import TrustTicker from "../components/TrustTicker";
import DailyReportSection from "../components/DailyReportSection";
import TestimonialSection from "../components/TestimonialSection";

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