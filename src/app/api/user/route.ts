import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const user = await prisma.user.findFirst({
        where: { email: "dudarchuk.maksym@gmail.com" }
    });
    console.log("12 " + user)
    return NextResponse.json(user)

}
