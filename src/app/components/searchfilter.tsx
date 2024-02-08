"use client";
import React, { useState } from "react";
import Input from "./input";
import Checkbox from "./checkbox";

export default function Searchfilter() {
  const [filter, setFilter] = useState(false);

  return (
    <div className="flex gap-10">
      <div className=" fill-slate-500 text-gray-700 w-full ">
        <input
          className="bg-white border border-gray-300 text-gray-700 h-10 w-full sm:text-sm rounded p-2.5"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          autoComplete="off"
        />
      </div>
      <div className="flex w-full">
        <button
          id="dropdown"
          className="bg-white border w-full border-gray-300 text-gray-400 sm:text-sm rounded-md px-3 text-center inline-flex items-center justify-between"
          onClick={() => setFilter(!filter)}
          type="button"
        >
          Filter
          <svg
            className="fill-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </button>
        {/* Dropdown menu */}
        {filter && (
          <div className="absolute mt-12 w-60 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-gray-100">
            <div className="py-1">
              <h1 className="px-4 py-2 font-bold">Style</h1>
              <div className=" px-4 py-2">
                <Checkbox id="style-modern" name="Modern" />
              </div>
              <div className=" px-4 py-2">
                <Checkbox id="style-bohemain" name="Bohemain" />
              </div>
              <div className=" px-4 py-2">
                <Checkbox id="style-contemporary" name="Contemporary" />
              </div>
            </div>
            <div className="py-1">
              <h1 className="px-4 py-2 font-bold">Type</h1>
              <div className=" px-4 py-2">
                <Checkbox id="type-bedroom" name="Bedroom" />
              </div>
              <div className=" px-4 py-2">
                <Checkbox id="type-bathroom" name="Bathroom" />
              </div>
            </div>
            <div className="py-1">
              <h1 className="px-4 py-2 font-bold">Price</h1>
              <div className="flex px-4 py-2 space-x-4">
                <Input
                  id={"budget-from"}
                  name={"From"}
                  type={"number"}
                  placeholder={"0"}
                />
                <Input
                  id={"budget-to"}
                  name={"To"}
                  type={"number"}
                  placeholder={"100,000"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
