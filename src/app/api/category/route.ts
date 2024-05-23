import { prisma } from "@/libs";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const categoryFind: Category[] = await prisma.category.findMany();
    return NextResponse.json({ data: categoryFind }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
