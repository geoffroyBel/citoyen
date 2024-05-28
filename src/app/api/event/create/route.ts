import { prisma } from "@/libs";
import { Event } from "@prisma/client";
import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const file: File | null = data.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ erreur: "No file" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join(process.cwd(), "public", "event", Date.now() + file.name);
  await writeFile(path, buffer);
  try {
    const { name } = Object.fromEntries(data.entries()) as unknown as Event;

    const newEvent: Event = await prisma.event.create({
      data: {
        name: name,
        description: "description",
        endingDate: "2025-12-12T00:00:00.000Z",
        startingDate: "2022-12-12T00:00:00.000Z",
        address: "address",
        city: "city",
        zipCode: "zipCode",
        latitude: "latitude",
        longitude: "longitude",
        image: path.replace(join(process.cwd(), "public"), ""),
        category: {
          connect: {
            id: 1,
          },
        },
      },
    });

    return NextResponse.json({ newEvent }, { status: 201 });
  } catch (error) {
    if (file) await unlink(path);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
