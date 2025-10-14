import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Pet Facts + Pics',
  description: 'Random cat facts and random dog images',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 min-h-screen">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
