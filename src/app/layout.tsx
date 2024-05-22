import Providers from "@/app/providers";
import { MainNavbar } from "@/components";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "", //TODO
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Providers>
            <MainNavbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}