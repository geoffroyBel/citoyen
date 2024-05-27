import { prisma } from "@/libs";
import { Event } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, params: { params: { id: string } }) {
  const id = Number.parseInt(params.params.id);
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
  }: Event = await req.json();

  const updateData: Partial<Event> = {
    ...(name && { name }),
    ...(description && { description }),
    ...(endingDate && { endingDate }),
    ...(startingDate && { startingDate }),
    ...(address && { address }),
    ...(city && { city }),
    ...(zipCode && { zipCode }),
    ...(latitude && { latitude }),
    ...(longitude && { longitude }),
    ...(categoryId && { categoryId }),
  };

  try {
    const eventUpdated: Event | null = await prisma.event.update({
      data: updateData,
      where: { id: id },
    });
    return NextResponse.json({ data: eventUpdated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
