import Header from '@/app/_components/Header'
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
      <body
        className={`flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased ${josefinSans.className}`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  )
}
