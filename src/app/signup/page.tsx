"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/button";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import axios, { AxiosError } from "axios";
import Alertbox, { AlertType } from "@/components/alertbox";

// export const metadata: Metadata = {
//   title: "Sign up",
//   description: "Sign up page",
// };

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  sex: "Male" | "Felame" | "Other" | "";
  file: FileList | null;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      file: null,
    },
  });

  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    type: AlertType;
  } | null>(null);

  const formHandle: SubmitHandler<IFormInput> = async (formdata) => {
    console.log("Form Data:", formdata); // Add this line to log the formData
    let data = {
      email: formdata.email,
      password: formdata.password,
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      dateOfBirth: formdata.dateOfBirth,
      sex: formdata.sex,
    };
    const file = formdata.file;

    if (formdata.password !== formdata.confirmPassword) {
      setAlertMessage({
        message: "Password not matched",
        type: AlertType.Error,
      });
      setTimeout(() => {
        setAlertMessage(null);
      }, 2000);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          data: data,
          file: file,
        },
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        }
      );
      if (response.status === 201) {
        setAlertMessage({
          message: "Register Success",
          type: AlertType.Success,
        });
        setTimeout(() => {
          setAlertMessage(null);
          router.push("/signin");
        }, 2000);
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        setAlertMessage({
          message: error.response.data.message,
          type: AlertType.Error,
        });
        setTimeout(() => {
          setAlertMessage(null);
        }, 2000);
      }
    }
  };

  const RadioFrom = [
    { id: "term-male", name: "Male" },
    { id: "term-female", name: "Female" },
    { id: "term-other", name: "Other" },
  ];

  const RegexHandler = (test: string, regex: RegExp) => {
    return regex.test(test);
  };

  const passwordRegex = /^.{8,}$/;
  const nameRegex = /^(?!\s+$).{1,40}$/;
  const firstname = watch("firstname");
  const lastname = watch("lastname");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <main className="min-h-screen">
      <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 p-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 min-w-[300px]">
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
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      setValueAs: (value) => value.trim(),
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
                      pattern: passwordRegex,
                    })}
                    type="password"
                    id="password"
                    className={`bg-white border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="minimum 8 characters"
                    autoComplete="off"
                    aria-invalid={errors.password ? "true" : "false"}
                  ></input>
                  {errors.password && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.password.message}
                    </p>
                  )}
                  {!RegexHandler(password, passwordRegex) &&
                    dirtyFields.password && (
                      <p className="text-sm text-red-500 w-full p-0.75">
                        Password minimum 8 characters
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Confirm Password <span className="text-red-500">*</span>
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
                    placeholder="the same as password"
                    autoComplete="off"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                  ></input>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  {!(password == confirmPassword) &&
                    dirtyFields.confirmPassword && (
                      <p className="text-sm text-red-500 w-full p-0.75">
                        Password not matched.
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Firstname <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      pattern: nameRegex,
                      // setValueAs: (value) => value.trim(),
                    })}
                    type="text"
                    id="firstname"
                    className={`bg-white border ${
                      errors.firstname ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="your account firstname"
                    autoComplete="off"
                    aria-invalid={errors.firstname ? "true" : "false"}
                  ></input>
                  {errors.firstname && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.firstname.message}
                    </p>
                  )}
                  {!RegexHandler(firstname, nameRegex) &&
                    dirtyFields.firstname && (
                      <p className="text-sm text-red-500 w-full p-0.75">
                        Firstname must not contains only whitespaces. Minimum 1
                        to 40 characters.
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Lastname <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      pattern: nameRegex,
                      // setValueAs: (value) => value.trim(),
                    })}
                    type="text"
                    id="lastname"
                    className={`bg-white border ${
                      errors.lastname ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="your account lastname"
                    autoComplete="off"
                    aria-invalid={errors.lastname ? "true" : "false"}
                  ></input>
                  {errors.lastname && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.lastname.message}
                    </p>
                  )}
                  {!RegexHandler(lastname, nameRegex) &&
                    dirtyFields.lastname && (
                      <p className="text-sm text-red-500 w-full p-0.75">
                        Lastname must not contains only whitespaces. Minimum 1
                        to 40 characters.
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Date of Birth (Optional)
                  </label>
                  <input
                    {...register("dateOfBirth", {
                      required: {
                        value: false,
                        message: "This field is required.",
                      },
                      setValueAs: (value) =>
                        value ? new Date(value) : new Date("2024-05-13"),
                      // valueAsDate: true,
                    })}
                    type="date"
                    id="dateOfBirth"
                    className={`bg-white border ${
                      errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="Date of Birth"
                    autoComplete="off"
                    aria-invalid={errors.dateOfBirth ? "true" : "false"}
                  ></input>
                  {errors.dateOfBirth && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="sex"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Sex (Optional)
                  </label>
                  <select
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5 "
                    id="sex"
                    defaultValue={""}
                    {...register("sex")}
                  >
                    <option value="" disabled hidden>
                      Select Sex
                    </option>
                    {RadioFrom.map((radio, idx) => (
                      <option key={idx} value={radio.name} id={radio.id}>
                        {radio.name}
                      </option>
                    ))}
                  </select>

                  {errors.sex && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.sex.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="avtar"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Upload Avatar (Optional)
                  </label>
                  <input
                    {...register("file", {
                      validate: (value) => {
                        const acceptedFormats = [
                          "png",
                          "jpeg",
                          "jpg",
                          "webp",
                          "svg",
                          "gif",
                        ];
                        console.log(value);
                        if (!value || !value[0].name) return true;
                        const file = value.item(0);
                        if (!file) {
                          return true;
                        }
                        const fileExtension = file.name.split(".").pop();
                        if (fileExtension == undefined) {
                          return true;
                        }
                        const fileExtensionLowerCase =
                          fileExtension.toLowerCase();
                        if (!acceptedFormats.includes(fileExtensionLowerCase)) {
                          return "Invalid file format. Only image files are allowed.";
                        }
                        return true;
                      },
                    })}
                    type="file"
                    id="avatar"
                    accept="image/*"
                    className={`bg-white border ${
                      errors.file ? "border-red-500" : "border-gray-300"
                    }  text-gray-700 sm:text-sm rounded w-full p-2.5`}
                    placeholder="Date of Birth"
                    autoComplete="off"
                    aria-invalid={errors.file ? "true" : "false"}
                  ></input>
                  {errors.file && (
                    <p className="text-sm text-red-500 w-full p-0.75">
                      {errors.file.message}
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
      {alertMessage && (
        <Alertbox message={alertMessage.message} type={alertMessage.type} />
      )}{" "}
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
