import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token: any = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token",
  });
  // if (token?.uuid && Date.now() / 1000 < token?.exp) {
  //   return NextResponse.redirect("http://localhost:3000/api/auth/signin");
  // }
  if (!token?.uuid) {
    return NextResponse.redirect("http://localhost:3000/api/auth/signin");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

// import { withAuth } from "next-auth/middleware"

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log(req.nextauth.token)
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// )

// export const config = { matcher: ["/admin"] }

// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/admin/:path*"] };

// import { NextApiRequest } from "next";
// import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
// import { NextRequest } from "next/server";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req: NextRequestWithAuth) {
//     const session: any = req;
//     console.log(session);
//   }
//   // ,
//   // {
//   //   callbacks: {
//   //     authorized: ({ token }) => token?.role === "admin",
//   //   },
//   // }
// );

// export const config = { matcher: ["/admin/:path*"] };
