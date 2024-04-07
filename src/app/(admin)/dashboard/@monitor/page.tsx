"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Page() {
  return (
    <div className="rounded grid min-w-[460px] min-h-full bg-white mb-10 p-5">
      <h1 className="text-2xl font-bold text-gray-800 ">Style</h1>
      <p className="text-sm text-gray-400">most style user used.</p>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["Modern", "Contemporary", "Bohemain"],
          },
        ]}
        series={[{ data: [1250, 650, 1500] }]}
        grid={{ horizontal: true }}
        height={250}
      />
    </div>
  );
}
