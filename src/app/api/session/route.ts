import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/auth"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
const session = await getServerSession(authOptions);
const email = session?.user?.email;
console.log(email);



  return NextResponse.json(email);
}
