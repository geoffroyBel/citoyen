import { SignInForm } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion",
};

export default function SignInPage() {
  return <SignInForm />;
}
