"use client"
import Image from "next/image";
import { HeaderStyled } from "./header.styled";
import { increment } from "../../store/features/changeComponentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import logo from "../../../../img/loog.png"
import { useRef } from "react";

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

  console.log(setStyled());
  

  return(
    <li className={`${setStyled()}`} onClick={() => dispatch(increment(dispatchEvent))}>{statusComponent}</li>
  )
}


export default function Header() {

  return(
    <HeaderStyled>
      <h1>
        <Image
          className="img-static"
          src={logo} alt="logo da empresa futurai"
          width={190}
        />
      </h1>
      <nav>
        <ul>
          <ItemNav dispatchEvent="processes" statusComponent="Processos"/>
          <ItemNav dispatchEvent="processForm" statusComponent="Cadastrar processo"/>
        </ul>
      </nav>
    </HeaderStyled>
  )
}