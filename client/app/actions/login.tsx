import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { getRedirectStatusCodeFromError, getRedirectTypeFromError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function login() {
    "use server"
    try {
        const authResult = await signIn("a12n-server")
        console.info(`::::: authResult::::: `, authResult)
    } catch (error) {

        if ('digest' in error) {
            const errorType = getRedirectTypeFromError(error);
            const errorCode = getRedirectStatusCodeFromError(error);
            redirect(`/error?error=${errorType}&code=${errorCode}`);
        }
        if (error instanceof Error) {
            const { type, cause } = error as AuthError;
            switch (type) {
                case "InvalidCallbackUrl":
                    return "Invalid callback URL.";
                case "CredentialsSignin":
                    return "Invalid credentials.";
                case "CallbackRouteError":
                    return cause?.err?.toString();
                default:
                    redirect(`/error?error=${type}`);
            }
        }

        throw error;
    }
}