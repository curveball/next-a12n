import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
    username: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }).trim()
})

export async function login(formData: FormData) {
    "use server"
    const validatedFields = loginSchema.safeParse({
        userName: formData.get('userName'),
        password: formData.get('password')
    })
    if (!validatedFields.success) {
        return { error: validatedFields.error.errors }
    }

    try {
        await signIn("credentials", formData)
    } catch (error) {
        if (error instanceof AuthError) {
            return redirect(`${NEXT_SIGNIN_ERROR_URL}?error=${error.type}`)
        }
        throw error
    }
}