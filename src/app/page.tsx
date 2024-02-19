"use client"
import Partner from "@/components/Partner/Partner";
import useSWR from "swr";
import { Provider } from "../../interfaces";

export default function Home() {
  
  

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // TODO remove mock api call and move up in global state
  const { data, error, isLoading } = useSWR<Provider[]>("/api/providers", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  // END of TODO 

  return (
    <main className="container mx-auto min-h-screen md:p-8 p-4 ">
      <div className="mx-auto">
        {data.map((partner,index) => <Partner key={index} partner={partner}/>)}
      </div>
    </main>
  );
}
