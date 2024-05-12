import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";

interface Furniture {
  _id: string;
  english_name: string;
}

interface PropsType {
  index: number;
  id: string;
  handleRemove: (idToRemove: string) => void;
}

export default function BadgeFurniture({ index, id, handleRemove }: PropsType) {
  const { data, isLoading } = useFetch<Furniture>(
    process.env.backendUrl + "/api/furnitures/get/" + id
  );

  if (isLoading) {
    return;
  }

  return (
    <div
      key={index}
      className="inline-flex items-center max-w-[116px] p-2 text-xs font-medium text-white bg-[#60A5FA] rounded dark:bg-gray-700 dark:text-white"
    >
      <p className="line-clamp-2 ">{data?.english_name}</p>
      <button
        className="inline-flex items-center mt-1 ms-3 text-xl text-white bg-transparent rounded-sm hover:bg-gray-600 hover:text-white"
        onClick={(e) => {
          handleRemove(id);
          e.preventDefault();
        }}
      >
        <i className="fi fi-sr-cross-small"></i>
      </button>
    </div>
  );
}
