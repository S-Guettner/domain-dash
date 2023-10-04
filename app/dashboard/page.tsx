'use client'
import { FC,useEffect } from "react";
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { data: session } = useSession()
  console.log(session?.user?.email)
  const router = useRouter();

  useEffect(() => {
    if(session){
      console.log(session)
    }
  },[session])

/*   useEffect(() => {
    const newUser = async () => {

        try {
          const response = await axios.post('/api/newUser', { email: session?.user?.email, password: "password", userType: "customer"});
          console.log(response)
        } catch (err) {
          console.log(err)
        }
    }
    if(session){
      newUser()

    }
  }, [session]) */

  return (
    <main>
      <button onClick={() => {signOut()}}>sign out</button>
    </main>
  )
};

export default page;

