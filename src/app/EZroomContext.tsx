"use client"
import { useState, useEffect, createContext, useContext } from "react"
import axios from "axios"

const EZroomProvider = createContext({} as any)

export function EZroomContext({ children }: any) {
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  const persistLogin = async () => {
    // check expired token
    try {
      const response = await axios.get("/api/auth", {
        withCredentials: true,
      })
      if (response.status === 200) {
        setIsLogged(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const info = window.localStorage.getItem("info")
    console.log(info)
    setInfo(JSON.parse(info || "{}"))
  }, [])

  return (
    <EZroomProvider.Provider
      value={{
        info,
        setInfo,
        isLoading,
        setIsLoading,
        error,
        setError,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </EZroomProvider.Provider>
  )
}

export function useEZroom() {
  return useContext(EZroomProvider)
}
