import React from "react";
import Link from "next/link";
import Button from "@/app/components/button";

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="font-medium text-5xl text-center">Sign up</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="name@email.com"
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="••••••••"
                  autoComplete="off"
                ></input>
              </div>
            </form>
            <div className="grid text-center gap-3">
              <Button>Sign in</Button>
              <p className="text-sm font-light text-blue-400">
                Not Register?
                <Link
                  href="/signup"
                  className="font-medium underline hover:underline text-blue-400 hover:text-blue-500 ml-1"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
