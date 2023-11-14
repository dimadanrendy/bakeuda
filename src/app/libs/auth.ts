import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Login",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const auth = await fetch(`${process.env.BASE_URL}/auth`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json", // Set the appropriate content type
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        if (auth.status !== 200) return null;
        const user = await auth.json();

        // const sesi = user.uuid;
        // const res = NextResponse.next()

        // res.cookies.set('userId', sesi);

        if (user) {
          return { ...user };

          // Any object returned will be saved in `user` property of the JWT
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      //   console.log(token);
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      //   console.log(session);

      return { ...session };
    },
  },
};
