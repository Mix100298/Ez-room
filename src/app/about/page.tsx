import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us page",
}

export default function page() {
  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <h1 className="font-bold text-7xl ">About us.</h1>
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
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
            <h1 className="font-bold text-5xl">“ Ous work does make sense ”</h1>
            <p>Manggon rong meowza, Team leader</p>
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
              src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.6435-9/113936171_3162811593784795_4310133263396928170_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGtLuM7BQKI8eDHfF_6c3x7Y5EzUnFRxORjkTNScVHE5IQJS-Kfl2_F8mHKmgBL8WiBkR84DAIYD35YJ4MnTCVk&_nc_ohc=9kNzsI6dG_sAX9C6Q6s&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfByUEwusO-DZlnDx_F7RA7ZOBjjAf9SQxqRLslMk_ErqA&oe=6615095E"
            ></img>
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.6435-9/32087149_1292052287595109_8049658105941721088_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWi0xJfxdpcdLBob3xWyvKqTPhNrMLhiCpM-E2swuGIItHwARkSHzqchZCyiEIC9bGrAd58XELXNajd6sAaQqn&_nc_ohc=TdCfazcmFkIAX-qruoi&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCEdr1Ruz0qlICe7o0w1_xmg5yV6YwBjvGXmL_jUiL8wg&oe=66150326"
            ></img>
          </div>
          <div className="flex flex-2 items-center">
            <img
              className="w-[200px] h-[200px] rounded-md"
              src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/329179432_941392657024434_9132707408366002938_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQ_7PAvLjk31s2181QMtXBLFfZSyQiGDwsV9lLJCIYPHvqUk804osPTAGXeVxdHM0rqIpjYDywThGgrBXEsdmd&_nc_ohc=ZI0Sq1_Gr3QAX9wiA8q&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfDYHW5nEDxWxMeGdf9rRDbZrAWw8ekm4pjX6h8D1nQ3yQ&oe=65F2DD55"
            ></img>
          </div>
          <div className="grid flex-1 gap-5 min-w-[500px]">
            <h1 className="font-bold text-5xl">THE TEAM.</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id ex ea commod ex ea commod ex ea
              commod est laborum."
            </p>
            <div className="flex justify-between">
              <h2 className="font-bold text-4xl">1046</h2>
              <h2 className="font-bold text-4xl">1057</h2>
              <h2 className="font-bold text-4xl">1088</h2>
            </div>
            <div className="flex justify-between">
              <p>Phuettipol Jitjaroenkit</p>
              <p>Wichayut Chuaychukul</p>
              <p>Thanpisit Pisitpon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
