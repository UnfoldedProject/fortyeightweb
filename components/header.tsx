"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/canva-forty-eight-web-logo.png" alt="FortyEightWeb Logo" className="h-12 mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-[#2a4365] hover:text-[#4299e1] transition-colors">
              About
            </Link>
            <Link href="#howitworks" className="text-[#2a4365] hover:text-[#4299e1] transition-colors">
              Process
            </Link>
            <Link href="#pricing" className="text-[#2a4365] hover:text-[#4299e1] transition-colors">
              Pricing
            </Link>
            <Link
              href="https://www.seanwilliams.site/"
              target="_blank"
              className="text-[#2a4365] hover:text-[#4299e1] transition-colors"
            >
              Portfolio
            </Link>
            <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white" asChild>
              <Link href="https://calendly.com/unfoldedproject/48-hour-refresh" target="_blank">
                Book Sprint Call
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2a4365]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-[#2a4365] hover:text-[#4299e1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#howitworks"
              className="text-[#2a4365] hover:text-[#4299e1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#pricing"
              className="text-[#2a4365] hover:text-[#4299e1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="https://www.seanwilliams.site/"
              target="_blank"
              className="text-[#2a4365] hover:text-[#4299e1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white w-full" asChild>
              <Link
                href="https://calendly.com/unfoldedproject/48-hour-refresh"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Sprint Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
