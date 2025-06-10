
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleSignup = () => {
    window.open('https://www.eudeka.id/contact/', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-education-cream to-blue-50 pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-education-slate mb-6 leading-tight">
              Perangkat <span className="text-education-primary">AI untuk Guru</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              Wujudkan Pembelajaran <span className="text-education-secondary font-semibold">Mindful</span>, 
              <span className="text-education-primary font-semibold"> Meaningful</span>, 
              <span className="text-education-warm font-semibold"> Joyful</span>!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Otomatisasi RPP, Modul Ajar, LKPD, Bank Soal & Simulasi Pembelajaran Interaktif.
            </p>
            <Button 
              onClick={handleSignup}
              size="lg" 
              className="bg-education-primary hover:bg-education-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Coba Gratis Sekarang
            </Button>
          </div>

          {/* Right Content - Single Screenshot */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="/public/img1.png"
                alt="Dashboard AI Guru - Generate RPP Otomatis"
                className="w-full h-auto rounded-lg shadow-2xl border-4 border-white"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-education-primary text-white px-3 py-2 rounded-full text-sm font-semibold">
                Dashboard AI Guru
              </div>
            </div>
            
            {/* Floating Mobile App Preview */}
            <div className="absolute -bottom-8 -right-8 w-32 md:w-40 z-10">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                alt="Mobile App AI Guru"
                className="w-full h-auto rounded-xl shadow-2xl border-4 border-white"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-education-gold text-white px-2 py-1 rounded text-xs font-bold">
                Mobile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
