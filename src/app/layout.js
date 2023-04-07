import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a IMDb Clone App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* NavBar */}
          <Navbar />

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  )
}
