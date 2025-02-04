/** @link See https://authjs.dev/getting-started/migrating-to-v5#configuration-file */

import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production",
  secret: process.env.AUTH_SECRET,
  providers: [
    {
      id: "a12n-server",
      name: "a12n-server",
      type: "oidc",
      issuer: process.env.AUTH_A12N_URL,
      clientId: process.env.AUTH_A12N_ID, 
      clientSecret: process.env.AUTH_A12N_SECRET,
    }
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  }
  })

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
    }
  }
}