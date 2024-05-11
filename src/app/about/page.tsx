import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us page",
};

export default function page() {
  return (
    <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 py-10">
        <h1 className="font-bold text-6xl ">About us.</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <div>
            <img
              className="h-80 w-80 rounded-md"
              src="EZ-room-logo.png"
              alt="EZ-room logo"
            ></img>
          </div>
          {/* App  */}
          <div className="grid flex-1 gap-10 min-w-[450px]">
            <p>
              Easy-Room, an innovative web application aimed at simplifying
              interior design and serving as a source of design ideas by using a
              generative AI model, Stable Diffusion, fine-tuned through
              AUTOMATIC1111 GUI and kohya_ss GUI using LoRa and Dreambooth
              fine-tuning techniques. Easy-Room allows users to generate
              interior designs effortlessly by selecting from various options
              for room type (Bedroom, Bathroom, Random), room style (Bohemian,
              Contemporary, Modern), and 42 distinct furniture items.
            </p>
            <p>
              Eliminate the need for complex design processes by only selecting
              options rather than drawing. Furthermore, the project is better
              than the former website by being able to choose the desired
              furniture to be included in the generated image. Additionally, the
              platform has a community where users can share ideas from the
              generated images. For administrators, Easy-Room provides a robust
              dashboard for managing furniture data and monitoring usage. The
              technological infrastructure of Easy-Room includes an Express
              framework backend, a Next.js frontend, a Fast-API for AI services,
              and a MongoDB database, ensuring a robust and scalable solution
              for interior design challenges.
            </p>
          </div>
        </div>
        <div>
          <img
            className="rounded-md w-full h-[400px] object-cover"
            src="https://img.freepik.com/free-photo/colleagues-working-desk_53876-46928.jpg?w=1060&t=st=1710062433~exp=1710063033~hmac=4b1663d411f0fb4a7699b1b6350fedfdb46ff057f7d33b151c57854ac01c110d"
          ></img>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="grid flex-1 gap-5 min-w-[400px] justify-center">
            <h1 className="font-bold text-3xl">
              “Easy to get room idea only click”
            </h1>
            <p>The Team</p>
          </div>
          <div className="flex flex-1 justify-center">
            <img
              className="object-cover min-w-[500px] max-h-[250px] rounded-md"
              src="https://i.ibb.co/njy9rcg/shutterstock-446870920.jpg"
            ></img>
          </div>
        </div>
        {/* Team  */}
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="grid flex-2 gap-10">
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://scontent-bkk1-2.xx.fbcdn.net/v/t1.6435-9/113936171_3162811593784795_4310133263396928170_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fF6TvflPOfIQ7kNvgESvCMO&_nc_ht=scontent-bkk1-2.xx&oh=00_AfCNHDvENlx8oUnUw5fBpei2Pz8C9W8aqfOE9Y2FNklYdQ&oe=66645B9E"
            ></img>
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://scontent-bkk1-2.xx.fbcdn.net/v/t1.6435-9/32087149_1292052287595109_8049658105941721088_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pidQkRrMDREQ7kNvgFAxTtg&_nc_ht=scontent-bkk1-2.xx&oh=00_AfDyX-W8VFIjMHO8jpP6PgxCtK7cq6qbEdEijg_eU2Y8gA&oe=66645566"
            ></img>
          </div>
          <div className="flex flex-2 items-center">
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/329179432_941392657024434_9132707408366002938_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a_gRvJo7wZEQ7kNvgEP_AnA&_nc_ht=scontent-bkk1-2.xx&oh=00_AfD9dmfz9RYOL-robSG4wjjulL1WBfdmYxXacPAkkGCiKQ&oe=6642A015"
            ></img>
          </div>
          <div className="grid flex-1 gap-5 min-w-[500px]">
            <h1 className="font-bold text-4xl">THE TEAM.</h1>
            <p>
              We are students in department of computer engineering at King
              Mongkut's University of Technology Thonburi.
            </p>
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">1046</h2>
              <h2 className="font-bold text-3xl">1057</h2>
              <h2 className="font-bold text-3xl">1088</h2>
            </div>
            <div className="flex justify-between">
              <p>Phuettipol Jitjaroenkit</p>
              <p>Wichayut Chuaychukul</p>
              <p>Thanpisit Pisitpon</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
