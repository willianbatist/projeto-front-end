/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import useSWR, { useSWRConfig } from "swr";
import { ProcessesStyled } from "./processes.styled";
import { fetcher } from "../../services/fetcher";
import Process from "./Process";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";


export default function Processes() {
  const { data, error, isLoading } = useSWR("http://localhost:3000/processes", fetcher);
  const [processesList, setProcessesList] = useState([]);

  const { mutate } = useSWRConfig()

  const isReload = useAppSelector((state) => state.changeComponents?.isReload);


  useEffect(() => {
    mutate("http://localhost:3000/processes")
  }, [isReload])

  if (error) return <h1>error api</h1>;
  if (isLoading) return <h1>loading....</h1>;
  return (
    <ProcessesStyled>
      {data.map((process: { id: string; family_id: string; process_name: string; list_emails_responsables: string[], company_id: string }) => (
        <Process
          key={process.id}
          id={process.id}
          family_id={process.family_id}
          process_name={process.process_name}
          list_emails_responsables={process.list_emails_responsables}
          company_id={process.company_id} />
      ))}
    </ProcessesStyled>
  );
}