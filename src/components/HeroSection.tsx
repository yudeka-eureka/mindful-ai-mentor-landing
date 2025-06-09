
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-education-cream to-blue-50 pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-education-slate mb-6 leading-tight">
              Perangkat <span className="text-education-primary">AI Gemini</span> untuk Guru
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              Wujudkan Pembelajaran <span className="text-education-secondary font-semibold">Mindful</span>, 
              <span className="text-education-primary font-semibold"> Meaningful</span>, 
              <span className="text-education-warm font-semibold"> Joyful</span>!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Otomatisasi RPP, Modul Ajar, LKPD, Bank Soal & Jadwal hanya dalam hitungan menit.
            </p>
            <Button 
              onClick={scrollToSignup}
              size="lg" 
              className="bg-education-primary hover:bg-education-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Coba Gratis Sekarang
            </Button>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Laptop Mockup */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Dashboard Guru AI Gemini"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="lazy"
              />
              
              {/* Phone Mockup - Floating */}
              <div className="absolute -bottom-8 -left-8 w-32 md:w-40">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                  alt="Mobile App AI Gemini"
                  className="w-full h-auto rounded-xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
