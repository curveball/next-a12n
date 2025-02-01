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
      issuer: process.env.NEXTAUTH_INTERNAL_URL + `/.well-known/oauth-authorization-server`,
      clientId: process.env.NEXTAUTH_CLIENT_ID, 
      clientSecret: process.env.NEXTAUTH_SECRET, 
      authorization: process.env.NEXTAUTH_INTERNAL_URL + `/authorize`,
      token: process.env.NEXTAUTH_INTERNAL_URL + `/token`,
      // userinfo: process.env.NEXTAUTH_INTERNAL_URL + `/user/:id`,
    }
  ],
    pages: {
      signIn: "/login", // map to a custom front end login url 
    },
  })