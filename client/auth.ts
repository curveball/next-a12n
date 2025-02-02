/** @link See https://authjs.dev/getting-started/migrating-to-v5#configuration-file */

import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    {
      id: "a12n-server",
      name: "a12n-server",
      type: "oidc",
      issuer: process.env.NEXTAUTH_URL,
      clientId: process.env.NEXTAUTH_CLIENT_ID, 
      clientSecret: process.env.NEXTAUTH_SECRET, 
      authorization: process.env.NEXTAUTH_URL + "/authorize",
    }
  ],
  pages: {
    signIn: "/login", // map to a custom front end login url,
    signOut: "/logout", // map to a custom front end logout url,
    },
  })