'use client' // Tambahkan ini jika Anda menggunakan Next.js App Router (karena kita akan pakai state)

import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Sejarah', href: '/history' },
    { name: 'Lokasi', href: '/location' },
    { name: 'Informasi', href: '/information' },
    { name: 'Virtual Tour', href: '/virtual-tour' },
  ]

  return (
    <header className="bg-transparent px-6 py-4 relative">
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
            <h1 className="font-bold text-lg text-white">Pura Dang Khayangan</h1>
            <p className="text-sm text-gray-300">Cagar Budaya Pengukur-ukuran</p>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state saat diklik
            aria-label="Buka menu"
            className="text-white"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-70 backdrop-blur-sm border-b border-gray-800 shadow-lg">
          <ul className="flex flex-col p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block w-full py-2 px-3 rounded-md text-base font-medium text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)} // Tutup menu saat item diklik
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}