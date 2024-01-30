import React from "react";
import Link from "next/link";
import Input from "@/app/components/input";
import Select from "@/app/components/select";
import Button from "@/app/components/button";
import Checkbox from "@/app/components/checkbox";

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded shadow md:mt-0 max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 xl:p-8">
            <h1 className="font-medium text-5xl text-center">Sign up</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <Input
                name={"Your email"}
                id={"email"}
                type={"email"}
                placeholder={"name@email.com"}
                children={""}
              />
              <Input
                name={"Password"}
                id={"password"}
                type={"password"}
                placeholder={"••••••••"}
                children={""}
              />
              <Input
                name={"Confirm password"}
                id={"confirm-password"}
                type={"password"}
                placeholder={"••••••••"}
                children={""}
              />
              <Input
                name={"First Name"}
                id={"first-name"}
                type={"text"}
                placeholder={"first name"}
                children={""}
              />
              <Input
                name={"Last Name"}
                id={"last-name"}
                type={"text"}
                placeholder={"last name"}
                children={""}
              />
              <Select
                id={"date-of-birth"}
                name={"Date of Birth"}
                children={"Day / Month / Year"}
              />
              <div className="flex items-start w-full gap-5">
                <Checkbox id={"term-male"} name={"Male"} children={""} />
                <Checkbox id={"term-female"} name={"Female"} children={""} />
                <Checkbox id={"term-other"} name={"Other"} children={""} />
              </div>
            </form>
            <div className="grid text-center gap-3">
              <Button>Sign up</Button>
              <p className="text-sm font-light text-blue-400">
                Already a user?
                <Link
                  href="/signin"
                  className="font-medium underline hover:underline text-blue-400 hover:text-blue-500 ml-1"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
