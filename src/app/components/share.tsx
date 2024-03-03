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
              {/*Span private and pubilc HERE!*/}
            </span>
          </div>
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
