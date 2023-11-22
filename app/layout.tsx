import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relatvie overflow-hidden'>
        {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
