"use client"

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" }
]

const values = [
  {
    icon: "⚡",
    title: "Performance",
    text: "Fast loading applications engineered for speed and scale."
  },
  {
    icon: "🔒",
    title: "Security",
    text: "Secure backend architecture and modern development practices."
  },
  {
    icon: "🎯",
    title: "Conversion",
    text: "User-focused design built to generate leads and customers."
  },
  {
    icon: "📈",
    title: "Growth",
    text: "Systems designed to support long-term business growth."
  }
]

const process = [
  {
    step: "Research",
    text: "Understanding your business, goals and audience."
  },
  {
    step: "Design",
    text: "Designing user-focused product structure and UI."
  },
  {
    step: "Development",
    text: "Engineering scalable and reliable applications."
  },
  {
    step: "Launch",
    text: "Deploying optimized systems ready for growth."
  }
]

const techStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Responsive Web Design",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "REST API Development",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "WhatsApp API Integration",
  "Google Maps Integration",
  "Google Analytics",
  "Google Sheets Integration",
  "Website Performance Optimization",
  "SEO Optimization",
  "Cloud Deployment",
  "Docker"
]

export default function About() {

  return (

<section className="relative bg-[#05070d] text-white px-6 py-28 overflow-hidden">

<style jsx>{`
@keyframes techScroll {
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
}
.tech-scroll{
animation: techScroll 25s linear infinite;
}
`}</style>

{/* background glow */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] rounded-full"/>

<div className="max-w-6xl mx-auto relative z-10">

{/* HERO */}

<div className="grid md:grid-cols-2 gap-20 items-center">

<div>

<span className="text-xs uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
About Our Agency
</span>

<h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
Engineering Modern
<span className="text-cyan-400 block">
Digital Products
</span>
</h1>

<p className="text-white/70 mt-6 leading-relaxed max-w-lg">
We are a team of experienced developers focused on building
high-performance websites and scalable digital platforms
for startups, local businesses and growing companies.
</p>

<p className="text-white/70 mt-4 leading-relaxed max-w-lg">
Our goal is not just to build websites but to create
digital systems that help businesses attract customers,
build trust and grow online.
</p>

<p className="text-white/70 mt-4 leading-relaxed max-w-lg">
Every project is engineered with performance,
usability and long-term scalability in mind.
</p>

{/* stats */}

<div className="flex gap-10 mt-10 text-sm">

{stats.map((s,i)=>(
<div key={i}>
<p className="text-3xl font-bold text-cyan-400">{s.value}</p>
<p className="text-white/60">{s.label}</p>
</div>
))}

</div>

</div>

{/* image */}

<div className="flex justify-center">

<img
src="/image.svg"
alt="Agency Logo"
className="w-[420px] md:w-[480px] opacity-95"
/>

</div>

</div>


{/* MISSION + VALUES */}

<div className="mt-32 grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-3xl font-bold mb-6">
Our Mission
</h2>

<p className="text-white/70 leading-relaxed">
Our mission is to help businesses transform their ideas
into powerful digital platforms that attract customers,
improve operations and drive long-term growth.
</p>

<p className="text-white/70 mt-4 leading-relaxed">
As a team of full-stack developers we focus on building
secure, scalable and high-performance systems that
support businesses at every stage of growth.
</p>

<p className="text-white/70 mt-4 leading-relaxed">
Technology should simplify operations, improve customer
experience and unlock new opportunities for businesses.
</p>

</div>


<div className="grid grid-cols-2 gap-6 text-sm">

{values.map((v,i)=>(

<div
key={i}
className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
>

<div className="text-cyan-400 text-2xl mb-2">{v.icon}</div>

<h3 className="font-semibold mb-2">
{v.title}
</h3>

<p className="text-white/60">
{v.text}
</p>

</div>

))}

</div>

</div>


{/* TRUST SECTION */}

<div className="mt-32">

<h2 className="text-3xl font-bold text-center mb-14">
Why Businesses Trust Us
</h2>

<div className="grid md:grid-cols-3 gap-8 text-sm">

{[
{
title:"Experienced Development Team",
text:"Our team consists of experienced developers specializing in modern web technologies and scalable backend systems."
},
{
title:"Business Focused Solutions",
text:"We design websites and platforms that help businesses generate leads, customers and measurable growth."
},
{
title:"Reliable Long-Term Support",
text:"We provide continuous technical support, updates and optimization to keep your platform performing."
}
].map((item,i)=>(

<div
key={i}
className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-cyan-400 transition"
>

<h3 className="font-semibold mb-2">
{item.title}
</h3>

<p className="text-white/60">
{item.text}
</p>

</div>

))}

</div>

</div>


{/* TECH STACK */}

<div className="mt-32">

<h2 className="text-3xl font-bold text-center mb-14">
Technology Stack
</h2>

<div className="overflow-hidden relative">

<div className="flex gap-8 whitespace-nowrap tech-scroll w-max">

{[...techStack,...techStack].map((tech,i)=>(

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
Development Process
</h2>

<div className="grid md:grid-cols-4 gap-6 text-sm">

{process.map((p,i)=>(

<div
key={i}
className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
>

<p className="text-cyan-400 font-semibold mb-2">
0{i+1}
</p>

<h3 className="font-semibold mb-2">
{p.step}
</h3>

<p className="text-white/60">
{p.text}
</p>

</div>

))}

</div>

</div>


{/* CTA */}

<div className="mt-32 text-center">

<h2 className="text-3xl font-bold mb-4">
Let’s Build Something Great
</h2>

<p className="text-white/70 mb-6 max-w-xl mx-auto">
Whether you need a professional website, an e-commerce
platform or a custom web application, our team can help
you build a reliable digital product that supports your
business growth.
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