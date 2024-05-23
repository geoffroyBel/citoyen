import { prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const categoryFind = await prisma.category.findMany();
    return NextResponse.json({ data: categoryFind }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
