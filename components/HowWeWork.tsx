"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ---------------- HERO ---------------- */

const Hero = () => (
  <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center pt-20 pb-10 z-10 px-4">

    <div className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-300/20 rounded-full text-xs text-cyan-400 font-semibold mb-6 bg-cyan-400/5">
      How We Work
    </div>

    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-snug mb-6">
      <span className="block">From Idea to</span>
      <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
        Successful Online Business
      </span>
    </h1>

    <p className="max-w-md mx-auto text-cyan-200 text-base md:text-lg mb-8">
      A simple process that turns your idea into a professional website that attracts customers and grows your business.
    </p>

    <div className="text-sm text-white/50">
      Helping businesses build a strong online presence.
    </div>

  </div>
);

/* ---------------- STATS ---------------- */

const StatsRow = () => {

  const stats = [
    { number: "24h", label: "Response Time" },
    { number: "Modern", label: "UI Design" },
    { number: "Trusted", label: "Local Businesses" },
    { number: "Global", label: "Business Reach" },
  ];

  return (
    <div className="mt-10 mb-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">

      {stats.map((s, i) => (
        <div
          key={i}
          className="py-6 bg-[#0a1220] rounded-xl text-center border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition"
        >
          <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {s.number}
          </div>

          <div className="text-sm text-cyan-200 mt-1">
            {s.label}
          </div>
        </div>
      ))}

    </div>
  );
};

/* ---------------- STEP ---------------- */

const Step = ({ i, data }: { i: number; data: any }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const ob = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) ob.observe(ref.current);

    return () => ob.disconnect();

  }, []);

  return (

    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >

      <div
        className={`flex flex-col ${
          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } gap-10 md:gap-12 items-center`}
      >

        <div className="flex-1">

          <div className="text-xs font-bold uppercase mb-2 text-cyan-400">
            Step {i + 1}
          </div>

          <h3 className="font-bold text-xl md:text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {data.title}
          </h3>

          <p className="text-cyan-200 text-sm md:text-base mb-5 leading-relaxed">
            {data.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {data.features.map((f: string, k: number) => (
              <span
                key={k}
                className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300"
              >
                {f}
              </span>
            ))}
          </div>

        </div>

        <div className="flex-1 flex flex-col items-center">

          <div className="relative group">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-violet-400/30 to-indigo-400/30 blur-2xl opacity-40 group-hover:opacity-70 transition"/>

            <div className="relative bg-[#0a1220] border border-cyan-400/20 p-4 rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.25)]">

              <Image
                src={data.image}
                alt={data.title}
                width={340}
                height={340}
                className="rounded-xl transition-transform duration-500 group-hover:scale-105"
              />

            </div>

          </div>

          <div className="mt-4 text-xs text-cyan-200 font-semibold tracking-widest">
            0{i + 1} / 04
          </div>

        </div>

      </div>

    </div>
  );
};

/* ---------------- DATA ---------------- */

const stepsData = [
  {
    title: "Tell Us About Your Business",
    desc: "Share your business idea and website requirements through our contact form or WhatsApp. We respond quickly and guide you through the next steps.",
    features: ["Free Consultation","Quick Response","Clear Communication"],
    image: "/t1.png",
  },
  {
    title: "Plan the Perfect Website",
    desc: "We understand your business goals, audience, and required features before designing the structure of your website.",
    features: ["Planning","Feature List","Project Scope"],
    image: "/t2.png",
  },
  {
    title: "We Build Your Website",
    desc: "Your website is designed and developed with modern UI, fast performance, and full mobile responsiveness.",
    features: ["Modern Design","Mobile Responsive","Fast Loading"],
    image: "/t3.png",
  },
  {
    title: "Launch & Start Getting Customers",
    desc: "Your website goes live with SEO setup, Google Maps integration, and tools that help customers find and contact your business.",
    features: ["SEO Setup","Google Maps","Lead Generation"],
    image: "/t4.png",
  }
];

/* ---------------- CTA ---------------- */

const CTASection = () => (

  <div className="w-full flex justify-center px-4 py-16 sm:py-20">

    <div className="w-full max-w-xl bg-[#0f1c2e] border border-cyan-400/10 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-6 sm:py-10 text-center">

      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
        Start Your Digital Journey Today
      </h2>

      <p className="text-cyan-200 text-sm sm:text-base md:text-lg mb-6 max-w-md mx-auto">
        Build a professional website that helps your business reach more customers and grow online.
      </p>

      <a
        href="/pricing"
        className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-400 to-violet-400 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition"
      >
        View Website Plans
      </a>

    </div>

  </div>

);

/* ---------------- PAGE ---------------- */

export default function HowWeWork() {

  return (

    <div className="relative bg-[#04080f] text-white min-h-screen">

      <Hero />

      <StatsRow />

      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-20 sm:space-y-24">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple Process to Launch Your Website
          </h2>

          <p className="text-cyan-200 max-w-xl mx-auto">
            From your first message to your website going live, we make the process simple and transparent.
          </p>

        </div>

        {stepsData.map((step, i) => (
          <Step key={i} i={i} data={step} />
        ))}

      </section>

      <CTASection />

    </div>

  );
}