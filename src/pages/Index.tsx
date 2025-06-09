
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import LearningApproach from "@/components/LearningApproach";
import Testimonials from "@/components/Testimonials";
import PricingStrip from "@/components/PricingStrip";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <HowItWorks />
      <LearningApproach />
      <Testimonials />
      <PricingStrip />
      <FAQ />
      <CTA />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
