import Providers from "@/app/providers";
import { MainNavbar } from "@/components";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  description: "lorem ipsum dolor sit amec", //TODO
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <MainNavbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
