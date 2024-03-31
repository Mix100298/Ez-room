import "./globals.css";
import type { Metadata } from "next";


import Sukhumvit from "./assets/Sukhumvit";
import { lusitana, inter } from "@/app/ui/fonts";
import { EZroomContext } from "./EZroomContext";


const sukhumvit = Sukhumvit;
export const metadata: Metadata = {
  title: {
    default: "Easy Room",
    template: "%s | Easy Room",
  },
  description:
    "Easy Room is a platform for finding interior room design ideas using stable diffusion model.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.2.0/uicons-bold-rounded/css/uicons-bold-rounded.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.2.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        ></link>
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <EZroomContext>
         {children}
        </EZroomContext>
      </body>
    </html>
  );
}
