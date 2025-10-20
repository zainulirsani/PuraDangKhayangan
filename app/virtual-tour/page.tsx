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

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Main Tour Viewer */}
              <div className="lg:col-span-9">
                <Card className="overflow-hidden shadow-lg bg-black/20 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 font-semibold text-white">
                      <Eye className="h-5 w-5" style={{ color: '#B59410' }} />
                      {tourSpots[currentSpot].name}
                    </CardTitle>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">Tampilan 360°</Badge>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-slate-900">
                      <img
                        src={tourSpots[currentSpot].image}
                        alt={tourSpots[currentSpot].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <Button
                          onClick={togglePlay}
                          size="icon"
                          variant="ghost"
                          className="bg-black/20 hover:bg-black/40 text-white w-16 h-16 rounded-full backdrop-blur-sm"
                        >
                          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                        </Button>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/50 backdrop-blur-sm rounded-md h-12 px-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <Button onClick={togglePlay} size="icon" variant="ghost" className="text-white hover:bg-white/20">
                              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                            </Button>
                            <Button onClick={toggleMute} size="icon" variant="ghost" className="text-white hover:bg-white/20">
                              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </Button>
                          </div>
                          <div className="flex items-center">
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20"><RotateCcw className="h-5 w-5" /></Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20"><ZoomOut className="h-5 w-5" /></Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20"><ZoomIn className="h-5 w-5" /></Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20"><Maximize className="h-5 w-5" /></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* "Beside" Gallery */}
              <div className="lg:col-span-3">
                <Card className="shadow-lg bg-black/20 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-semibold text-white">
                      <Camera className="h-5 w-5" style={{ color: '#B59410' }} />
                      Galeri Cepat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {galleryImages.slice(0, 2).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg cursor-pointer group">
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* "Below" Gallery */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Galeri Foto Lengkap</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative">
                             <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-sm font-semibold p-2 text-center">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}