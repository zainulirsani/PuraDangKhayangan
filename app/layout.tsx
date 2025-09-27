import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Pura Heritage Site",
    template: "%s | Pura Heritage Site",
  },
  description: "Jelajahi kekayaan warisan budaya Pura Dang Khayangan Cagar Budaya Pengukur-ukuran, sebuah pura suci yang berdiri sebagai bukti kemahiran arsitektur Bali dan pengabdian spiritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
