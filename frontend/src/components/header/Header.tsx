"use client"
import Image from "next/image";
import { HeaderStyled } from "./header.styled";
import { increment, reset } from "../../store/features/changeComponentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import logo from "../../../../img/loog.png"


export default function Header() {

  const dispatch = useAppDispatch();

  return(
    <HeaderStyled>
      <h1>
        <Image
          className="img-static"
          src={logo} alt="logo da empresa futurai"
          width={246}
          height={148}
        />
      </h1>
      <nav>
        <ul>
          <li onClick={() => dispatch(increment("processes"))}>Processos</li>
          <li onClick={() => dispatch(increment("processForm"))}>Adicionar Processo</li>
        </ul>
      </nav>
    </HeaderStyled>
  )
}