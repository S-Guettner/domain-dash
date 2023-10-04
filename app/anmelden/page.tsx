'use client'
import { FC } from "react";
import LoginModalCustomer from "../components/customer/LoginModalCustomer";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
        <LoginModalCustomer />
    </main>
  )
};

export default page;
