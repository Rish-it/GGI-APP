import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET: Fetch all items
export async function GET() {
  const items = await prisma.item.findMany();
  return NextResponse.json(items);
}

// POST: Create a new item
export async function POST(req: Request) {
  const { name } = await req.json();
  if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const newItem = await prisma.item.create({ data: { name } });
  return NextResponse.json(newItem);
}
