
import { Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ed.AI Gemini</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Platform AI terdepan untuk guru Indonesia. Wujudkan pembelajaran yang mindful, meaningful, dan joyful dengan teknologi Gemini.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>support@ed.ai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-primary transition-colors">Fitur</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Cara Kerja</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimoni</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ed.AI Gemini. Semua hak dilindungi. Made with ❤️ for Indonesian educators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
