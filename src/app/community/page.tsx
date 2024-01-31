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
          <h1 className="text-8xl font-bold">Community</h1>
          <p className="py-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamcot. 👋
          </p>
        </div>
      </div>
    </div>
  );
}
