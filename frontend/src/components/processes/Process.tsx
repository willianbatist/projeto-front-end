"use client"
import useSWR from "swr";
import { ProcessStyled } from "./processes.styled";
import { fetcher } from "../../services/fetcher";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import AlertDialogDelete from "./AlertDialogDelete";


interface Props {
  id: string,
  family_id: string,
  process_name: string
}


export default function Process({id, family_id, process_name}: Props) {
  const { data, error, isLoading } = useSWR( `http://localhost:3000/families/${family_id}`, fetcher);

  return(
    <ProcessStyled id={id}>
      <p>Nome do Processo:<span>{` ${process_name}`}</span></p>
      <p>Família:<span>{` ${data?.family_name}`}</span></p>
      <EditIcon/>
      <AlertDialogDelete/>
    </ProcessStyled>
  )
}