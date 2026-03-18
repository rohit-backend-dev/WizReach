"use client"

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" }
]

const values = [
  {
    icon: "⚡",
    title: "Speed",
    text: "We build fast websites that load quickly and perform smoothly on all devices."
  },
  {
    icon: "🔒",
    title: "Reliability",
    text: "Stable backend systems that work consistently without breaking."
  },
  {
    icon: "🎯",
    title: "Results",
    text: "Every project is focused on generating leads, users or business growth."
  },
  {
    icon: "📈",
    title: "Scalability",
    text: "We build systems that can grow with your business over time."
  }
]

const process = [
  {
    step: "Understanding",
    text: "We first understand your business, goals and what you actually need."
  },
  {
    step: "Planning",
    text: "We plan structure, features and user flow before writing code."
  },
  {
    step: "Development",
    text: "We build fast, clean and scalable systems using modern technologies."
  },
  {
    step: "Launch & Support",
    text: "We deploy, monitor and support your product after launch."
  }
]

const techStack = [
  "React", "Next.js", "JavaScript", "TypeScript",
  "Tailwind CSS", "Node.js", "Express.js",
  "Spring Boot", "MongoDB", "MySQL", "PostgreSQL",
  "REST APIs", "Google APIs", "WhatsApp Integration",
  "SEO Optimization", "Cloud Deployment", "Docker"
]

export default function About() {
  return (
    <section className="relative bg-[#05070d] text-white px-6 py-28 overflow-hidden">

      <style jsx>{`
        @keyframes techScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tech-scroll {
          animation: techScroll 25s linear infinite;
        }
      `}</style>

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] rounded-full"/>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HERO */}
        <div className="max-w-3xl">

          <span className="text-xs uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
            About WizReach
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            We build websites and systems
            <span className="text-cyan-400 block">
              that actually help businesses grow
            </span>
          </h1>

          <p className="text-white/70 mt-6 leading-relaxed">
            WizReach is a development-focused agency that helps businesses
            create fast, reliable and scalable digital products.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            We don’t just design websites for looks. We build systems that
            bring customers, improve user experience and support real business goals.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            Whether you're a startup or a growing business, we focus on
            delivering practical solutions that work in the real world.
          </p>

          {/* stats */}
          <div className="flex gap-10 mt-10 text-sm">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-cyan-400">{s.value}</p>
                <p className="text-white/60">{s.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* MISSION + VALUES */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>

            <p className="text-white/70 leading-relaxed">
              We design and develop websites, web applications and backend systems
              that are fast, secure and easy to manage.
            </p>

            <p className="text-white/70 mt-4 leading-relaxed">
              Our focus is simple — build something that works, performs well,
              and helps your business grow.
            </p>

            <p className="text-white/70 mt-4 leading-relaxed">
              No unnecessary complexity. No overpromises. Just solid development
              and clear results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
              >
                <div className="text-cyan-400 text-2xl mb-2">{v.icon}</div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-white/60">{v.text}</p>
              </div>
            ))}
          </div>

        </div>

        {/* TRUST */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why clients choose us
          </h2>

          <p className="text-white/70 leading-relaxed">
            Clients work with us because we focus on results, not just design.
            We communicate clearly, deliver on time and build systems that are
            reliable and easy to maintain.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-14">
            Technologies We Use
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap tech-scroll w-max">
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="px-6 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm hover:border-cyan-400 transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-14">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {process.map((p, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
              >
                <p className="text-cyan-400 font-semibold mb-2">
                  0{i + 1}
                </p>
                <h3 className="font-semibold mb-2">{p.step}</h3>
                <p className="text-white/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let’s build something useful
          </h2>

          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            If you need a website or a system that actually works and helps your business,
            we can help you build it.
          </p>

          <a
            href="/contact"
            className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Start a Project
          </a>
        </div>

      </div>
    </section>
  )
}