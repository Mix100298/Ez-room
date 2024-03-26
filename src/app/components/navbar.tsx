'use client';
import React from "react";
import Button from "./button";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";

interface navProps {
  isLogin: boolean;
  role: string;
  avatar: string;
}

export default function Navbar({ isLogin = false, role = "user", avatar = "" }: navProps) {
 

  function getMenuItem(isLogin = false, role = "user",avatar = "",) {
    if (isLogin) {
      if(role === "admin") {
        return (
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/">
            <span className=" text-black ">Home</span>
          </Link>
          <Link href="/dashboard">
            <span className=" text-black ">
              Dashboard
            </span>
          </Link>
          <Link href="/generate">
            <span className=" text-black ">Generate</span>
          </Link>
          <Link href="/community">
            <span className=" text-black ">Community</span>
          </Link>
          <Link href="/about">
            <span className=" text-black ">About us</span>
          </Link>
          <img alt="avatar" src={avatar} className="rounded-full w-9 h-9 ring-2 ring-blue-500" width={40} height={40} />
          <Link href="/signout">
            <Button >Sign out</Button>
          </Link>
        </div>
        );
      } else if(role === "user") {
        return (
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link href="/">
              <span className=" text-black ">Home</span>
            </Link>
            <Link href="/generate">
              <span className=" text-black ">Generate</span>
            </Link>
            <Link href="/community">
              <span className=" text-black ">Community</span>
            </Link>
            <Link href="/about">
              <span className=" text-black ">About us</span>
            </Link>
            <img alt="avatar" src={avatar} className="rounded-full w-9 h-9 ring-2 ring-blue-500" width={40} height={40} />
            <Link href="/signout">
              <Button >Sign out</Button>
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/about">
            <span className=" text-black ">About us</span>
          </Link>
          <Link href="/signin">
            <Button>Sign in</Button>
          </Link>
        </div>
      );
    }
  }

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
        {getMenuItem(isLogin, role,avatar)}
      </div>
    </nav>
  );
}
