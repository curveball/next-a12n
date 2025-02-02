import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function login() {
    "use server"
    try {
        await signIn("a12n-server")
    } catch (error) {
        if (error instanceof AuthError) {
            return redirect(`${process.env.NEXT_ERROR_URL}?error=${error.type}`)
        }
    } finally {
        return redirect(`${process.env.NEXTAUTH_URL}/api/auth/signin/a12n-server`)
    }
}