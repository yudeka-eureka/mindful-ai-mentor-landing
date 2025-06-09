
import { Button } from "@/components/ui/button";

const PricingStrip = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🎉 FREE Beta Sampai 31 Desember 2025!
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Nikmati semua fitur premium tanpa biaya selama periode beta
          </p>
          <Button 
            onClick={scrollToSignup}
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Daftar Gratis Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingStrip;
