import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://motivateme.app'),
  title: 'MotivateMe - Fuel Your Drive, Find Your Calm',
  description: 'Curated motivation for every moment—whether you need a spark or a breath. Discover posts, stories, videos, and stress relief tools.',
  keywords: 'motivation, mindfulness, stress relief, inspiration, mental wellness',
  authors: [{ name: 'MotivateMe Team' }],
  creator: 'MotivateMe',
  openGraph: {
    title: 'MotivateMe - Fuel Your Drive, Find Your Calm',
    description: 'Curated motivation for every moment—whether you need a spark or a breath.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotivateMe - Fuel Your Drive, Find Your Calm',
    description: 'Curated motivation for every moment—whether you need a spark or a breath.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
