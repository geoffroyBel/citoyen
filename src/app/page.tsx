import { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "", //TODO
};

const nunito = Nunito_Sans({ weight: "400", subsets: ["latin"] });

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
            <h1
              className={twMerge(
                "text-6xl text-black dark:text-white relative z-20 !p-0 !m-0",
                nunito.className
              )}
            >
              Application
            </h1>
            <p className="text-2xl text-center mt-2 text-neutral-700 dark:text-neutral-300 relative z-20">
              Projet citoyen
            </p>
        </div>
      </section>
    </main>
  );
}