import nextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "@/app/libs/auth";


const handler = nextAuth(authOptions);

export { handler as GET, handler as POST }
