import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  await prisma.chat.create({
    data: {
      name: body.name,
      fileUrl: "https://google.com",
      user: {
        connect: {
          email: body.email,
        },
      },
    },
  });

  return new NextResponse("Hi");
}
