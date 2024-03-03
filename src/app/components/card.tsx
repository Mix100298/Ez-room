import React from "react";

export default function Card() {
  return (
    <div className="h-full w-full shadow-md rounded-md">
      <div className="grid ">
        <img
          className="rounded-t"
          src="https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg"
        ></img>
      </div>
      <div className="grid p-2">
        <h1 className="text-lg font-bold">Lincoln full base</h1>
        <label className="text-sm text-gray-700">5000 Bath</label>
      </div>
    </div>
  );
}
