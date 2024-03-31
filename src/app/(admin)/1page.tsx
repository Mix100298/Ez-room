"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Searchfilter from "@/components/searchfilter";
import Pagination from "../../components/pagination";
import Edit from "../../components/edit";


// not used forever

export default function Page() {
 

  const [Select, setSelect] = useState(true);

  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div className="flex gap-10">
          <div className="w-[200px]">
           
          </div>
        </div>
      </div>
    </main>
  );
}
