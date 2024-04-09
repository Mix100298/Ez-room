
import { useState, useEffect } from "react";
import axios from "axios";



export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
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