"use client"

import { useState } from "react"

const WHATSAPP_NUMBER = "919708798630"

import { Box, Typography, Button, Stack, Container, Modal, TextField } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

const Cloud = ({ className }: { className?: string }) => (
  <svg
    className={`absolute opacity-50 ${className}`}
    width="420"
    height="210"
    viewBox="0 0 420 210"
    fill="white"
  >
    <path d="M90 150c-30 0-55-20-55-48 0-25 20-45 45-48 8-30 35-55 65-55 35 0 60 20 70 50 25 0 45 20 45 48s-20 53-45 53H90z" />
  </svg>
)

export default function TryMeDark() {

  const [open,setOpen] = useState(false)

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [business,setBusiness] = useState("")

  const sendWhatsApp = () => {

    const text = `Hello 👋

I want to book a free consultation.

Name: ${name}
Phone: ${phone}
Business: ${business}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

    window.open(url,"_blank")

    setOpen(false)

  }

  return (

    <Box className="relative py-20 text-white overflow-hidden">

      {/* SKY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEFA] via-[#a8ddff] to-[#e8f6ff]" />

      {/* SOFT CLOUD HAZE */}
      <div
        className="absolute inset-0 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.45), transparent 40%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.35), transparent 45%)"
        }}
      />

      {/* SUN GLOW */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-yellow-300/40 blur-[120px] rounded-full" />

      {/* CLOUDS LAYER 1 */}
      <Cloud className="top-10 left-[-120px]" />
      <Cloud className="top-24 right-[-100px]" />
      <Cloud className="bottom-10 left-[-80px] scale-125" />
      <Cloud className="bottom-20 right-[-120px]" />

      {/* CLOUDS LAYER 2 */}
      <Cloud className="top-[35%] left-[10%] scale-75 opacity-40 blur-sm" />
      <Cloud className="top-[40%] right-[15%] scale-90 opacity-40 blur-sm" />
      <Cloud className="bottom-[25%] left-[30%] scale-70 opacity-35 blur-sm" />
      <Cloud className="bottom-[30%] right-[35%] scale-80 opacity-35 blur-sm" />

      {/* CLOUDS LAYER 3 (SMALL CLOUDS) */}
      <Cloud className="top-[20%] left-[45%] scale-50 opacity-30 blur-sm" />
      <Cloud className="top-[60%] right-[40%] scale-50 opacity-30 blur-sm" />

      {/* CONTENT */}

      <Container maxWidth="md" className="relative z-10">

        <Stack spacing={6} alignItems="center" textAlign="center">

          <Typography
            variant="h2"
            className="font-black text-gray-900 drop-shadow-lg"
          >
            Start Winning New Customers
          </Typography>

          <Typography className="text-xl md:text-2xl font-semibold text-gray-800">
            Launch Your Own High-Converting Website
          </Typography>

          {/* CTA BUTTONS */}

          <div className="flex flex-col sm:flex-row items-center gap-4">

            <Button
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={()=>setOpen(true)}
              sx={{
                height:56,
                px:4,
                fontWeight:700,
                borderRadius:"12px",
                background:"#2563eb",
                textTransform:"none",
                "&:hover":{
                  background:"#1d4ed8"
                }
              }}
            >
              Book a Free Call
            </Button>

            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              sx={{
                height:56,
                px:4,
                fontWeight:700,
                borderRadius:"12px",
                background:"#25D366",
                textTransform:"none",
                "&:hover":{
                  background:"#20c55e"
                }
              }}
            >
              Connect on WhatsApp
            </Button>

          </div>

          <Typography className="text-xs text-gray-700 tracking-widest uppercase">
            Free consultation · No commitment · Reply in minutes
          </Typography>

        </Stack>

      </Container>

      {/* POPUP FORM */}

      <Modal open={open} onClose={()=>setOpen(false)}>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-8 rounded-xl w-[90%] max-w-md">

          <Typography variant="h6" className="mb-4 font-bold text-center">
            Book Free Consultation
          </Typography>

          <Stack spacing={3}>

            <TextField
              label="Your Name"
              fullWidth
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <TextField
              label="Phone Number"
              fullWidth
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />

            <TextField
              label="Business Type"
              fullWidth
              value={business}
              onChange={(e)=>setBusiness(e.target.value)}
            />

            <Button
              variant="contained"
              onClick={sendWhatsApp}
              sx={{
                background:"#2563eb",
                "&:hover":{background:"#1d4ed8"}
              }}
            >
              Send Request
            </Button>

          </Stack>

        </div>

      </Modal>

    </Box>

  )
}