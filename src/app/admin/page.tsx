"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Searchfilter from "@/app/components/searchfilter";

export default function page() {
  const [select, setSelect] = useState(true);
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div className="flex gap-10">
          <div className="w-[200px]">
            <button
              className={`${
                select
                  ? "bg-blue-400 hover:bg-blue-500 text-white rounded-md font-bold h-[100px] w-full"
                  : "bg-white hover:bg-blue-500 text-black hover:text-white rounded-md font-bold h-[100px] w-full"
              }`}
              onClick={() => setSelect(true)}
            >
              Dashboard
            </button>
            <button
              className={`${
                select
                  ? "bg-white hover:bg-blue-500 text-black hover:text-white rounded-md font-bold h-[100px] w-full mt-10"
                  : "bg-blue-400 hover:bg-blue-500 text-white rounded-md font-bold h-[100px] w-full mt-10"
              }`}
              onClick={() => setSelect(false)}
            >
              Add product
            </button>
          </div>
          {/* select dashboard or add product */}
          {select ? (
            <div className="grid flex-1 gap-10">
              <div className="bg-white w-full h-[300px]"></div>
              <div className="bg-white w-full h-[200px]"></div>
              <div className="bg-white w-full h-[200px]"></div>
            </div>
          ) : (
            <div className="grid flex-1 gap-10">
              <div className="flex flex-wrap justify-between gap-10">
                <h1 className="font-bold text-4xl">Product table</h1>
                <Searchfilter />
              </div>
              <div className="grid gap-10 min-w-[500px]">
                <div className="bg-white w-full h-[500px]"></div>
                <div className="bg-white w-full h-[80px]"></div>
                <h1 className="font-bold text-4xl">Add Product</h1>
                <div className="bg-white w-full h-full p-5">
                  <div className="flex">
                    <form className="grid w-full space-y-5" action="#">
                      <div className="flex gap-10">
                        <img
                          className="h-52 w-52 rounded-md"
                          src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
                        ></img>
                        <div className="space-y-8 w-full">
                          <Input
                            id={"name-product-eng"}
                            name={"English name"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                          <Input
                            id={"name-product-thai"}
                            name={"Thai name"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                        </div>
                      </div>
                      <Input
                        id={"url-product"}
                        name={"Product URL"}
                        type={"text"}
                        placeholder={""}
                        children={""}
                      />
                      <div className="flex flex-wrap gap-10">
                        <div className="flex-1 w-full space-y-5">
                          <Input
                            id={"seller-product"}
                            name={"Seller"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                          <Input
                            id={"price-product"}
                            name={"Price"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                        </div>
                        <div className="flex-1 w-full space-y-5">
                          <Input
                            id={"brand-product"}
                            name={"Brand"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                          <Input
                            id={"category-product"}
                            name={"Category"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Button children={"Add product"} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
