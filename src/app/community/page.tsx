"use client";
import React, { useState } from "react";
import Button from "@/components/button";
import Searchfilter from "@/components/searchfilter";
import Communitycard from "@/components/communitycard";
import type { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/useFetch";

// export const metadata: Metadata = {
//   title: "Community",
//   description: "Community page",
// };

interface Post {
  _id: string;
  ownerid: {
    _id: string;
    firstname: string;
    lastname: string;
    avatar_image: string;
  };
  status: "public" | "private";
  roomid: {
    _id: string;
    type: "Bedroom" | "Bathroom";
    style: "Bohemian" | "Contemporary" | "Modern";
    budget: number;
    furnitures: string[];
    images: string[];
    selectedimage: number;
  };
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export default function Page() {
  const [isMypost, setMypost] = useState<boolean>(false);
  const {
    data: posts,
    isLoading: isPostloading,
    error: postError,
  } = useFetch<Post[]>(
    isMypost
      ? "http://localhost:5000/api/posts/get/mypost"
      : "http://localhost:5000/api/posts/getall"
  );
  // Test data

  const [isLoading, setisLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const author = searchParams.get("author");
  const id = searchParams.get("id");

  console.log("ID", author, id);
  console.log("Posts", posts);

  // All Card Community Post
  // const [cards, setCards] = useState(
  //   posts
  //     .slice(0, 3)
  //     .map((post, idx) => (
  //       <Communitycard
  //         key={idx}
  //         _id={post._id}
  //         image={post.roomid.images[post.roomid.selectedimage]}
  //         status={post.status}
  //         firstname={post.ownerid.firstname}
  //         lastname={post.ownerid.lastname}
  //         avatar={post.ownerid.avatar_image}
  //         date={post.updatedAt}
  //         title={post.title}
  //         description={post.description}
  //       />
  //     ))
  // );

  // Add more cards
  // const addMoreCards = () => {
  //   const currentCard = cards.length;
  //   const addCards = posts
  //     .slice(currentCard, currentCard + 2) // add 2 more cards
  //     .map((post, idx) => (
  //       <Communitycard
  //         key={currentCard + idx}
  //         _id={post._id}
  //         image={post.roomid.images[post.roomid.selectedimage]}
  //         status={post.status}
  //         firstname={post.ownerid.firstname}
  //         lastname={post.ownerid.lastname}
  //         avatar={post.ownerid.avatar_image}
  //         date={post.updatedAt}
  //         title={post.title}
  //         description={post.description}
  //       />
  //     ));
  //   setCards((prevCards) => [...prevCards, ...addCards]);
  // };

  return (
    <main className="min-h-screen flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid grid-flow-row grid-cols-12 gap-10 py-10">
        <div className="grid col-span-12 row-auto">
          <h1 className="text-7xl font-bold">Community</h1>
          <p className="mt-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamcot. 👋
          </p>
        </div>
        <div className="flex justify-between gap-10 col-span-12 row-auto">
          <Searchfilter />
          <div className="w-60">
            <Button
              onClick={() => {
                setMypost(!isMypost);
              }}
            >
              {!isMypost ? "My Posts" : "All"}
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 col-span-12 row-auto">
          {isPostloading ? (
            <p>Loading...</p>
          ) : (
            posts &&
            posts.map((post, idx) => {
              return (
                <Communitycard
                  key={idx}
                  _id={post._id}
                  image={post.roomid.images[post.roomid.selectedimage]}
                  status={post.status}
                  firstname={post.ownerid.firstname}
                  lastname={post.ownerid.lastname}
                  avatar={post.ownerid.avatar_image}
                  date={post.updatedAt}
                  title={post.title}
                  description={post.description}
                />
              );
            })
          )}
          {!isPostloading && posts?.length === 0 && <p>No post found</p>}
        </div>
        <div className="flex items-center justify-center col-span-12 row-auto ">
          {/* <Button
            onClick={addMoreCards}
            isdisabled={cards.length === posts.length}
          >
            Show more
          </Button> */}
        </div>
      </div>
    </main>
  );
}
