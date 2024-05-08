"use client"
import React, { useState } from "react"
import Button from "./button"
import { inter } from "@/app/ui/fonts"
import Link from "next/link"
import axios from "axios"
import Avatar from "./avatar"
import { useEffect } from "react"
import Image from "next/image"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"

interface Info {
  isLogin: boolean
  role: string
  avatar: string
  firstname: string
}

function getMenuItem(
  isLogin: boolean,
  role: string,
  avatar: string,
  firstname: string,
  signout: () => void
) {
  if (isLogin) {
    if (role === "Admin") {
      return (
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/">
            <span className=" text-black ">Home</span>
          </Link>
          <Link href="/dashboard">
            <span className=" text-black ">Dashboard</span>
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
          <Avatar src={avatar} alt="avatar" firstname={firstname} />
          <Button type="button" onClick={signout} isLogin={true}>
            Sign out
          </Button>
        </div>
      )
    } else if (role === "User") {
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
          <Avatar src={avatar} alt="avatar" firstname={firstname} />
          <Button type="button" onClick={signout} isLogin={true}>
            Sign out
          </Button>
        </div>
      )
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
    )
  }
}

export default function Navbar() {
  const router = useRouter()
  const [isLoading, setisLoading] = useState<boolean>(false)

  const signout = () => {
    axios
      .delete(process.env.backendUrl + "/api/users/logout", {
        withCredentials: true,
      })
      .then(() => {
        window.localStorage.removeItem("info")
        window.location.reload()
        router.push("/")
      })
  }

  var info: Info = JSON.parse(getCookie("info") ?? "{}")

  useEffect(() => {
    setisLoading(true)
    console.log("navbar useEffect render")
  }, [])

  return (
    <nav className="bg-white border-gray-200 font-bold sticky top-0 z-50 min-w-min">
      <div
        className={`${inter.className} antialiased flex flex-wrap justify-between items-center mx-auto max-w-[980px] min-w-[850px] py-3`}
      >
        <Link href="../">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/EZ-room-logo.png"
              alt="EZ-room logo"
              className="h-10 w-10"
              width={40}
              height={40}
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Easy Room
            </span>
          </div>
        </Link>
        {isLoading && (
          <>
            {getMenuItem(
              info.isLogin,
              info.role,
              info.avatar,
              info.firstname,
              signout
            )}
          </>
        )}
      </div>
    </nav>
  )
}
