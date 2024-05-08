"use client"
import React from "react"
import { colors } from "@mui/material"
import { BarChart } from "@mui/x-charts/BarChart"
import { data } from "autoprefixer"
import useFetch from "@/hooks/useFetch"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChartContainer, ChartsOnAxisClickHandler } from "@mui/x-charts"
export default function Page() {
  const router = useRouter()
  const {
    data: engagementReportData,
    isLoading: isEngagementReportLoading,
    error: engagementReportError,
  } = useFetch<IEngagementReport[]>(
    process.env.backendUrl + "/api/reports/engagement"
  )
  const [data, setData] = useState(engagementReportData)
  const [dataset, setDataset] = useState<Array<any>>([])
  useEffect(() => {
    if (engagementReportData) {
      const transformedData = engagementReportData.map((item) => ({
        id: item.id,
        value: item.value,
        label: item.label,
        link: item.link,
      }))
      setDataset(transformedData)
    }
  }, [engagementReportData])
  // Data from the post
  if (isEngagementReportLoading) {
    return (
      <div className="animate-pulse rounded min-w-[550px] h-[400px] bg-gray-200 p-5 space-y-5 mb-10 shadow-lg">
        <div className="flex bg-gray-300 w-20 h-8 rounded-full"></div>
        <div className="flex bg-gray-300 w-40 h-5 rounded-full"></div>
        <div className="flex bg-gray-300 w-full h-[275px] rounded"></div>
      </div>
    )
  }
  if (!isEngagementReportLoading && !data && engagementReportError)
    return <div>Error: {engagementReportError.message}</div>
  const clickHandler = (event: MouseEvent, params: any) => {
    console.log("Mouse event:", event)
    console.log("Clicked elements:", params)
    console.log("Data of the clicked bar:")
    const link = params.axisValue
    if (link) {
      router.push(link)
    }
  }

  const valueFormatter = (value: number | null) => `${value} likes`

  return (
    <div className="rounded grid min-w-[550px] min-h-full bg-white mb-10 p-5 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 ">Engagement</h1>
      <p className="text-sm text-gray-400">Most liked post.</p>
      {dataset.length > 0 && (
        <BarChart
          onAxisClick={clickHandler}
          dataset={dataset}
          height={300}
          yAxis={[
            {
              scaleType: "band",
              dataKey: "link",
            },
          ]}
          series={[
            {
              dataKey: "value",
              color: colors.cyan[600],
              highlightScope: { highlighted: "item", faded: "global" },
              valueFormatter,
            },
          ]}
          layout="horizontal"
        />
      )}
    </div>
  )
}
