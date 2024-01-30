import React from "react";

export default function Card() {
  return (
    <div className="h-[120px] w-[120px] shadow-md rounded-md">
      <div className="grid">
        <img
          className="h-20 w-[120px] rounded-t"
          src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
        ></img>
      </div>
      <div className="flex items-center justify-center p-1">
        <h1 className="text-sm font-bold text-indigo-500">Lincoln full base</h1>
      </div>
    </div>
  );
}
