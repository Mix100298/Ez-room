"use client"
import React from "react"
import Link from "next/link"
import Input from "@/app/components/input"
import Select from "@/app/components/select"
import Button from "@/app/components/button"
import Radio from "@/app/components/radio"
import { useRouter } from "next/navigation"
import type { Metadata } from "next"
import axios from "axios"

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up page",
}

export default function Page() {
  const router = useRouter()
  const InputFrom = [
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
  ]

  const RadioFrom = [
    { id: "term-male", name: "Male" },
    { id: "term-female", name: "Female" },
    { id: "term-other", name: "Other" },
  ]

  const formHandle = async (e: any) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value
    const confirmPassword = e.target[2].value
    const firstname = e.target[3].value
    const lastname = e.target[4].value
    const dateOfBirth = e.target[5].value
    const sex = e.target[6].value
    const avatar = e.target[7].files[0]

    let data = {
      email,
      password,
      firstname,
      lastname,
      dateOfBirth,
      sex,
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password must be the same")
      return
    }

    axios
      .post(
        "http://localhost:5000/api/users/register",
        {
          data: data,
          file: avatar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          alert("Sign up success")
          router.push("/signin")
          return
        }
        alert("Sign up failed")
      })
  }

  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded shadow md:mt-0 max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 xl:p-8">
            <h1 className="font-medium text-5xl text-center">Sign up</h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formHandle}
              encType="multipart/form-data"
            >
              {/* InpurFrom */}
              {InputFrom.map((input, idx) => (
                <Input
                  key={idx}
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  //required={true}
                />
              ))}
              <Input
                id={"date-of-birth"}
                name={"Date of Birth"}
                type={"date"}
                placeholder="Date of Birth"
              />
              <div className="flex flex-col items-start w-full">
                {/* RadioFrom */}
                <label
                  htmlFor="sex"
                  className="block mb-2 text-sm font-medium text-gray-700 w-full"
                >
                  Sex
                </label>
                <select name="Sex" className="w-full border p-2" id="sex">
                  {RadioFrom.map((radio, idx) => (
                    <option key={idx} value={radio.name} id={radio.id}>
                      {radio.name}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                id={"upload-file"}
                name={"Avatar Image"}
                type={"file"}
                placeholder="upload your avatar"
              />

              <div className="grid text-center gap-3">
                <Button type="submit" children={"Sign up"}></Button>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
