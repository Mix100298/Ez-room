import React, { useState } from "react"
import useFetch from "@/hooks/useFetch"
import { inter } from "@/app/ui/fonts"

interface Furniture {
  _id: string
  english_name: string
  image: string
  price: number
  url: string
}

interface PropsType {
  index: number
  id: string
  // english_name: string;
  //   image: string;
  //   price: number;
}

export default function FurnitureList({ id, index }: PropsType) {
  const { data, isLoading } = useFetch<Furniture>(
    process.env.backendUrl + "/api/furnitures/get/" + id
  )

  if (isLoading) {
    return (
      <tr>
        <td colSpan={4}>Loading...</td>
      </tr>
    )
  }

  return (
    <tr className="mb-2">
      <th className="text-center">{index + 1}</th>
      <td className="max-w-[100px]">
        <img
          src={data?.image}
          alt={data?.english_name}
          className="object-cover aspect-square"
        />
      </td>
      <td className="max-w-[200px]">
        <a
          href={data?.url}
          target="_blank"
          className="text-black hover:text-[#60A5FA]"
        >
          {data?.english_name}
        </a>
      </td>
      <td className="">{data?.price}</td>
    </tr>
  )
}
{
  /* <div className="flex justify-start gap-4 items-center">
      <img src={data?.image} alt={data?.english_name} className="w-[128px] h-[128px] object-cover aspect-square" />
      <a href = {data?.url}className="text-black hover:text-[#60A5FA]" >{data?.english_name} <span className="">{data?.price}</span></a>
    </div> */
}
