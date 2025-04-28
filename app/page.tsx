import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle, Smartphone, Search, CreditCard, Shield } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#f0f7ff] py-20 md:py-32">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#2a4365] mb-6 animate-fade-in">
              Supercharge Your Website in 48 Hours.
            </h1>
            <p className="text-xl md:text-2xl text-[#4a5568] mb-10 max-w-3xl animate-fade-in-delay">
              Affordable. Mobile-Optimized. SEO-Ready. Delivered FAST.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Button
                className="bg-[#4299e1] hover:bg-[#3182ce] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="https://calendly.com/unfoldedproject/48-hour-refresh" target="_blank">
                  Book Sprint Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 text-[#4299e1] border-[#4299e1] px-8 py-6 text-lg rounded-lg transition-all duration-300"
                asChild
              >
                <Link href="https://www.seanwilliams.site/" target="_blank">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a4365] mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f0f7ff] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-[#4299e1] mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-[#2a4365]">Up to 3 Pages</h3>
              </div>
              <p className="text-[#4a5568]">
                Get up to 3 pages refreshed or created with a clean, modern design optimized for conversions.
              </p>
            </div>
            <div className="bg-[#f0f7ff] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Smartphone className="text-[#4299e1] mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-[#2a4365]">Mobile Optimized</h3>
              </div>
              <p className="text-[#4a5568]">
                Your site will look great and function perfectly on all devices, from phones to desktops.
              </p>
            </div>
            <div className="bg-[#f0f7ff] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Search className="text-[#4299e1] mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-[#2a4365]">SEO Ready</h3>
              </div>
              <p className="text-[#4a5568]">
                Basic SEO setup included to help your site rank better in search engines.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#e6f7ff] p-8 rounded-xl border border-[#bde0fe] max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#2a4365] mb-2">$500 Flat Rate</h3>
                <p className="text-[#4a5568] mb-4 md:mb-0">Each additional page only +$100</p>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <Clock className="text-[#4299e1] mr-2 h-5 w-5" />
                <span className="font-semibold text-[#2a4365]">48-Hour Guaranteed Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#f8fafc]" id="pricing">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a4365] mb-12">Simple Pricing</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#2a4365]">$500 for 3 pages</h3>
                  <p className="text-xl text-[#4a5568] mt-2">$100 per additional page (max 5 total)</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="flex items-center bg-[#f0f7ff] px-4 py-2 rounded-lg mb-4">
                    <Clock className="text-[#4299e1] mr-2 h-5 w-5" />
                    <span className="font-semibold text-[#2a4365]">48-Hour Guaranteed Delivery</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#f0f7ff] p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#2a4365] mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#4299e1] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Up to 3 pages refreshed or created</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#4299e1] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Mobile optimization included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#4299e1] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Basic SEO setup included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#4299e1] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>48-Hour guaranteed delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <Button
                    className="bg-[#4299e1] hover:bg-[#3182ce] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                    asChild
                  >
                    <Link href="https://calendly.com/unfoldedproject/48-hour-refresh" target="_blank">
                      Book Your Sprint <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    className="bg-[#38b2ac] hover:bg-[#319795] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                    asChild
                  >
                    <Link href="https://buy.stripe.com/4gwcQRdDZb1bgPS9AA" target="_blank">
                      Pay and Get Started <CreditCard className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <Shield className="text-[#4299e1] mr-2 h-5 w-5" />
                  <span className="text-sm text-[#4a5568]">Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <img src="/stripe-logo.png" alt="Stripe" className="h-6" />
                </div>
                <div className="flex items-center">
                  <img src="/calendly-logo.png" alt="Calendly" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#f8fafc]" id="howitworks">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a4365] mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#4299e1] text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#2a4365] mb-4 mt-2">Book 15-min Call</h3>
              <p className="text-[#4a5568] mb-4">
                Schedule a quick discovery call to discuss your website needs and goals.
              </p>
              <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white w-full" asChild>
                <Link href="https://calendly.com/unfoldedproject/48-hour-refresh" target="_blank">
                  Book Call
                </Link>
              </Button>
            </div>
            <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#4299e1] text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#2a4365] mb-4 mt-2">Pay Invoice</h3>
              <p className="text-[#4a5568] mb-4">
                Secure your sprint with a simple payment via Stripe's secure platform.
              </p>
              <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white w-full" asChild>
                <Link href="https://buy.stripe.com/4gwcQRdDZb1bgPS9AA" target="_blank">
                  Pay Securely
                </Link>
              </Button>
            </div>
            <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#4299e1] text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#2a4365] mb-4 mt-2">Submit Content</h3>
              <p className="text-[#4a5568]">
                Provide your content, photos, and any specific requirements for your site.
              </p>
            </div>
            <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#4299e1] text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold text-[#2a4365] mb-4 mt-2">Site Delivered</h3>
              <p className="text-[#4a5568]">Your live site will be delivered within 48 hours, ready to launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white" id="portfolio">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a4365] mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="https://www.seanwilliams.site/" target="_blank" className="group">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/seanwilliams.site.place.png"
                    alt="Sean Williams Portfolio"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-[#2a4365] group-hover:text-[#4299e1] transition-colors">
                    SeanWilliams.site
                  </h3>
                  <p className="text-[#4a5568]">Personal portfolio website</p>
                </div>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/sean-williams-912702185" target="_blank" className="group">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/sean-linkedin-image.png"
                    alt="LinkedIn Profile"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-[#2a4365] group-hover:text-[#4299e1] transition-colors">
                    LinkedIn Profile
                  </h3>
                  <p className="text-[#4a5568]">Professional network and portfolio</p>
                </div>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/gradgen-placeholder.png"
                    alt="GradGen AI"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg px-4 py-2 bg-[#4299e1] rounded-lg">Coming Soon</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-[#2a4365] group-hover:text-[#4299e1] transition-colors">
                    GradGen AI
                  </h3>
                  <p className="text-[#4a5568]">Launching soon!</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4299e1] to-[#38b2ac] text-white">
        <div className="container px-4 mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Supercharge Your Website?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a professional, mobile-optimized website in just 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white text-[#4299e1] hover:bg-gray-100 px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="https://calendly.com/unfoldedproject/48-hour-refresh" target="_blank">
                Book Your Sprint <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              className="bg-[#38b2ac] text-white hover:bg-[#319795] px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              asChild
            >
              <Link href="https://buy.stripe.com/4gwcQRdDZb1bgPS9AA" target="_blank">
                Pay and Get Started <CreditCard className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
