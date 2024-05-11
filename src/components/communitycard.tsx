"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "./avatar";
import Like from "./like";

interface CommunitycardProps {
  _id?: string;
  image?: string;
  status?: string;
  firstname: string;
  lastname: string;
  avatar?: string;
  date?: string;
  title?: string;
  description?: string;
  totalLike?: number;
  isLiked?: boolean;
}

const Communitycard: React.FC<CommunitycardProps> = ({
  _id,
  image,
  status,
  firstname,
  lastname,
  avatar,
  date,
  title,
  description,
  totalLike,
  isLiked,
}: CommunitycardProps) => {
  const pathname = usePathname();

  // Format date for post
  function formatDate(date: string) {
    const newDate = new Date(date);
    const day = String(new Date(date).getDate()).padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = newDate.getMonth();

    return `${monthNames[monthIndex].substring(0, 3)} ${day}`;
  }

  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-full grid grid-cols-12">
      <Link href={`${pathname}/${_id}`} className="col-span-12">
        <div className="xl:flex ">
          <div className="xl:shrink-0">
            <img
              className="min-h-[300px] max-w-[400px] object-cover xl:h-full xl:w-[300px]"
              src={
                image
                  ? image
                  : "https://discussions.apple.com/content/attachment/660042040"
              }
              alt="Modern building architecture"
            />
          </div>
          <div className="grid p-8 gap-2.5 xl:min-w-[680px]">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2 ">
                {status === "public" ? (
                  <i className="fi fi-rr-unlock text-base"></i>
                ) : (
                  <i className="fi fi-rr-lock text-base"></i>
                )}
                <p className=" text-slate-500 font-semibold text-sm">
                  {status}
                </p>
              </div>
              {_id && <Like postId={_id} />}
            </div>
            <div className="max-w-xl bg-white rounded-xl flex items-center space-y-0 space-x-6">
              <Avatar src={avatar || ""} firstname={firstname} alt="avatar" />
              <div className="text-left space-y-2">
                <div className="space-y-0.5">
                  <p className="text-sm text-black font-semibold">
                    {firstname + " " + lastname}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    {formatDate(date as string)}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 font-bold truncate">{title}</p>
            <p className="text-slate-500 line-clamp-4">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Communitycard;
