"use client";

import Image from "next/image";
import { Button } from "..";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useTheme } from "next-themes";
import Link from "next/link";
import { InformationsEventCard } from "../cards/InformationsEventCard";
import { useState } from "react";
import EventGroupCard from "../cards/EventGroupCard";

export default function EventPage() {
    const { theme } = useTheme();
    const [collectifCount, setCollectifCount] = useState(1);

    return (
      <main className="flex flex-col">
        <section id="about" className="flex flex-col">
          <article className="w-full flex flex-col px-4 md:pr-0 md:px-10 py-6 md:py-10">
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="relative w-full md:w-6/12 z-10">
                <div className="absolute rounded-none top-2 left-2 md:top-5 md:left-5 w-full h-full bg-secondary z-0"></div>
                <Image
                  alt="Card background"
                  className="relative w-full z-10 !rounded-none"
                  src="/hero-card.jpeg"
                  width={1200}
                  height={800}
                />
              </div>
              <Card className="relative md:right-10 flex flex-col ml-0 md:ml-auto mt-6 md:mt-0 rounded-none w-full md:w-6/12 md:h-1/2 z-20 bg-white dark:bg-gray-800">
                  <CardHeader className="flex flex-row justify-center">
                      <p className="uppercase text-tertiary font-medium my-2 md:my-5">Catégorie</p>
                  </CardHeader>
                  <CardBody className="flex flex-col items-center justify-center">
                      <p className="uppercase font-extrabold text-2xl text-center mb-2 md:mb-3">Festival musiques indiennes</p>
                      <p className="mt-2 md:mt-3">Du samedi 01 juin au dimanche 02 juin 2024</p>
                  </CardBody>
                  <CardFooter className="flex flex-row justify-center">
                      <Link href={"/about"}>
                          <Button
                            color={theme === "dark" ? "secondary" : "primary"}
                            size="sm"
                            className="mx-2 my-2 md:my-5 font-medium dark:text-secondaryText"
                          >
                            Créez votre collectif
                            <Image
                                className={theme === "dark" ? "ml-2 drop-shadow-lg" : "ml-2 drop-shadow-lg invert"}
                                src="/group.svg"
                                alt="Group Logo"
                                width={16}
                                height={16}
                            />
                          </Button>
                      </Link>
                  </CardFooter>
              </Card>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 md:mt-10">
                <div className="flex flex-col w-full md:w-5/12 lg:w-1/3">
                    <InformationsEventCard 
                        iconName="location" 
                        primaryInformation="Centre culturel Pierre Cerdan"
                        secondaryInformation="123 rue de Gessard 76000 Rouen"
                    />
                    <InformationsEventCard 
                        iconName="calendar" 
                        primaryInformation="Samedi 01 juin au dimanche 02 juin 2024"
                    />
                    <InformationsEventCard 
                        iconName="euro" 
                        primaryInformation="Gratuit"
                        secondaryInformation="Tout public"
                    />
                    <InformationsEventCard 
                        iconName="information" 
                        primaryInformation="https://www.rouen.fr"
                        piIsLink
                    />
                    {collectifCount > 0 ? (
                        <Card className="rounded-none mb-2 bg-secondaryLight dark:bg-gray-800">
                            <CardBody className="mx-2 flex flex-row items-baseline">
                                <p className="text-xl text-tertiary">
                                    {collectifCount} {collectifCount > 1 ? "collectifs" : "collectif"}
                                </p>
                                <p className="ml-1">
                                    {collectifCount > 1 ? "participent" : "participe"} à cet événement
                                </p>
                            </CardBody>
                        </Card>
                    ) : (
                        <></>
                    )}
                </div>
                <Card className="w-full md:w-7/12 lg:w-8/12 mt-2 md:mt-0 mx-2 md:mx-10 rounded-none bg-white dark:bg-gray-800 p-5">
                    <CardBody className="leading-relaxed text-justify">
                        Diam eirmod rebum ea sadipscing. Congue takimata aliquyam sit nonumy takimata vero elitr sed liber iriure accusam. Dolor at adipiscing tation ea eirmod duis hendrerit clita vero labore dolor. Accusam magna justo blandit tempor diam illum sit assum ipsum et consequat soluta facilisis sed labore dolor invidunt. Vero dolore dolor sit rebum lorem adipiscing diam eum labore invidunt illum dolor sed. Eirmod quod takimata eum blandit ea et tempor sanctus odio congue kasd nulla magna diam sanctus praesent eirmod takimata. Sed ut commodo est eirmod labore amet takimata sanctus ipsum et tempor takimata ipsum assum labore. Augue lorem no sea ad takimata dolore et vero et magna.
                    </CardBody>
                </Card>
            </div>
          </article>
          {collectifCount > 0 ? (
            <EventGroupCard />
          ) : (
            <></>
          )} 
        </section>
      </main>
    );
}
