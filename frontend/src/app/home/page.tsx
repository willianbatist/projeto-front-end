"use client"
import { useAppSelector } from "../../store/hooks";
import Header from "../../components/header/Header";
import Processes from "../../components/processes/Processes";
import ProcessForm from "../../components/processForm/ProcessForm";


export default function Home() {
  const change = useAppSelector((state) => state.changeComponents.value);


  return (
    <main>
      <Header/>
      { (change === "processes")? (<Processes/>) : "" }
      { (change === "processForm")? (<ProcessForm/>) : "" }
    </main>
  )
}