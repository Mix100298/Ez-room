import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@components/Navbar";
import Footer from "./components/footer";
import Sukhumvit from "./assets/Sukhumvit";
import { lusitana, inter } from "@/app/ui/fonts";
import { EZroomContext} from "./EZroomContext";

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
  const user = {
    isLogin: false,
    role: "user",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1711426274~exp=1711426874~hmac=6ab29b1f52f0df7b29d4994d4470169046b3dcfe2dbb9b7ad7cb658fc49856d7",
  };


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
          <Navbar />
          {children}
          <Footer />
        </EZroomContext>
      </body>
    </html>
  );
}
