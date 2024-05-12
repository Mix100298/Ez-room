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

  const handleRemovePrevent = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div
      key={index}
      className="inline-flex items-center max-w-[175px] p-2 text-sm font-medium text-blue-700 bg-white rounded dark:bg-gray-700 dark:text-white"
    >
      <p className="line-clamp-2 ">{data?.english_name}</p>
      <button
        className="inline-flex items-center mt-1 ms-3 text-xl text-white bg-transparent rounded-sm hover:bg-gray-600 hover:text-white"
        onClick={() => {
          handleRemove(id);
          handleRemovePrevent(event as Event);
        }}
      >
        <i className="fi fi-sr-cross-small"></i>
      </button>
    </div>
  );
}
