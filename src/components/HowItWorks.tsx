
import { UserPlus, Edit3, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Masuk / Daftar",
      description: "Buat akun dengan Firebase Auth yang aman dan mudah"
    },
    {
      icon: Edit3,
      title: "Tulis Prompt",
      description: "Tuliskan kebutuhan Anda dan unggah file referensi (opsional)"
    },
    {
      icon: Share2,
      title: "Dapatkan & Bagikan",
      description: "Edit konten hasil AI dan bagikan langsung ke siswa"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-education-slate mb-4">
            Cara Kerja 3 Langkah Mudah
          </h2>
          <p className="text-lg text-gray-600">
            Dari ide menjadi materi pembelajaran hanya dalam hitungan menit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-education-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-education-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-education-slate mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
