"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Page() {
  const data = [
    { id: 0, value: 2473, label: "Modern" },
    { id: 1, value: 3067, label: "Contemporary" },
    { id: 2, value: 1398, label: "Bohemian" },
  ];

  return (
    <div className="rounded grid min-w-[600px] min-h-full bg-white p-5">
      <h1 className="text-2xl font-bold text-gray-800 ">Style</h1>
      <p className="text-sm text-gray-400 mb-10">most style user used.</p>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: {
              innerRadius: 30,
              additionalRadius: -30,
              color: "grey",
            },
          },
        ]}
        height={300}
      />
    </div>
  );
}
