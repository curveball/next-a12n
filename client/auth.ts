import NextAuth from "next-auth";
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: []
  })