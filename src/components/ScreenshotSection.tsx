
const ScreenshotSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-education-cream to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-education-slate mb-4">
            Screenshot Aplikasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat bagaimana aplikasi AI Guru membantu mempermudah pekerjaan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dashboard Screenshot */}
          <div className="relative group">
            <img 
              src="/img1.png"
              alt="Dashboard AI Guru - Generate RPP Otomatis"
              className="w-full h-auto rounded-lg shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-education-primary text-white px-3 py-2 rounded-full text-sm font-semibold">
              Dashboard Utama
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-education-slate mb-2">Dashboard Utama</h3>
              <p className="text-gray-600">Interface utama untuk mengakses semua fitur AI</p>
            </div>
          </div>
          
          {/* RPP Generator Screenshot */}
          <div className="relative group">
            <img 
              src="/img2.png"
              alt="Generator Simulation AI - Input Kurikulum"
              className="w-full h-auto rounded-lg shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-education-secondary text-white px-3 py-2 rounded-full text-sm font-semibold">
              Generate Alat Peraga
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-education-slate mb-2">Generator RPP</h3>
              <p className="text-gray-600">Buat Simulasi alat peraga Interaktif dalam hitungan menit dengan Format HTML</p>
            </div>
          </div>
          
          {/* Bank Soal Screenshot */}
          <div className="relative group">
            <img 
              src="/img3.png"
              alt="Modul Ajar AI Generator"
              className="w-full h-auto rounded-lg shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-education-warm text-white px-3 py-2 rounded-full text-sm font-semibold">
              Modul Ajar
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-education-slate mb-2">Modul Ajar AI</h3>
              <p className="text-gray-600">Membuat modul Ajar Cepat menggunakan AI, Dan di Export ke PDF dan Google Docs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
