
import { CheckCircle, Clock, FileText, Users } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: Clock,
      title: "Administrasi Berat",
      description: "Waktu habis untuk membuat RPP, modul, dan LKPD"
    },
    {
      icon: Users,
      title: "Kurang Waktu Interaksi",
      description: "Sibuk administrasi, kurang fokus pada siswa"
    },
    {
      icon: FileText,
      title: "Materi Tidak Konsisten",
      description: "Sulit menjaga kualitas dan standar materi"
    }
  ];

  const solutions = [
    "Generate RPP lengkap dalam 5 menit",
    "Buat modul ajar interaktif otomatis",
    "Bank soal dengan berbagai tingkat kesulitan",
    "Jadwal mengajar yang fleksibel",
    "Analitik pembelajaran real-time"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dari Masalah ke Solusi
          </h2>
          <p className="text-lg text-gray-600">
            Transformasi cara mengajar dengan teknologi AI terdepan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Tantangan Guru Saat Ini
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                  <problem.icon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                    <p className="text-gray-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Solusi dengan AI Gemini
            </h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
