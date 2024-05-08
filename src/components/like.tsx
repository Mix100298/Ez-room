"use client"
import React, { useState, useEffect } from "react"
import useFetch from "@/hooks/useFetch"
import axios from "axios"

interface LikeProps {
  postId: string
}

interface LikeData {
  totalLike: number
  isLiked: boolean
}

export default function Like({ postId }: LikeProps) {
  const [likeState, setLike] = useState<LikeData>({} as LikeData)
  const { data, isLoading, error } = useFetch<LikeData>(
    process.env.backendUrl + "/api/likes/" + postId
  )

  useEffect(() => {
    if (data) {
      setLike(data)
    }
  }, [data])

  const handleLike = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      axios.post(
        process.env.backendUrl + "/api/likes/likepost",
        {
          postId: postId,
        },
        { withCredentials: true }
      )
      setLike({
        totalLike: likeState.totalLike + (likeState.isLiked ? -1 : 1),
        isLiked: !likeState.isLiked,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className="flex items-center justify-center space-x-2"
      onClick={handleLike}
    >
      <i
        className={`fi fi-sr-heart ${
          likeState.isLiked ? "text-pink-500" : "text-gray-500"
        }  text-xl mt-0.5
            hover:transition-transform hover:scale-110
        `}
      ></i>
      {isLoading ? null : (
        <p className="text-slate-500 text-sm">{likeState.totalLike}</p>
      )}
    </div>
  )
}
