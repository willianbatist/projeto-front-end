/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button
} from "@chakra-ui/react";
import CreatableSelect from "react-select/creatable";
import useSWR from "swr";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { uuid } from "uuidv4";
import { ProcessFormStyled } from "./processForm.styled";
import { fetcher } from "../../services/fetcher";
import { validarEmail } from "../../utils/checks";
import { postProcess } from "../../services/processes";
import { MultiValue } from "react-select";


const schemaProcess = z.object({
  process_name: z.string().min(1, { message: "Nome do processo é obrigatório" }),
  family_id: z.string().min(1, { message: "Escolher uma família é obrigatório" }),
})


type ValidationSchema = z.infer<typeof schemaProcess>;

export default function ProcessForm() {
  const [isEmail, setIsEmail] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);
  const [isApi, setIsApi] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data } = useSWR(`http://localhost:3000/families`, fetcher);


  const { register, formState: { errors }, handleSubmit, reset } = useForm<ValidationSchema>({
    mode: "all",
    resolver: zodResolver(schemaProcess)
  })


  const handleEmail = (event: any[] | MultiValue<never>) => {
    event.forEach((object: any) => {
      setIsEmail(false)
      if (!validarEmail(object.value)) {
        setIsEmail(true)
      }
    })
    const arrayEmails = event.map((objectEmails: { label: string, value: string }) => objectEmails.value);
    setEmails(arrayEmails);
  }

  const onSubmit = async (data: { process_name: string; family_id: string; }) => {
    const objectPost = {
      id: uuid(),
      company_id: "096ed33573e34e518d7d52bb95dba48f",
      family_id: data.family_id,
      list_emails_responsables: emails,
      process_name: data.process_name,
    }
    if (emails.length !== 0) {
      const response = await postProcess(objectPost);
      setIsApi(response.code === "ERR_NETWORK");
      setIsSuccess(response.code === undefined);
    } else {
      setIsEmail(true)
    }
  };

  return (
    <ProcessFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="processName" isInvalid={!!errors.process_name}>
          <FormLabel>Nome do processo</FormLabel>
          <Input
            placeholder="Nome do processo"
            type="text"
            {...register("process_name")}
          />
          <FormErrorMessage>{errors.process_name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="emails" isInvalid={isEmail}>
          <FormLabel>E-mails dos responsáveis</FormLabel>
          <CreatableSelect
            placeholder="Email"
            isMulti
            options={[]}
            onChange={(e) => handleEmail(e)}
            isValidNewOption={(email) => validarEmail(email)}
            noOptionsMessage={() => "Escreva seu email"}
            formatCreateLabel={(v) => `Adicionar email: ${v}`}
          />
          <FormErrorMessage>Email é obrigatório</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.family_id}>
          <FormLabel>Famílias cadastradas</FormLabel>
          <Select {...register("family_id")}>
            <option hidden></option>
            {data?.map((family: { id: string, family_name: string }) => (
              <option key={family.id} value={family.id}>{family.family_name}</option>
            ))}
          </Select>
          <FormErrorMessage>{errors.family_id?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Enviar</Button>
      </form>
    </ProcessFormStyled>
  );
}


