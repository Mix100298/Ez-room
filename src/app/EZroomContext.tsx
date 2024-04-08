"use client"
import { useState, useEffect, createContext, useContext } from "react"
import axios from "axios"
import { getCookie } from "cookies-next"

const EZroomProvider = createContext({} as any)

export function EZroomContext({ children }: any) {
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [image, setImage] = useState({})

  const persistLogin = async () => {
    // persist login
    try {
      const response = await axios.get("http://localhost:5000/api/users/autologin", {
        withCredentials: true,
      })
      if (response.status === 200) {
        const info = getCookie("info")
        setInfo(info) 
      }else if(response.status === 401){
        setIsLogged(false)
        throw new Error("Unauthorized")
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
   const info = getCookie("info")
   if (info) {
    setInfo({...JSON.parse(info)})
    setIsLogged(true)
  }
    
  },[])

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
        image,
        setImage,
      }}
    >
      {children}
    </EZroomProvider.Provider>
  )
}

export function useEZroom() {
  return useContext(EZroomProvider)
}
