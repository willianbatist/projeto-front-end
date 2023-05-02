/* eslint-disable react/no-unescaped-entities */
"use client"
import { EditIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import CreatableSelect from "react-select/creatable";
import React, { useState } from "react";
import { MultiValue } from "react-select";
import { validarEmail } from "../../utils/checks";
import { fetcher } from "../../services/fetcher";
import useSWR, { useSWRConfig } from "swr";
import { updateProcess } from "../../services/processes";
import { PropsProcessEdit } from "../../types/index";


export default function ProcessEdit(Props: PropsProcessEdit) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useSWR(`http://localhost:3000/families`, fetcher);
  const [processName, setProcessName] = useState<string | undefined>();
  const [emails, setEmails] = useState<string[]>([]);
  const [familyId, setFamilyId] = useState<string | undefined>();

  const { mutate } = useSWRConfig();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  function handleEmail(event: MultiValue<{ label: string; value: string; }>) {
    const arrayEmails = event.map((objectEmails: { label: string, value: string }) => objectEmails.value);
    setEmails(arrayEmails);
  }

  async function handleUpdateProcess(data: any, callBack: { (): void; (): void; }) {
    callBack()
    let newEmail;
    newEmail = emails;
    if (emails.length === 0) {
      newEmail = data.list_emails_responsables
    }
    
    let objPut = {
      id: data.id,
      company_id: data.company_id,
      family_id: familyId || data.family_id,
      list_emails_responsables: newEmail,
      process_name: processName || data.process_name
    }
    await updateProcess(objPut);
    mutate("http://localhost:3000/processes")
  }

  const newListEmail = Props.list_emails_responsables.map((email: string) => {
    return {
      label: email,
      value: email
    }
  })
  

  return (
    <>
      <EditIcon onClick={onOpen} />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          backdropFilter='blur(5px)'
        />
        <ModalContent>
          <ModalHeader color={'#0f293a'}>Editar Processo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel
                color={'#0f293a'}
                fontWeight={'bold'}
                >
                  Nome do Processo:
                </FormLabel>
              <Input
                border={'1px solid #0f293a'}
                ref={initialRef}
                placeholder="Nome do Processo"
                defaultValue={Props.process_name}
                onChange={(e) => setProcessName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel
                color={'#0f293a'}
                fontWeight={'bold'}
                >
                  E-mails dos responsáveis
              </FormLabel>
              <CreatableSelect
                styles={{control:  (base, state) => ({...base, border: "1px solid #0f293a"})}}
                className='creatableSelect'
                placeholder="Email"
                isMulti
                options={[]}
                onChange={(e) => handleEmail(e)}
                defaultValue={newListEmail}
                isValidNewOption={(email) => validarEmail(email)}
                noOptionsMessage={() => "Escreva seu email"}
                formatCreateLabel={(email) => `Adicionar email: ${email}`}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                marginTop={'10px'}
                color={'#0f293a'}
                fontWeight={"bold"}
                >
                Famílias cadastradas
              </FormLabel>
              <Select border={'1px solid #0f293a'} defaultValue={Props.family_id} onChange={(e) => setFamilyId(e.target.value)}>
                {data?.map((family: { id: string, family_name: string }) => (
                  <option key={family.id} value={family.id}>{family.family_name}</option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={'#0f293a'}
              color={'white'}
              mr={3}
              onClick={() => handleUpdateProcess(Props, onClose)}
            >
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}