
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ibu Sarah Wijaya",
      role: "Guru Bahasa Indonesia",
      school: "SMPN 5 Jakarta",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "AI Gemini menghemat 80% waktu saya dalam membuat RPP. Sekarang saya bisa lebih fokus pada siswa!"
    },
    {
      name: "Pak Ahmad Rahman",
      role: "Guru Matematika",
      school: "SMAN 12 Bandung",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Bank soal otomatis sangat membantu. Siswa jadi lebih tertantang dengan variasi soal yang beragam."
    },
    {
      name: "Aisyah Putri",
      role: "Siswa Kelas 10",
      school: "SMAN 3 Surabaya",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      quote: "Materi dari Bu Guru jadi lebih menarik dan mudah dipahami. Belajar jadi lebih asyik!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg text-gray-600">
            Testimoni dari guru dan siswa yang telah merasakan manfaatnya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.school}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
