import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test",
};

export default function ToDoPage() {
  return (
    <main className="flex flex-col">
      <section id="about" className="pl-0 md:pl-9">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <article className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              To Do
            </h2>
          </article>
        </div>
      </section>
    </main>
  );
}