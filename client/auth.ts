import NextAuth from "next-auth";
     
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    {
      id: "a12n-server", // signIn("my-provider") and will be part of the callback URL
      name: "a12n-server", // optional, used on the default login page as the button text.
      type: "oauth", // or "oauth" for OAuth 2 providers
      issuer: process.env.NODE_ENV === "production" ? process.env.NEXTAUTH_URL : process.env.NEXTAUTH_INTERNAL_URL, // to infer the .well-known/openid-configuration URL
      clientId: process.env.NEXTAUTH_CLIENT_ID, 
      clientSecret: process.env.NEXTAUTH_SECRET, 
      authorization: process.env.NEXTAUTH_INTERNAL_URL + `/authorize`,
      token: process.env.NEXTAUTH_INTERNAL_URL + `/token`,
      userinfo: process.env.NEXTAUTH_INTERNAL_URL + `/user/:id`,
    }
  ]
  })