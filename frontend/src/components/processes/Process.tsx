"use client"
import useSWR from "swr";
import { ProcessStyled } from "./processes.styled";
import { fetcher } from "../../services/fetcher";
import AlertDialogDelete from "./AlertDialogDelete";
import ProcessEdit from "./ProcessEdit";
import ProcessDetails from "../../components/ProcessDetails/ProcessDetails";
import { PropsProcess } from "../../types";


export default function Process({ id, family_id, process_name, list_emails_responsables, company_id }: PropsProcess) {
  const { data } = useSWR(`http://localhost:3000/families/${family_id}`, fetcher);

  return (
    <ProcessStyled id={id}>
      <div className="group-text">
        <p><span>Nome do Processo:</span>{` ${process_name}`}</p>
        <p><span>Família:</span>{` ${data?.family_name}`}</p>
      </div>
      <div className="group-icons">
        <ProcessDetails id={id}/>
        <ProcessEdit
          id={id}
          company_id={company_id}
          process_name={process_name}
          list_emails_responsables={list_emails_responsables}
          family_name={data?.family_name}
          family_id={family_id}
        />
        <AlertDialogDelete id={id} />
      </div>
    </ProcessStyled>
  )
}