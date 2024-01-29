import React from "react";
import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 mt-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[450px]">
            <h1 className="font-bold text-4xl pr-10">
              Create a dream room using AI
            </h1>
            <div className="mt-5">
              <p>Design your room with Artificial Intelligence</p>
            </div>
            <div className="bg-gray-300 h-1 mt-5"></div>
            <Link href="/generate">
              <div className="mt-5 w-1/3">
                <Button>Generate Room</Button>
              </div>
            </Link>
          </div>
          <div className="flex-1 min-w-[480px]">
            <div className="flex flex-wrap justify-center">
              <img
                className="h-60 w-60 rounded-md"
                src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
              ></img>
              <img
                className="h-60 w-60 rounded-md"
                src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid gap-5 px-10 text-center">
          <h1 className="font-bold text-4xl">
            “Ignite an infinite wellspring of creativity to personalize your
            living spaces.”
          </h1>
          <p>
            Design your room effortlessly with the help of Artificial
            Intelligence.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="flex-1 gap-10 min-w-[240px]">
            <div className="grid gap-10">
              <img
                className="min-h-[240px] rounded-md"
                src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
              ></img>
              <img
                className="min-h-[240px] rounded-md"
                src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
              ></img>
            </div>
          </div>
          <div className="grid text-center gap-10 w-[700px]">
            <div className="flex items-center gap-10">
              <div className="">
                <svg
                  className="w-20 h-20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <div className="grid items-center">
                <h1 className="font-bold text-2xl">HEAD 1</h1>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <svg
                  className="w-20 h-20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <div className="grid items-center">
                <h1 className="font-bold text-2xl">HEAD 2</h1>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <svg
                  className="w-20 h-20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <div className="grid items-center">
                <h1 className="font-bold text-2xl">HEAD 3</h1>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 px-10 text-center">
          <p>
            Explore a myriad of styles as you embark on a journey of creativity.
          </p>
          <h1 className="font-bold text-4xl">
            “Unlock creativity through diverse styles.”
          </h1>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="grid gap-5 text-center">
            <img
              className="h-56 w-56 rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
            <h1 className="font-bold text-4xl">Minimal</h1>
          </div>
          <div className="grid gap-5 text-center">
            <img
              className="h-56 w-56 rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
            <h1 className="font-bold text-4xl">Modern</h1>
          </div>
          <div className="grid gap-5 text-center">
            <img
              className="h-56 w-56 rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
            <h1 className="font-bold text-4xl">Luxury </h1>
          </div>
          <div className="grid gap-5 text-center">
            <img
              className="h-56 w-56 rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
            <h1 className="font-bold text-4xl">Bohemian</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[450px]">
            <img
              className="rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
          </div>
          <div className="grid gap-5 flex-1 min-w-[450px]">
            <h1 className="font-bold text-4xl">
              Simplify your search effortlessly.
            </h1>
            <p>Helps you easily find what you're looking for.</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
