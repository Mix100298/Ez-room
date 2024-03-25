"use client";
import React from "react";
import Link from "next/link";
import Button from "@/app/components/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up page",
};

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  sex: "Male" | "Felame" | "Other" | null;
  avatar: File | null;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      avatar: null,
    },
  });
  const router = useRouter();

  const formHandle: SubmitHandler<IFormInput> = async (formdata) => {
    // const email = e.target[0].value;
    // const password = e.target[1].value;
    // const confirmPassword = e.target[2].value;
    // const firstname = e.target[3].value;
    // const lastname = e.target[4].value;
    // const dateOfBirth = e.target[5].value;
    // const sex = e.target[6].value;
    // const avatar = e.target[7].files[0];

    let data = {
      email: formdata.email,
      password: formdata.password,
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      dateOfBirth: formdata.dateOfBirth,
      sex: formdata,
    };
    const { avatar } = formdata;

    if (formdata.password !== formdata.confirmPassword) {
      alert("Password and Confirm Password must be the same");
      return;
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
          alert("Sign up success");
          router.push("/signin");
          return;
        }
        alert("Sign up failed");
      });
  };
  
  const RadioFrom = [
    { id: "term-male", name: "Male" },
    { id: "term-female", name: "Female" },
    { id: "term-other", name: "Other" },
  ];

  const passwordRegexHandler = (password: string, regex: RegExp) => {
    return regex.test(password);
  };

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <main className="min-h-screen">
      <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded shadow md:mt-0 max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 xl:p-8">
              <h1 className="font-medium text-5xl text-center">Sign up</h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(formHandle)}
                encType="multipart/form-data"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
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
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      pattern: passwordRegex,
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
                  {!passwordRegexHandler(password, passwordRegex) && (
                    <p className="text-sm text-red-500 w-full p-2.5">
                      Password must be 8+ characters with uppercase, lowercase,
                      number, and special symbol @!$%*&?
                    </p>
                  )}
                  {errors.password && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      pattern: passwordRegex,
                    })}
                    type="password"
                    id="confirmPassword"
                    className={`bg-white border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="••••••••••••••••"
                    autoComplete="off"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                  ></input>
                  {!(password == confirmPassword) && confirmPassword != "" && (
                    <p className="text-sm text-red-500 w-full p-2.5">
                      Password not matched.
                    </p>
                  )}
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      minLength: 2,
                      maxLength: 40,
                    })}
                    type="text"
                    id="firstname"
                    className={`bg-white border ${
                      errors.firstname ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="First Name"
                    autoComplete="off"
                    aria-invalid={errors.firstname ? "true" : "false"}
                  ></input>
                  {errors.firstname && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      minLength: 2,
                      maxLength: 40,
                    })}
                    type="text"
                    id="lastname"
                    className={`bg-white border ${
                      errors.lastname ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="Last Name"
                    autoComplete="off"
                    aria-invalid={errors.lastname ? "true" : "false"}
                  ></input>
                  {errors.lastname && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    {...register("dateOfBirth", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      valueAsDate: true,
                    })}
                    type="date"
                    id="dateOfBirth"
                    className={`bg-white border ${
                      errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="Date of Birth"
                    autoComplete="off"
                    aria-invalid={errors.lastname ? "true" : "false"}
                  ></input>
                  {errors.dateOfBirth && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="sex"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Sex
                  </label>
                  <select
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5 "
                    id="sex"
                    {...register("sex", { required: true })}
                  >
                    <option value="" disabled selected hidden>
                      Please Choose...
                    </option>
                    {RadioFrom.map((radio, idx) => (
                      <option key={idx} value={radio.name} id={radio.id}>
                        {radio.name}
                      </option>
                    ))}
                  </select>

                  {errors.sex && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.sex.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="avtar"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Upload Avatar
                  </label>
                  <input
                    {...register("avatar")}
                    type="file"
                    id="avatar"
                    className={`bg-white border ${
                      errors.avatar ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="Date of Birth"
                    autoComplete="off"
                    aria-invalid={errors.avatar ? "true" : "false"}
                  ></input>
                  {errors.avatar && (
                    <p className="text-sm text-red-500 rounded w-full p-2.5">
                      {errors.avatar.message}
                    </p>
                  )}
                </div>

                <div className="grid text-center gap-3">
                  <Button type="submit">Sign up</Button>
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
    </main>
  );
}

// {InputFrom.map((input, idx) => (
//   <Input
//     key={idx}
//     name={input.name}
//     id={input.id}
//     type={input.type}
//     placeholder={input.placeholder}
//     //required={true}
//   />
// ))}
// <Input
//   id={"date-of-birth"}
//   name={"Date of Birth"}
//   type={"date"}
//   placeholder="Date of Birth"
// />
// <div className="flex flex-col items-start w-full">
//   {/* RadioFrom */}
//   <label
//     htmlFor="sex"
//     className="block mb-2 text-sm font-medium text-gray-700"
//   >
//     Sex
//   </label>
//   <select name="Sex" className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5 "  id="sex">
//   <option value="" disabled selected hidden>Please Choose...</option>
//     {RadioFrom.map((radio, idx) => (
//       <option key={idx} value={radio.name} id={radio.id}>
//         {radio.name}
//       </option>
//     ))}
//   </select>
// </div>
// <Input
//   id={"upload-file"}
//   name={"Avatar Image"}
//   type={"file"}
//   placeholder="upload your avatar"
// />

// <div className="grid text-center gap-3">
//   <Button type="submit" children={"Sign up"}></Button>
//   <p className="text-sm font-light text-blue-400">
//     Already a user?
//     <Link
//       href="/signin"
//       className="font-medium underline hover:underline text-blue-400 hover:text-blue-500 ml-1"
//     >
//       Sign in
//     </Link>
//   </p>
// </div>

// const InputFrom = [
//   {
//     name: "Your email",
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
//   {
//     name: "Confirm password",
//     id: "confirm password",
//     type: "password",
//     placeholder: "••••••••",
//   },
//   {
//     name: "First Name",
//     id: "first-name",
//     type: "text",
//     placeholder: "first name",
//   },
//   {
//     name: "Last Name",
//     id: "last-name",
//     type: "text",
//     placeholder: "last name",
//   },
// ];

// const RadioFrom = [
//   { id: "term-male", name: "Male" },
//   { id: "term-female", name: "Female" },
//   { id: "term-other", name: "Other" },
// ];
