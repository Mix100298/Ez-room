"use client";
import React, { useState } from "react";
import Button from "./button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface PostForm {
  postTitle: string;
  postDescription: string;
  postStatus: "public" | "private";
  mode: "edit" | "create";
  data: any;
  roomid?: string;
  postid?: string;
  onClosed?: () => void;
  selectedimage?: number;
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
  mode,
  data,
  onClosed,
  roomid = "",
  postid = "",
  selectedimage = 0,
}: PostForm) => {
  // Change the string to a boolean
  function postTypeToNumber(type: string): boolean {
    switch (type) {
      case "public":
        return true;
      case "private":
        return false;
      default:
        return false;
    }
  }

  // Change the boolean to a string
  function numberToPostType(type: boolean): string {
    switch (type) {
      case true:
        return "public";
      case false:
        return "private";
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
  const router = useRouter();

  const createPost: SubmitHandler<ShareProps> = async (formdata) => {
    // change data of the form
    const statusPost = numberToPostType(formdata.status as boolean);
    // Data to send
    // const data = {
    //   title: formdata.title,
    //   description: formdata.description,
    //   postType: statusPost,
    // };

    setisLoading(true);
    try {
      // Send data to the server
      //const result = await axios.post("http://localhost:5000/", data);
      console.log("room presave:", data);
      const room = await axios.post(
        "http://localhost:5000/api/rooms/create",
        {
          ...data,
        },
        { withCredentials: true }
      );
      console.log("room created", room);
      const post = await axios.post(
        "http://localhost:5000/api/posts/create",
        {
          roomid: room.data._id,
          title: formdata.title,
          description: formdata.description,
          status: statusPost,
        },
        { withCredentials: true }
      );
      console.log("post created", post);
      setisLoading(false);
      router.push(`/community/${post.data.id}`);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const updatePost: SubmitHandler<ShareProps> = async (formdata) => {
    const statusPost = numberToPostType(formdata.status as boolean);
    console.log("updated post", { ...formdata, status: statusPost });
    console.log("updated post", data);
    setisLoading(true);

    try {
      const room = await axios.patch(
        "http://localhost:5000/api/rooms/update/" + roomid,
        { selectedimage: selectedimage },
        {
          withCredentials: true,
        }
      );
      const post = await axios.patch(
        "http://localhost:5000/api/posts/update/" + postid,
        { ...formdata, status: statusPost },
        { withCredentials: true }
      );

      console.log("room updated", room);
      console.log("post updated", post);

      router.push("/community/" + postid);
    } catch (error) {
      console.log(error);
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
        onSubmit={
          mode === "edit" ? handleSubmit(updatePost) : handleSubmit(createPost)
        }
      >
        <div className="grid p-5 gap-5">
          <h1 className="text-2xl font-bold">Title & Description</h1>
          <input
            {...register("title", {
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
            className="w-full h-10 rounded-md border border-gray-300 p-2"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          ></input>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
            className="w-full resize-none h-[200px] rounded-md border border-gray-300 p-2"
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <div className="flex">
            {/* <Roomimages images={["", "", ""]} valueimage="0" /> */}
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="grid gap-2">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  {...register("status", {
                    required: {
                      value: false,
                      message: "This field is required.",
                    },
                  })}
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
            <div className="w-40 flex justify-between">
              {!isLoading && onClosed && (
                <Button type="button" onClick={onClosed}>
                  Cancel
                </Button>
              )}
              <Button type="submit" isLoading={isLoading}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  // : (
  //   <div className="h-full w-full bg-white rounded shadow-md">
  //     <form
  //       className="space-y-4 md:space-y-6"
  //       onSubmit={handleSubmit(createPost)}
  //     >
  //       <div className="grid p-5 gap-5">
  //         <h1 className="text-2xl font-bold">Title & Description</h1>
  //         <input
  //           {...register("title", {
  //             required: {
  //               value: true,
  //               message: "This field is required.",
  //             },
  //           })}
  //           className="w-full h-10 rounded-md border border-gray-300 p-2"
  //           type="text"
  //           name="title"
  //           id="title"
  //           placeholder="Title"
  //         ></input>
  //         <input
  //           {...register("description", {
  //             required: {
  //               value: true,
  //               message: "This field is required.",
  //             },
  //           })}
  //           className="w-full h-20 rounded-md border border-gray-300 p-2"
  //           type="text"
  //           name="description"
  //           id="description"
  //           placeholder="Description"
  //         ></input>
  //         <div className="flex">
  //           {/* <Roomimages images={["", "", ""]} valueimage="0" /> */}
  //         </div>
  //         <div className="flex w-full items-center justify-between">
  //           <div className="grid gap-2">
  //             <label className="inline-flex items-center cursor-pointer">
  //               <input
  //                 {...register("status", {
  //                   required: {
  //                     value: false,
  //                     message: "This field is required.",
  //                   },
  //                 })}
  //                 type="checkbox"
  //                 className="sr-only peer"
  //               />
  //               <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  //               <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
  //                 Share this post
  //               </span>
  //             </label>
  //             {Status === false ? (
  //               <span className="text-sm ml-1">only you can see this post</span>
  //             ) : (
  //               <span className="text-sm ml-1">everyone can see this post</span>
  //             )}
  //           </div>
  //           <div className="w-40">
  //             <Button type="submit" isLoading={isLoading}>
  //               Save
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );
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
