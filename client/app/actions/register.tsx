
"use server"
import { redirect } from "next/navigation";

export async function register() {
    await redirect(`${process.env.AUTH_A12N_ISSUER}/register?client_id=${process.env.AUTH_A12N_ID}&client_secret=${process.env.AUTH_A12N_SECRET}&redirect_uri=${process.env.NEXTAUTH_URL}`)
}