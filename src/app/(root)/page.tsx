import React from "react"
import Link from "next/link"
import Button from "../../components/button"

const features = [
  {
    title: "Creativity",
    text: "Release your unique imagination and creativity with AI that generates and expresses your unique ideas.",
    icon: "fi fi-rr-galaxy-star",
  },
  {
    title: "Explore",
    text: "Explore and design ideas using a generative AI by selecting from various options for room type and 44 distinct furniture items.",
    icon: "fi fi-sr-loveseat",
  },
  {
    title: "Ideas",
    text: "Discover thousands of ideas from the community where users can share ideas from the images they create.",
    icon: "fi fi-sr-users-medical",
  },
]

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
]

export default function Home() {
  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 py-10">
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
              <div className="relative">
                <img
                  src="https://i.ibb.co/TmC1QBk/01.png"
                  alt="Image"
                  className="xl:h-60 w-60 rounded-bl-md"
                />
                <div className="absolute top-0 w-full flex">
                  <div className="bg-black bg-opacity-70 text-white p-2.5 rounded">
                    <p>Imagine</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://i.ibb.co/yV2qkth/00012-774986159.png"
                  alt="Image"
                  className="h-60 w-60 rounded-br-md"
                />
                <div className="absolute top-0 w-full flex">
                  <div className="bg-black bg-opacity-70 text-white p-2.5 rounded">
                    <p>AI Generated</p>
                  </div>
                </div>
              </div>
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
                className="min-h-[240px] rounded-md object-cover"
                src="https://blog.canadianloghomes.com/wp-content/uploads/2022/02/modern-farmhouse-bedroom-ideas-3.jpg"
              ></img>
              <img
                className="min-h-[240px] rounded-md object-cover"
                src="https://www.luxinteriors.com.au/wp-content/uploads/2022/11/014-980x653.jpg"
              ></img>
            </div>
          </div>
          {/*featusres room*/}
          <div className="grid text-center gap-10 w-[700px]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-10">
                <div>
                  <i className={`text-7xl ${feature.icon}`}></i>
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
            Explore a myriad of styles as you embark on a journey of creativity.
          </p>
          <h1 className="font-bold text-4xl">
            “Unlock creativity through diverse styles.”
          </h1>
        </div>
        {/*styles room*/}
        <div className="flex 2xl:justify-center gap-10">
          {styles.map((style, index) => (
            <div key={index} className="grid gap-5 text-center">
              <img className="rounded-md" src={style.image}></img>
              <h1 className="font-bold text-3xl">{style.name}</h1>
            </div>
          ))}
        </div>
        <div className="grid gap-5 px-10 text-center">
          <h1 className="font-bold text-4xl">
            “Enhance your room with types room diverse.”
          </h1>
          <p>Discover your ideal room type tailored to your imagination.</p>
        </div>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[450px]">
            <img
              className="rounded-md"
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2023/06/Bedroom-interior-design-ideas-for-relaxation.jpg"
            ></img>
          </div>
          <div className="grid gap-5 flex-1 min-w-[450px] text-center">
            <h1 className="font-bold text-4xl">Bedroom</h1>
            <p>A room situated within a residential usage for sleeping.</p>
            <p>
              "Create your haven of serenity with our luxurious bedroom
              essentials. Indulge in the finest linens and plush pillows for
              unparalleled comfort. Elevate your space with our curated
              collection, where style meets relaxation."
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="grid gap-5 flex-1 min-w-[450px] text-center">
            <h1 className="font-bold text-4xl">Bathroom</h1>
            <p>
              a room containing a toilet and basin and typically also a bathtub
              or shower.
            </p>
            <p>
              "Transform your bathroom into a spa-like retreat with our premium
              fixtures and accessories. Immerse yourself in luxury with sleek,
              modern designs and innovative technology that enhance your daily
              routine. Elevate your bathing experience to new heights with our
              curated selection, where relaxation meets sophistication."
            </p>
          </div>
          <div className="flex-1 min-w-[450px]">
            <img
              className="rounded-md"
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2023/05/Bathroom-trends-2023-with-organic-marble-2-2048x1148.jpeg"
            ></img>
          </div>
        </div>
      </div>
    </main>
  )
}
