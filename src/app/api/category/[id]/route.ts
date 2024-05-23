import { prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function GET(req: Request, params: { params: { id: string } }) {
  const id = Number.parseInt(params.params.id);
  try {
    const categoryFind = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: categoryFind }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
