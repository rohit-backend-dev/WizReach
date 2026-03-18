"use client"

import { useEffect, useRef, useState } from "react"

const reviews = [
  { name: "Amit Verma", role: "Restaurant Owner", text: "Website banne ke baad online orders badh gaye. WhatsApp integration bahut useful raha." },
  { name: "Priya Singh", role: "Coaching Institute", text: "Students aur parents dono ko information easily mil rahi hai." },
  { name: "Rahul Khan", role: "Gym Owner", text: "Modern design ne gym ko premium feel diya. Leads clearly increase hue." },
  { name: "Sanjay Gupta", role: "Hotel Manager", text: "Booking enquiries direct website se aane lage." },
  { name: "Neha Agarwal", role: "Boutique Owner", text: "Instagram customers ab website se catalogue dekh kar order karte hain." },
  { name: "Deepak Mishra", role: "Real Estate Agent", text: "Property listings aur contact form se serious leads milne lage." },
]

export default function CustomerReview() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(3)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(0)

  const maxIndex = reviews.length - visible

  /* responsive visible cards */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else setVisible(3)
    }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  /* autoplay */
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 4000)
    return () => clearInterval(t)
  }, [paused, maxIndex])

  /* arrows */
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1))

  /* swipe */
  const handleTouchStart = (e: any) => (touchStart.current = e.touches[0].clientX)

  const handleTouchEnd = (e: any) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    if (diff < -50) prev()
  }

  return (
    <section className="w-full px-6 py-24 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-orange-400 uppercase text-xs tracking-widest">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Trusted by Business Owners
          </h2>
        </div>

        {/* slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
          >
            {reviews.map((r, i) => {
              const active = i === index

              return (
                <div
                  key={i}
                  className="px-4 shrink-0"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div
                    className={`rounded-3xl p-8 transition-all duration-500 ${
                      active
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 scale-105 shadow-2xl"
                        : "bg-zinc-900 opacity-80"
                    }`}
                  >
                    <div className="text-yellow-300 text-lg mb-4">★★★★★</div>

                    <p className={`text-sm leading-relaxed ${
                      active ? "text-white" : "text-white/70"
                    }`}>
                      {r.text}
                    </p>

                    <div className="flex items-center gap-3 mt-8">
                      <div className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center font-bold">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{r.name}</p>
                        <p className="text-xs text-white/60">{r.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
          >
            ›
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-pointer transition-all ${
                i === index
                  ? "w-8 h-2 bg-orange-500 rounded-full"
                  : "w-2 h-2 bg-white/40 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}