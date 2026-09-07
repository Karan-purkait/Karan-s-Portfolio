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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karan-purkait.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karan Purkait | Business Development, Marketing Lead & Full-Stack Developer",
    template: "%s | Karan Purkait",
  },
  description:
    "Portfolio of Karan Purkait — A dual-engine catalyst bridging engineering systems and revenue growth as a Full-Stack Developer, Marketing Lead, and Business Development Associate.",
  keywords: [
    "Karan Purkait",
    "Karan Purkait Portfolio",
    "Full-Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Business Development Associate",
    "Marketing Lead",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
  ],
  authors: [
    {
      name: "Karan Purkait",
      url: "https://github.com/Karan-purkait",
    },
  ],
  creator: "Karan Purkait",
  publisher: "Karan Purkait",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Karan Purkait Portfolio",
    title: "Karan Purkait | Business Development, Marketing Lead & Full-Stack Developer",
    description:
      "Dual-engine catalyst bridging engineering systems and revenue growth. Explore projects, skills, and experience.",
    images: [
      {
        url: "/mypic.jpeg",
        width: 800,
        height: 800,
        alt: "Karan Purkait - Full-Stack Developer & Marketing Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Purkait | Business Development, Marketing Lead & Full-Stack Developer",
    description:
      "Dual-engine catalyst bridging engineering systems and revenue growth. Explore projects, skills, and experience.",
    images: ["/mypic.jpeg"],
    creator: "@KaranPurkait",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Karan Purkait",
  url: siteUrl,
  image: `${siteUrl}/mypic.jpeg`,
  jobTitle: ["Full-Stack Developer", "Marketing Lead", "Business Development Associate"],
  description:
    "A dual-engine catalyst bridging engineering systems and revenue growth as a Full-Stack Developer, Marketing Lead, and Business Development Associate.",
  email: "purkaitkaran2003@gmail.com",
  telephone: "+91 8972209802",
  sameAs: [
    "https://github.com/Karan-purkait",
    "https://www.linkedin.com/in/karan-purkait",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University Institute of Technology, The University of Burdwan",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "C++",
    "Full-Stack Web Development",
    "Search Engine Optimization (SEO)",
    "Digital Marketing",
    "Business Development",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Karan Purkait Portfolio",
  description:
    "Portfolio of Karan Purkait — Full-Stack Developer, Marketing Lead, and Business Development Associate.",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>
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

