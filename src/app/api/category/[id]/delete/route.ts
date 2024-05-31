import { prisma } from "@/libs";
import { Category, Event } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, params: { params: { id: string } }) {
  const id = Number.parseInt(params.params.id);
  try {
    const categoryDeleted: Category | null = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: categoryDeleted }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
