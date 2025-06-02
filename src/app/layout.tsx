import type { Metadata } from "next"
import { GeistMono } from 'geist/font/mono'
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "Kre0lidge - Portfolio",
  description: "Simple portfolio showcasing projects and skills!",
  appleWebApp: {
    title: "Kre0lidge - Portfolio"
  },
  openGraph: {
    title: "Kre0lidge - Portfolio",
    description: "Simple portfolio showcasing projects and skills!",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Kre0lidge Portfolio Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre0lidge - Portfolio",
    description: "Simple portfolio showcasing projects and skills!",
    creator: "@kre0lidge",
    images: ["/twitter-image.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={GeistMono.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
