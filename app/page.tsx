'use client'

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
// Impor ikon yang sudah diperbaiki
import { Landmark, ScrollText, Leaf } from "lucide-react"

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add("homepage-body")

    return () => {
      document.body.classList.remove("homepage-body")
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Section */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <img
                src="/beranda.jpg"
                alt="Pura Dang Khayangan Cagar Budaya Pengukur-ukuran"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description Section */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
                Selamat Datang di Warisan Suci{" "}
                <span style={{ color: '#B59410' }}>
                  Pura Dhangkayangan Cagar Budaya Pengukur-Ukuran
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-200 mb-6 text-justify">
                Temukan kekayaan warisan budaya Pura Dang Khayangan Cagar Budaya Pengukur-ukuran, sebuah pura suci yang berdiri sebagai bukti kemahiran arsitektur Bali dan pengabdian spiritual. Tempat suci kuno ini telah dilestarikan dengan hati-hati sebagai situs warisan budaya, menawarkan pengunjung sekilas tradisi dan kepercayaan mendalam yang telah membentuk budaya Bali selama berabad-abad.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 text-justify">
                Jelajahi sejarah pura yang menarik, pelajari tentang signifikansinya dalam budaya Hindu Bali, dan rasakan suasana sakral melalui tur virtual komprehensif kami.
              </p>
            </div>
          </div>
          {/* <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-transparent hover:border-border">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
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
                  <ScrollText className="w-10 h-10" style={{ color: '#B59410' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Warisan Spiritual</h3>
                <p className="text-muted-foreground text-sm">Rasakan suasana sakral dan pelajari praktik keagamaan Hindu-Bali.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-transparent hover:border-border">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                  <Leaf className="w-10 h-10" style={{ color: '#B59410' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pelestarian Budaya</h3>
                <p className="text-muted-foreground text-sm">
                  Temukan bagaimana situs warisan ini terus melestarikan tradisi Bali.
                </p>
              </CardContent>
            </Card>
          </div> */}
        </main>

        {/* <Navigation /> */}
      </div>
    </div>
  )
}