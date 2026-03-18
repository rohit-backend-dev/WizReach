"use client"

import { useState, useEffect } from "react"

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzu6BHTbwV-0RZWCCuG1nV0bWk4Yoy5TbA3hq4e4dqZxAm-f-UKnnskDCZZ72Naq_yA/exec"

export default function Contact() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)
const [submitted,setSubmitted] = useState(false)

useEffect(()=>{

if(submitted){
const timer = setTimeout(()=>{
setSubmitted(false)
},4000)

return ()=> clearTimeout(timer)
}

},[submitted])

const handleSubmit = async (e:any) => {

e.preventDefault()

if(!name || !email || !phone || !message){
alert("Please fill all fields")
return
}

setLoading(true)

try{

await fetch(SCRIPT_URL,{
method:"POST",
body: JSON.stringify({
name,
email,
phone,
message
})
})

setSubmitted(true)

setName("")
setEmail("")
setPhone("")
setMessage("")

}catch{
alert("Failed to send message")
}

setLoading(false)

}

return(

<section className="relative bg-[#05070d] text-white min-h-screen px-6 py-24 overflow-hidden">

{/* background glow */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full"/>

<div className="max-w-6xl mx-auto relative z-10">

{/* HERO */}

<div className="grid md:grid-cols-2 gap-20 items-center mb-20">

<div>

<span className="inline-block text-xs uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
Contact
</span>

<h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
Let’s Build Something
<span className="text-cyan-400 block">
Powerful Together
</span>
</h1>

<p className="text-white/70 mt-6 max-w-md">
Tell us about your website idea or business goals.
We usually reply within a few hours.
</p>

<div className="mt-8 space-y-3 text-sm">

<div className="flex items-center gap-3 text-white/80">
<span className="text-cyan-400">📞</span>
9708798630
</div>

<div className="flex items-center gap-3 text-white/80">
<span className="text-cyan-400">📞</span>
8676943245
</div>

<div className="flex items-center gap-3 text-white/80">
<span className="text-cyan-400">📧</span>
rohitmishra729595@gmail.com
</div>

</div>

<div className="flex gap-6 text-xs text-white/60 mt-8">
<span>⚡ Fast Response</span>
<span>✔ Free Consultation</span>
<span>🔒 Secure Inquiry</span>
</div>

</div>

{/* SVG Illustration */}

<div className="hidden md:flex justify-center">

<svg width="340" height="260" viewBox="0 0 340 260">

<rect x="30" y="40" width="280" height="180" rx="18" fill="#0f172a"/>

<rect x="60" y="80" width="220" height="16" rx="8" fill="#22d3ee"/>

<rect x="60" y="110" width="170" height="10" rx="5" fill="#334155"/>

<rect x="60" y="130" width="150" height="10" rx="5" fill="#334155"/>

<rect x="60" y="150" width="120" height="10" rx="5" fill="#334155"/>

<circle cx="260" cy="170" r="24" fill="#22d3ee"/>

<circle cx="215" cy="170" r="12" fill="#334155"/>

</svg>

</div>

</div>


{/* Success Message */}

{submitted && (

<div className="mb-10 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-center">
Message sent successfully. We'll contact you shortly.
</div>

)}


{/* FORM */}

<form
onSubmit={handleSubmit}
className="max-w-3xl mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
>

<div className="grid md:grid-cols-2 gap-6">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
/>

</div>

<input
type="tel"
placeholder="Phone / WhatsApp Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
/>

<div>

<textarea
rows={4}
maxLength={300}
placeholder="Tell us about your project"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
/>

<p className="text-xs text-white/40 text-right">
{message.length}/300
</p>

</div>

<button
type="submit"
disabled={loading}
className="w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:bg-cyan-300 transition disabled:opacity-60"
>
{loading ? "Sending..." : "Send Message"}
</button>

<a
href="https://wa.me/919708798630"
target="_blank"
className="block text-center border border-white/20 rounded-lg py-3 hover:bg-white/10 transition"
>
Chat on WhatsApp
</a>

<p className="text-center text-xs text-white/50">
We respect your privacy. No spam.
</p>

</form>

<div className="text-center mt-14 text-white/50 text-sm">
Helping local businesses launch powerful websites
</div>

</div>

</section>

)

}