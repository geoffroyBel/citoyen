"use client"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "..";

export default function SignInForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 1000);
  }, []);

  if (session && session.user) {
    router.replace("/profile");
  } else if (mounted)
    return (
      <section className="auth-card mx-4 md:mx-auto my-12 flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 border-1">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto"
            src="/authjs.webp"
            alt="logo"
            width={44}
            height={44}
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="mt-5 mb-6 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-600 dark:text-white">
            Page de connexion
          </h2>
        </div>
        <div className="flex flex-col gap-4 lg:flex lg:flex-col lg:items-center">
          <Button onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" })} color="primary" className="w-full lg:w-2/3 flex justify-between items-center">
            <Image
              className="mx-2 drop-shadow-lg"
              src="/google.svg"
              alt="Google Logo"
              width={24}
              height={24}
            />
            <span className="ml-2">Connexion avec Google</span>
          </Button>
          <Button onClick={() => signIn("facebook", { callbackUrl: "/" })} color="primary" className="w-full lg:w-2/3 flex justify-between items-center">
            <Image
              className="mx-2 drop-shadow-lg"
              src="/github.svg"
              alt="Facebook Logo"
              width={24}
              height={24}
            />
            <span className="ml-2">Connexion avec Facebook</span>
          </Button>
          <Button onClick={() => signIn("apple", { callbackUrl: "/" })} color="primary" className="w-full lg:w-2/3 flex justify-between items-center">
            <Image
              className="mx-2 drop-shadow-lg dark:invert"
              src="/apple.svg"
              alt="Apple Logo"
              width={24}
              height={24}
            />
            <span className="ml-2">Connexion avec Apple</span>
          </Button>
        </div>
      </section>
    );
}
