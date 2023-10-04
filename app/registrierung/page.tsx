import { FC } from "react";
import RegistrationModalCustomer from "../components/customer/RegistrationModalCustomer";
import NavbarHero from "../components/NavbarHero/NavbarHero";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main >
      {/* placeholder */}
      <NavbarHero />
      <section className="h-screen flex justify-center items-center">
        <RegistrationModalCustomer />
      </section>
    </main>
  );
};

export default page;

