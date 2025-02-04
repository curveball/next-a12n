/** @link See https://authjs.dev/getting-started/migrating-to-v5#configuration-file */

import NextAuth, { Account, Profile } from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production",
  secret: process.env.AUTH_SECRET,
  providers: [
    {
      id: "a12n-server",
      name: "a12n-server",
      type: "oidc",
      issuer: process.env.AUTH_A12N_ISSUER,
      clientId: process.env.AUTH_A12N_ID, 
      clientSecret: process.env.AUTH_A12N_SECRET,
    }
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login"
  }
  })

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
    }
    profile: Profile;
    account: Account
  }
}