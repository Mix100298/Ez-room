"use client";
import React, { useState } from "react";
import Button from "./button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Roomimages from "./roomimages";

interface PostForm {
  postTitle?: string;
  postDescription?: string;
  postStatus?: string;
}

interface ShareProps {
  title?: string;
  description?: string;
  status?: boolean;
}

const Share: React.FC<PostForm> = ({
  postTitle,
  postDescription,
  postStatus,
}: PostForm) => {
  // Change the string to a boolean
  function postTypeToNumber(type: string): boolean {
    switch (type) {
      case "Public":
        return true;
      case "Private":
        return false;
      default:
        return false;
    }
  }

  // Change the boolean to a string
  function numberToPostType(type: boolean): string {
    switch (type) {
      case true:
        return "Public";
      case false:
        return "Private";
    }
  }

  const [isLoading, setisLoading] = useState<boolean>(false);

  // Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ShareProps>({
    defaultValues: {
      title: postTitle,
      description: postDescription,
      status: postTypeToNumber(postStatus as string),
    },
  });

  const formHandle: SubmitHandler<ShareProps> = async (formdata) => {
    // change data of the form
    const statusPost = numberToPostType(formdata.status as boolean);
    // Data to send
    const data = {
      title: formdata.title,
      description: formdata.description,
      postType: statusPost,
    };

    setisLoading(true);
    try {
      // Send data to the server
      const result = await axios.post("http://localhost:5000/", data);
      console.log(result.data);
      setisLoading(false);
    } catch (error) {
      console.log(data);
      setisLoading(false);
    }
  };

  const Status = watch("status");
  // const Status1 = watch("title");
  // const Status2 = watch("description");

  // console.log("title", Status1);
  // console.log("description", Status2);
  // console.log("status", Status3);

  return (
    <div className="h-full w-full bg-white rounded shadow-md">
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(formHandle)}
      >
        <div className="grid p-5 gap-5">
          <h1 className="text-2xl font-bold">Title & Description</h1>
          <input
            {...register("title")}
            className="w-full h-10 rounded-md border border-gray-300 p-2"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          ></input>
          <input
            {...register("description")}
            className="w-full h-20 rounded-md border border-gray-300 p-2"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          ></input>
          <div className="flex">
            <Roomimages images={["", "", ""]} valueimage="0" />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="grid gap-2">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  {...register("status")}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Share this post
                </span>
              </label>
              {Status === false ? (
                <span className="text-sm ml-1">only you can see this post</span>
              ) : (
                <span className="text-sm ml-1">everyone can see this post</span>
              )}
            </div>
            <div className="w-40">
              <Button type="submit" isLoading={isLoading}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Share;

/*
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Large toggle</span>
</label>
*/

/*
<div
            onClick={() => setSelect(!Select)}
            className={`${
              Select
                ? "flex w-40 h-10 bg-gray-100 rounded-full"
                : "flex w-40 h-10 bg-gray-700 rounded-full"
            }`}
          >
            <span
              onClick={() => setSelect(!Select)}
              className={`${
                Select
                  ? "w-20 h-10 bg-gray-700 rounded-full rounded-r-lg"
                  : "w-20 h-10 bg-gray-100 rounded-full rounded-r-lg"
              }`}
            >

              </span>
              </div>

              */
