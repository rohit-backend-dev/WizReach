"use client"

import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Works", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const services = [
  "Business Growth Websites",
  "Online Store Development",
  "Online Booking Systems",
  "Business Dashboards & CRM",
  "Corporate Websites",
  "Portfolio Websites",
]

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#05070a] border-t border-white/10 text-white/70">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>

            <Link href="/" className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400">

                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15 15 0 0 1 0 20"/>
                </svg>

              </div>

              <span className="text-white font-semibold text-lg">
                WizReach
              </span>

            </Link>

            <p className="mt-4 text-sm leading-relaxed">
              Helping businesses grow online with modern high-performance
              websites designed to attract customers and generate real leads.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-sm">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>

            <div className="flex flex-col gap-2 text-sm">

              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="hover:text-white transition"
                >
                  {service}
                </Link>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-2 text-sm">

              <p>rohitmishra729595@gmail.com</p>
              <p>+91 9708798630</p>

            </div>

            {/* SOCIAL */}

            <div className="flex gap-3 mt-4">

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.25-.75a1.12 1.12 0 1 0 0 2.25 1.12 1.12 0 0 0 0-2.25z"/>
                </svg>
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/50">
          © {year} WizReach. All rights reserved.
        </div>

      </div>

    </footer>
  )
}