"use client"

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
  Navigation,
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
      description:
        "Gerbang masuk berornamen yang menampilkan arsitektur tradisional Bali dengan ukiran batu yang rumit.",
      image: "/beautiful-traditional-balinese-temple-with-ornate-.jpg",
    },
    {
      id: 1,
      name: "Halaman Tengah",
      description: "Area upacara utama tempat festival keagamaan dan doa harian berlangsung.",
      image: "/ancient-balinese-temple-stone-carvings-historical-.jpg",
    },
    {
      id: 2,
      name: "Pelinggih Suci",
      description: "Area paling suci dari kompleks pura, yang menampilkan patung-patung batu kuno dan persembahan.",
      image: "/balinese-temple-architecture-traditional-construct.jpg",
    },
    {
      id: 3,
      name: "Taman Pura",
      description: "Taman-taman damai yang mengelilingi pura dengan lanskap tradisional Bali.",
      image: "/aerial-view-balinese-temple-surrounded-by-lush-.jpg",
    },
  ]

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Tur Virtual Pura</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Rasakan keindahan suci Pura Dang Khayangan melalui tur virtual 360° kami yang imersif
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Tour Viewer */}
            <div className="lg:col-span-3">
              <Card className="shadow-2xl border-gray-200">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Eye className="h-6 w-6" />
                      {tourSpots[currentSpot].name}
                    </span>
                    <Badge className="bg-green-500 text-white">Tampilan 360°</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Virtual Tour Viewer */}
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    <img
                      src={tourSpots[currentSpot].image || "/placeholder.svg"}
                      alt={tourSpots[currentSpot].name}
                      className="w-full h-full object-cover"
                    />

                    {/* Tour Controls Overlay */}
                    <div className="absolute inset-0 bg-black/20">
                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          onClick={togglePlay}
                          size="lg"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm w-20 h-20 rounded-full"
                        >
                          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                        </Button>
                      </div>

                      {/* Bottom Controls */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Button
                                onClick={togglePlay}
                                size="sm"
                                variant="ghost"
                                className="text-white hover:bg-white/20"
                              >
                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                              </Button>
                              <Button
                                onClick={toggleMute}
                                size="sm"
                                variant="ghost"
                                className="text-white hover:bg-white/20"
                              >
                                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              </Button>
                            </div>

                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <RotateCcw className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <ZoomOut className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <ZoomIn className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <Maximize className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full w-1/3"></div>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Hotspots */}
                      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                        <Button
                          size="sm"
                          className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full w-8 h-8 p-0 animate-pulse"
                          onClick={() => setCurrentSpot(1)}
                        >
                          <Navigation className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-1/3 right-1/3 transform -translate-y-1/2">
                        <Button
                          size="sm"
                          className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full w-8 h-8 p-0 animate-pulse"
                          onClick={() => setCurrentSpot(2)}
                        >
                          <Navigation className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Current Location Info */}
                  <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tourSpots[currentSpot].name}</h3>
                    <p className="text-gray-600 leading-relaxed">{tourSpots[currentSpot].description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tour Navigation Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg border-gray-200 mb-6">
                <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Lokasi Tur
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {tourSpots.map((spot, index) => (
                      <Button
                        key={spot.id}
                        onClick={() => setCurrentSpot(index)}
                        variant={currentSpot === index ? "default" : "ghost"}
                        className={`w-full justify-start text-left h-auto p-3 ${
                          currentSpot === index ? "bg-cyan-500 hover:bg-cyan-600 text-white" : "hover:bg-gray-100"
                        }`}
                      >
                        <div>
                          <div className="font-medium text-sm">{spot.name}</div>
                          <div className="text-xs opacity-75 mt-1 line-clamp-2">{spot.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tour Features */}
              <Card className="shadow-lg border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Fitur Tur</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Pemandangan Panorama 360°</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Hotspot Interaktif</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Komentar Audio</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Informasi Sejarah</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Zoom & Navigasi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tour Instructions */}
          <Card className="mt-8 border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle>Cara Menavigasi Tur Virtual</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Navigation className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Klik Hotspot</h3>
                  <p className="text-sm text-gray-600">
                    Klik pada titik navigasi biru untuk berpindah di antara berbagai area pura.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Lihat Sekeliling</h3>
                  <p className="text-sm text-gray-600">
                    Seret untuk melihat sekeliling dalam 360° dan gunakan kontrol zoom untuk menjelajahi detail.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Volume2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Dengarkan & Belajar</h3>
                  <p className="text-sm text-gray-600">Aktifkan audio untuk komentar berpemandu dan suara suasana pura.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
