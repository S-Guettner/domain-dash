import { FC } from "react";
import Link from "next/link";

interface NavbarHeroProps {}

const NavbarHero: FC<NavbarHeroProps> = ({}) => {
  return (
    <main className="w-full h-24 p-10 flex items-center justify-end gap-4">
      <Link href={"/anmelden"}>Anmelden</Link>
      <section className="border border-[#016cff] p-2 rounded-2xl">
        <Link href={"/registrierung"}>Kostenlos starten</Link>
      </section>
    </main>
  );
};

export default NavbarHero;
