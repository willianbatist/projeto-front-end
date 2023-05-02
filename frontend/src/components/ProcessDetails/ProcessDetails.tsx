"use client"
import { QuestionIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { fetcher } from "../../services/fetcher";
import useSWR from "swr";

type Props = {
  id: string,
}

export default function ProcessDetails(Props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useSWR(`http://localhost:3000/processes/${Props.id}`, fetcher);
  const company = useSWR(`http://localhost:3000/companies/${data?.company_id}`, fetcher);
  const family = useSWR(`http://localhost:3000/families/${data?.family_id}`, fetcher);


  return (
    <>
      <QuestionIcon onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter='blur(5px)' />
        <ModalContent>
          <ModalHeader
            fontWeight='bold'
            color={"#0f293a"}
          >
            Detalhes do processo
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal-text-process-details">
              <p><span>Nome do processo:</span>{` ${data?.process_name}`}</p>
              <p><span>Empresa:</span>{` ${company.data?.company_name}`}</p>
              <p><span>Família:</span>{` ${family.data?.family_name}`}</p>
              <p><span>Lista de emails dos responsaveis</span></p>
              {data?.list_emails_responsables.map((email: string, index: number) => (
                <p key={index}>{email}</p>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button backgroundColor={"#0f293a"} color={"white"} mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}