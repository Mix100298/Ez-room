import React from "react";
import Button from "@/app/components/button";
import Searchfilter from "@/app/components/searchfilter";
import Communitycard from "@/app/components/communitycard";

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="grid">
          <h1 className="text-8xl font-bold">Community</h1>
          <p className="mt-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamcot. 👋
          </p>
        </div>
        <div className="flex justify-between gap-10">
          <Searchfilter />
          <div className="w-60">
            <Button children={"My posts"} />
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          <Communitycard />
          <Communitycard />
          <Communitycard />
        </div>
        <div className="flex items-center justify-center ">
          <Button children={"Show more"} />
        </div>
      </div>
    </div>
  );
}
