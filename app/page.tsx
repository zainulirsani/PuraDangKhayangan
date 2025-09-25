import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
// Impor ikon yang sudah diperbaiki
import { Landmark, ScrollText, Leaf } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/beautiful-traditional-balinese-temple-with-ornate-.jpg"
              alt="Pura Dang Khayangan Cagar Budaya Pengukur-ukuran"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">
              Selamat Datang di Warisan Suci{" "}
              <span style={{ color: '#B59410' }}>
                Pura Dang Khayangan
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-secondary-600 mb-6 text-justify">
              Temukan kekayaan warisan budaya Pura Dang Khayangan Cagar Budaya Pengukur-ukuran, sebuah pura suci yang berdiri sebagai bukti kemahiran arsitektur Bali dan pengabdian spiritual. Tempat suci kuno ini telah dilestarikan dengan hati-hati sebagai situs warisan budaya, menawarkan pengunjung sekilas tradisi dan kepercayaan mendalam yang telah membentuk budaya Bali selama berabad-abad.
            </p>
            <p className="text-lg leading-relaxed text-secondary-600 text-justify">
              Jelajahi sejarah pura yang menarik, pelajari tentang signifikansinya dalam budaya Hindu Bali, dan rasakan suasana sakral melalui tur virtual komprehensif kami.
            </p>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow border-transparent hover:border-border">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                {/* Menggunakan ikon Landmark */}
                <Landmark className="w-10 h-10" style={{ color: '#B59410' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arsitektur Kuno</h3>
              <p className="text-muted-foreground text-sm">
                Kagumi ukiran batu yang rumit dan elemen arsitektur tradisional Bali.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-transparent hover:border-border">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                {/* Menggunakan ikon ScrollText */}
                <ScrollText className="w-10 h-10" style={{ color: '#B59410' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warisan Spiritual</h3>
              <p className="text-muted-foreground text-sm">Rasakan suasana sakral dan pelajari praktik keagamaan Hindu-Bali.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-transparent hover:border-border">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                {/* Menggunakan ikon Leaf */}
                <Leaf className="w-10 h-10" style={{ color: '#B59410' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelestarian Budaya</h3>
              <p className="text-muted-foreground text-sm">
                Temukan bagaimana situs warisan ini terus melestarikan tradisi Bali.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Navigation />
    </div>
  )
}