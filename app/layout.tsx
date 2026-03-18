import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/Whatsapp"   // import your CTA

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col overflow-x-hidden">

        {/* Top Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating CTA (visible on every page) */}
        <FloatingCTA />

      </body>
    </html>
  )
}