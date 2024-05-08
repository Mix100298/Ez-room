"use client"
import React from "react"
import { useState, useEffect } from "react"
import useFetch from "@/hooks/useFetch"
import { PieChart } from "@mui/x-charts/PieChart"
export default function Page() {
  const {
    data: styleReportData,
    isLoading: isstyleReportDataLoading,
    error: styleReportDataError,
  } = useFetch<StyleReport[]>(process.env.backendUrl + "/api/reports/style")
  const [data, setData] = useState(styleReportData)
  useEffect(() => {
    setData(styleReportData)
  }, [styleReportData])

  if (isstyleReportDataLoading) {
    return (
      <div className="animate-pulse rounded min-w-[550px] h-[400px] bg-gray-200 p-5 space-y-5 mb-10 shadow-lg">
        <div className="flex bg-gray-300 w-20 h-8 rounded-full"></div>
        <div className="flex bg-gray-300 w-40 h-5 rounded-full"></div>
        <div className="flex bg-gray-300 w-full h-[275px] rounded"></div>
      </div>
    )
  }
  if (!isstyleReportDataLoading && !data && styleReportDataError)
    return <div>Error: {styleReportDataError.message}</div>
  // const data = [
  //   { id: 0, value: 2473, label: "Modern" },
  //   { id: 1, value: 3067, label: "Contemporary" },
  //   { id: 2, value: 1398, label: "Bohemian" },
  // ]

  return (
    <div className="rounded grid min-w-[550px] min-h-full bg-white p-5 mb-10 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 ">Style</h1>
      <p className="text-sm text-gray-400 mb-10">Most generated style</p>
      {styleReportData && (
        <PieChart
          colors={["#519DE9", "#7CC674", "#73C5C5", "#8481DD"]}
          series={[
            {
              data: styleReportData,
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
      )}
    </div>
  )
}
