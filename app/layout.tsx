import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Component Crew Final Project',
  description: 'Created by Dretso Trabaho - React Squad 8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
