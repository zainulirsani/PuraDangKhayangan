import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Pura Dang Khayangan</h1>
            <p className="text-sm text-muted-foreground">Cagar Budaya Pengukur-ukuran</p>
          </div>
        </div>

        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Cari informasi pura..." className="pl-10 bg-input border-border" />
        </div>
      </div>
    </header>
  )
}
