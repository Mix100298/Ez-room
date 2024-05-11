"use client";
import React from "react";
import { useState } from "react";
interface CardProps {
  id?: string;
  image?: string;
  name?: string;
  price?: number;
  url?: string;
  form?: any;
  isDisabled?: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  name,
  price,
  url,
  form,
  isDisabled,
}: CardProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div
        className={`relative h-full w-full shadow-md rounded-md ${
          checked ? "border-4 border-blue-500" : ""
        }`}
      >
        <input
          {...form}
          className="absolute w-full h-4/5 -top-1.5 opacity-0"
          type="checkbox"
          value={id}
          checked={checked}
          onChange={() => setChecked(!checked)}
          disabled={isDisabled}
        />
        <div className="grid">
          {image ? (
            <img
              className="rounded-t object-cover aspect-square w-full"
              src={image}
            />
          ) : (
            <img
              className="rounded-t"
              src="https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg"
            />
          )}
        </div>
        <div className="grid p-2">
          <a
            href={url}
            target="_blank"
            className="text-lg font-bold truncate hover:text-[#60A5FA]"
          >
            {name}
          </a>
          <p className="text-sm text-gray-700">{price} Baht</p>
        </div>
      </div>
    </>
  );
};

export default Card;
