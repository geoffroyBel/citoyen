import { prisma } from "@/libs";
import { Event } from "@prisma/client";
import { unlink } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";

export async function DELETE(req: Request, params: { params: { id: string } }) {
  const id = Number.parseInt(params.params.id);
  try {
    const eventDeleted: Event | null = await prisma.event.delete({
      where: {
        id: id,
      },
    });

    if (eventDeleted) {
      const path = join(process.cwd(), "public", eventDeleted.image);
      await unlink(path);
    }
    return NextResponse.json({ data: eventDeleted }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
