import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Sejarah Pura</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Temukan warisan yang kaya dan tradisi suci Pura Dang Khayangan Cagar Budaya Pengukur-ukuran
          </p>
        </div>

        {/* Origins Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Asal Usul Kuno</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pura Dang Khayangan Cagar Budaya Pengukur-ukuran menelusuri asal-usulnya kembali ke abad ke-14, selama
                masa keemasan pengaruh Majapahit di Bali. Pura ini didirikan sebagai tempat suci yang didedikasikan
                untuk pemujaan dewa-dewa Hindu dan penghormatan terhadap roh leluhur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nama "Pengukur-ukuran" mengacu pada sistem pengukuran tradisional yang digunakan dalam arsitektur Bali
                dan konstruksi pura, menyoroti signifikansi pura sebagai pusat untuk melestarikan teknik bangunan kuno
                dan geometri spiritual.
              </p>
            </CardContent>
          </Card>

          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="/ancient-balinese-temple-stone-carvings-historical-.jpg"
              alt="Ukiran pura kuno dan artefak bersejarah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Development Timeline */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Garis Waktu Sejarah</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block">Abad ke-14</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Era Pendirian</h3>
                  <p className="text-muted-foreground">
                    Konstruksi awal dimulai di bawah pengaruh tradisi arsitektur Majapahit, menetapkan pura sebagai
                    pusat pemujaan Hindu-Bali.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block">Abad ke-16</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Periode Perluasan</h3>
                  <p className="text-muted-foreground">
                    Renovasi dan perluasan besar terjadi, menambahkan ukiran batu yang rumit dan struktur kuil tambahan
                    yang menampilkan evolusi ekspresi artistik Bali.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block">Abad ke-20</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Pengakuan Warisan</h3>
                  <p className="text-muted-foreground">
                    Pura menerima pengakuan resmi sebagai situs warisan budaya, memastikan pelestariannya untuk generasi
                    mendatang dan menetapkan protokol konservasi.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Construction Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="/balinese-temple-architecture-traditional-construct.jpg"
              alt="Teknik konstruksi pura tradisional Bali"
              className="w-full h-full object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Konstruksi Tradisional</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Konstruksi pura mengikuti prinsip kuno Bali "Tri Hita Karana" - hubungan harmonis antara manusia, alam,
                dan yang ilahi. Setiap elemen desain pura mencerminkan geometri suci ini.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pengrajin ahli menggunakan sistem pengukuran tradisional yang disebut "pengukur-ukuran," menggunakan
                tubuh manusia sebagai dasar proporsi. Ini memastikan bahwa dimensi pura berada dalam harmoni sempurna
                dengan prinsip spiritual dan estetika.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cultural Significance */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Signifikansi Budaya</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚱️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pusat Ritual</h3>
                <p className="text-muted-foreground text-sm">
                  Berfungsi sebagai titik fokus untuk upacara Hindu-Bali penting dan festival keagamaan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Warisan Artistik</h3>
                <p className="text-muted-foreground text-sm">
                  Menampilkan contoh luar biasa ukiran batu tradisional Bali dan kesenian arsitektur
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pelestarian Pengetahuan</h3>
                <p className="text-muted-foreground text-sm">
                  Mempertahankan teknik bangunan kuno dan praktik spiritual untuk generasi mendatang
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Navigation currentPage="/history" />
    </div>
  )
}
