"use client"
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

export default function Pricing() {

   const openWhatsApp = (plan: string) => {

    const text = `Hello 👋

I'm interested in the *${plan}* website plan.

Please share more details.`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

    window.open(url, "_blank")

  }

  return (
    <section className="w-full bg-[#060810] text-[#e8eaf0] px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-20">

          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
            Pricing
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Simple & Transparent Pricing
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Choose the plan that fits your business needs. Every website is
            designed to help you build credibility, attract customers and grow
            your business online.
          </p>

        </div>

        {/* PLANS */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-3xl border backdrop-blur-xl
              transition duration-300 hover:scale-[1.02]
              ${
                plan.popular
                  ? "border-cyan-400 shadow-[0_20px_60px_rgba(34,211,238,0.15)] bg-cyan-500/[0.04]"
                  : "border-white/10 bg-white/[0.03]"
              }
              p-8 flex flex-col`}
            >

              {/* POPULAR TAG */}

              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 
                bg-cyan-400 text-black text-xs font-semibold 
                px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              {/* PLAN NAME */}

              <h3 className="text-lg font-semibold text-white">
                {plan.name}
              </h3>

              {/* PRICE */}

              <div className="text-4xl font-extrabold mt-4 tracking-tight">
                ₹{plan.price}
              </div>

              {/* DESCRIPTION */}

              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                {plan.description}
              </p>

              {/* FEATURES */}

              <ul className="mt-6 space-y-3 text-sm flex-1">

                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">

                    <span className="text-green-400 mt-[2px]">
                      ✓
                    </span>

                    <span className="text-white/80 leading-relaxed">
                      {feature}
                    </span>

                  </li>
                ))}

              </ul>

              {/* BUTTON */}

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold
                transition-all duration-300
                ${
                  plan.popular
                    ? "bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg"
                    : "border border-white/20 hover:bg-white/10 text-white"
                }`}
                onClick={() => openWhatsApp(plan.name)}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

        {/* TRUST SECTION */}

        <div className="text-center mt-20 text-sm text-white/50">

          <p>✔ One-time payment — No hidden charges</p>

          <p className="mt-2">✔ Fast delivery within 5–10 days</p>

          <p className="mt-2">✔ Free consultation before starting your project</p>

        </div>

      </div>

    </section>
  )
}