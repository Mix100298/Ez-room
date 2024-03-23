import "./globals.css"
import type { Metadata } from "next"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Sukhumvit from "./assets/Sukhumvit"
import { lusitana, inter } from "@/app/ui/fonts"
import { EZroomContext } from "./EZroomContext"

const sukhumvit = Sukhumvit
export const metadata: Metadata = {
  title: {
    default: "Easy Room",
    template: "%s | Easy Room",
  },
  description:
    "Easy Room is a platform for finding interior room design ideas using stable diffusion model.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <EZroomContext>
          <Navbar />
          {children}
          <Footer />
        </EZroomContext>
      </body>
    </html>
  )
}
