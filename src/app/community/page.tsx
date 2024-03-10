"use client";
import React, { useState } from "react";
import Button from "@/app/components/button";
import Searchfilter from "@/app/components/searchfilter";
import Communitycard from "@/app/components/communitycard";

export default function Page() {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const [cards, setCards] = useState<React.ReactNode[]>([
    <Communitycard />,
    <Communitycard />,
    <Communitycard />,
  ]);

  const addMoreCards = () => {
    setisLoading(true);
    const newCards: React.ReactNode[] = [
      ...cards,
      ...Array(3).fill(<Communitycard />),
    ];
    setCards(newCards);
    setisLoading(false);
  };

  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="grid">
          <h1 className="text-7xl font-bold">Community</h1>
          <p className="mt-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamcot. 👋
          </p>
        </div>
        <div className="flex justify-between gap-10">
          <Searchfilter />
          <div className="w-60">
            <Button children={"My posts"} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {cards.map((card, idx) => (
            <div key={idx}>{card}</div>
          ))}
        </div>
        <div className="flex items-center justify-center ">
          <Button
            children={"Show more"}
            onClick={addMoreCards}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
function repeat(arg0: number) {
  throw new Error("Function not implemented.");
}
