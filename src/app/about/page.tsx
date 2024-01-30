import React from "react";

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <h1 className="font-bold text-9xl ">About us.</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <div>
            <img
              className="h-80 w-80 rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
          </div>
          <div className="grid flex-1 gap-10 min-w-[450px]">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
          </div>
        </div>
        <div>
          <img
            className="rounded-md"
            src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
          ></img>
        </div>
        <div className="flex flex-wrap gap-10 ">
          <div className="grid flex-1 gap-10">
            <h1 className="font-bold text-5xl">“ Ous work does make sense ”</h1>
            <p>Manggon rong meowza, Team leader</p>
          </div>
          <div className="flex-1">
            <img
              className="min-w-[500px] rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="grid flex-2 gap-10">
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
          </div>
          <div className="flex flex-2 items-center">
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
          </div>
          <div className="grid flex-1 gap-5 min-w-[500px]">
            <h1 className="font-bold text-5xl">THE TEAM.</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
            <div className="flex justify-between">
              <h2 className="font-bold text-4xl">1046</h2>
              <h2 className="font-bold text-4xl">1057</h2>
              <h2 className="font-bold text-4xl">1088</h2>
            </div>
            <div className="flex justify-between">
              <p>Phuettipol Jitjaroenkit</p>
              <p>Wichayut Chuaychukul</p>
              <p>Thanpisit Pisitpon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
