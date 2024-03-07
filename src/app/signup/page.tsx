import React from "react";
import Link from "next/link";
import Input from "@/app/components/input";
import Select from "@/app/components/select";
import Button from "@/app/components/button";
import Radio from "@/app/components/radio";

export default function Page() {
  const InpurFrom = [
    {
      name: "Your email",
      id: "email",
      type: "email",
      placeholder: "name@email.com",
    },
    {
      name: "Password",
      id: "password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      name: "Confirm password",
      id: "confirm password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      name: "First Name",
      id: "first-name",
      type: "text",
      placeholder: "first name",
    },
    {
      name: "Last Name",
      id: "last-name",
      type: "text",
      placeholder: "last name",
    },
  ];

  const RadioFrom = [
    { id: "term-male", name: "Male" },
    { id: "term-female", name: "Female" },
    { id: "term-other", name: "Other" },
  ];

  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded shadow md:mt-0 max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 xl:p-8">
            <h1 className="font-medium text-5xl text-center">Sign up</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {/* InpurFrom */}
              {InpurFrom.map((input,idx) => (
                <Input
                  key={idx}
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
              <Select
                id={"date-of-birth"}
                name={"Date of Birth"}
                options={["Day", "Month", "Year"]}
              />
              <div className="flex items-start w-full gap-5">
                {/* RadioFrom */}
                {RadioFrom.map((radio,idx) => (
                  <Radio key={idx} id={radio.id} name={radio.name} />
                ))}
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
