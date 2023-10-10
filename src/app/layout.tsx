import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Oceano',
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
          <Image src='/favicon.ico' width={40} height={40} alt='icon' className='icon'></Image>
          <Link href={'/'}>Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Projects⏷</button>
            <div className='dropdown-content'>
              <Link href={'#'}>Oceano</Link>
              <Link href={'#'}>Aquawind</Link>
            </div>
          </div>
          <Link href={'/news'}>News</Link>
          <Link href={'/blogs'}>Blogs</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        {children}
        </body>
    </html>
  )
}
