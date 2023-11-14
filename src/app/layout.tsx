import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bakeuda Pangkalpinang',
  description: 'Badan Keuangan Daerah Kota Pangkalpinang',
}


type Props = {
  children: React.ReactNode;
  session: any;
};

export default function RootLayout({
  children,
  session
}:Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={...session}>{children}</AuthProvider>
        </body>
    </html>
  )
}
