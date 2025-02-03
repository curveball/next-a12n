/** @link See https://authjs.dev/getting-started/migrating-to-v5#configuration-file */

import NextAuth from "next-auth";

console.log(process.env.A12N_URL);

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  secret: process.env.AUTH_SECRET,
  providers: [
    {
      id: "a12n-server",
      name: "a12n-server",
      type: "oidc",
      issuer: process.env.A12N_URL,
      clientId: process.env.A12N_CLIENT_ID, 
      clientSecret: process.env.A12N_SECRET, 
    }
  ],
  pages: {
    //signIn: "/login", // map to a custom front end login url,
    //signOut: "/logout", // map to a custom front end logout url,
    },
  })
