
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Apakah aman menggunakan data siswa?",
      answer: "Ya, sangat aman. Kami menggunakan enkripsi tingkat enterprise dan mematuhi standar keamanan data internasional. Data siswa tidak akan dibagikan ke pihak ketiga."
    },
    {
      question: "Apakah hasil AI sesuai dengan kurikulum Indonesia?",
      answer: "Tentu saja! AI Gemini kami telah dilatih khusus dengan kurikulum Indonesia terbaru, termasuk Kurikulum Merdeka dan standar kompetensi nasional."
    },
    {
      question: "Bisakah saya mengedit hasil generate AI?",
      answer: "Absolut! Semua hasil AI dapat diedit sepenuhnya sesuai kebutuhan Anda. Platform kami menyediakan editor yang user-friendly untuk kustomisasi."
    },
    {
      question: "Berapa lama waktu generate satu RPP?",
      answer: "Rata-rata hanya 3-5 menit untuk menghasilkan RPP lengkap. Namun, kompleksitas materi dan detail yang diminta dapat mempengaruhi waktu proses."
    },
    {
      question: "Apakah ada limit penggunaan selama beta?",
      answer: "Selama periode beta, Anda dapat menggunakan semua fitur tanpa batasan. Kami ingin memastikan Anda mendapatkan pengalaman terbaik."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang platform kami
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
