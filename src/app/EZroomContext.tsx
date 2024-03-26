"use client";
import { useState, useEffect, createContext, useContext } from "react";

const EZroomProvider = createContext({} as any);

export function EZroomContext({ children }: any) {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const info = window.localStorage.getItem("info")
    setInfo({info})
  }, []);

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
  );
}

export function useEZroom() {
  return useContext(EZroomProvider);
}
