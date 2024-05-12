"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import Select from "@/components/select";
import Card from "@/components/card";
import Searchfilter from "@/components/searchfilter";
import Share from "@/components/share";
import { useForm, SubmitHandler, set, useFormState } from "react-hook-form";
//import { setPrompt } from "@/app/generate/api/generate"
import type { Metadata } from "next";
import axios from "axios";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import FurnitureList from "@/components/furniturelist";
import Alertbox from "@/components/alertbox";
import BadgeFurniture from "@/components/badgefurniture";
// export const metadata: Metadata = {
//   title: "Generate",
//   description: "Generate page",
// };

function range(min: number, max: number, value: number): number {
  return Math.min(Math.max(min, value), max);
}

enum AlertType {
  Success = "success",
  Error = "error",
}

interface generateProps {
  type: "Random" | "Bedroom" | "Bathroom";
  style: "Random" | "Modern" | "Bohemain" | "Contemporary";
  budget: number;
  furnitures: [];
}

interface Furniture {
  _id: string;
  thai_name: string;
  english_name: string;
  description: string;
  brand: string;
  image: string;
  url: string;
  price: number;
  category: string;
  room: string[];
  style: string[];
}

interface IFurniture {
  data: Furniture[];
  total: number;
}

interface IResult {
  type: "Bedroom" | "Bathroom";
  style: "Modern" | "Bohemian" | "Contemporary";
  budget: number;
  furnitures: string[] | [];
  images: string[];
  selectedimage: number;
}
export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<generateProps>({
    defaultValues: {
      type: "Random",
      style: "Random",
      budget: 3000,
      furnitures: [],
    },
  });
  const [typeValue, setTypeValue] = useState<"Random" | "Bedroom" | "Bathroom">(
    "Random"
  );
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as "Random" | "Bedroom" | "Bathroom";
    setValue("type", newValue);
    setTypeValue(newValue);
    // console.log("New type value:", newValue);
  };
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IResult>();
  const {
    data: furniture,
    isLoading: isFurnitureLoading,
    error: furnitureError,
  } = useFetch<IFurniture>(
    `${process.env.backendUrl}/api/furnitures/getgen?roomtype=${typeValue}`
  );

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
    setResult(undefined);
    setisLoading(true);
    try {
      const result = await axios.post(
        process.env.backendUrl + "/api/generate/create",
        { ...data },
        {
          withCredentials: true,
        }
      );
      console.log(result.data);
      setResult(result.data);
      setAlertMessage("Successfully");
      setTimeout(() => {
        setAlertMessage("");
      }, 5000);
      setisLoading(false);
    } catch (error) {
      console.log(data);
      setAlertMessage("Error");
      setTimeout(() => {
        setAlertMessage("");
      }, 5000);
      setisLoading(false);
    }
    return;
  };

  // strong handle form
  useEffect(() => {
    if (furniture) {
      setValue("furnitures", []);
    }
  }, [watch("type")]);
  //   console.log(roomType, roomStyle, budget)
  //   setisLoading(true)
  //   const res = await setPrompt(roomType + roomStyle + budget)
  //   setisLoading(false)
  //   // alert(res.data)
  // }
  const mockFetch = (data: string[]) =>
    new Promise((resolve) => setTimeout(() => resolve(data), 2000));

  const [currentIndex, setCurrentIndex] = useState(0);

  // the length of furniture for the slides
  const lengthFurniture = furniture?.total || 0;
  const totalSlides = Math.floor(lengthFurniture / 2);

  // next and prev slide functions
  const nextSlide = () => {
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };
  const SkeletonCards = ({}) => {
    const cardCount = 4;
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
    ));

    return <>{SkeletonCards}</>;
  };

  // watch furnitures
  const watchFurniture = watch("furnitures", []);
  console.log("hook", watchFurniture);

  const handleRemoveFurniture = (idToRemove: string) => {
    const newFurnitures = watchFurniture.filter(
      (id) => id !== idToRemove
    ) as [];
    setValue("furnitures", newFurnitures);
  };

  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid grid-flow-row grid-cols-12 gap-10 py-10 min-w-min">
        <div className="grid col-span-12 row-auto">
          <h1 className="text-6xl font-bold">Generate interior</h1>
          <p>Generate interior design images to match your desire.</p>
        </div>
        <div className="bg-gray-700 h-20 rounded flex items-center justify-center col-span-12 min-w-[720px]">
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
                  onChange={handleTypeChange}
                />
                <Select
                  id={register("style").name}
                  name={"Choose room style"}
                  options={["Random", "Modern", "Bohemian", "Contemporary"]}
                  form={register("style")}
                />
                <Input
                  id={register("budget").name}
                  name={"Set your furnitures budget"}
                  type={"number"}
                  placeholder={"minimum 3000 - maximum 60000"}
                  form={register(`budget`, {
                    valueAsNumber: true,
                    min: {
                      value: 3000,
                      message: "Minimum budget is 3000 baht",
                    },
                    max: {
                      value: 60000,
                      message: "Maximum budget is 60000 baht",
                    },
                  })}
                />
                {errors.budget && (
                  <p className="text-red-500">{errors.budget.message}</p>
                )}
              </div>
            </div>
            <div className="grid space-y-10 col-span-7 col-start-2 row-span-2 row-start-1">
              <div className="bg-white aspect-square rounded flex justify-center items-center text-center shadow-lg">
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
                    src={`data:image/png;base64,${
                      result.images[result.selectedimage]
                    }`}
                    alt="room design"
                  />
                )}
              </div>
              <div className="row-span-1">
                {result && (
                  <div className="flex flex-wrap gap-5 justify-center xl:justify-between mb-10">
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
                              src={`data:image/png;base64,${image}`}
                              alt={`room result ${index + 1}`}
                              className="rounded w-full aspect-square object-cover"
                            />
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
                <Button type="submit" isLoading={isLoading}>
                  {result ? "Generate Room Again" : "Generate Room Design"}
                </Button>
              </div>
            </div>
            <div className="grid bg-white rounded shadow-md space-y-5 p-4 col-span-1 row-start-2 row-span-2 w-[428px]">
              <h1
                className={`text-xl font-bold ${
                  watchFurniture.length >= 3 ? "text-red-500" : "text-blue-500"
                }`}
              >
                Choose furniture(s) {watchFurniture.length} / 2
              </h1>
              {errors.furnitures && (
                <p className="text-red-500">{errors.furnitures.message}</p>
              )}
              <div
                className="flex flex-
              wrap items-center justify-start gap-5"
              >
                {!isFurnitureLoading ? (
                  furniture &&
                  watchFurniture.map((furniture, index) => (
                    <div key={index}>
                      <BadgeFurniture
                        index={index}
                        id={furniture}
                        handleRemove={handleRemoveFurniture}
                      />
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
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
                          isCheck={watchFurniture.includes(
                            furniture._id as never
                          )}
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
                  {!isFurnitureLoading && furnitureError && (
                    <>
                      <i className="fi fi-sr-couch text-7xl animate-pulse text-center"></i>
                      <h1 className="animate-pulse text-center text-3xl font-bold">
                        Failed to load
                      </h1>
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
            {/* Result Generate room*/}
            {result && (
              <div className="grid bg-white rounded p-4 shadow-md col-span-7 row-span-3">
                <h1 className="text-xl font-bold text-blue-500">
                  Result Generate Room
                </h1>
                <div className="grid gap-2 mt-5">
                  <Input
                    id="type"
                    name="Room type"
                    type="type-room"
                    placeholder={result.type}
                    isdisabled={true}
                  />
                  <Input
                    id="style"
                    name="Style room"
                    type="style-room"
                    placeholder={result.style}
                    isdisabled={true}
                  />
                  <Input
                    id="budget"
                    name="total furniture price"
                    type="budget-room"
                    placeholder={result.budget.toString()}
                    isdisabled={true}
                  />
                  <h1 className="text-xl font-bold"></h1>
                </div>
                <h1 className="text-xl font-bold text-blue-500 mt-8 mb-4">
                  Furniture List
                </h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead>
                    <tr>
                      <th className="text-center">No</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Name</th>
                      <th className="text-start">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.furnitures.map((furniture, index) => {
                      return (
                        <FurnitureList
                          key={index}
                          index={index}
                          id={furniture}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        </form>
        {result && (
          <div className="grid min-w-[428px] col-start-1 row-span-5 mt-[-200px]">
            <Share
              mode="create"
              data={result}
              postStatus="public"
              postDescription=""
              postTitle=""
            />
          </div>
        )}
      </div>
      {alertMessage === "Error" ? (
        <Alertbox
          message="Error generated room, Please try again."
          type={AlertType.Error}
        />
      ) : alertMessage === "Successfully" ? (
        <Alertbox
          message="Successfully generated room"
          type={AlertType.Success}
        />
      ) : null}
    </main>
  );
}
