"use client";
import React, { ChangeEvent, useState } from "react";
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
  const [search, setSearch] = useState("");

  // Add more cards
  const [numCards, setNumCards] = useState(7);
  const loadMoreCards = () => {
    setNumCards((prevCards) => prevCards + 5);
  };

  const {
    data: posts,
    isLoading: isPostloading,
    error: postError,
  } = useFetch<Post[]>(
    isMypost
      ? `${process.env.backendUrl}/api/posts/get/mypost`
      : `${process.env.backendUrl}/api/posts/getall`
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Filter posts by title
  const postsAndfilter =
    posts &&
    posts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          (
            post.ownerid.firstname.toLowerCase() +
            post.ownerid.lastname.toLowerCase()
          ).includes(search.toLowerCase())
      )
      .slice(0, numCards);

  const totalfilterPosts = postsAndfilter?.length;

  const [isLoading, setisLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const author = searchParams.get("author");
  const id = searchParams.get("id");

  console.log("ID", author, id);
  console.log("Posts", posts);

  const SkeletonCards = [1, 2, 3, 4];

  console.log("numCards", numCards);
  console.log("totalfilterPosts", totalfilterPosts);

  return (
    <main className="min-h-screen flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid grid-flow-row grid-cols-12 gap-10 py-10">
        <div className="grid col-span-12 row-auto">
          <h1 className="text-7xl font-bold">Community</h1>
          <p className="mt-5">
            Come be a part of our community and dive into a new concept. Share
            your thoughts and creations with us. Our diverse gallery of
            AI-generated images has something for everyone to explore and enjoy.
            👋
          </p>
        </div>
        <div className="flex justify-between gap-10 col-span-12 row-auto">
          <Searchfilter search={search} onChange={handleSearch} />
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
            <>
              {SkeletonCards.map((idx) => (
                <div
                  key={idx}
                  className="animate-pulse mx-auto rounded-xl shadow-md max-w-full grid gap-10 grid-cols-12"
                >
                  <div className="col-span-12">
                    <div className="xl:flex bg-gray-200">
                      <div className="xl:shrink-0">
                        <div className="bg-gray-300 min-h-[300px] w-full xl:h-full xl:w-[300px]"></div>
                      </div>
                      <div className="grid p-8 gap-2.5 xl:min-w-[680px]">
                        <div className="flex items-start justify-between">
                          <div className="flex rounded-full items-center bg-gray-300 w-24 h-full"></div>
                          <div className="flex rounded-full items-center bg-gray-300 w-10 h-5"></div>
                        </div>
                        <div className="max-w-xl rounded-xl flex items-center space-y-0 space-x-6">
                          <div className="flex bg-gray-300 rounded-full w-10 h-10"></div>
                          <div className="space-y-0.5">
                            <div className="flex rounded-full bg-gray-300 w-20 h-4"></div>
                            <div className="flex rounded-full bg-gray-300 w-12 h-4"></div>
                          </div>
                        </div>
                        <div className="flex rounded-full bg-gray-300 w-60 h-4"></div>
                        <div className="flex rounded-full bg-gray-300 w-full h-4"></div>
                        <div className="flex rounded-full bg-gray-300 w-1/2 h-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {postsAndfilter &&
                postsAndfilter.map((post, idx) => (
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
                ))}
            </>
          )}
          {!isPostloading && totalfilterPosts === 0 && (
            <div className="grid items-center col-span-12 text-center text-gray-400">
              <i className="fi fi-rr-blog-text text-[200px]"></i>
              <h1 className="text-5xl font-bold mb-10">Posts Not Found</h1>
            </div>
          )}
          {!isPostloading && postError && (
            <>
              <div className="animate-pulse grid items-center col-span-12 text-center text-gray-400">
                <i className="fi fi-rr-blog-text text-[200px]"></i>
                <h1 className="text-5xl font-bold mb-10">Failed to load</h1>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center justify-center col-span-12 row-auto ">
          <Button
            onClick={loadMoreCards}
            isvisible={totalfilterPosts === 0 || posts === null}
            isdisabled={
              numCards >= (posts?.length ?? 0) ||
              (totalfilterPosts ?? 0) < numCards
            }
          >
            Show more
          </Button>
        </div>
      </div>
    </main>
  );
}
