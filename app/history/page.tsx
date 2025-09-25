import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollText, PencilRuler, BookOpen } from "lucide-react" // Menggunakan ikon yang relevan

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
            Sejarah <span style={{ color: '#B59410' }}>Pura Dang Khayangan</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Temukan warisan yang kaya dan tradisi suci Pura Dang Khayangan Cagar Budaya Pengukur-ukuran.
          </p>
        </div>

        {/* Origins Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Asal Usul Kuno</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pura Dang Khayangan Cagar Budaya Pengukur-ukuran menelusuri asal-usulnya kembali ke abad ke-14, selama masa keemasan pengaruh Majapahit di Bali. Pura ini didirikan sebagai tempat suci yang didedikasikan untuk pemujaan dewa-dewa Hindu dan penghormatan terhadap roh leluhur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nama "Pengukur-ukuran" mengacu pada sistem pengukuran tradisional yang digunakan dalam arsitektur Bali dan konstruksi pura, menyoroti signifikansi pura sebagai pusat untuk melestarikan teknik bangunan kuno dan geometri spiritual.
              </p>
            </CardContent>
          </Card>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/ancient-balinese-temple-stone-carvings-historical-.jpg"
              alt="Ukiran pura kuno dan artefak bersejarah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Development Timeline */}
        <Card className="mb-16 shadow-lg">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-10 text-foreground text-center">Garis Waktu Sejarah</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
              <div className="space-y-12">
                {/* Abad ke-14 */}
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
                {/* Abad ke-16 */}
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
                {/* Abad ke-20 */}
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
        </Card>

        {/* Cultural Significance */}
        <Card className="mb-8 shadow-lg">
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
        </Card>
      </main>

      <Navigation />
    </div>
  )
}