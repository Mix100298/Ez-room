"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { colors } from "@mui/material";
import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";

export default function Page() {
  const {
    data: typeReportData,
    isLoading: isTypeReportLoading,
    error: typeReportError,
  } = useFetch<TypeReport>(process.env.backendUrl + "/api/reports/type");
  const [data, setData] = useState(typeReportData);
  useEffect(() => {
    setData(typeReportData);
  }, [typeReportData]);
  // Data from the post
  if (isTypeReportLoading) {
    return (
      <div className="animate-pulse rounded min-w-[550px] h-[400px] bg-gray-200 p-5 space-y-5 mb-10 shadow-lg">
        <div className="flex bg-gray-300 w-20 h-8 rounded-full"></div>
        <div className="flex bg-gray-300 w-40 h-5 rounded-full"></div>
        <div className="flex bg-gray-300 w-full h-[275px] rounded"></div>
      </div>
    );
  }
  if (!isTypeReportLoading && !data && typeReportError)
    return (
      <div className="animate-pulse rounded min-w-[550px] h-[400px] bg-gray-200 p-5 space-y-5 mb-10 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 ">Failed to load</h1>
        <div className="flex bg-gray-300 w-full h-[275px] rounded"></div>
      </div>
    );
  // const data = [1234, 2345];
  // const xLabels = ["Bedroom", "Bathroom"];

  return (
    <div className="rounded grid min-w-[550px] min-h-full bg-white mb-10 p-5 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 ">Type</h1>
      <p className="text-sm text-gray-400">Most generated type.</p>
      {typeReportData && (
        <BarChart
          height={300}
          series={[
            {
              data: typeReportData.value,
              color: colors.cyan[300],
              label: "Post",
              highlightScope: { highlighted: "item" },
            },
          ]}
          xAxis={[{ scaleType: "band", data: typeReportData.label }]}
          slotProps={{
            legend: { hidden: true },
          }}
          grid={{ horizontal: true }}
        ></BarChart>
      )}
    </div>
  );
}
