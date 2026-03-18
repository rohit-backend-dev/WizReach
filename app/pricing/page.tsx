"use client"

import { useState, useMemo } from "react"

const WHATSAPP_NUMBER = "919708798630"

type Plan = {
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter Website",
    price: 2999,
    description:
      "Ideal for small businesses that need a professional website to establish an online presence.",
    features: [
      "Up to 5 website pages",
      "Mobile responsive design",
      "WhatsApp chat button",
      "Contact inquiry form",
      "Google Maps location integration",
      "Basic SEO setup (meta tags & structure)",
      "Fast loading pages",
      "Website deployment assistance",
      "1 month technical support",
    ],
  },
  {
    name: "Business Website",
    price: 4999,
    popular: true,
    description:
      "Perfect for businesses that want a professional website to attract customers and generate inquiries.",
    features: [
      "Up to 10 professional pages",
      "Modern business UI design",
      "Fully mobile optimized layout",
      "Advanced SEO structure",
      "WhatsApp chat & contact system",
      "Portfolio / photo gallery section",
      "Google Maps + Google Business setup",
      "Lead inquiry forms",
      "Performance optimization",
      "3 months technical support",
    ],
  },
  {
    name: "Premium Website",
    price: 6999,
    description:
      "Best for businesses that want a powerful website with more features and better visibility online.",
    features: [
      "Up to 15 custom pages",
      "Premium UI design",
      "Blog or news section",
      "Online booking / inquiry system",
      "Advanced SEO optimization",
      "Google Analytics integration",
      "Performance optimization",
      "Google Sheets form integration",
      "Simple CMS for content updates",
      "6 months technical support",
    ],
  },
]

