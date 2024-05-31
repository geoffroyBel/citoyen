import { prisma } from "@/libs";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const { name } = Object.fromEntries(data.entries()) as unknown as Category;

  try {
    const newCategory: Category = await prisma.category.create({
      data: {
        name: name,
      },
    });
    return NextResponse.json({ data: newCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ erreur: error }, { status: 500 });
  }
}
