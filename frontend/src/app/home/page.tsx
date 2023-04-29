"use client"
import { useEffect } from "react";
import { fetchFamilies } from "../../services/services";

export default function Home() {

  useEffect(() => {
    fetchFamilies().then((families) => console.log(families));
  }, [])

    return (
      <main>
        
      </main>
    )
  }