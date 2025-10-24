import { Header } from "@/components/header"
import { Card, CardContent} from "@/components/ui/card"

export const metadata = {
  title: "Informasi",
};

export default function InformationPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/informasi.jpg)" }} // Ganti dengan gambar latar belakang yang sesuai
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
              Informasi <span style={{ color: '#B59410' }}>Pengunjung</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto text-pretty">
              Semua yang perlu Anda ketahui untuk merencanakan kunjungan yang lancar dan penuh hormat.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start mx-24">
            <div className="space-y-8">
              <img
                src="/image9.jpg" // Ganti dengan gambar yang sesuai
                alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-lg bg-secondary/20">
                <CardContent className="gridgap-6 text-md">
                  <p className="text-white leading-relaxed text-justify mb-4">
                    Wanita yang sedang dalam masa menstruasi tidak
                    diperbolehkan untuk memasuki area pura karena keadaan
                    ini disebut sebagai masa cuntaka atau sebelan oleh
                    masyarakat Bali.
                    Cuntaka atau sebelan merupakan masa dimana seorang
                    tidak diperbolehkan memasuki tempat suci karena
                    dianggap sedang mengalami keadaan tidak suci baik

                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start ml-48 mr-24 mt-8">
            <div className="space-y-8">
              <img
                src="/image8.jpg" // Ganti dengan gambar yang sesuai
                alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-lg bg-secondary/20">
                <CardContent className="gridgap-6 text-md">
                  <p className="text-white leading-relaxed text-justify mb-4">
                    Di area pura, setiap orang diharapkan menjaga sikap, ucapan, dan
                    perilaku sebagai bentuk rasa hormat terhadap tempat suci. Oleh
                    karena itu, tidak diperbolehkan berkata kasar, berbicara dengan nada
                    tinggi, atau mengucapkan kata yang tidak pantas saat berada di dalam
                    maupun sekitar pura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start ml-72 mr-24 mt-8">
            <div className="space-y-8">
              <img
                src="/image7.jpg" // Ganti dengan gambar yang sesuai
                alt="Pemandangan udara lokasi pura menunjukkan lanskap sekitarnya"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-lg bg-secondary/20">
                <CardContent className="gridgap-6 text-md">
                  <p className="text-white leading-relaxed text-justify mb-4">
                   Setiap pengunjung pura diharapkan untuk mengenakan pakaian yang sopan, rapi, dan mencerminkan rasa hormat terhadap tempat suci. Penggunaan busana yang bersih serta sesuai dengan adat dan tradisi bukan sekadar aturan etika, tetapi juga merupakan bentuk kesadaran spiritual dan penghormatan terhadap kesucian pura sebagai tempat persembahyangan. Melalui penampilan yang pantas, umat dan pengunjung turut menjaga keharmonisan, ketertiban, serta nilai-nilai kesucian yang dijunjung tinggi di lingkungan pura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
        </main>
      </div>
      {/* <Navigation currentPage="/information" /> */}
    </div>
  )
}