import { prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, params: { params: { id: string } }) {
  const id = Number.parseInt(params.params.id);
  const { name } = await req.json();
  try {
    const categoryFind = await prisma.category.update({
      data: {
        name: name,
      },
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: categoryFind }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
