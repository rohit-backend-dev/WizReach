"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {  AlignRight, X, Phone, Mail } from "lucide-react"
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0a0c10]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:rotate-12 transition">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15 15 0 0 1 0 20" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-wide">
                WizReach
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const active = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm rounded-lg transition
                    ${
                      active
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-indigo-500
                shadow-lg shadow-indigo-500/20
                hover:opacity-90 hover:-translate-y-[1px]
                transition"
              >
                Start a Project
              </Link>
            </div>

            {/* MOBILE BUTTON (NEW ICON) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            >
              < AlignRight className="w-6 h-6" />
            </button>

          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-[85%] w-[300px] z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full m-4 rounded-2xl
        bg-gradient-to-b from-white/[0.08] to-white/[0.03]
        backdrop-blur-2xl
        border border-white/10
        shadow-2xl p-6 flex flex-col">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-white/70 hover:text-white mb-6"
          >
            <X className="w-6 h-6" />
          </button>

          {/* NAV LINKS */}
          <div className="flex flex-col gap-3 text-lg font-semibold">
            {navLinks.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl transition
                  ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* CONTACT SECTION */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-4">

            <a
              href="tel:9708798630"
              className="flex items-center gap-3 text-white/80 hover:text-white transition"
            >
              <div className="p-2 rounded-lg bg-white/10">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm">Call Us</span>
            </a>

            <a
              href="mailto:rohitmishra729595@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-white transition"
            >
              <div className="p-2 rounded-lg bg-white/10">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm">Email Us</span>
            </a>

          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-auto px-5 py-3 rounded-xl text-sm font-semibold text-white
            bg-gradient-to-r from-cyan-500 to-indigo-500 text-center"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </>
  )
}