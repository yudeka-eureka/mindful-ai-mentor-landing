
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SignupSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    subject: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pendaftaran
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Kami akan mengirimkan akses beta ke email Anda dalam 24 jam.",
    });
    setFormData({ name: '', email: '', school: '', subject: '', phone: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="signup-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Daftar Beta Gratis
          </h2>
          <p className="text-lg text-gray-600">
            Isi form di bawah untuk mendapatkan akses beta gratis
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div>
            <Label htmlFor="name" className="text-gray-700 font-medium">Nama Lengkap</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="mt-2 h-12"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-2 h-12"
              placeholder="nama@sekolah.com"
            />
          </div>

          <div>
            <Label htmlFor="school" className="text-gray-700 font-medium">Nama Sekolah</Label>
            <Input
              id="school"
              type="text"
              value={formData.school}
              onChange={(e) => handleInputChange('school', e.target.value)}
              required
              className="mt-2 h-12"
              placeholder="Contoh: SMPN 1 Jakarta"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-gray-700 font-medium">Mata Pelajaran</Label>
            <Select onValueChange={(value) => handleInputChange('subject', value)}>
              <SelectTrigger className="mt-2 h-12">
                <SelectValue placeholder="Pilih mata pelajaran" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="bahasa-indonesia">Bahasa Indonesia</SelectItem>
                <SelectItem value="bahasa-inggris">Bahasa Inggris</SelectItem>
                <SelectItem value="ipa">IPA</SelectItem>
                <SelectItem value="ips">IPS</SelectItem>
                <SelectItem value="lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700 font-medium">Nomor WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="mt-2 h-12"
              placeholder="08123456789"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-primary hover:bg-blue-600 text-white font-semibold text-lg rounded-lg"
          >
            Daftar Beta Gratis
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;
