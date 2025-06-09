
# Ed.AI Gemini - Landing Page

Platform AI terdepan untuk guru Indonesia yang mengotomatisasi pembuatan RPP, Modul Ajar, LKPD, dan Bank Soal dengan teknologi Gemini.

## 🚀 Fitur Utama

- **AI Generate RPP**: Pembuatan RPP otomatis sesuai kurikulum
- **Modul Ajar Instan**: Materi pembelajaran interaktif
- **LKPD & Bank Soal**: Ribuan soal siap pakai
- **Jadwal Otomatis**: Manajemen waktu mengajar
- **Analitik Siswa**: Insight pembelajaran mendalam

## 🎯 Filosofi Pembelajaran

### Mindful - Meaningful - Joyful
- **Mindful**: Pembelajaran yang penuh perhatian dan kesadaran
- **Meaningful**: Materi yang relevan dan kontekstual  
- **Joyful**: Proses belajar yang menyenangkan dan memotivasi

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi

```bash
# Clone repository
git clone <repository-url>
cd ed-ai-gemini-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build untuk Production

```bash
# Build aplikasi
npm run build

# Preview build
npm run preview
```

## 🏗️ Struktur Project

```
src/
├── components/
│   ├── HeroSection.tsx      # Hero section dengan CTA utama
│   ├── ProblemSolution.tsx  # Masalah guru dan solusi AI
│   ├── FeaturesSection.tsx  # Fitur-fitur unggulan
│   ├── HowItWorks.tsx       # Cara kerja 3 langkah
│   ├── LearningApproach.tsx # Filosofi mindful-meaningful-joyful
│   ├── Testimonials.tsx     # Testimoni guru dan siswa
│   ├── PricingStrip.tsx     # Info beta gratis
│   ├── FAQ.tsx              # Frequently Asked Questions
│   ├── CTA.tsx              # Call to action section
│   ├── SignupSection.tsx    # Form pendaftaran beta
│   └── Footer.tsx           # Footer dengan links
├── pages/
│   └── Index.tsx            # Halaman utama
└── hooks/
    └── use-toast.ts         # Toast notifications
```

## 🎨 Design System

### Warna Utama
- **Primary**: #3B82F6 (Biru tosca cerah)
- **Accent**: #16A34A (Hijau)
- **Background**: Gradien biru-hijau halus

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading**: Semi-bold, ukuran responsif
- **Body**: Regular, line-height 1.6

### Animasi
- Fade-in pada scroll
- Micro-interactions di tombol
- Hover effects halus
- Durasi 0.4s ease-in-out

## 📱 Responsivitas

Desain fully responsive untuk:
- Mobile (320px+)
- Tablet (768px+) 
- Desktop (1024px+)
- Large screens (1200px+)

## ⚡ Performance

- Lazy loading untuk gambar
- Tree-shaking untuk bundle size optimal
- Optimized images dari Unsplash
- Target Lighthouse Performance > 90

## 🔧 Teknologi

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📧 Support

Untuk bantuan dan pertanyaan:
- Email: support@ed.ai
- Website: [ed-ai.lovable.app](https://ed-ai.lovable.app)

## 📄 License

© 2024 Ed.AI Gemini. Made with ❤️ for Indonesian educators.
```
