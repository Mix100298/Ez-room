import React from "react";
import Link from "next/link";
import Card from "@/app/components/card";

export default function Page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="flex justify-between items-end">
          <Link href="/community">
            <h1 className="font-bold text-6xl">Post</h1>
          </Link>
          <svg
            className="fill-slate-500 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z" />
          </svg>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white h-[512px] w-[512px] rounded">
            <img
              className="rounded-t"
              src="https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg"
            ></img>
          </div>
          <div className="bg-white h-[512px] w-[428px] rounded p-5">
            <div className="grid gap-5">
              <h1 className="font-bold text-2xl">My dream bathroom</h1>
              <div className="max-w-xl bg-white rounded-xl flex items-center space-y-0 space-x-6">
                <img
                  className="block h-10 rounded-full mx-0 shrink-0"
                  src="https://i.pravatar.cc/150?img=37"
                  alt="Woman's Face"
                />
                <div className="text-left space-y-2">
                  <div className="space-y-0.5">
                    <p className="text-sm text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-sm text-slate-500 font-medium">May 03</p>
                  </div>
                </div>
              </div>
              <p className=" text-slate-500 text-md">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum."
              </p>
              <h1 className="font-bold text-xl text-indigo-500">
                Style : Modern
              </h1>
              <h1 className="font-bold text-xl text-indigo-500">
                Type : Bathroom
              </h1>
              <h1 className="font-bold text-xl text-indigo-500">
                Budget : 250,000
              </h1>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-4xl">Furniture</h1>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
        </div>
        <h2 className="font-bold text-2xl pr-10">
          More article by this author
        </h2>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
