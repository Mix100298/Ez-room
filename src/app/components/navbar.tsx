import React from "react";
import Button from "./button";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 font-bold sticky top-0 z-50">
      <div
        className={`${inter.className} antialiased flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-[150px] py-3`}
      >
        <Link href="../">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="EZ-room-logo.png"
              alt="EZ-room logo"
              className="h-10 w-10"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Easy Room
            </span>
          </div>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/about">
            <span className=" text-black ">About us</span>
          </Link>
          <Link href="/signin">
            <Button>Sign in</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
