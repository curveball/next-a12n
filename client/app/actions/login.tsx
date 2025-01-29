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

    const validatedFields = loginSchema.safeParse({
        userName: formData.get('userName'),
        password: formData.get('password')
    })
    if (!validatedFields.success) {
        return { error: validatedFields.error.errors }
    }
    // TODO: implement login
}