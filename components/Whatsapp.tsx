"use client"

export default function FloatingCTA() {
  const phone = "9708798630"

  const message =
    "Hi, mujhe apne business ke liye ek website chahiye. Pricing aur examples share karein."

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  const callUrl = `tel:+${phone}`

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">

      {/* Preview bubble */}
    <div className="mb-3 animate-float">
  <div className="backdrop-blur-xl bg-slate-900/70 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-2xl max-w-[180px] sm:max-w-[220px]">
    <p className="text-green-400 text-[11px] sm:text-xs font-semibold">
      Online now
    </p>
    <p className="text-white text-xs sm:text-sm">
      Free consultation in minutes
    </p>
  </div>
</div>

      {/* Buttons */}
      <div className="flex gap-3">

        <CTAButton
          href={whatsappUrl}
          label="WhatsApp"
          color="bg-green-500"
          icon={<WhatsappIcon />}
        />

        <CTAButton
          href={callUrl}
          label="Book Call"
          color="bg-blue-500"
          icon={<PhoneIcon />}
        />

      </div>

      <style jsx>{`
        @keyframes float {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </div>
  )
}

function CTAButton({ href, icon, label, color }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="
      group
      flex items-center gap-3
      h-[54px]
      px-4
      rounded-full
      backdrop-blur-xl
      bg-white/5
      border border-white/10
      shadow-lg
      hover:shadow-2xl
      transition-all duration-300
      hover:-translate-y-1 hover:scale-105
      "
    >

      {/* icon */}
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-full text-white ${color}`}
      >
        {icon}
      </div>

      {/* label */}
      <span className="text-white font-medium text-sm hidden sm:block">
        {label}
      </span>

    </a>
  )
}

/* WhatsApp SVG */
function WhatsappIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.63a11.9 11.9 0 005.82 1.49h.01c6.56 0 11.92-5.36 11.92-11.94 0-3.18-1.24-6.17-3.47-8.44zM12.07 21.5c-1.8 0-3.57-.48-5.12-1.4l-.37-.22-3.7.97.99-3.61-.24-.37a9.44 9.44 0 01-1.44-5.03c0-5.24 4.26-9.5 9.5-9.5 2.54 0 4.93.99 6.73 2.79a9.44 9.44 0 012.77 6.72c0 5.24-4.26 9.5-9.5 9.5zm5.2-7.12c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.18.28-.73.92-.9 1.1-.16.18-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.36-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.18 0-.47.07-.72.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.14.18 1.97 3 4.77 4.2.67.29 1.2.46 1.61.59.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.23.16-1.34-.07-.11-.26-.18-.55-.32z"/>
    </svg>
  )
}

/* Phone SVG */
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.4 22 2 13.6 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}