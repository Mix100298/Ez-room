import React from "react";
import Link from "next/link";
import Input from "@/app/components/input";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import Card from "@/app/components/card";
import Searchfilter from "@/app/components/searchfilter";

export default function page() {
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
                  children={"Bedroom"}
                />
                <Select
                  id={"stly-room"}
                  name={"Choose room style"}
                  children={"Modern"}
                />
                <Input
                  id={"budget-room"}
                  name={"Choose your budget"}
                  type={"number"}
                  placeholder={"50,000"}
                  children={""}
                />
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
            <div className="bg-white h-[512px] w-[512px] rounded"></div>
            <div className="mt-10">
              <Button>Generate Room Design</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
