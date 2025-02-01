/** @link See https://authjs.dev/getting-started/migrating-to-v5#configuration-file */

import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    {
      id: "a12n-server", // signIn("my-provider") and will be part of the callback URL
      name: "a12n-server", // optional, theoretically used on the default login page as the button text.
      type: "oauth",
      issuer: process.env.NEXTAUTH_URL_INTERNAL,
      clientId: process.env.NEXTAUTH_CLIENT_ID, 
      clientSecret: process.env.NEXTAUTH_SECRET, 
      wellKnown: process.env.NEXTAUTH_URL_INTERNAL + "/.well-known/oauth-authorization-server",
    }
  ],
    pages: {
      signIn: "/login", // map to a custom front end login url 
    },
  })