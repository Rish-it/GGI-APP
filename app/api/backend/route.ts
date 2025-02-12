import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET: Fetch all items
export async function GET() {
  try {
    const items = await prisma.item.findMany();
    return NextResponse.json(items);
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
  }
}

// POST: Create a new item
export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });

    const newItem = await prisma.item.create({ data: { name } });
    return NextResponse.json(newItem);
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Failed to create item" }, { status: 500 });
  }
}