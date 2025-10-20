'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Volume2,
  VolumeX,
  Eye,
  Camera,
} from "lucide-react"

export default function VirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentSpot, setCurrentSpot] = useState(0)

  const tourSpots = [
    {
      id: 0,
      name: "Gerbang Masuk Utama",
      description: "Gerbang masuk berornamen yang menampilkan arsitektur tradisional Bali.",
      image: "/beautiful-traditional-balinese-temple-with-ornate-.jpg",
    },
    {
      id: 1,
      name: "Halaman Tengah",
      description: "Area upacara utama tempat festival keagamaan berlangsung.",
      image: "/ancient-balinese-temple-stone-carvings-historical-.jpg",
    },
    {
      id: 2,
      name: "Pelinggih Suci",
      description: "Area paling suci dari kompleks pura, dengan patung-patung kuno.",
      image: "/balinese-temple-architecture-traditional-construct.jpg",
    },
  ]

  const galleryImages = [
    { src: "/beautiful-traditional-balinese-temple-with-ornate-.jpg", alt: "Gerbang Pura" },
    { src: "/ancient-balinese-temple-stone-carvings-historical-.jpg", alt: "Ukiran Batu Kuno" },
    { src: "/balinese-temple-architecture-traditional-construct.jpg", alt: "Arsitektur Pura" },
    { src: "/background.jpg", alt: "Pemandangan Pura dari Jauh" },
  ];

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Virtual Tour <span style={{ color: '#B59410' }}>Pura</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Rasakan keindahan suci Pura Dang Khayangan melalui tur virtual 360° kami yang imersif.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start mx-12">
              <div className="space-y-8">
                <img
                  src="/image5.jpg"
                  alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-2 space-y-8">
                <Card className="shadow-lg bg-secondary/20">
                  <CardContent className="gridgap-6 text-sm">
                    <p className="text-white leading-relaxed text-justify mb-4">
                      Halaman Virtual Tour Pura Dang Kahyangan Pengukur-ukuran berfungsi sebagai sarana interaktif bagi pengunjung untuk menjelajahi keindahan dan keagungan pura secara daring. Melalui tampilan panorama 360 derajat, pengguna dapat merasakan pengalaman seolah-olah berada langsung di lingkungan pura, melihat setiap sudut area suci, bangunan, dan keunikan arsitektur tradisional Bali. Fitur ini tidak hanya memberikan kemudahan bagi mereka yang belum berkesempatan berkunjung secara langsung, tetapi juga menjadi media edukatif untuk memperkenalkan nilai-nilai spiritual, sejarah, dan budaya yang melekat pada Pura Dang Kahyangan Pengukur-ukuran kepada masyarakat luas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start ml-72 mr-12 mt-12">
              <div className="space-y-8">
                <Card className="shadow-lg bg-secondary/20">
                  <CardHeader className="gridgap-6 text-sm">
                    <span className="text-2xl font-bold text-center text-white">Panorama 360°</span>
                  </CardHeader>
                </Card>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <Card className="shadow-lg bg-secondary/20">
                  <CardContent className="gridgap-6 text-md text-center">
                    <img
                      src="/image6.jpg"
                      alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => window.open('/panorama360.html', '_blank')}
                      className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
                    >
                      Mulai Tur Virtual 360°
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}