"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const words = [
  "fast-loading",
  "SEO-optimized",
  "lead-generating",
  "high-converting",
  "growth-focused"
]

export default function HeroPro() {

const [index, setIndex] = useState(0)
const [visible, setVisible] = useState(true)

useEffect(() => {

const id = setInterval(() => {

setVisible(false)

setTimeout(() => {
setIndex((i) => (i + 1) % words.length)
setVisible(true)
}, 300)

}, 2600)

return () => clearInterval(id)

}, [])

return (

<section className="relative min-h-[90vh] flex items-center bg-[#04060f] overflow-hidden px-6 sm:px-8 lg:px-12 py-20 sm:py-24">

{/* GRID BACKGROUND */}
<div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />



{/* CENTER GLOW */}
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[200px] rounded-full" />

<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

{/* LEFT SIDE */}
<div className="max-w-xl">

<div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 mb-6">
<span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-cyan-400">
WizReach Digital
</span>
</div>

<h1 className="text-white font-extrabold leading-tight tracking-tight text-[clamp(2rem,5vw,3.5rem)] mb-6">

Websites that are{" "}

<span className="inline-block min-w-[200px]">

<span
className={`inline-block bg-[linear-gradient(90deg,#3b82f6,#22d3ee,#6366f1,#3b82f6)] 
bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent 
transition-all duration-300 ${
visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
}`}
>

{words[index]}

</span>

</span>

<br />

<span className="text-white/80">
and bring real customers to your business
</span>

</h1>

<p className="text-white/60 text-base mb-8 leading-relaxed">

If your business is not visible online, customers are choosing competitors who are.

We design modern websites that rank on Google,
build trust, and turn visitors into customers.

</p>

{/* BUTTONS */}
<div className="flex flex-row gap-3 sm:gap-4 flex-wrap">

<a
href="/pricing"
className="flex-1 sm:flex-none px-4 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:-translate-y-1 transition text-center"
>
View Website Plans
</a>

<a
href="/projects"
className="flex-1 sm:flex-none px-4 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-lg sm:rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition text-center"
>
See Our Work
</a>

</div>

{/* TRUST INDICATORS */}
<div className="grid grid-cols-3 sm:flex gap-8 mt-12">

{[
{ num: "Fast", label: "Website Performance" },
{ num: "SEO", label: "Google Optimized" },
{ num: "Mobile", label: "Responsive Design" }
].map((item, i) => (

<div key={i}>
<p className="text-white font-bold text-xl">{item.num}</p>
<p className="text-white/40 text-xs">{item.label}</p>
</div>

))}

</div>

<p className="text-white/40 text-xs mt-6">
Trusted by startups and local businesses
</p>

</div>

{/* RIGHT SIDE */}
<div className="relative flex justify-center">

  {/* IMAGE CONTAINER */}
  <div className="relative w-full max-w-[720px] pb-36 sm:pb-32 md:pb-36">

    <Image
      src="/hero.png"
      alt="Business website growth"
      width={800}
      height={800}
      className="rounded-xl shadow-2xl w-full animate-float"
    />

    {/* FLOATING CARD */}
    <div
      className="absolute left-1/2 -translate-x-1/2
      bottom-[-5px] sm:bottom-6 md:bottom-2
      w-[67%] sm:w-[70%] md:w-[58%] lg:w-[52%]
      bg-[#0c0f18]/95 backdrop-blur-xl border border-cyan-400/20
      rounded-xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)]
      transition hover:-translate-y-3"
    >

      <div className="flex items-center gap-2 mb-3">

        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 tracking-wide">
          Business Tip
        </span>

      </div>

      <p className="text-white font-semibold text-sm mb-2">
        🌙 Your website works while you sleep
      </p>

      <p className="text-white/60 text-xs leading-relaxed mb-3">
        A well-built website introduces your business,
        explains your services and collects customer inquiries
        even when your office is closed.
      </p>

      <p className="text-cyan-400 font-semibold text-sm">
        Let your website bring you new customers.
      </p>

    </div>

  </div>

</div>

</div>

</section>

)

}