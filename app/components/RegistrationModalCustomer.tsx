'use client'
import { FC } from "react";
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from 'next-auth/react'
interface RegistrationModalCustomerProps {}

const registrationModalCustomer: FC<RegistrationModalCustomerProps> = ({}) => {
    
    const customSignIn = async (provider: string, callbackUrl: string) => {
        return await signIn(provider, { callbackUrl });
      };

    return (
    <div className="text-black">

        <button onClick={() => customSignIn('google',"http://localhost:3000/dashboard")}>google</button>
    </div>
  )
};

export default registrationModalCustomer;
