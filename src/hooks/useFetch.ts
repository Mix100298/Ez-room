
import { useState, useEffect } from "react";
import axios from "axios";



export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T>({} as T);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error>(new Error());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url,{withCredentials: true});
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                setError(new Error("Error fetching data"));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
}