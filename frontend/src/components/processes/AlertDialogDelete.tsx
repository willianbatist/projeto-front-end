"use client"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { deleteProcess } from "../../services/processes";
import { isReloadData } from "../../store/features/changeComponentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PropsId } from "../../types";


export default function AlertDialogDelete({ id }: PropsId) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const isReload = useAppSelector((state) => state.changeComponents?.isReload);
  const dispatch = useAppDispatch();

  const handleDeleteProcess = async (callBack: any, id: string) => {
    callBack();
    await deleteProcess(id);
    dispatch(isReloadData(isReload))  
  }


  return (
    <>
      <DeleteIcon onClick={onOpen} />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay backdropFilter='blur(5px)'>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'#0f293a'}>
              Deletar Processo
            </AlertDialogHeader>

            <AlertDialogBody color={'#0f293a'}>
              Você tem certeza? Você não poderá desfazer esta ação depois.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button color='white' backgroundColor={'#0f293a'} onClick={() => handleDeleteProcess(onClose, id)} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}