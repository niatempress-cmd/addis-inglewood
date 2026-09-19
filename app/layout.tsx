import React from 'react'

export const metadata = {
  title: 'Addis Inglewood',
  description: 'Addis Inglewood Lounge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
