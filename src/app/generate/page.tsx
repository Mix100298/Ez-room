'use client';
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Input from "@/app/components/input";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import Card from "@/app/components/card";
import Searchfilter from "@/app/components/searchfilter";
import Image from "@/app/components/image";
import {setPrompt} from "@/app/generate/api/generate"

export default function Page() {
const [roomType,setroomType] = useState<string>("");
const [roomStyle,setroomStyle] = useState<string>("");
const [budget,setBuget] = useState<number>(0);
const [isLoading,setisLoading] = useState<boolean>(false)


const formhandler = async () => {
    console.log(roomType,roomStyle,budget)
    setisLoading(true)
    const res = await setPrompt(roomType+roomStyle+budget)
    setisLoading(false)
    alert(res.data)
}


  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="grid">
          <h1 className="text-8xl font-bold">Generate interior</h1>
          <p>
            Generate your room exterior to match your desired aesthetic with
            ease. For best results.
          </p>
        </div>
        <div className="bg-gray-700 h-20 rounded flex items-center justify-center">
          <div className="text-white text-4xl font-bold">Generate</div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="grid gap-10">
            <div className="bg-white h-64 w-[428px] rounded p-5">
              <div className="grid w-full gap-2">
                <Select
                  id={"type-room"}
                  name={"Choose room type"}
                  options={["Bedroom", "Bathroom"]}
                  onChange={(e) => setroomType(e.target.value)}
                />
                {console.log(roomType)}
                <Select
                  id={"stly-room"}
                  name={"Choose room style"}
                  options={["Modern", "Bohemain", "Contemporary"]}
                  onChange={(e) => setroomStyle(e.target.value)}
                />
                {console.log(roomStyle)}
                <Input
                  id={"budget-room"}
                  name={"Choose your budget"}
                  type={"number"}
                  placeholder={"50,000"}
                  onChange={(e) => setBuget(e.target.value)}
                />
                {console.log(budget)}
              </div>
            </div>
            <div className="bg-white h-[400px] w-[428px] rounded p-5">
              <h1 className="text-xl font-bold">Specify furniture</h1>
              <div className="mt-5">
                <Searchfilter />
              </div>
              <div className="grid grid-cols-3 gap-3 py-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
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
              <Button
              onClick={formhandler}
              isLoading = {isLoading}
              >Generate Room Design</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
