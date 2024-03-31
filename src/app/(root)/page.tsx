import React from "react";
import Link from "next/link";
import Button from "../../components/button";

const features = [
  {
    title: "Head 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z",
  },
  {
    title: "Head 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z",
  },
  {
    title: "Head 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z",
  },
];

const styles = [
  { name: "Modern", image: "https://i.ibb.co/DCqvFSX/modern.png" },
  {
    name: "Bohemian",
    image: "https://i.ibb.co/W5ysYH1/civit-ai-bohemian-bedroom.png",
  },
  {
    name: "Contemporary",
    image: "https://i.ibb.co/hM2ygcq/civit-ai-contemporary-bedroom.png",
  },
];

export default function Home() {
  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[450px]">
            <h1 className="font-bold text-4xl pr-10">
              Create a dream room using AI
            </h1>
            <div className="mt-5">
              <p>Design your room with Artificial Intelligence</p>
            </div>
            <div className="bg-gray-300 h-1 mt-5"></div>
            <Link href="/generate">
              <div className="mt-5 w-1/3">
                <Button>Generate Room</Button>
              </div>
            </Link>
          </div>
          <div className="flex-1 min-w-[480px]">
            <div className="flex flex-wrap justify-center">
              <img
                className="h-60 w-60 rounded-md"
                src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
              ></img>
              <img
                className="h-60 w-60 rounded-md"
                src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid gap-5 px-10 text-center">
          <h1 className="font-bold text-4xl">
            “Ignite an infinite wellspring of creativity to personalize your
            living spaces.”
          </h1>
          <p>
            Design your room effortlessly with the help of Artificial
            Intelligence.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="flex-1 gap-10 min-w-[240px]">
            <div className="grid gap-10 items-center justify-center">
              <img
                className="min-h-[240px] rounded-md"
                src="https://i.ibb.co/TmC1QBk/01.png"
              ></img>
              <img
                className="min-h-[240px] rounded-md"
                src="https://i.ibb.co/yV2qkth/00012-774986159.png"
              ></img>
            </div>
          </div>
          {/*featusres room*/}
          <div className="grid text-center gap-10 w-[700px]">
            {features.map((feature, index) => (
              <div className="flex items-center gap-10">
                <div>
                  <svg
                    className="w-20 h-20"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d={feature.icon} />
                  </svg>
                </div>
                <div className="grid items-center">
                  <h1 className="font-bold text-2xl">{feature.title}</h1>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 px-10 text-center">
          <p>
            Explore a myriad of types and styles as you embark on a journey of
            creativity.
          </p>
          <h1 className="font-bold text-4xl">
            “Unlock creativity through diverse types and styles.”
          </h1>
        </div>
        {/*styles room*/}
        <div className="flex flex-wrap justify-center gap-10">
          {styles.map((style, index) => (
            <div key={index} className="grid gap-5 text-center">
              <img className="w-[300px] rounded-md" src={style.image}></img>
              <h1 className="font-bold text-3xl">{style.name}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[450px]">
            <img
              className="rounded-md"
              src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
            ></img>
          </div>
          <div className="grid gap-5 flex-1 min-w-[450px]">
            <h1 className="font-bold text-4xl">
              Simplify your search effortlessly.
            </h1>
            <p>Helps you easily find what you're looking for.</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
