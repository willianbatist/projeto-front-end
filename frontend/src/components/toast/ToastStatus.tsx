import { Button, Wrap, WrapItem, useToast, AlertStatus} from "@chakra-ui/react"

type Props = {
  status: AlertStatus,
  message: string
}

export default function ToastStatus(Props: Props) {
  const toast = useToast();

  return (
    <>
      {
        toast({
          title: `${Props.message}`,
          status: Props.status,
          isClosable: true,
        })
      }
    </>
  )
}