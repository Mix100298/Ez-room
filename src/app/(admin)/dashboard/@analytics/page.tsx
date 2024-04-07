"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Page() {
  const data1 = [
    { label: "Group A", value: 2400 },
    { label: "Group B", value: 4567 },
    { label: "Group C", value: 1398 },
    { label: "Group D", value: 9800 },
    { label: "Group E", value: 3908 },
    { label: "Group F", value: 4800 },
  ];
  const data2 = [
    { label: "Group A", value: 400 },
    { label: "Group B", value: 300 },
    { label: "Group C", value: 300 },
    { label: "Group D", value: 200 },
    { label: "Group E", value: 278 },
    { label: "Group F", value: 189 },
  ];
  return (
    <div className="rounded flex min-w-[460px] min-h-full bg-white p-5 justify-center items-center">
      <div className="grid w-full">
        <div className="flex flex-wrap w-full">
          <PieChart
            series={[
              {
                data: data1,
                innerRadius: 60,
                outerRadius: 80,
                cx: 300,
              },
              { data: data2, outerRadius: 80, cx: 100 },
            ]}
            height={250}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 "></h1>
      </div>
    </div>
  );
}
