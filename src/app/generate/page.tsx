"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Input from "@/app/components/input"
import Button from "@/app/components/button"
import Select from "@/app/components/select"
import Card from "@/app/components/card"
import Searchfilter from "@/app/components/searchfilter"
import Image from "@/app/components/image"
import Share from "../components/share"
import { setPrompt } from "@/app/generate/api/generate"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Generate",
  description: "Generate page",
}

export default function Page() {
  const [roomType, setroomType] = useState<string>("")
  const [roomStyle, setroomStyle] = useState<string>("")
  const [budget, setBudget] = useState<number>(0)
  const [isLoading, setisLoading] = useState<boolean>(false)

  const formhandler = async () => {
    console.log(roomType, roomStyle, budget)
    setisLoading(true)
    const res = await setPrompt(roomType + roomStyle + budget)
    setisLoading(false)
    // alert(res.data)
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    "https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg",
    "https://images.unsplash.com/photo-1594476664296-8c552053aef3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1550056486-8ded219fb769?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-vector/shiny-golden-number-one-star-label-design_1017-27875.jpg?w=740&t=st=1709810231~exp=1709810831~hmac=88f9938ace0bc645e1aae1159b68018d1ec64271cf4066db30027715ac4674b5",
    "https://images.unsplash.com/photo-1549021179-127b81585b60?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-vector/realistic-red-ribbon-with-number-one-label-design-vector_1017-45606.jpg?w=740&t=st=1709810277~exp=1709810877~hmac=af61715d507c0250b6b0297c6df00e6702c646c95a4100257f738acd93c80345",
    "https://previews.123rf.com/images/progressman/progressman1802/progressman180200026/95174189-female-fingers-in-a-winning-gesture-on-a-gray-background-close-up.jpg",
    "https://img.freepik.com/free-vector/golden-number-collection_23-2147801738.jpg?t=st=1709810420~exp=1709814020~hmac=8b0140353ea3a71e486c7be199d96cb342458e4c21a4eb26f22bd2b574e295a8&w=740",
    "https://img.freepik.com/free-vector/black-friday-sale-banner-with-discount-offer-details_1017-41262.jpg?t=st=1709810457~exp=1709814057~hmac=1e14b652c240ca0604cbb9944b66fdacd4f7f8527635cb1e31b1b9bcd90d5ecf&w=740",
    "https://img.freepik.com/free-vector/hand-drawn-fast-food-poster_23-2150970591.jpg?t=st=1709811563~exp=1709815163~hmac=e823a1d159ce51e1c664d2253f0e49947523655534114825d998eee44009fa01&w=740",
  ]

  const totalSlides = Math.floor(slides.length / 2)

  const nextSlide = () => {
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
  }

  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="grid">
          <h1 className="text-6xl font-bold">Generate interior</h1>
          <p>
            Generate your room exterior to match your desired aesthetic with
            ease. For best results.
          </p>
        </div>
        <div className="bg-gray-700 h-20 rounded flex items-center justify-center">
          <div className="text-white text-3xl font-bold">Generate</div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="grid gap-10">
            <div className="bg-white h-full w-[428px] rounded p-5 shadow-md">
              <h1 className="text-xl font-bold">Specify room</h1>
              <div className="grid w-full gap-2 mt-5">
                <Select
                  id={"type-room"}
                  name={"Choose room type"}
                  options={["Bedroom", "Bathroom"]}
                  onChange={(e) => setroomType(e.target.value)}
                />

                <Select
                  id={"stly-room"}
                  name={"Choose room style"}
                  options={["Modern", "Bohemain", "Contemporary"]}
                  onChange={(e) => setroomStyle(e.target.value)}
                />

                <Input
                  id={"budget-room"}
                  name={"Choose your budget"}
                  type={"number"}
                  placeholder={"50,000"}
                  onChange={(e) => setBudget(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="bg-white h-full w-[428px] rounded shadow-md p-5">
              <h1 className="text-xl font-bold">Specify furniture</h1>
              <div className="py-5">
                <Searchfilter />
              </div>
              <div className="overflow-hidden">
                <div
                  className="grid grid-rows-2 grid-flow-col gap-10 py-1 duration-500"
                  style={{
                    transform: `translateX(-${currentIndex * 214}px)`,
                  }}
                >
                  {slides.map((image, index) => (
                    <div key={index} className="w-[174px]">
                      <Card image={image} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between w-full mt-5">
                <div className="w-[174px]">
                  <Button onClick={prevSlide} children={"<<< Prev"} />
                </div>
                <div className="w-[174px]">
                  <Button onClick={nextSlide} children={"Next >>>"} />
                </div>
              </div>
            </div>
            {/* Share component */}
            <Share />
          </div>
          <div>
            <div className="bg-white h-[512px] w-[512px] rounded">
              <Image
                src={
                  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDEtZXllLTA0LWEuanBn.jpg"
                }
                alt={"room-design"}
              />
            </div>
            <div className="mt-10">
              <Button onClick={formhandler} isLoading={isLoading}>
                Generate Room Design
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
