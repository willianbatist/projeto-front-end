"use client"
import Image from "next/image";
import { HeaderStyled } from "./header.styled";
import { increment } from "../../store/features/changeComponentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import logo from "../../../../img/loog.png"


interface Props {
  dispatchEvent: string
  statusComponent: string
}

function ItemNav({statusComponent, dispatchEvent = "processes"}: Props) {
  const change = useAppSelector((state) => state.changeComponents.value) || "processes";
  const dispatch = useAppDispatch();
  

  const setStyled = () => {
    const className = "componentSeleted";
    return dispatchEvent === change && className;
  };
  

  return(
    <li className={`${setStyled()}`} onClick={() => dispatch(increment(dispatchEvent))}>{statusComponent}</li>
  )
}


export default function Header() {

  return(
    <HeaderStyled>
      <nav>
        <ul>
          <ItemNav dispatchEvent="processes" statusComponent="Processos"/>
          <ItemNav dispatchEvent="processForm" statusComponent="Cadastrar processo"/>
        </ul>
      </nav>
    </HeaderStyled>
  )
}