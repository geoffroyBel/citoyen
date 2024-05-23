import { prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name } = await req.json();

  try {
    const newCategory = await prisma.category.create({
      data: {
        name: name,
      },
    });
    return NextResponse.json({ data: newCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
