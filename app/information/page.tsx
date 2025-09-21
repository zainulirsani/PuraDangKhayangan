import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Camera, Shirt, Heart, AlertTriangle } from "lucide-react"

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Informasi Pengunjung</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Panduan dan informasi penting untuk mengunjungi Pura Dang Khayangan Cagar Budaya Pengukur-ukuran
            </p>
          </div>

          {/* Visiting Hours */}
          <Card className="mb-8 border-cyan-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Clock className="h-6 w-6" />
                Jam Kunjungan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Hari Biasa</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-medium">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sabtu - Minggu</span>
                      <span className="font-medium">07:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Hari Khusus</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Purnama & Tilem</span>
                      <span className="font-medium">06:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Galungan & Kuningan</span>
                      <span className="font-medium">05:00 - 20:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dress Code */}
          <Card className="mb-8 border-indigo-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Shirt className="h-6 w-6" />
                Aturan Berpakaian & Persyaratan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Pakaian yang Diperlukan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sarung tradisional Bali (tersedia untuk disewa)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Pakaian sopan menutupi bahu dan lutut</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Penampilan bersih dan sopan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lepaskan sepatu sebelum memasuki area suci</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Tidak Diizinkan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Celana pendek, rok mini, atau pakaian terbuka</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Baju tanpa lengan atau tank top</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sandal jepit di area suci</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Topi di dalam bangunan pura</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visitor Guidelines */}
          <Card className="mb-8 border-emerald-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Heart className="h-6 w-6" />
                Panduan Perilaku Hormat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Yang Harus Dilakukan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Jaga ketenangan dan sikap hormat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ikuti jalur jalan yang telah ditentukan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Minta izin sebelum memotret orang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Berpartisipasi dengan hormat dalam upacara jika diundang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Jaga kebersihan lingkungan pura</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Yang Tidak Boleh Dilakukan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Menyentuh benda atau patung suci</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mengarahkan kaki ke area suci</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Menggunakan flash saat upacara</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Memanjat struktur pura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Membawa makanan atau minuman ke area suci</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photography Rules */}
          <Card className="mb-8 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Camera className="h-6 w-6" />
                Panduan Fotografi
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Badge className="bg-green-100 text-green-800 mb-3">Diizinkan</Badge>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Arsitektur pura</li>
                    <li>• Taman dan lanskap</li>
                    <li>• Artefak budaya (tanpa flash)</li>
                    <li>• Foto pribadi di area yang ditentukan</li>
                  </ul>
                </div>
                <div>
                  <Badge className="bg-yellow-100 text-yellow-800 mb-3">Minta Izin</Badge>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Masyarakat lokal dan pemangku</li>
                    <li>• Peserta upacara</li>
                    <li>• Di dalam bangunan pura</li>
                    <li>• Upacara suci</li>
                  </ul>
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-800 mb-3">Dilarang</Badge>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Flash saat upacara</li>
                    <li>• Tempat suci bagian dalam</li>
                    <li>• Area doa pribadi</li>
                    <li>• Fotografi komersial tanpa izin</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notices */}
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-500 to-pink-600 text-white">
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertTriangle className="h-6 w-6" />
                Pemberitahuan Penting
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Hari Upacara</h3>
                  <p className="text-red-700">
                    Selama upacara keagamaan, area tertentu mungkin dibatasi hanya untuk umat. Harap hormati batasan
                    ini dan ikuti arahan staf.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">Pertimbangan Cuaca</h3>
                  <p className="text-amber-700">
                    Pura mungkin ditutup selama kondisi cuaca buruk. Periksa kondisi saat ini sebelum berkunjung,
                    terutama selama musim hujan.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Tur Berpemandu</h3>
                  <p className="text-blue-700">
                    Tur berpemandu gratis tersedia setiap hari pada pukul 09:00, 13:00, dan 16:00. Tur dilakukan dalam
                    bahasa Indonesia dan Inggris.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
