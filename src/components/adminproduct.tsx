"use client"
import React, { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import type { Furniture } from "@/types/furniture"
import Button from "@components/button"
import { useRouter } from "next/navigation"
import axios from "axios"

interface ProductProps {
  mode: "add" | "edit" | "delete"
  data: Furniture
  onCanceled?: () => void
}

export default function AdminProduct({
  data,
  mode = "add",
  onCanceled,
}: ProductProps) {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Furniture>({
    defaultValues: { ...data },
  })
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setValue("english_name", data.english_name)
    setValue("thai_name", data.thai_name)
    setValue("url", data.url)
    setValue("image", data.image)
    setValue("description", data.description)
    setValue("price", data.price)
    setValue("brand", data.brand)
    setValue("category", data.category)
  }, [data])

  console.table(data)
  const onCreated: SubmitHandler<Furniture> = async (formData: Furniture) => {
    console.log(data)
    setIsLoading(true)
    try {
      const result = await axios.post(
        process.env.backendUrl + "/api/oldFurnitures/create",
        {
          ...formData,
          price: Number(formData.price).valueOf(),
        },
        {
          withCredentials: true,
        }
      )
      window.location.reload()
      router.push("/product")
      onCanceled && onCanceled()
      console.log(result)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  const onUpdate: SubmitHandler<Furniture> = async (formData: Furniture) => {
    setIsLoading(true)
    try {
      const result = await axios.patch(
        process.env.backendUrl + "/api/furnitures/update/" + data._id,
        {
          ...formData,
          _id: undefined,
          price: Number(formData.price).valueOf(),
        },
        {
          withCredentials: true,
        }
      )
      window.location.reload()
      router.push("/product")
      onCanceled && onCanceled()
      console.log(result)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }
  const onDelete: SubmitHandler<Furniture> = async (formData: Furniture) => {
    console.log(formData)
    setIsLoading(true)
    try {
      const result = await axios.delete(
        process.env.backendUrl + "/api/furnitures/delete/" + data._id,
        { withCredentials: true }
      )
      window.location.reload()
      router.push("/product")
      onCanceled && onCanceled()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  console.table({ ...watch() })

  if (mode === "add")
    return (
      <div className="grid gap-10 min-w-[500px] ">
        <h1 className="font-bold text-4xl">Add to product queue</h1>
        <div className="bg-white w-full h-full p-5 shadow-md rounded-md">
          <div className="flex">
            <form
              className="grid w-full space-y-5"
              onSubmit={handleSubmit(onCreated)}
            >
              <div className="flex gap-10">
                <img
                  className="h-52 w-52 rounded-md"
                  src={watch("image") || "https://via.placeholder.com/150"}
                />
                <div className="space-y-8 w-full">
                  <div>
                    <label
                      htmlFor={register("english_name").name}
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      English Name
                    </label>
                    <input
                      {...register("english_name", { required: true })}
                      type="text"
                      name={register("english_name").name}
                      id={register("english_name").name}
                      className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                      placeholder={"English Name"}
                      autoComplete="off"
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor={register("thai_name").name}
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Thai Name
                    </label>
                    <input
                      {...register("thai_name", { required: true })}
                      type="text"
                      name={register("thai_name").name}
                      id={register("thai_name").name}
                      className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                      placeholder={"Thai Name"}
                      autoComplete="off"
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor={register("url").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  URL
                </label>
                <input
                  {...register("url", { required: true })}
                  type="text"
                  name={register("url").name}
                  id={register("url").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder={"Product URL"}
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor={register("image").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  {...register("image", { required: true })}
                  type="text"
                  name={register("image").name}
                  id={register("image").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder={"Image URL"}
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor={register("description").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  id={register("description").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5 min-h-[100px] max-h-[300px] "
                  placeholder={"Product Detail"}
                ></textarea>
              </div>
              <div className="flex gap-[10px]">
                <div>
                  <label
                    htmlFor={register("price").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Price (THB)
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    name={register("price").name}
                    id={register("price").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Price"}
                    autoComplete="off"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor={register("brand").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Brand
                  </label>
                  <input
                    {...register("brand", { required: true })}
                    type="text"
                    name={register("brand").name}
                    id={register("brand").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Brand"}
                    autoComplete="off"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor={register("category").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    name={register("category").name}
                    id={register("category").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Category"}
                    autoComplete="off"
                  ></input>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-between gap-6">
                  <Button isDisabled={isLoading} type="reset">
                    Reset
                  </Button>
                  <Button isLoading={isLoading} type="submit">
                    Add to product queue
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  if (mode === "edit")
    return (
      <div className="grid gap-10 min-w-[500px] ">
        <h1 className="font-bold text-4xl">Edit Product</h1>
        <div className="bg-white w-full h-full p-5 shadow-md rounded-md">
          <div className="flex">
            <form
              className="grid w-full space-y-5"
              onSubmit={handleSubmit(onUpdate)}
            >
              <div className="flex gap-10">
                <img
                  className="h-52 w-52 rounded-md"
                  src={watch("image") || "https://via.placeholder.com/150"}
                />
                <div className="space-y-8 w-full">
                  <div>
                    <label
                      htmlFor={register("english_name").name}
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      English Name
                    </label>
                    <input
                      {...register("english_name", { required: true })}
                      type="text"
                      name={register("english_name").name}
                      id={register("english_name").name}
                      className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                      placeholder={"English Name"}
                      autoComplete="off"
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor={register("thai_name").name}
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Thai Name
                    </label>
                    <input
                      {...register("thai_name", { required: true })}
                      type="text"
                      name={register("thai_name").name}
                      id={register("thai_name").name}
                      className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                      placeholder={"Thai Name"}
                      autoComplete="off"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor={register("url").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  URL
                </label>
                <input
                  {...register("url", { required: true })}
                  type="text"
                  name={register("url").name}
                  id={register("url").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder={"Product URL"}
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor={register("image").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  {...register("image", { required: true })}
                  type="text"
                  name={register("image").name}
                  id={register("image").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder={"Image URL"}
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor={register("description").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  id={register("description").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5 min-h-[100px] max-h-[300px] "
                  placeholder={"Product Detail"}
                ></textarea>
              </div>
              <div className="flex gap-[10px]">
                <div>
                  <label
                    htmlFor={register("price").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Price (THB)
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    name={register("price").name}
                    id={register("price").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Price"}
                    autoComplete="off"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor={register("brand").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Brand
                  </label>
                  <input
                    {...register("brand", { required: true })}
                    type="text"
                    name={register("brand").name}
                    id={register("brand").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Brand"}
                    autoComplete="off"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor={register("category").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    name={register("category").name}
                    id={register("category").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Category"}
                    autoComplete="off"
                  ></input>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-between gap-6">
                  {onCanceled && <Button onClick={onCanceled}>Cancel</Button>}
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  if (mode === "delete")
    return (
      <div className="grid gap-10 min-w-[500px] ">
        <h1 className="font-bold text-4xl">Delete Product</h1>
        <div className="bg-white w-full h-full p-5 shadow-md rounded-md">
          <div className="flex">
            <form
              className="grid w-full space-y-5"
              onSubmit={handleSubmit(onDelete)}
            >
              <div className="flex gap-10">
                <img
                  className="h-52 w-52 rounded-md"
                  src={watch("image") || "https://via.placeholder.com/150"}
                />
                <div className="space-y-8 w-full">
                  <div>
                    <label
                      htmlFor={register("english_name").name}
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      English Name
                    </label>
                    <input
                      {...register("english_name")}
                      type="text"
                      name={register("english_name").name}
                      id={register("english_name").name}
                      className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                      placeholder={"English Name"}
                      autoComplete="off"
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor={register("thai_name").name}
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Thai Name
                    </label>
                    <input
                      {...register("thai_name")}
                      type="text"
                      name={register("thai_name").name}
                      id={register("thai_name").name}
                      className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                      placeholder={"Thai Name"}
                      autoComplete="off"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor={register("url").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  URL
                </label>
                <input
                  {...register("url")}
                  type="text"
                  name={register("url").name}
                  id={register("url").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder={"Product URL"}
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor={register("image").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  {...register("image")}
                  type="text"
                  name={register("image").name}
                  id={register("image").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                  placeholder={"Image URL"}
                  autoComplete="off"
                ></input>
              </div>
              <div>
                <label
                  htmlFor={register("description").name}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  id={register("description").name}
                  className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5 min-h-[100px] max-h-[300px] "
                  placeholder={"Product Detail"}
                ></textarea>
              </div>
              <div className="flex gap-[10px]">
                <div>
                  <label
                    htmlFor={register("price").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Price (THB)
                  </label>
                  <input
                    {...register("price")}
                    type="number"
                    name={register("price").name}
                    id={register("price").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Price"}
                    autoComplete="off"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor={register("brand").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Brand
                  </label>
                  <input
                    {...register("brand")}
                    type="text"
                    name={register("brand").name}
                    id={register("brand").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Brand"}
                    autoComplete="off"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor={register("category").name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <input
                    {...register("category")}
                    type="text"
                    name={register("category").name}
                    id={register("category").name}
                    className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
                    placeholder={"Product Category"}
                    autoComplete="off"
                  ></input>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-between gap-6">
                  {onCanceled && <Button onClick={onCanceled}>Cancel</Button>}
                  <Button isLogin={true} type="submit">
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
