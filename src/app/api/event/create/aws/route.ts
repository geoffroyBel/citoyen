import { prisma } from "@/libs";
import { Event } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const {
      name,
      description,
      endingDate,
      startingDate,
      address,
      image,
      city,
      zipCode,
      latitude,
      longitude,
      categoryId,
      userId,
    } = data as Event;

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
        image: image,
        category: {
          connect: {
            id: categoryId,
          },
        },
        user: {
          connect: {
            id: userId, // Utilisation de user pour établir la relation
          },
        },
      },
    });

    return NextResponse.json({ newEvent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
