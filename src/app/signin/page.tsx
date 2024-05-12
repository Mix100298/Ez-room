"use client";
import React, { useState } from "react";
import Link from "next/link";

import Button from "@/components/button";
import type { Metadata } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Alertbox, { AlertType } from "@/components/alertbox";
// export const metadata: Metadata = {
//   title: "Sign in",
//   description: "Sign in page",
// };

interface InputForm {
  email: string;
  password: string;
}

export default function Page() {
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    type: AlertType;
  } | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const router = useRouter();
  const formHandle: SubmitHandler<InputForm> = (data) => {
    const { email, password } = data;
    axios
      .post(
        process.env.backendUrl + "/api/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((result) => {
        setAlertMessage({ message: "Login Success", type: AlertType.Success });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setAlertMessage({
            message: "Login failed. Invalid email or password.",
            type: AlertType.Error,
          });
        } else {
          setAlertMessage({
            message: "An error occurred while logging in.",
            type: AlertType.Error,
          });
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          setAlertMessage(null);
        }, 2000);
        setTimeoutId(newTimeoutId);
      });
  };

  return (
    <main className="min-h-screen">
      <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded shadow md:mt-0 max-w-md xl:p-0 min-w-[300px]">
            <div className="p-6 space-y-4 md:space-y-6 xl:p-8">
              <h1 className="font-medium text-5xl text-center">Sign in</h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(formHandle)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                    })}
                    type="email"
                    id="email"
                    className={`bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="example@mail.com"
                    autoComplete="off"
                    aria-invalid={errors.email ? "true" : "false"}
                  ></input>
                  {errors.email && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                    })}
                    type="password"
                    id="password"
                    className={`bg-white border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="••••••••••••••••"
                    autoComplete="off"
                    aria-invalid={errors.password ? "true" : "false"}
                  ></input>
                  {errors.password && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="grid text-center gap-3">
                  <Button type="submit">Sign in</Button>
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
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertMessage && (
        <Alertbox message={alertMessage.message} type={alertMessage.type} />
      )}{" "}
    </main>
  );
}

// const InpurFrom = [
//   {
//     name: "Email",
//     id: "email",
//     type: "email",
//     placeholder: "name@email.com",
//   },
//   {
//     name: "Password",
//     id: "password",
//     type: "password",
//     placeholder: "••••••••",
//   },
// ]
