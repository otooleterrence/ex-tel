import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'extreme telepathy',
  description: '~reading thoughts~',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
