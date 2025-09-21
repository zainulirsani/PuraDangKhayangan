import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Car, Bus } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Lokasi Pura</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Temukan jalan Anda ke Pura Dang Khayangan Cagar Budaya Pengukur-ukuran
          </p>
        </div>

        {/* Location Overview */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Posisi Geografis</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pura Dang Khayangan Cagar Budaya Pengukur-ukuran berlokasi strategis di jantung wilayah budaya Bali,
                  terletak di antara lanskap tropis yang rimbun yang meningkatkan suasana spiritualnya. Pura ini berada
                  di tanah yang lebih tinggi, menawarkan pengunjung pemandangan panorama sawah terasering dan desa-desa
                  tradisional di sekitarnya.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-muted-foreground">Jalan Raya Pengukur-ukuran, Bali, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Koordinat</p>
                      <p className="text-muted-foreground">8°30'S, 115°15'E</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?key=loc1"
                  alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Map */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Peta Interaktif</h2>
            <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.25!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMDAuMCJTIDExNcKwMTUnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Pura"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Klik dan seret untuk menjelajahi area di sekitar pura
            </p>
          </CardContent>
        </Card>

        {/* Transportation Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Dengan Kendaraan Pribadi</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Dari Denpasar (45 menit)</h3>
                  <p className="text-muted-foreground text-sm">
                    Ambil Jalan Bypass Ngurah Rai ke utara, lalu ikuti rambu ke Pengukur-ukuran. Parkir tersedia di
                    lokasi.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dari Ubud (30 menit)</h3>
                  <p className="text-muted-foreground text-sm">
                    Menuju ke timur di Jalan Raya Ubud, lalu ke selatan di Jalan Pengukur-ukuran. Rambu jalan yang
                    jelas akan memandu jalan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Transportasi Umum</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Layanan Bus Lokal</h3>
                  <p className="text-muted-foreground text-sm">
                    Naik bus Trans Sarbagita ke terminal Pengukur-ukuran, lalu berjalan kaki 10 menit ke pintu masuk
                    pura.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shuttle Wisata</h3>
                  <p className="text-muted-foreground text-sm">
                    Layanan antar-jemput harian tersedia dari hotel-hotel besar di Denpasar dan Ubud. Disarankan
                    memesan terlebih dahulu.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nearby Attractions */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Atraksi Terdekat</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?key=attr1"
                    alt="Sawah terasering tradisional Bali"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Sawah Terasering Jatiluwih</h3>
                <p className="text-muted-foreground text-sm">
                  Sawah terasering Warisan Dunia UNESCO, 15 menit berkendara dari pura
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?key=attr2"
                    alt="Desa tradisional Bali"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Desa Pengukur-ukuran</h3>
                <p className="text-muted-foreground text-sm">
                  Rasakan kehidupan desa Bali yang otentik dan kerajinan tradisional
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?key=attr3"
                    alt="Pasar seni tradisional Bali"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Pasar Seni Lokal</h3>
                <p className="text-muted-foreground text-sm">
                  Jelajahi kerajinan tangan tradisional dan karya seni lokal, 5 menit berjalan kaki
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Fasilitas yang Tersedia</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Parkir gratis untuk mobil dan motor</li>
                <li>• Fasilitas toilet</li>
                <li>• Pusat informasi dengan pemandu</li>
                <li>• Kafe kecil yang menyajikan minuman lokal</li>
                <li>• Toko suvenir dengan barang-barang budaya</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Waktu Terbaik untuk Berkunjung</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pagi hari (07:00-09:00) untuk suasana yang tenang</li>
                <li>• Sore hari (16:00-18:00) untuk fotografi golden hour</li>
                <li>• Hindari panas tengah hari (11:00-14:00)</li>
                <li>• Periksa jadwal upacara lokal untuk acara khusus</li>
                <li>• Musim kemarau (April-Oktober) direkomendasikan</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Navigation currentPage="/location" />
    </div>
  )
}
