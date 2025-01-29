// index.tsx 
import { auth } from "@/auth";
import Link from "next/link";

export default async function Index() {
    const session = await auth()

    return (
        <div className="flex flex-col gap-6 px-4 py-8">
            <h1 className="text-3xl font-bold">Next.js a12n-server</h1>
            <div>
                This is an example site to demonstrate how to use{" "}
                <Link href="https://nextjs.authjs.dev">NextAuth.js</Link> with <Link href="">`a12n-server`</Link>
                for authentication.
            </div>
            <div className="flex flex-col rounded-md bg-gray-100">
                <div className="rounded-t-md bg-gray-200 p-4 font-bold">
                    Current Session
                </div>
                <pre className="whitespace-pre-wrap break-all px-4 py-6">
                    {JSON.stringify(session, null, 2)}
                </pre>
            </div>
        </div>
    )
}
