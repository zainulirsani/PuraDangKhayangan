
export function Header() {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <img
              src="/Logo.png"
              alt="Pura Dang Khayangan Cagar Budaya Pengukur-ukuran"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Pura Dang Khayangan</h1>
            <p className="text-sm text-muted-foreground">Cagar Budaya Pengukur-ukuran</p>
          </div>
        </div>

      </div>
    </header>
  )
}
