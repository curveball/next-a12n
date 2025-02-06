
"use server"
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export async function login() {

    try {
        await signIn("a12n-server")
    } catch (error) {

        if (isRedirectError(error)) {
            console.error(`::::: redirect error::::: `, error)
        }

        if (error instanceof AuthError) {
            return redirect(`${process.env.NEXTAUTH_URL}?error=${error.type}`)
        }
        throw error
    }
}