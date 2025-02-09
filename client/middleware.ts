import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { auth as middleware } from "./auth";

export default async function auth(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/api/auth')) {
        if (req.nextUrl.pathname.endsWith('/signout')) {
            const cookieStore = await cookies()
            cookieStore.delete('A12N')
        }
    }

    return middleware(req);
}
