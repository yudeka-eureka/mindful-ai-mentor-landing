
import { Heart, Target, Smile } from "lucide-react";

const LearningApproach = () => {
  const approaches = [
    {
      icon: Heart,
      title: "Mindful",
      subtitle: "Hadir & Sadar",
      description: "Pembelajaran yang penuh perhatian dan kesadaran terhadap proses belajar siswa",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Target,
      title: "Meaningful",
      subtitle: "Relevan & Kontekstual",
      description: "Materi yang bermakna dan terhubung dengan kehidupan nyata siswa",
      color: "text-primary",
      bgColor: "bg-blue-50"
    },
    {
      icon: Smile,
      title: "Joyful",
      subtitle: "Menyenangkan & Memotivasi",
      description: "Pembelajaran yang menggembirakan dan membangkitkan semangat belajar",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan Pendekatan Pembelajaran Mendalam
          </h2>
          <p className="text-lg text-gray-600">
            Filosofi pembelajaran yang mengutamakan kualitas dan dampak positif
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <approach.icon className={`w-8 h-8 ${approach.color}`} />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {approach.title}
                </h3>
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  {approach.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningApproach;
