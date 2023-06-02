"use client"  
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: "Muneeb's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='dark:bg-stone-900'>
        <ThemeProvider enableSystem={true} attribute="class" >
              <Navbar/>
              {children}
              <Footer/>
        </ThemeProvider>
          </body>
    </html>
  )
}
