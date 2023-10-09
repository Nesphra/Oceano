import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oceano',
  description: 'Oceano website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navigationBar'>
          <img src='none' alt='icon' className='icon'></img>
          <Link href={'/'}>Home</Link>
          <Link href={'/news'}>News</Link>
          <button className="dropbtn">Projects</button>
          <Link href={'/'}>Blogs</Link>
        </div>
        <div className='dropdown-content'>
            <Link href='#'>Link 1</Link>
            <Link href='#'>Link 2</Link>
          </div>
        {children}
        </body>
    </html>
  )
}
