import React from "react";

export default function Communitycard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden xl:max-w-full">
      <div className="xl:flex">
        <div className="xl:shrink-0">
          <img
            className="min-h-[300px] w-full object-cover xl:h-full xl:w-[300px]"
            src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            alt="Modern building architecture"
          />
        </div>
        <div className="grid p-8 gap-2.5">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2 ">
              <svg
                className="fill-slate-500 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M8 10v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v1h2v-1c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-13z" />
              </svg>
              <p className="text-sm text-slate-500 font-semibold">Public</p>
            </div>
            <div>
              <svg
                className="fill-slate-500 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z" />
              </svg>
            </div>
          </div>
          <div className="max-w-xl bg-white rounded-xl flex items-center space-y-0 space-x-6">
            <img
              className="block h-10 rounded-full mx-0 shrink-0"
              src="https://i.pravatar.cc/150?img=37"
              alt="Woman's Face"
            />
            <div className="text-left space-y-2">
              <div className="space-y-0.5">
                <p className="text-sm text-black font-semibold">
                  Erin Lindford
                </p>
                <p className="text-sm text-slate-500 font-medium">May 03</p>
              </div>
            </div>
          </div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Bedroom
          </div>
          <p className=" text-slate-500 text-sm">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
}
