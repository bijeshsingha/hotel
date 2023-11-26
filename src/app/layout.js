import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/NavBar/Nav'
import Modal from "./modals/Modal"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hotel Divine View',
  description: 'Hotel app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Nav />
          {children}
      </body>
    </html>
  )
}
