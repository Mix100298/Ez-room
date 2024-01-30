import React from "react";
import Link from "next/link";
import Input from "@/app/components/input";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import Card from "@/app/components/card";

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
              <div className="flex gap-10 py-2.5">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="Search"
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  name="filter"
                  id="filter"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="Filter"
                  autoComplete="off"
                ></input>
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
