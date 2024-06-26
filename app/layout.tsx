import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trello Clone',
  description: 'Developed by Dhananjaya Madhusankha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">{children}</body>
    </html>
  )
}
