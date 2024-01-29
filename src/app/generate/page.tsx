import React from "react";
import Link from "next/link";
import Button from "@/app/components/button";

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 mt-10">
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
        <div className="flex justify-between">
          <div className="grid gap-10">
            <div className="bg-white h-64 w-[428px] rounded"></div>
            <div className="bg-white h-[400px] w-[428px] rounded"></div>
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
