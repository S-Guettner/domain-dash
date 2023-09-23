import { FC } from "react";
import RegistrationModalCustomer from "../components/RegistrationModalCustomer";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      <RegistrationModalCustomer />
    </main>
  )
};

export default page;
