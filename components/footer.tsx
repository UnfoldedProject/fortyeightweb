import Link from "next/link"
import { Shield, CreditCard, Calendar, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f0f7ff] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img src="/canva-forty-eight-web-logo.png" alt="FortyEightWeb Logo" className="h-12 mr-2" />
            </Link>
            <p className="text-[#4a5568] mt-2 max-w-md">
              High-velocity website refresh sprint service: 48-hour delivery, mobile-optimized builds, created for
              conversion.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://calendly.com/unfoldedproject/48-hour-refresh"
                target="_blank"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <Calendar className="h-5 w-5 text-[#4299e1]" />
              </Link>
              <Link
                href="https://buy.stripe.com/4gwcQRdDZb1bgPS9AA"
                target="_blank"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <CreditCard className="h-5 w-5 text-[#4299e1]" />
              </Link>
              <Link
                href="mailto:sean@unfoldedproject.com"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <Mail className="h-5 w-5 text-[#4299e1]" />
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-[#4299e1]" />
              <span className="text-sm text-[#4a5568]">Secure payments via Stripe</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#d1e0f0]">
          <div className="text-sm text-[#4a5568] mb-6 md:mb-0 text-center md:text-left">
            <p>© {currentYear} FortyEightWeb. All rights reserved.</p>
            <p className="my-2">
              Powered by{" "}
              <a
                href="https://unfoldedproject.com"
                target="_blank"
                className="text-[#4299e1] hover:underline"
                rel="noreferrer"
              >
                The Unfolded Project
              </a>
            </p>
            <p>
              <a href="mailto:sean@unfoldedproject.com" className="text-[#4299e1] hover:underline">
                sean@unfoldedproject.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#about" className="text-sm text-[#4a5568] hover:text-[#4299e1] transition-colors px-2">
              About
            </Link>
            <Link href="#howitworks" className="text-sm text-[#4a5568] hover:text-[#4299e1] transition-colors px-2">
              Process
            </Link>
            <Link href="#pricing" className="text-sm text-[#4a5568] hover:text-[#4299e1] transition-colors px-2">
              Pricing
            </Link>
            <Link
              href="https://www.seanwilliams.site/"
              target="_blank"
              className="text-sm text-[#4a5568] hover:text-[#4299e1] transition-colors px-2"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
