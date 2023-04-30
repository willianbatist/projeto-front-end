"use client"
import useSWR from "swr";
import { ProcessesStyled } from "./processes.styled";
import { fetcher } from "../../services/fetcher";
import Process from "./Process";


export default function Processes() {
  const { data, error, isLoading } = useSWR("http://localhost:3000/processes", fetcher);
  

  if (error) return <h1>error api</h1>;
  if (isLoading) return <h1>loading....</h1>;
  return(
    <ProcessesStyled>
      { data.map((process: { id: string; family_id: string; process_name: string; }) => (
        <Process
          key={process.id}
          id={process.id}
          family_id={process.family_id}
          process_name={process.process_name}
        />
      )) }
    </ProcessesStyled>
  );
}