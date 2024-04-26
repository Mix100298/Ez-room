"use client"
import React, { useState } from "react"
import Link from "next/link"
import Input from "@/components/input"
import Button from "@/components/button"
import Select from "@/components/select"
import Card from "@/components/card"
import Searchfilter from "@/components/searchfilter"
import Share from "@/components/share"
import { useForm, SubmitHandler, set } from "react-hook-form"
//import { setPrompt } from "@/app/generate/api/generate"
import type { Metadata } from "next"
import axios from "axios"
import Image from "next/image"
import useFetch from "@/hooks/useFetch"

// export const metadata: Metadata = {
//   title: "Generate",
//   description: "Generate page",
// };

function range(min: number, max: number, value: number): number {
  return Math.min(Math.max(min, value), max)
}

interface generateProps {
  type: "Random" | "Bedroom" | "Bathroom"
  style: "Random" | "Modern" | "Bohemain" | "Contemporary"
  budget: number
  furnitures: []
}

interface Furniture {
  _id: string
  thai_name: string
  english_name: string
  description: string
  brand: string
  image: string
  url: string
  price: number
  category: string
  room: string[]
  style: string[]
}

interface IFurniture {
  data: Furniture[]
  total: number
}

interface IResult {
  type: "Bedroom" | "Bathroom"
  style: "Modern" | "Bohemian" | "Contemporary"
  budget: number
  furnitures: string[] | []
  images: string[]
  selectedimage: number
}
export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<generateProps>({
    defaultValues: {
      type: "Random",
      style: "Random",
      budget: 50000,
      furnitures: [],
    },
  })
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [result, setResult] = useState<IResult>()
  const {
    data: furniture,
    isLoading: isFurnitureLoading,
    error: furnitureError,
  } = useFetch<IFurniture>("http://localhost:5000/api/furnitures/getall")

  const fakePost = (status: boolean, data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status) {
          resolve(JSON.stringify(data))
        } else {
          reject("Room design failed to generate")
        }
      }, 3000)
    })
  }

  const formhandler: SubmitHandler<generateProps> = async (data) => {
    setResult(undefined)
    setisLoading(true)
    try {
      const result = await axios.post(
        "http://localhost:5000/api/generate/create",
        { ...data },
        {
          withCredentials: true,
        }
      )
      console.log(result.data)
      setResult(result.data)
      setisLoading(false)
    } catch (error) {
      console.log(data)
      setisLoading(false)
    }
    return
  }
  //   console.log(roomType, roomStyle, budget)
  //   setisLoading(true)
  //   const res = await setPrompt(roomType + roomStyle + budget)
  //   setisLoading(false)
  //   // alert(res.data)
  // }

  const mockFetch = (data: string[]) =>
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))

  const [currentIndex, setCurrentIndex] = useState(0)

  // the length of furniture for the slides
  const lengthFurniture = furniture?.total || 0
  const totalSlides = Math.floor(lengthFurniture / 2)

  // next and prev slide functions
  const nextSlide = () => {
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }
  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
  }

  const SkeletonCards = ({}) => {
    const cardCount = 4
    const SkeletonCards = Array.from({ length: cardCount }, (_, index) => (
      <div
        key={index}
        className="animate-pulse rounded w-full h-full bg-gray-200"
      >
        <div className="flex bg-gray-300 w-[174px] h-[174px] rounded-t"></div>
        <div className="grid p-2 space-y-2">
          <div className="flex bg-gray-300 w-full h-4 rounded-full"></div>
          <div className="flex bg-gray-300 w-20 h-4 rounded-full"></div>
        </div>
      </div>
    ))

    return <>{SkeletonCards}</>
  }

  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid grid-flow-row grid-cols-12 gap-10 py-10 min-w-min">
        <div className="grid col-span-12 row-auto">
          <h1 className="text-6xl font-bold">Generate interior</h1>
          <p>
            Generate your room exterior to match your desired aesthetic with
            ease. For best results.
          </p>
        </div>
        <div className="bg-gray-700 h-20 rounded flex items-center justify-center col-span-12 min-w-[690px]">
          <div className="text-white text-3xl font-bold">Generate</div>
        </div>
        <form
          className="grid col-span-12 gap-10"
          onSubmit={handleSubmit(formhandler)}
        >
          <>
            <div className="grid bg-white rounded p-4 shadow-md col-span-1 w-[428px]">
              <h1 className="text-xl font-bold">Specify room</h1>
              <div className="grid gap-2 mt-5">
                <Select
                  id={register("type").name}
                  name={"Choose room type"}
                  options={["Random", "Bedroom", "Bathroom"]}
                  form={register(`type`, { required: true })}
                />
                <Select
                  id={register("style").name}
                  name={"Choose room style"}
                  options={["Random", "Modern", "Bohemian", "Contemporary"]}
                  form={register("style")}
                />
                <Input
                  id={register("budget").name}
                  name={"Choose your budget"}
                  type={"number"}
                  placeholder={"minimum 50,000 - maximum 1,000,000"}
                  form={register(`budget`, {
                    valueAsNumber: true,
                    min: {
                      value: 50000,
                      message: "Minimum budget is 1,000 baht",
                    },
                    max: {
                      value: 1000000,
                      message: "Maximum budget is 1,000,000 baht",
                    },
                  })}
                />
                {errors.budget && (
                  <p className="text-red-500">{errors.budget.message}</p>
                )}
              </div>
            </div>
            <div className="grid space-y-5 col-span-6 col-start-2 row-span-2 row-start-1">
              <div className="bg-white aspect-square rounded flex justify-center items-center shadow-lg">
                {!isLoading && !result && (
                  <p>Click the button to generate room design</p>
                )}
                {isLoading && (
                  <Image
                    src="/armchair.gif"
                    alt="loading"
                    width={100}
                    height={100}
                  />
                )}
                {result && (
                  <img
                    src={result.images[result.selectedimage]}
                    alt="room design"
                  />
                )}
              </div>
              <div className="row-span-1">
                {result && (
                  <div className="flex flex-wrap gap-5 justify-center xl:justify-between ">
                    {result.images.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className="xl:max-h-[144px] xl:max-w-[144px] max-h-[160px] max-w-[160px] rounded"
                        >
                          <input
                            type="radio"
                            name="room"
                            value={index}
                            className="hidden peer"
                            id={`room${index + 1}`}
                            onClick={() =>
                              setResult({ ...result, selectedimage: index })
                            }
                            defaultChecked={index === result.selectedimage}
                          />
                          <label
                            htmlFor={`room${index + 1}`}
                            className="block w-full h-full rounded-md cursor-pointer peer-checked:border-4 peer-checked:border-blue-500"
                          >
                            <img
                              src={image}
                              alt={`room result ${index + 1}`}
                              className="rounded w-full aspect-square object-cover"
                            />
                          </label>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              <Button type="submit" isLoading={isLoading}>
                {result ? "Generate Room Again" : "Generate Room Design"}
              </Button>
            </div>
            <div className="grid bg-white rounded shadow-md p-4 col-span-1 row-start-2 row-span-3 w-[428px]">
              <h1 className="text-xl font-bold">Specify furniture</h1>
              <div className="py-5">
                {/* <Searchfilter /> */}
                {errors.furnitures && (
                  <p className="text-red-500">{errors.furnitures.message}</p>
                )}
              </div>
              <div className="overflow-hidden">
                <div
                  className="grid grid-rows-2 grid-flow-col gap-10 p-1 duration-500"
                  style={{
                    transform: `translateX(-${currentIndex * 214}px)`,
                  }}
                >
                  {!isFurnitureLoading ? (
                    furniture &&
                    furniture.data.map((furniture, index) => (
                      <div key={index} className="w-[174px]">
                        <Card
                          id={furniture._id}
                          image={furniture.image}
                          name={furniture.english_name}
                          url={furniture.url}
                          price={furniture.price}
                          form={register(`furnitures`, {
                            validate: {
                              limit: (value) =>
                                value.length <= 2 ||
                                "You can only select 2 items",
                            },
                          })}
                        />
                      </div>
                    ))
                  ) : (
                    <>
                      <SkeletonCards />
                    </>
                  )}
                </div>
              </div>
              <div className="flex justify-between w-full mt-5">
                <div className="w-[174px]">
                  <Button onClick={prevSlide}>{"<<< Prev"}</Button>
                </div>
                <div className="w-[174px]">
                  <Button onClick={nextSlide}>{"Next >>>"}</Button>
                </div>
              </div>
            </div>
          </>
        </form>
        <div className="grid min-w-[428px] col-span-1">
          {result && (
            <Share
              mode="create"
              data={result}
              postStatus="public"
              postDescription=""
              postTitle=""
            />
          )}
        </div>
      </div>
    </main>
  )
}
