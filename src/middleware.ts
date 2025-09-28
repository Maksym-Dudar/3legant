import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log("date: ", new Date);
    return NextResponse.next()
}

export const config = {
    // matcher: ""
}
// todo cheking acount page token