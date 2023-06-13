import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";

export async function GET(request: NextRequest) {
  console.log("api endpoint");
  const category = request.nextUrl.searchParams.get("category") ?? "All";
  let filter = {};

  if (category !== "All") {
    filter = {
      where: {
        category,
      },
    };
  }

  const topics = await prisma.topic.findMany(filter);

  return NextResponse.json(
    topics.map((t) => ({ ...t, tags: t.tags.split(",") }))
  );
}
