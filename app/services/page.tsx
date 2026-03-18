"use client"

import Image from "next/image"
import {
  Globe,
  ShoppingCart,
  CalendarCheck,
  LayoutDashboard,
  Building2,
  UserSquare,
  Smartphone,
  Search,
  Zap,
  MessageCircle,
  LineChart,
  Mail,
  CheckCircle,
  Server,
  Shield,
  Database,
  HeartHandshake,
} from "lucide-react"

/* ================= DATA ================= */

const websiteServices = [
  { icon: Globe, title: "Business Websites", desc: "High-converting websites that generate leads and build trust." },
  { icon: ShoppingCart, title: "E-commerce Platforms", desc: "Scalable online stores with secure payments and optimized checkout." },
  { icon: UserSquare, title: "Portfolio Websites", desc: "Personal branding websites to attract clients and opportunities." },
  { icon: CalendarCheck, title: "Booking Systems", desc: "Automated appointment systems with payments and reminders." },
  { icon: Smartphone, title: "Landing Pages", desc: "Conversion-focused pages for ads and lead generation." },
]

const systemServices = [
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Manage users, analytics, and operations." },
  { icon: Database, title: "ERP Systems", desc: "Inventory, staff, and operations management." },
  { icon: LineChart, title: "CRM Systems", desc: "Track leads and manage pipelines." },
  { icon: Server, title: "Custom Web Apps", desc: "Tailor-made software solutions." },
  { icon: Shield, title: "Client Portals", desc: "Secure login-based systems." },
]

const advancedServices = [
  { icon: Zap, title: "SaaS Development", desc: "Build scalable SaaS platforms." },
  { icon: Database, title: "API Development", desc: "Custom APIs and integrations." },
  { icon: MessageCircle, title: "AI Chatbots", desc: "Automated lead & support systems." },
  { icon: Globe, title: "Performance Optimization", desc: "Speed, SEO, and conversion boost." },
]

const specializedServices = [
  { icon: LayoutDashboard, title: "LMS Platforms", desc: "Course platforms with tracking." },
  { icon: HeartHandshake, title: "Fundraising Platforms", desc: "Donation systems with campaigns." },
  { icon: Building2, title: "Startup MVPs", desc: "Launch your idea fast." },
]

/* ================= GRID ================= */

function ServiceGrid({ data }: any) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
      {data.map((service: any, index: number) => {
        const Icon = service.icon

        return (
          <div
            key={index}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-400/40 transition"
          >
            <div className="relative h-full bg-[#0b0f1a]/80 backdrop-blur-xl rounded-2xl p-6 overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-500/10 blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 mb-5">
                  <Icon size={22} className="text-cyan-400" />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {service.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ================= SECTION ================= */

function Section({ title, children }: any) {
  return (
    <div className="mb-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </div>
      {children}
    </div>
  )
}

/* ================= PAGE ================= */

export default function ServicesPage() {
  const whatsapp = "https://wa.me/919708798630"

  return (
    <section className="relative bg-[#04060f] text-white py-24 px-6 overflow-hidden">

      {/* GLOBAL GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HERO */}
        <div className="text-center mb-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build Software That <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Grows Your Business
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
            Websites, platforms, and systems designed to generate revenue and scale operations.
          </p>

          <a
            href={whatsapp}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg shadow-lg shadow-cyan-500/20"
          >
            Start Project
          </a>
        </div>

        {/* 🔥 ADS SECTION */}
        <div className="mb-32 relative">

          <div className="absolute inset-0 bg-orange-500/10 blur-[120px]"></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#0b0f1a] to-[#070a14] border border-white/10 rounded-2xl p-10 shadow-xl">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Publish Your Ads with <br />
                <span className="bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
                  Attractive Landing Pages
                </span>
                <br />
                Grow Online & Gain Customers
              </h2>

              <p className="text-white/60 mb-6">
                We build complete ad funnels — from landing pages to tracking — so your campaigns actually convert.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Facebook & Instagram Ads",
                  "Google Ads Campaigns",
                  "High-converting landing pages",
                  "Audience targeting",
                  "Conversion tracking",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-orange-400" size={18} />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsapp}
                className="inline-block bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition"
              >
                Launch Ads Campaign
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400/20 blur-2xl"></div>

              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/ads.png"
                  alt="Ads"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SERVICES */}
        <Section title="Website Development">
          <ServiceGrid data={websiteServices} />
        </Section>

        <Section title="Business Systems">
          <ServiceGrid data={systemServices} />
        </Section>

        <Section title="Advanced Solutions">
          <ServiceGrid data={advancedServices} />
        </Section>

        <Section title="Specialized Platforms">
          <ServiceGrid data={specializedServices} />
        </Section>

        {/* 🔥 INCLUDED FEATURES */}
<div className="mb-32">

  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
What You Get With Every Project   </h2>
    <p className="text-white/60 max-w-2xl mx-auto">
      We don’t just build websites — we deliver complete, ready-to-grow systems.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        title: "SEO Optimized Structure",
        desc: "Built to rank better on Google with proper technical SEO setup.",
        icon: Search,
      },
      {
        title: "Mobile Responsive Design",
        desc: "Perfect experience across mobile, tablet, and desktop.",
        icon: Smartphone,
      },
      {
        title: "WhatsApp Chat Integration",
        desc: "Instant connection with customers via WhatsApp button.",
        icon: MessageCircle,
      },
      {
        title: "Lead Capture System",
        desc: "Contact form connected to Google Sheets / Excel for lead tracking.",
        icon: LineChart,
      },
      {
        title: "Fast Loading Performance",
        desc: "Optimized for speed to reduce bounce rate and improve conversions.",
        icon: Zap,
      },
      {
        title: "Analytics & Tracking",
        desc: "Google Analytics and tracking setup for user insights.",
        icon: LineChart,
      },
      {
        title: "Secure Website Setup",
        desc: "SSL, authentication, and secure backend practices.",
        icon: Shield,
      },
      {
        title: "Domain & Hosting Setup",
        desc: "Complete deployment and live setup support.",
        icon: Globe,
      },
      {
        title: "Conversion Focused UI",
        desc: "Designed to turn visitors into leads and customers.",
        icon: CheckCircle,
      },
    ].map((item, i) => {
      const Icon = item.icon

      return (
        <div
          key={i}
          className="group relative rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-400/40 transition"
        >
          <div className="bg-[#0b0f1a]/80 backdrop-blur-xl rounded-xl p-5 h-full">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-400/10 mb-4">
              <Icon size={18} className="text-cyan-400" />
            </div>

            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-white/60 text-sm">{item.desc}</p>

          </div>
        </div>
      )
    })}

  </div>
</div>

        {/* FINAL CTA */}
        <div className="text-center mt-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a System That Actually Grows?
          </h2>

          <p className="text-white/60 mb-8">
            Not just a website — a complete business engine.
          </p>

          <a
            href={whatsapp}
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  )
}