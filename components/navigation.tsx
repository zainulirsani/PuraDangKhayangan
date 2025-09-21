"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const router = useRouter()

  const navItems = [
    { label: "Sejarah", path: "/history" },
    { label: "Lokasi", path: "/location" },
    { label: "Informasi", path: "/information" },
    { label: "Tur Virtual", path: "/virtual-tour" },
  ]

  return (
    <nav className="bg-card border-t border-border p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={currentPage === item.path ? "default" : "outline"}
              size="lg"
              onClick={() => router.push(item.path)}
              className="h-16 text-lg font-medium"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
