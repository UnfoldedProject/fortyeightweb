import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automate Console - Internal Tool",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AutomateConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>{children}</body>
    </html>
  )
}
