"use client";
import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/card";
import Edit from "@/components/edit";
import Share from "@/components/share";
import useFetch from "@/hooks/useFetch";

interface Owner {
  _id: string;
  firstname: string;
  lastname: string;
  avatar_image: string;
}
interface Furniture {
  _id: string;
  english_name: string;
  description: string;
  image: string;
  url: string;
  price: number;
}

interface Room {
  _id: string;
  type: "Bedroom" | "Bathroom";
  style: "Contemporary" | "Bohemian" | "Modern";
  budget: number;
  furnitures: Furniture[];
  images: string[];
  selectedimage: number;
}

interface Post {
  post: {
    _id: string;
    ownerid: Owner;
    status: "public" | "private";
    roomid: Room;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  isowner: boolean;
}

export default function Page({ params }: { params: { id: string } }) {
  const id = params["id"];
  const { data, isLoading, error } = useFetch<Post>(
    "http://localhost:5000/api/posts/get/current/"+id
  );
  console.log(id);
  console.log(data);
  const [editPost, setEditPost] = useState(false);

  const handleEditChange = (isEditing: boolean) => {
    setEditPost(isEditing);
  };

  console.log(editPost);

  // Data from the post

  return data && (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="flex justify-between items-end">
          <Link href="/community">
            <h1 className="font-bold text-6xl">Post </h1>
          </Link>
          <h3 className="font-bold text-2xl text-indigo-500">Id :{id}</h3>
          <Edit onEdit={() => handleEditChange(true)} />
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white h-[512px] w-[512px] rounded">
            <img
              className="rounded-t object-cover aspect-square w-full"
              src={data.post.roomid.images[data.post.roomid.selectedimage]}
            ></img>
          </div>
          {/* Override post */}
          {editPost ? (
            <div className="bg-white h-[512px] w-[428px] rounded">
              <Share
                mode="edit"
                data={data}
                postStatus={data.post.status}
                // postTitle={dataPost.title}
                // postDescription={dataPost.description}
                // postStatus={dataPost.postType}
              />
            </div>
          ) : (
            <div className="bg-white h-[512px] w-[428px] rounded p-5">
              <div className="grid gap-5">
                <h1 className="font-bold text-2xl">{data.post.title}</h1>
                <div className="max-w-xl bg-white rounded-xl flex items-center space-y-0 space-x-6">
                  <img
                    className="block h-10 w-10 rounded-full mx-0 shrink-0"
                    src={data ? data.post.ownerid.avatar_image : "https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg"}
                    alt="Woman's Face"
                  />
                  <div className="text-left space-y-2">
                    <div className="space-y-0.5">
                      <p className="text-sm text-black font-semibold">
                        {data.post.ownerid.firstname}{" "}{data.post.ownerid.lastname}
                      </p>
                      <p className="text-sm text-slate-500 font-medium">
                        May 03
                      </p>
                    </div>
                  </div>
                </div>
                <p className=" text-slate-500 text-md">
                 {data.post.description}
                </p>
                <h1 className="font-bold text-xl text-indigo-500">
                  Style : {data.post.roomid.style}
                </h1>
                <h1 className="font-bold text-xl text-indigo-500">
                  Type : {data.post.roomid.type}
                </h1>
                <h1 className="font-bold text-xl text-indigo-500">
                  Budget : {data.post.roomid.budget} Baht
                </h1>
              </div>
            </div>
          )}
        </div>
        <h1 className="font-bold text-4xl">Furniture</h1>
        <div className="flex gap-10">
          {data.post.roomid.furnitures.map((furniture,idx) => {
            return (
              <Card
                key={idx}
                id={furniture._id}
                name={furniture.english_name}
                price={furniture.price}
                image= {furniture.image}
              />
            );
          
          })}
        </div>
        <h2 className="font-bold text-2xl pr-10">
          More article by this author
        </h2>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
