
import HeroSection from "@/components/HeroSection";
import ScreenshotSection from "@/components/ScreenshotSection";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import LearningApproach from "@/components/LearningApproach";
import Testimonials from "@/components/Testimonials";
import PricingStrip from "@/components/PricingStrip";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <ScreenshotSection />
      <ProblemSolution />
      <FeaturesSection />
      <HowItWorks />
      <LearningApproach />
      <Testimonials />
      <PricingStrip />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
