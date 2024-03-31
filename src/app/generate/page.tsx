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
import { useEZroom } from "../EZroomContext";
import { resolve } from "path";

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
  furniture: [];
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
      furniture: [],
    },
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const fakePost = (status: boolean,data : any) => {
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
    fakePost(true,data)
      .then((res) => {
        setResult(res);
        setisLoading(false);
      })
      .catch((err) => {
        alert(err);
        setisLoading(false);
      });
    return;
  };
  //   console.log(roomType, roomStyle, budget)
  //   setisLoading(true)
  //   const res = await setPrompt(roomType + roomStyle + budget)
  //   setisLoading(false)
  //   // alert(res.data)
  // }

  const [currentIndex, setCurrentIndex] = useState(0);
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
                    options={["Random", "Modern", "Bohemain", "Contemporary"]}
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
                  {errors.furniture && (
                    <p className="text-red-500">{errors.furniture.message}</p>
                  )}
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
                        <Card
                          image={image}
                          name={index.toString()}
                          price={5000}
                          form={register(`furniture`, {
                            validate: {
                              limit: (value) =>
                                value.length <= 2 ||
                                "You can only select 2 items",
                            },
                          })}
                        />
                      </div>
                    ))}
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
                {(!isLoading && !result) && <p>Click the button to generate room design</p>}
                {isLoading && (
                  <svg
                    aria-hidden="true"
                    className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
                {result && <p>{result}</p>}
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
