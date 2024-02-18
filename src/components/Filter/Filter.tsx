"use client"
import useSWR from "swr";
import { Provider } from "../../../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Filter = () => {
    const { data, error, isLoading } = useSWR<Provider[]>("/api/providers", fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;
    console.log(data);

    return (
      <li>
        
      </li>
    );
  }

export default Filter;