import { Metadata } from "next";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export const metadata: Metadata = {
  title: "", //TODO
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="about" className="pl-0 md:pl-9">
        <div className="container flex flex-col items-center py-16 md:py-20">
          <Image
            src={Logo}
            alt="Logo"
            width={99}
            height={99}
            className="dark:invert mt-[-64px] z-10"
          />
          <h1>Application</h1>
          <p className="text-2xl text-center mt-2 text-neutral-700 dark:text-neutral-300 relative z-20">
            Projet citoyen
          </p>
        </div>
      </section>
    </main>
  );
}
