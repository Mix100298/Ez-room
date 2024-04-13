"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { colors } from "@mui/material";

export default function Page() {
  const data = [1234, 2345];
  const xLabels = ["Bedroom", "Bathroom"];

  return (
    <div className="rounded grid min-w-[600px] min-h-full bg-white mb-10 p-5">
      <h1 className="text-2xl font-bold text-gray-800 ">Type</h1>
      <p className="text-sm text-gray-400">most type user used.</p>
      <BarChart
        height={300}
        series={[
          {
            data: data,
            color: colors.cyan[500],
            highlightScope: { highlighted: "item" },
          },
        ]}
        xAxis={[{ scaleType: "band", data: xLabels }]}
        slotProps={{
          legend: { hidden: true },
        }}
        grid={{ horizontal: true }}
      ></BarChart>
    </div>
  );
}
