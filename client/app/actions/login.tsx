import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function login() {
    "use server"
    try {
        await signIn("a12n-server")
    } catch (error) {
        if (error instanceof AuthError) {
            return redirect(`${process.env.A12N_URL}/login?continue=`)
        }
    } finally {
        return redirect(`${process.env.A12N_URL} /api/auth / signin / a12n - server`)
    }
}