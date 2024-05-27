import { prisma } from "@/libs";
import { Event } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    name,
    description,
    endingDate,
    startingDate,
    address,
    city,
    zipCode,
    latitude,
    longitude,
    categoryId,
  } = await req.json();

  try {
    const newEvent: Event = await prisma.event.create({
      data: {
        name: name,
        description: description,
        endingDate: endingDate,
        startingDate: startingDate,
        address: address,
        city: city,
        zipCode: zipCode,
        latitude: latitude,
        longitude: longitude,
        image: "chemin/de/image",
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    return NextResponse.json({ data: newEvent }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
