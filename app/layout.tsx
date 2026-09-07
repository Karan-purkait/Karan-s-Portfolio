import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Karan Purkait | Full-Stack Developer",
  description: "Portfolio of Karan Purkait - Full-Stack Developer and Software Engineer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans bg-white text-[#0F172A] antialiased`}>
        {/* Pehchaan AI SEO SDK Tracker */}
        <Script
          src="http://localhost:4000/api/v1/sdk/script.js"
          data-site-id="6a9e60a72572ca9aac692889"
          data-auto-apply="true"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  )
}

