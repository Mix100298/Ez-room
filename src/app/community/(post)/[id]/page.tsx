"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/card";
import Edit from "@/components/edit";
import Share from "@/components/share";
import useFetch from "@/hooks/useFetch";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Avatar from "@/components/avatar";
import Like from "@/components/like";
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
  isOwner: boolean;
}

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = params["id"];
  const {
    data: postResult,
    isLoading: isPostLoading,
    error: postError,
  } = useFetch<Post>("http://localhost:5000/api/posts/get/current/" + id);
  console.log(id);
  console.log(postResult);
  const [data, setData] = useState(postResult);
  const [editPost, setEditPost] = useState(false);
  const [deletePost, setDeletePost] = useState(false);

  const handleEditChange = (isEditing: boolean) => {
    setDeletePost(false);
    setEditPost(isEditing);
  };

  const handleDeleteChange = (isEditing: boolean) => {
    setEditPost(false);
    setDeletePost(isEditing);
  };

  console.log(editPost);
  useEffect(() => {
    setData(postResult);
  }, [postResult]);

  // Data from the post
  if (isPostLoading) {
    return <div>Loading...</div>;
  }

  if (!isPostLoading && !data && postError) {
    return <div>Error: {postError.message}</div>;
  }

  return (
    data && (
      <main className="min-h-screen flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
        <div className="grid gap-10 lg:py-10">
          <div className="flex justify-between items-end">
            <Link href="/community">
              <h1 className="font-bold text-6xl">Post </h1>
            </Link>
            {data && data.isOwner ? (
              <Edit
                onEdit={() => handleEditChange(true)}
                onDelete={() => handleDeleteChange(true)}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-white h-[512px] w-[512px] rounded">
              {data && (
                <img
                  className="rounded-t object-cover aspect-square w-full"
                  src={data.post.roomid.images[data.post.roomid.selectedimage]}
                ></img>
              )}
            </div>

            {editPost || deletePost ? (
              <div className="bg-white h-[512px] w-[428px] rounded">
                {deletePost && (
                  <div className="h-full w-full bg-white rounded shadow-md p-4">
                    <h1 className="font-bold text-2xl text-center">
                      Are you sure you want to delete this post?
                    </h1>
                    <div className="flex mt-4 justify-evenly">
                      <Button onClick={() => setDeletePost(false)}>
                        Cancel
                      </Button>
                      <Button
                        isLogin={true}
                        onClick={async () => {
                          try {
                            const response = await axios.delete(
                              "http://localhost:5000/api/posts/delete/" + id,
                              { withCredentials: true }
                            );
                            router.push("/community");
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
                {editPost && data && (
                  <Share
                    mode="edit"
                    data={data}
                    postStatus={data.post.status}
                    postDescription={data.post.description}
                    postTitle={data.post.title}
                    onClosed={() => setEditPost(false)}
                    postid={data.post._id}
                    roomid={data.post.roomid._id}
                    selectedimage={data.post.roomid.selectedimage}
                  />
                )}
              </div>
            ) : (
              <div className="bg-white h-[512px] w-[428px] rounded p-5">
                <div className="grid gap-5">
                  <h1 className="font-bold text-2xl">{data.post.title}</h1>
                  <div className="max-w-xl bg-white rounded-xl flex items-center justify-between ">
                    <div className="flex space-y-0 space-x-6">
                      <Avatar
                        src={postResult?.post.ownerid.avatar_image || ""}
                        firstname={postResult?.post.ownerid.firstname || ""}
                        alt="avatar"
                      />
                      <div className="text-left space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-sm text-black font-semibold">
                            {data.post.ownerid.firstname}{" "}
                            {data.post.ownerid.lastname}
                          </p>
                          <p className="text-sm text-slate-500 font-medium">
                            May 03
                          </p>
                        </div>
                      </div>
                    </div>
                    {id && <Like postId={id} />}
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
          {editPost ? (
            <div className="w-[512px]">
              {data && (
                <div className="flex justify-between gap-2">
                  {data.post.roomid.images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="max-h-[144px] max-w-[144px] rounded"
                      >
                        <input
                          type="radio"
                          name="room"
                          value={index}
                          className="hidden peer"
                          id={`room${index + 1}`}
                          onClick={() =>
                            setData({
                              ...data,
                              post: {
                                ...data.post,
                                roomid: {
                                  ...data.post.roomid,
                                  selectedimage: index,
                                },
                              },
                            })
                          }
                          defaultChecked={
                            index === data.post.roomid.selectedimage
                          }
                        />
                        <label
                          htmlFor={`room${index + 1}`}
                          className="block w-full h-full rounded-md cursor-pointer peer-checked:border-4 peer-checked:border-blue-500"
                        >
                          <img
                            src={image}
                            alt={`room result ${index + 1}`}
                            className="rounded w-full aspect-square object-cover"
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
          {data.post.roomid.furnitures.length > 0 && (
            <div className="grid gap-10">
              <h1 className="font-bold text-4xl">Furniture</h1>
              <div className="flex gap-10">
                {data.post.roomid.furnitures.map((furniture, idx) => (
                  <Card
                    key={idx}
                    id={furniture._id}
                    name={furniture.english_name}
                    price={furniture.price}
                    image={furniture.image}
                    isDisabled={true}
                  />
                ))}
                {data.post.roomid.furnitures.length === 1 && (
                  <div className="w-full"></div>
                )}
              </div>
            </div>
          )}
          <h2 className="font-bold text-2xl pr-10">
            More article by this author
          </h2>
          <div className="flex gap-10">
            <Card isDisabled={true} />
            <Card isDisabled={true} />
            <Card isDisabled={true} />
            <Card isDisabled={true} />
          </div>
        </div>
      </main>
    )
  );
}
