import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Car, Bus, Trees, ShoppingBasket, Mountain } from "lucide-react"

export const metadata = {
  title: "Lokasi",
};

export default function LocationPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">Lokasi Pura<span style={{ color: '#B59410' }}> Dang Khayangan</span></h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto text-balance">
              Temukan jalan Anda ke Pura Dang Khayangan Cagar Budaya Pengukur-ukuran
            </p>
          </div>

          {/* Location Overview */}
          <Card className="mb-8 shadow-lg bg-secondary/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Posisi Geografis</h2>
                  <p className="text-secondary leading-relaxed mb-6 text-justify">
                    Pura Dang Khayangan Cagar Budaya Pengukur-ukuran berlokasi strategis di jantung wilayah budaya Bali,
                    terletak di antara lanskap tropis yang rimbun yang meningkatkan suasana spiritualnya. Pura ini berada
                    di tanah yang lebih tinggi, menawarkan pengunjung pemandangan panorama sawah terasering dan desa-desa
                    tradisional di sekitarnya.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-white" />
                      <div>
                        <p className="font-semibold text-white">Alamat</p>
                        <p className="text-secondary">Jalan Raya Pengukur-ukuran, Bali, Indonesia</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-white" />
                      <div>
                        <p className="font-semibold text-white">Koordinat</p>
                        <p className="text-white">8°30'S, 115°15'E</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl border-white/20">
                  <img
                    src="/image6.jpg"
                    alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Map */}
          <Card className="mb-8 shadow-lg bg-secondary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Peta Interaktif</h2>
              <div className="relative h-128 rounded-lg overflow-hidden bg-muted">
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
              <p className="text-center text-secondary mt-4">
                Klik dan seret untuk menjelajahi area di sekitar pura
              </p>
            </CardContent>
          </Card>
          {/* <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Opsi Transportasi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                    <Car className="h-6 w-6" style={{ color: '#B59410' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Kendaraan Pribadi</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Dari Denpasar (45 menit)</h4>
                    <p className="text-muted-foreground">Ambil Jalan Bypass Ngurah Rai ke utara, ikuti rambu ke Pengukur-ukuran. Parkir tersedia di lokasi.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dari Ubud (30 menit)</h4>
                    <p className="text-muted-foreground">Menuju ke timur di Jalan Raya Ubud, lalu ke selatan di Jalan Pengukur-ukuran.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                    <Bus className="h-6 w-6" style={{ color: '#B59410' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Transportasi Umum</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Layanan Bus Lokal</h4>
                    <p className="text-muted-foreground">Naik bus Trans Sarbagita ke terminal Pengukur-ukuran, lalu berjalan kaki 10 menit ke pura.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Shuttle Wisata</h4>
                    <p className="text-muted-foreground">Layanan antar-jemput tersedia dari hotel besar di Denpasar dan Ubud. Disarankan memesan dahulu.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-8 shadow-lg">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              Atraksi <span style={{ color: '#B59410' }}>Terdekat</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                  <Trees className="w-10 h-10" style={{ color: '#B59410' }} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Sawah Terasering Jatiluwih</h3>
                <p className="text-muted-foreground text-sm">
                  Warisan Dunia UNESCO, 15 menit berkendara dari pura.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                  <Mountain className="w-10 h-10" style={{ color: '#B59410' }} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Desa Pengukur-ukuran</h3>
                <p className="text-muted-foreground text-sm">
                  Rasakan kehidupan desa Bali yang otentik dan kerajinan tradisional.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                  <ShoppingBasket className="w-10 h-10" style={{ color: '#B59410' }} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Pasar Seni Lokal</h3>
                <p className="text-muted-foreground text-sm">
                  Jelajahi kerajinan tangan dan karya seni lokal, 5 menit berjalan kaki.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
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
        </div> */}
        </main>
      </div>
      {/* <Navigation currentPage="/location" /> */}
    </div>
  )
}
