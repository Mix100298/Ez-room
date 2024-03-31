import React, { useState } from "react";
import Button from "./button";

export default function Share() {
  const [Select, setSelect] = useState(true);
  return (
    <div className="h-full w-full bg-white rounded shadow-md">
      <div className="grid p-5 gap-5">
        <h1 className="text-2xl font-bold">Title & Description</h1>
        <input
          className="w-full h-10 rounded-md border border-gray-300 p-2"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        ></input>
        <input
          className="w-full h-20 rounded-md border border-gray-300 p-2"
          type="text"
          name="description"
          id="description"
          placeholder="Description"
        ></input>
      </div>
      <div className="flex w-full p-5 items-center justify-between">
        <div className="grid gap-2">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" onChange={() => setSelect(!Select)}className="sr-only peer" />
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Share this post
            </span>
          </label>

          {Select ? (
            <span className="text-sm ml-1">only you can see this post</span>
          ) : (
            <span className="text-sm ml-1">everyone can see this post</span>
          )}
        </div>
        <div className="w-20">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

/*
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Large toggle</span>
</label>
*/

/*
<div
            onClick={() => setSelect(!Select)}
            className={`${
              Select
                ? "flex w-40 h-10 bg-gray-100 rounded-full"
                : "flex w-40 h-10 bg-gray-700 rounded-full"
            }`}
          >
            <span
              onClick={() => setSelect(!Select)}
              className={`${
                Select
                  ? "w-20 h-10 bg-gray-700 rounded-full rounded-r-lg"
                  : "w-20 h-10 bg-gray-100 rounded-full rounded-r-lg"
              }`}
            >

              </span>
              </div>

              */
