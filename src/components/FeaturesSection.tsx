
import { FileText, BookOpen, PenTool, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "AI Generate RPP",
      description: "RPP otomatis sesuai kurikulum"
    },
    {
      icon: BookOpen,
      title: "Modul Ajar Instan",
      description: "Materi pembelajaran interaktif"
    },
    {
      icon: PenTool,
      title: "LKPD & Bank Soal",
      description: "Ribuan soal siap pakai"
    },
    {
      icon: Settings,
      title: "Simulasi Alat Peraga",
      description: "Pembelajaran visual interaktif"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-education-slate mb-4">
            Fitur Unggulan Platform
          </h2>
          <p className="text-lg text-gray-600">
            Semua yang Anda butuhkan untuk mengajar yang efektif dan efisien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-education-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-education-primary" />
              </div>
              <h3 className="text-xl font-semibold text-education-slate mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
