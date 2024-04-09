"use client";
import Image from "next/image";
interface AvatarProps {
  src: string;
  alt: string;
  firstname: string;
}

export default function Avatar({ src, alt, firstname }: AvatarProps) {
  const firstChar = firstname.charAt(0).toUpperCase();
  return (
    <div className="w-9 h-9 ring-2 ring-blue-500 flex rounded-full justify-center items-center">
      {src ? (
        <img
          className="rounded-full  object-cover  w-full h-full"
          src={src}
          alt={alt ?? "avatar"}
          width={48}
          height={48}
        />
      ) : (
        <span className="font-bold text-1xl text-gray-700">{firstChar} </span>
      )}
    </div>
  );
}
