
import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleSignup = () => {
    window.open('https://www.eudeka.id/contact/', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-education-primary to-education-secondary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap merasakan kemudahan pembuatan perangkat ajar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Bergabung dengan ribuan guru yang sudah merasakan transformasi mengajar dengan AI
          </p>
          <Button 
            onClick={handleSignup}
            size="lg" 
            className="bg-white text-education-primary hover:bg-gray-100 px-12 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Daftar & Mulai Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
