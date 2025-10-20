import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollText, PencilRuler, BookOpen } from "lucide-react" // Menggunakan ikon yang relevan

export const metadata = {
  title: "Sejarah",
};

export default function HistoryPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
              Sejarah <span style={{ color: '#B59410' }}>Pura Dang Khayangan</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto text-balance">
              Temukan warisan yang kaya dan tradisi suci Pura Dang Khayangan Cagar Budaya Pengukur-ukuran.
            </p>
          </div>

          {/* Origins Section */}
          <div className="grid md:grid-cols-12 gap-12 items-center mb-6">
            <Card className="shadow-lg bg-secondary/20 md:col-span-7">
              <CardContent className="p-4">
                <h2 className="text-3xl font-bold mb-4 text-white">Asal Usul Kuno</h2>
                <p className="text-white leading-relaxed mb-4 text-justify">
                  Berdasarkan Prasati Pengukur-Ukuran bahwasannya Pura tersebut sebelumnya
                  bernama “DHARMMA HANYAR”. Hal ini dapat diketahui dalam kalimat
                  “MPUNGKWING DHARMMA HANAR” yang artinya “PENDETAKU DI DHARMMA
                  HANYAR” yang bergelar Jiwaya (MAPANJI JIWAYA). Pada jaman pemerintahan Prabu
                  Sri Astasura Ratna Bumi Banten pada awal abad ke-14 ada keturunan dari Arya
                  Karang Buncing yang bernama Kebo Iwa (Kebo Taruna). Beliau melamar menjadi
                  patih di kerajaan Bedahulu namun tidak diterima begitu saja tanpa melalui ujian
                  kesaktian terlebih dahulu
                </p>
              </CardContent>
            </Card>
            <div className="relative h-84 md:col-span-5 rounded-2xl overflow-hidden shadow-2xl border-white/20">
              <img
                src="/image5.jpg"
                alt="Ukiran pura kuno dan artefak bersejarah"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-white/20">
              <img
                src="/image4.jpg"
                alt="Ukiran pura kuno dan artefak bersejarah"
                className="w-full h-full object-cover"
              />
            </div>
            <Card className="shadow-lg bg-secondary/30">
              <CardContent className="p-4">
                <p className="text-white leading-relaxed text-justify mb-4">
                  Oleh karena kesaktian Kebo Iwa diukur di Dharmma Hanar, maka dari itulah tempat
                  tersebut sekarang bernama Pura Pengukur-Ukuran dan menurut cerita rakyat,
                  wilayah tempat tumpukan orang-orang yang kehilangan nyawa yang telah menguji
                  kesaktiannya disebut Sawa Gunung dan hingga sekarang wilayah ini bernama Sawa
                  Gunung
                </p>
                <p className="text-white leading-relaxed">
                  Wraspati Wage Pujut, Penanggalan Ping Lima
                  Sasih Kawulu, Tahun 1116 Caka atau
                  sekitar 12 Februari 1194. Dapat diindikasikan
                  bahwasannya Pura Pengukur-Ukuran
                  diperluas pada tahun 1116 Caka atau 1194
                  Masehi yang diresmikan atau diplaspas oleh
                  Pedanda Ciwa Bergelar (Mapanji) Jiwaya atau
                  Jiwajaya.
                </p>
                {/* <p className="text-white leading-relaxed">
                  Nama "Pengukur-ukuran" mengacu pada sistem pengukuran tradisional yang digunakan dalam arsitektur Bali dan konstruksi pura, menyoroti signifikansi pura sebagai pusat untuk melestarikan teknik bangunan kuno dan geometri spiritual.
                </p> */}
              </CardContent>
            </Card>
          </div>

          {/* <Card className="mb-16 shadow-lg">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground text-center">Garis Waktu Sejarah</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                     <div className="text-lg font-semibold px-4 py-2 rounded-lg inline-block" style={{ backgroundColor: 'rgba(181, 148, 16, 0.9)', color: 'white' }}>Abad ke-14</div>
                  </div>
                  <div className="absolute left-1/2 w-5 h-5 rounded-full -translate-x-1/2 border-4 border-secondary" style={{ backgroundColor: '#B59410' }}></div>
                  <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">Era Pendirian</h3>
                      <p className="text-muted-foreground text-sm">
                        Konstruksi awal dimulai di bawah pengaruh tradisi arsitektur Majapahit, menetapkan pura sebagai pusat pemujaan Hindu-Bali.
                      </p>
                  </div>
                </div>
                <div className="relative flex items-center">
                   <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">Periode Perluasan</h3>
                      <p className="text-muted-foreground text-sm">
                        Renovasi dan perluasan besar terjadi, menambahkan ukiran batu yang rumit dan struktur kuil tambahan.
                      </p>
                  </div>
                  <div className="absolute left-1/2 w-5 h-5 rounded-full -translate-x-1/2 border-4 border-secondary" style={{ backgroundColor: '#B59410' }}></div>
                  <div className="w-1/2 pl-8">
                     <div className="text-lg font-semibold px-4 py-2 rounded-lg inline-block" style={{ backgroundColor: 'rgba(181, 148, 16, 0.9)', color: 'white' }}>Abad ke-16</div>
                  </div>
                </div>
                <div className="relative flex items-center">
                   <div className="w-1/2 pr-8 text-right">
                     <div className="text-lg font-semibold px-4 py-2 rounded-lg inline-block" style={{ backgroundColor: 'rgba(181, 148, 16, 0.9)', color: 'white' }}>Abad ke-20</div>
                  </div>
                  <div className="absolute left-1/2 w-5 h-5 rounded-full -translate-x-1/2 border-4 border-secondary" style={{ backgroundColor: '#B59410' }}></div>
                  <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">Pengakuan Warisan</h3>
                      <p className="text-muted-foreground text-sm">
                        Pura menerima pengakuan resmi sebagai situs warisan budaya, memastikan pelestariannya untuk generasi mendatang.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

          {/* Cultural Significance */}
          {/* <Card className="mb-8 shadow-lg">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Signifikansi Budaya</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                 <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                    <ScrollText className="w-10 h-10" style={{ color: '#B59410' }} />
                  </div>
                <h3 className="text-lg font-semibold mb-2">Pusat Ritual</h3>
                <p className="text-muted-foreground text-sm">
                  Berfungsi sebagai titik fokus untuk upacara Hindu-Bali penting dan festival keagamaan.
                </p>
              </div>
              <div className="text-center">
                 <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                    <PencilRuler className="w-10 h-10" style={{ color: '#B59410' }} />
                  </div>
                <h3 className="text-lg font-semibold mb-2">Warisan Artistik</h3>
                <p className="text-muted-foreground text-sm">
                  Menampilkan contoh luar biasa ukiran batu tradisional Bali dan kesenian arsitektur.
                </p>
              </div>
              <div className="text-center">
                 <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181, 148, 16, 0.1)' }}>
                    <BookOpen className="w-10 h-10" style={{ color: '#B59410' }} />
                  </div>
                <h3 className="text-lg font-semibold mb-2">Pelestarian Pengetahuan</h3>
                <p className="text-muted-foreground text-sm">
                  Mempertahankan teknik bangunan kuno dan praktik spiritual untuk generasi mendatang.
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
        </main>
      </div>
      {/* <Navigation /> */}
    </div>
  )
}