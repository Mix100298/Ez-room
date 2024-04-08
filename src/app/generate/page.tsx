"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import Select from "@/components/select";
import Card from "@/components/card";
import Searchfilter from "@/components/searchfilter";
import Share from "@/components/share";
import { useForm, SubmitHandler, set } from "react-hook-form";
//import { setPrompt } from "@/app/generate/api/generate"
import type { Metadata } from "next";
import axios from "axios";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import Roomimages from "@/components/roomimages";

export const metadata: Metadata = {
  title: "Generate",
  description: "Generate page",
};

function range(min: number, max: number, value: number): number {
  return Math.min(Math.max(min, value), max);
}

interface generateProps {
  type: "Random" | "Bedroom" | "Bathroom";
  style: "Random" | "Modern" | "Bohemain" | "Contemporary";
  budget: number;
  furnitures: [];
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
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const {
    data,
    isLoading: isDataLoading,
    error,
  } = useFetch("http://localhost:5000/api/furnitures/get");

  const fakePost = (status: boolean, data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status) {
          resolve(JSON.stringify(data));
        } else {
          reject("Room design failed to generate");
        }
      }, 3000);
    });
  };

  const formhandler: SubmitHandler<generateProps> = async (data) => {
    setResult("");
    setisLoading(true);
    try {
      const result = await axios.post(
        "http://localhost:5000/api/generate/create",
        data
      );
      console.log(result.data);
      setResult(result.data);
      setisLoading(false);
    } catch (error) {
      console.log(data);
      setisLoading(false);
    }
    return;
  };
  //   console.log(roomType, roomStyle, budget)
  //   setisLoading(true)
  //   const res = await setPrompt(roomType + roomStyle + budget)
  //   setisLoading(false)
  //   // alert(res.data)
  // }

  const mockFetch = (data: string[]) =>
    new Promise((resolve) => setTimeout(() => resolve(data), 2000));

  const [currentIndex, setCurrentIndex] = useState(0);
  let datatest: string[] = [];
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
  ];

  // Mock image data
  const mockdata = {
    _id: { $oid: "66113062b6e731b247968a78" },
    ownerid: { $oid: "65fd2f161fc71e020d7d00bd" },
    type: "Bedroom",
    style: "Modern",
    budget: { $numberInt: "200000" },
    furnitures: [
      { $oid: "660bf7be5572f53f21f616d6" },
      { $oid: "660bf8955572f53f21f616d8" },
    ],
    images: [
      "https://cdn.pixabay.com/photo/2023/07/06/09/23/contemporary-zen-8110029_1280.jpg",
      "https://png.pngtree.com/background/20230614/original/pngtree-bohemian-boho-bedroom-ideas-for-your-bohemian-girls-picture-image_3524522.jpg",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    selectedimage: { $numberInt: "0" },
    createdAt: { $date: { $numberLong: "1712252022065" } },
    updatedAt: { $date: { $numberLong: "1712254437726" } },
    __v: { $numberInt: "0" },
  };

  const totalSlides = Math.floor(slides.length / 2);

  const nextSlide = () => {
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };


  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <form onSubmit={handleSubmit(formhandler)}>
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
              <div className="bg-white h-full w-[428px] rounded shadow-md p-5">
                <h1 className="text-xl font-bold">Specify furniture</h1>
                <div className="py-5">
                  {/* <Searchfilter /> */}
                  {errors.furnitures && (
                    <p className="text-red-500">{errors.furnitures.message}</p>
                  )}
                </div>
                <div className="overflow-hidden">
                  <div
                    className="grid grid-rows-2 grid-flow-col gap-10 py-1 duration-500"
                    style={{
                      transform: `translateX(-${currentIndex * 214}px)`,
                    }}
                  >
                    {!isDataLoading ? (
                      data.map((furniture, index) => (
                        <div key={index} className="w-[174px]">
                          <Card
                            image={furniture.image}
                            name={furniture.title}
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
                      <p>Loading...</p>
                    )}
                    {!isDataLoading ? (
                      data.map((furniture, index) => (
                        <div key={index} className="w-[174px]">
                          <Card
                            id={furniture._id}
                            image={furniture.image}
                            name={furniture.english_name}
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
                      <p>Loading...</p>
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
            </div>
            <div>
              <div className="bg-white h-[512px] w-[512px] rounded flex justify-center items-center">
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
                {result && <img src={result.images[result.selectedimage]} alt="room design" />}
              </div>
              <div className="mt-10">
                <Roomimages
                  images={mockdata.images}
                  valueimage={mockdata.selectedimage.$numberInt}
                ></Roomimages>
              </div>
              <div className="mt-10">
                <Roomimages
                  images={mockdata.images}
                  valueimage={mockdata.selectedimage.$numberInt}
                ></Roomimages>
              </div>
              <div className="mt-10">
                <Button type="submit" isLoading={isLoading}>
                  {result ? "Generate Room Again" : "Generate Room Design"}
                </Button>
              </div>

              <div className="mt-10">{result && <Share />}</div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
