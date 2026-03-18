import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/Whatsapp"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col overflow-x-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Content (FIXED HERE) */}
        <main className="flex-1 w-full pt-[72px]">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating CTA */}
        <FloatingCTA />

      </body>
    </html>
  )
}