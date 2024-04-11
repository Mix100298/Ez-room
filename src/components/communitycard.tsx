"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
}: CommunitycardProps) => {
  const pathname = usePathname();

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
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-full">
      <Link href={`${pathname}/${_id}`}>
        <div className="xl:flex ">
          <div className="xl:shrink-0">
            <img
              className="min-h-[300px] max-w-[470px] object-cover xl:h-full xl:w-[300px]"
              src={image ? image : "https://i.pravatar.cc/150?img=37"}
              alt="Modern building architecture"
            />
          </div>
          <div className="grid p-8 gap-2.5 xl:min-w-[680px]">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 ">
                {status === "public" ? (
                  <i className="fi fi-rr-unlock text-base"></i>
                ) : (
                  <i className="fi fi-rr-lock text-base"></i>
                )}
                <p className="text-sm text-slate-500 font-semibold">{status}</p>
              </div>
              <div>
                <i className="fi fi-rr-menu-dots text-base"></i>
              </div>
            </div>
            <div className="max-w-xl bg-white rounded-xl flex items-center space-y-0 space-x-6">
              <img
                className="block h-10 rounded-full mx-0 shrink-0"
                src={avatar ? avatar : "https://i.pravatar.cc/150?img=37"}
                alt="Profile image"
              />
              <div className="text-left space-y-2">
                <div className="space-y-0.5">
                  <p className="text-sm text-black font-semibold">
                    {firstname + lastname}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    {formatDate(date as string)}
                  </p>
                </div>
              </div>
            </div>
            {title}
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
            <p className=" text-slate-500 text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Communitycard;
