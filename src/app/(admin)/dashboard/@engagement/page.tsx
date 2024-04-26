"use client";
import React from "react";
import { colors } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { data } from "autoprefixer";

export default function Page() {
  // skeleton code
  // if (isstyleReportDataLoading) {
  //     return (
  //       <div className="animate-pulse rounded min-w-[550px] h-[400px] bg-gray-200 p-5 space-y-5 mb-10 shadow-lg">
  //         <div className="flex bg-gray-300 w-20 h-8 rounded-full"></div>
  //         <div className="flex bg-gray-300 w-40 h-5 rounded-full"></div>
  //         <div className="flex bg-gray-300 w-full h-[275px] rounded"></div>
  //       </div>
  //     );
  //   }
  //   if (!isstyleReportDataLoading && !data && styleReportDataError)
  //     return <div>Error: {styleReportDataError.message}</div>;

  // Data from the post
  const dataset = [
    {
      id: "1",
      value: 55,
      label: "postid1",
    },
    {
      id: "2",
      value: 44,
      label: "postid2",
    },
    {
      id: "3",
      value: 33,
      label: "postid3",
    },
    {
      id: "4",
      value: 22,
      label: "postid4",
    },
    {
      id: "5",
      value: 11,
      label: "postid5",
    },
  ];

  const valueFormatter = (value: number | null) => `${value} likes`;

  return (
    <div className="rounded grid min-w-[550px] min-h-full bg-white mb-10 p-5 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 ">Top posts</h1>
      <p className="text-sm text-gray-400">Most post user like.</p>
      <BarChart
        dataset={dataset}
        height={300}
        yAxis={[
          {
            scaleType: "band",
            dataKey: "label",
          },
        ]}
        series={[
          {
            dataKey: "value",
            color: colors.indigo[600],
            highlightScope: { highlighted: "item", faded: "global" },
            valueFormatter,
          },
        ]}
        layout="horizontal"
      />
    </div>
  );
}