export default function Page() {
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)
  const [message, setMessage] = useState("")

  const [name, setName] = useState("")
  const [project, setProject] = useState("")
  const [details, setDetails] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase()

    if (code === "WIZ10") {
      setDiscount(0.1)
      setMessage("10% discount applied")
    } else if (code === "WIZ20") {
      setDiscount(0.2)
      setMessage("20% discount applied")
    } else {
      setDiscount(0)
      setMessage("Invalid coupon code")
    }
  }

  const finalPrice = (price: number) => {
    return Math.round(price - price * discount)
  }

  const openWhatsApp = (plan?: string) => {

    const text = plan
      ? `Hello 👋

I'm interested in the *${plan}* plan from WizReach Digital.

Please share the next steps to get started.`
      : `Hello 👋

I want to discuss building a website for my business.`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

    window.open(url, "_blank")

  }

  const sendCustomProject = () => {
    if (!name || !project || !details) {
      alert("Please fill required fields")
      return
    }

    const text = `Hello 👋

I want to discuss a custom project.

Name: ${name}
Project Type: ${project}

Requirements:
${details}

Requirement Document: ${file ? file.name : "No file attached"}
`

    openWhatsApp(text)
  }

  const discountPercent = useMemo(() => {
    return discount ? `${discount * 100}% OFF` : null
  }, [discount])

  return (
    <main className="bg-[#060810] text-[#e8eaf0]">

      {/* HERO */}

      <section className="px-6 pt-28 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Turn Your Business Into
              <span className="text-cyan-400 block mt-2">
                A 24/7 Online Storefront
              </span>
            </h1>

            <p className="text-white/70 mt-6 text-lg max-w-xl">
              A professional website helps your business build trust, appear in
              Google search results and generate new customer inquiries every day.
            </p>

            <div className="flex gap-6 mt-6 text-sm text-white/70">
              <span>✔ Delivery 5–10 days</span>
              <span>✔ Free consultation</span>
              <span>✔ Mobile friendly</span>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <svg width="320" height="220" viewBox="0 0 320 220" fill="none">
              <rect x="20" y="20" width="280" height="160" rx="12" fill="#0f172a" />
              <rect x="40" y="60" width="120" height="12" rx="4" fill="#22d3ee" />
              <rect x="40" y="90" width="200" height="10" rx="4" fill="#334155" />
              <rect x="40" y="110" width="180" height="10" rx="4" fill="#334155" />
              <circle cx="250" cy="110" r="28" fill="#22d3ee" />
            </svg>
          </div>

        </div>
      </section>

      {/* COUPON */}

      <section className="px-6 pb-10">
        <div className="max-w-md mx-auto">

          <div className="flex gap-3">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3"
            />

            <button
              onClick={applyCoupon}
              className="bg-cyan-400 text-black px-6 rounded-lg font-semibold hover:bg-cyan-300"
            >
              Apply
            </button>
          </div>

          {message && (
            <p className="text-center mt-3 text-sm text-cyan-400">
              {message}
            </p>
          )}

        </div>
      </section>

      {/* PRICING */}

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {plans.map((plan) => {
            const price = discount ? finalPrice(plan.price) : plan.price

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border ${
                  plan.popular
                    ? "border-cyan-400 shadow-[0_25px_50px_rgba(34,211,238,0.18)]"
                    : "border-white/10"
                } bg-white/[0.04] p-8 flex flex-col backdrop-blur`}
              >

                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>

                <div className="mt-3">

                  {discount && (
                    <p className="text-sm line-through text-white/40">
                      ₹{plan.price}
                    </p>
                  )}

                  <p className="text-4xl font-extrabold">₹{price}</p>

                  {discountPercent && (
                    <span className="text-xs text-green-400 font-semibold">
                      {discountPercent}
                    </span>
                  )}
                </div>

                <p className="text-white/70 text-sm mt-3">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-white/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-8 w-full rounded-xl py-3.5 font-semibold bg-cyan-400 text-black hover:bg-cyan-300"
                  onClick={() => openWhatsApp(`Hello I want ${plan.name}`)}
                >
                  Order This Website
                </button>

              </div>
            )
          })}

        </div>
      </section>

      {/* CUSTOM DEVELOPMENT */}

      <section className="px-6 py-28 border-t border-white/10 bg-[#060810]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Custom Development
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Advanced Web Applications
            </h2>

            <p className="text-white/60 mt-4 leading-relaxed">
              Some businesses require more than a standard website. We build fully
              customized platforms designed around your workflow and business logic.
              These projects require deeper development including databases,
              dashboards, user systems and integrations.
            </p>

          </div>

          {/* PROJECT TYPES */}

          <div className="grid md:grid-cols-3 gap-6 mt-14 text-sm">

            {[
              ["Learning Management Systems (LMS)","Platforms for selling courses, managing students, tracking progress, video lessons and certification systems."],
              ["CRM Systems","Customer relationship management systems to manage leads, customers, sales pipelines and communication history."],
              ["Admin Dashboards","Secure dashboards for managing business data, analytics, users and internal operations."],
              ["Booking Platforms","Appointment systems for clinics, salons, consultants or service businesses with automated scheduling."],
              ["Customer Portals","Secure login areas where customers can manage accounts, access services, download files or track orders."],
              ["SaaS Platforms","Full-scale web applications with subscriptions, user accounts, dashboards and cloud-based tools."]
            ].map(([title,desc])=>(
              <div key={title} className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/60">{desc}</p>
              </div>
            ))}

          </div>

          {/* FORM */}

          <div className="max-w-4xl mx-auto mt-16 bg-white/[0.04] border border-white/10 rounded-2xl p-8">

            <h3 className="text-xl font-semibold text-center mb-8">
              Tell Us About Your Project
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                placeholder="Your Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3"
              />

              <input
                placeholder="Project Type (LMS, CRM, Dashboard etc)"
                value={project}
                onChange={(e)=>setProject(e.target.value)}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3"
              />

              <textarea
                placeholder="Describe the features you need"
                value={details}
                onChange={(e)=>setDetails(e.target.value)}
                rows={4}
                className="md:col-span-2 bg-black/40 border border-white/10 rounded-lg px-4 py-3"
              />

              <div className="md:col-span-2">

                <label className="text-sm text-white/60 block mb-2">
                  Upload Requirement Document (PDF)
                </label>

                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e)=>{
                    if(e.target.files){
                      setFile(e.target.files[0])
                    }
                  }}
                  className="w-full text-sm text-white/70
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:bg-cyan-400 file:text-black
                  hover:file:bg-cyan-300"
                />

              </div>

              <button
                onClick={sendCustomProject}
                className="md:col-span-2 bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                Send Project Details
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* DOMAIN INFO */}

      <section className="px-6 pb-24">

        <div className="max-w-4xl mx-auto bg-white/[0.04] border border-red-500/40 rounded-xl p-10 backdrop-blur">

          <div className="text-center mb-6">

            <span className="text-xs uppercase tracking-widest text-red-400 font-semibold">
              Important Information
            </span>

            <h3 className="text-xl font-bold mt-2">
              Domain & Hosting Cost
            </h3>

          </div>

          <div className="space-y-3 text-sm text-white/80">

            <p>• Domain: <span className="font-semibold text-white">₹900–₹1200/year</span></p>
            <p>• Hosting: <span className="font-semibold text-white">₹3000–₹4500/year</span></p>
            <p>• Domain & hosting are purchased separately.</p>
            <p>• We help with full setup and configuration.</p>

          </div>

        </div>

      </section>

    </main>
  )
}