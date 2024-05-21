import { GitHubIcon } from "@/components";
import SearchInput2 from "@/components/inputs/SearchInput2";
import SearchInput from "@/components/inputs/SearchInput";
import { Metadata } from "next";
import MedievalTentIcon from "@/components/icons/MedievalTentIcon";

export const metadata: Metadata = {
  title: "Test",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section id="about" className="pl-0 md:pl-9">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <article className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Test
            </h2>

            <div className="flex items-center justify-center mt-5 pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="#" rel="" target="_blank">
                <GitHubIcon
                  title="GitHub"
                  className="dark:invert transform hover:scale-105 duration-200 select-none"
                />
              </a>
            </div>
          </article>
          <section>
            <div className="mt-3">
              <SearchInput label="Lieu" placeholder="Rechercher par lieu" />
            </div>
            <div className="mt-3">
              <SearchInput label="Evénement" placeholder="Rechercher par événement" />
            </div>
          </section>
          <section className="lg:ml-3">
            <div className="mt-3">
              <SearchInput2 label="Lieu" placeholder="Rechercher par lieu" />
            </div>
            <div className="mt-3">
              <SearchInput2 label="Evénement" placeholder="Rechercher par événement" />
            </div>
          </section>
          <div className="mt-3">
            {/* <MedievalTentIcon width={20} height={20}/> */}
          </div>
        </div>
      </section>
    </main>
  );
}