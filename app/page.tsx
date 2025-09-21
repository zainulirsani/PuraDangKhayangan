import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-6">
            <img
              src="/beautiful-traditional-balinese-temple-with-ornate-.jpg"
              alt="Pura Dang Khayangan Cagar Budaya Pengukur-ukuran"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 text-balance">Pura Dang Khayangan</h1>
                <p className="text-xl md:text-2xl text-balance">Cagar Budaya Pengukur-ukuran</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Selamat Datang di Warisan Suci</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Temukan kekayaan warisan budaya Pura Dang Khayangan Cagar Budaya Pengukur-ukuran, sebuah pura suci yang
                berdiri sebagai bukti kemahiran arsitektur Bali dan pengabdian spiritual. Tempat suci kuno ini telah
                dilestarikan dengan hati-hati sebagai situs warisan budaya, menawarkan pengunjung sekilas tradisi dan
                kepercayaan mendalam yang telah membentuk budaya Bali selama berabad-abad.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Jelajahi sejarah pura yang menarik, pelajari tentang signifikansinya dalam budaya Hindu Bali, dan
                rasakan suasana sakral melalui tur virtual komprehensif kami. Baik Anda merencanakan kunjungan atau
                hanya ingin belajar tentang situs warisan yang luar biasa ini, kami mengundang Anda untuk berjalan
                bersama kami melalui harta spiritual dan budaya pura yang megah ini.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Arsitektur Kuno</h3>
              <p className="text-muted-foreground">
                Kagumi ukiran batu yang rumit dan elemen arsitektur tradisional Bali
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Warisan Spiritual</h3>
              <p className="text-muted-foreground">Rasakan suasana sakral dan pelajari praktik keagamaan Hindu-Bali</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelestarian Budaya</h3>
              <p className="text-muted-foreground">
                Temukan bagaimana situs warisan ini terus melestarikan tradisi Bali
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Navigation />
    </div>
  )
}
