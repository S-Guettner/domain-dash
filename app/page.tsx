"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from 'axios'

export default function Home() {
  useEffect(() => {
    const db = async () => {
      try {
        


        const response = await axios.post('/api/dbconnect');
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }

    db()
  }, [])

  return (
    <main className="flex ">
      <Link href={"/registrierung"}>Sign in</Link>
    </main>
  );
}
