import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a IMDb Clone App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* NavBar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  )
}
