import Logo from '@/app/_components/Logo'
import Navigation from '@/app/_components/Navigation'
import '@/app/_styles/globals.css'

export const metadata = {
  title: 'Wild Oasis',
  description: 'Wild Oasis'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
