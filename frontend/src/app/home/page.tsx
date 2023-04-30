"use client"
// import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
// import { increment, reset } from "../../store/features/counterSlice";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Processes from "../../components/Processes/Processes";

export default function Home() {
  // const [text, setText] =useState<string>();

  // const count = useAppSelector((state) => state.counterReducer.value);
  // const dispatch = useAppDispatch();

  // console.log(count, "count");

  // const handleText = (e: ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value)
  // }
    return (
      <main>
        <Processes/>
      </main>
    )
  }