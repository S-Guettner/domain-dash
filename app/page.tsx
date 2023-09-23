'use client'
import { useState } from 'react'
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from 'next-auth/react'
import connectionToDB from './DB/dbConnection'

export default function Home() {


  const { data: session } = useSession()

  connectionToDB()
  return (
    <main className="flex ">
      <button onClick={() => signIn()}>
        <h1>SIGN IN</h1>
      </button>
    </main>
  )
}
