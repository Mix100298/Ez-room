import React from "react";
import Button from "@/app/components/button";

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="font-bold text-5xl text-center">Sign up</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
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
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="••••••••"
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="first name"
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder="last name"
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="date-of-birth"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Date of Birth
                </label>
                <div className="flex gap-10">
                  <select
                    id="date-of-birth"
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded p-2.5 "
                  >
                    <option hidden>Day / Month / Year</option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5 ">
                  <input
                    id="term-male"
                    aria-describedby="term-male"
                    type="checkbox"
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm p-2.5"
                  ></input>
                </div>
                <div className="ml-3 text-sm mr-5">
                  <label htmlFor="term-male" className=" text-gray-700 ">
                    Male
                  </label>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="term-female"
                    aria-describedby="term-female"
                    type="checkbox"
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm p-2.5"
                  ></input>
                </div>
                <div className="ml-3 text-sm mr-5">
                  <label htmlFor="term-female" className=" text-gray-700">
                    Female
                  </label>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="term-other"
                    aria-describedby="term-other"
                    type="checkbox"
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm p-2.5"
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="term-other" className=" text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </form>
            <div className="grid text-center gap-3">
              <Button>Sign up</Button>
              <p className="text-sm font-light text-blue-400">
                Already a user?
                <a
                  href="#"
                  className="font-medium underline hover:underline text-blue-400 hover:text-blue-500 ml-1"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
