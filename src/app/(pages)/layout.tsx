import '../css/reset.css';
import '../css/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/NavBar'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real Brokerage Inc',
  description: 'Real Brokerage Inc Assessment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
