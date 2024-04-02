import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


interface LayoutProps {
  image : React.ReactNode;
  children: React.ReactNode;
  post? : React.ReactNode;
}

export default function Layout({  children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
