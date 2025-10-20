import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Camera, Heart, Users, Phone, Shield } from "lucide-react"

export const metadata = {
  title: "Informasi",
};

export default function InformationPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
              Informasi <span style={{ color: '#B59410' }}>Pengunjung</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto text-pretty">
              Semua yang perlu Anda ketahui untuk merencanakan kunjungan yang lancar dan penuh hormat.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Information Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Visiting Hours */}
              <Card className="shadow-lg bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 font-bold" style={{ color: '#B59410' }} />
                    <span className="text-2xl font-bold text-white">Jam Kunjungan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Hari Operasional</h4>
                    <ul className="space-y-1 text-secondary">
                      <li className="flex justify-between"><span>Senin - Minggu</span> <strong>06:00 - 18:00 WITA</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Hari Raya Hindu</h4>
                    <ul className="space-y-1 text-secondary">
                      <li className="flex justify-between"><span>Galungan, Kuningan, dll.</span> <strong>05:00 - 20:00 WITA</strong></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Visitor Guidelines */}
              <Card className="shadow-lg bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="w-6 h-6" style={{ color: '#B59410' }} />
                    <span className="text-2xl font-bold text-white">Etika & Aturan Berpakaian</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Pakaian Pengunjung</h4>
                    <ul className="list-disc list-inside space-y-1 text-secondary">
                      <li>Kenakan pakaian yang sopan (menutup bahu dan lutut).</li>
                      <li>Sarung dan selendang diwajibkan di area suci.</li>
                      <li>Sarung tersedia untuk disewa di lokasi.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Perilaku di Pura</h4>
                    <ul className="list-disc list-inside space-y-1 text-secondary">
                      <li>Jaga ketenangan dan bicara dengan suara rendah.</li>
                      <li>Hormati area yang ditandai khusus untuk peribadatan.</li>
                      <li>Dilarang menyentuh artefak atau struktur pura.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Camera className="w-6 h-6" style={{ color: '#B59410' }} />
                  <span className="text-2xl font-bold">Aturan Fotografi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Kami mempersilakan Anda mengabadikan momen, namun mohon perhatikan aturan berikut untuk menghormati kesucian pura.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Diizinkan</h4>
                    <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm space-y-1">
                      <li>Area luar dan arsitektur</li>
                      <li>Tanpa menggunakan flash</li>
                      <li>Penggunaan ponsel</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Perlu Izin</h4>
                    <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm space-y-1">
                      <li>Penggunaan tripod</li>
                      <li>Sesi foto komersial</li>
                      <li>Drone (izin khusus)</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Dilarang</h4>
                    <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm space-y-1">
                      <li>Foto saat peribadatan</li>
                      <li>Area suci terdalam</li>
                      <li>Mengganggu umat</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card> */}
            </div>

            {/* Side Information Column */}
            <div className="space-y-8">
              {/* Entrance Fees */}
              <Card className="shadow-lg bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6" style={{ color: '#B59410' }} />
                    <span className="text-xl font-bold text-white">Biaya Masuk</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex justify-between text-secondary"><span>Dewasa (Lokal)</span> <strong className="text-secondary">Rp 10.000</strong></div>
                  <div className="flex justify-between text-secondary"><span>Anak-anak (Lokal)</span> <strong className="text-secondary">Rp 5.000</strong></div>
                  <div className="flex justify-between text-secondary"><span>Wisatawan Asing</span> <strong className="text-secondary">Rp 25.000</strong></div>
                  <p className="text-xs pt-2 font-bold" style={{ color: '#B59410' }}>*Gratis bagi yang bertujuan untuk beribadah.</p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="shadow-lg bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="w-6 h-6" style={{ color: '#B59410' }} />
                    <span className="text-xl font-bold text-white">Informasi & Kontak</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-secondary"><strong>Telepon:</strong> (0361) 123-4567</p>
                  <p className="text-secondary"><strong>Email:</strong> info@puradangkhayangan.id</p>
                </CardContent>
              </Card>
              {/* <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6" style={{ color: '#B59410' }} />
                  <span className="text-xl font-bold">Kontak Darurat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground"><strong>Polsek Terdekat:</strong> (0361) 234-5678</p>
                <p className="text-muted-foreground"><strong>Ambulans:</strong> 118</p>
              </CardContent>
            </Card> */}
            </div>
          </div>
        </main>
      </div>
      {/* <Navigation currentPage="/information" /> */}
    </div>
  )
}