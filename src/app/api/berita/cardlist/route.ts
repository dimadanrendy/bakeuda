import { authOptions } from "@/app/libs/auth";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Ipost {
  id: number;
  name: string;
  image: string;
  url: string;
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  console.log(email);

  const res = await axios.get(`https://lab.dima-dan-rendy.shop/banner`);
  const posts = res.data;

  return NextResponse.json(posts);
}

// export async function POST() {
// }

// export async function DELETE(){

// }

// export async function PATCH( ){

// }
