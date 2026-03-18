"use client"

import Image from "next/image"
import { PORTFOLIO_IMAGES, ProjectId } from "../../lib/portfolioImages"

interface Project {
  id: ProjectId
  title: string
  category: string
  features: string[]
}

const PROJECTS: Project[] = [
  {
    id: "hotel",
    title: "Hotel Booking Website",
    category: "Hospitality",
    features: [
      "Online room booking system",
      "Payment gateway integration",
      "Mobile friendly design"
    ],
  },
  {
    id: "school",
    title: "School Management Website",
    category: "Education",
    features: [
      "Student & staff dashboards",
      "Online notices & updates",
      "Admission inquiry forms"
    ],
  },
  {
    id: "grocery",
    title: "Grocery Shop Website",
    category: "E-commerce",
    features: [
      "Product catalog & cart",
      "Online checkout system",
      "Order management"
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant Website",
    category: "Food & Dining",
    features: [
      "Digital menu display",
      "Online table reservations",
      "WhatsApp ordering"
    ],
  },
  {
    id: "coaching",
    title: "Coaching / College Website",
    category: "Education",
    features: [
      "Course listings",
      "Online admissions",
      "Student announcements"
    ],
  },
  {
    id: "salon",
    title: "Salon & Spa Website",
    category: "Beauty",
    features: [
      "Online appointment booking",
      "Service pricing display",
      "WhatsApp contact"
    ],
  },
  {
    id: "realestate",
    title: "Real Estate Website",
    category: "Real Estate",
    features: [
      "Property listings",
      "Location map integration",
      "Lead inquiry forms"
    ],
  },
  {
    id: "clinic",
    title: "Doctor Clinic Website",
    category: "Healthcare",
    features: [
      "Appointment scheduling",
      "Doctor profile pages",
      "Google Maps integration"
    ],
  },
  {
    id: "gym",
    title: "Gym & Fitness Website",
    category: "Fitness",
    features: [
      "Membership plans",
      "Trainer profiles",
      "Online inquiries"
    ],
  },
  {
    id: "construction",
    title: "Construction Company Website",
    category: "Corporate",
    features: [
      "Project portfolio showcase",
      "Service listings",
      "Quote request forms"
    ],
  },
  {
    id: "ngo",
    title: "NGO Website",
    category: "Nonprofit",
    features: [
      "Donation integration",
      "Campaign pages",
      "Volunteer registration"
    ],
  },
  {
    id: "freelancer",
    title: "Freelancer Portfolio",
    category: "Personal",
    features: [
      "Project showcase",
      "Client testimonials",
      "Contact forms"
    ],
  },
]

export default function Projects() {
  const whatsapp = "https://wa.me/919708798630"

  return (
    <section className="bg-[#0A0A0F] px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>

          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Clean, modern websites built for real businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {PROJECTS.map((p) => {
            const image = PORTFOLIO_IMAGES[p.id]

            return (
              <div
                key={p.id}
                className="group rounded-2xl overflow-hidden bg-[#0D0D14] border border-white/10 hover:border-cyan-400/40 transition"
              >

                {/* Image (SHARP + CORRECT RATIO) */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={image?.src || "/portfolio/default.png"}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Light overlay for slight contrast */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="p-5">

                  <p className="text-xs text-white/40 uppercase tracking-wide mb-1">
                    {p.category}
                  </p>

                  <h3 className="text-white text-lg font-semibold mb-3">
                    {p.title}
                  </h3>

                  <ul className="text-white/70 text-sm space-y-1 mb-4 leading-relaxed">
                    {p.features.slice(0, 2).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center justify-between">

                    <a
                      href={`/projects/${p.id}`}
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                    >
                      View Project →
                    </a>

                    <a
                      href={whatsapp}
                      className="text-xs text-white/50 hover:text-white transition"
                    >
                      Contact
                    </a>

                  </div>

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}