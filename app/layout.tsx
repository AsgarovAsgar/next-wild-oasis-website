import Logo from '@/app/_components/Logo'
import Navigation from '@/app/_components/Navigation'
import '@/app/_styles/globals.css'

import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: {
    template: '%s | Wild Oasis',
    default: 'Welcome to the Wild Oasis'
  },
  description: 'Luxury cabins in the mountains and dark forests'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-primary-950 text-primary-100 ${josefinSans.className}`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright 2025 - All rights reserved</footer>
      </body>
    </html>
  )
}
