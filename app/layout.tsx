import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FortyEightWeb | 48-Hour Website Refresh Service",
  description:
    "Affordable, mobile-optimized, SEO-ready websites delivered in just 48 hours. Book your 15-minute discovery call today and launch faster.",
  keywords:
    "Website refresh, fast website design, mobile optimized websites, SEO website services, 48 hour website builds, business website sprint, web development, no-code, automations, business websites, marketing funnels, Sean Williams, FortyEight Web",
  authors: [{ name: "Sean Williams | FortyEightWeb" }],
  openGraph: {
    title: "FortyEightWeb | 48-Hour Website Refresh Sprint",
    description: "Professional, mobile-optimized websites refreshed or created in just 48 hours.",
    url: "https://www.fortyeightweb.com",
    images: [
      {
        url: "/canva-forty-eight-web-logo.png",
        width: 1200,
        height: 630,
        alt: "FortyEightWeb Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FortyEightWeb | 48-Hour Website Refresh",
    description: "Get your mobile-optimized, SEO-ready website sprinted live in just 48 hours.",
    images: ["/canva-forty-eight-web-logo.png"],
  },
  icons: {
    icon: "/fortyeightaiteam.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
