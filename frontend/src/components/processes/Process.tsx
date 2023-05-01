"use client"
import useSWR from "swr";
import { ProcessStyled } from "./processes.styled";
import { fetcher } from "../../services/fetcher";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import AlertDialogDelete from "./AlertDialogDelete";
import ProcessEdit from "./ProcessEdit";


interface Props {
  id: string,
  family_id: string,
  process_name: string,
  list_emails_responsables: string[],
  company_id: string,
}


export default function Process({id, family_id, process_name, list_emails_responsables, company_id}: Props) {
  const { data, error, isLoading } = useSWR( `http://localhost:3000/families/${family_id}`, fetcher);

  return(
    <ProcessStyled id={id}>
      <p>Nome do Processo:<span>{` ${process_name}`}</span></p>
      <p>Família:<span>{` ${data?.family_name}`}</span></p>
      <ProcessEdit
        id={id}
        company_id={company_id}
        process_name={process_name} 
        list_emails_responsables={list_emails_responsables}
        family_name={data?.family_name}
        family_id={family_id}
      />
      <AlertDialogDelete id={id}/>
    </ProcessStyled>
  )
}