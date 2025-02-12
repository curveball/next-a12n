"use client"

import { AuthError } from 'next-auth'
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AuthErrorTypes = AuthError['type']

enum Error {
    Configuration = "Configuration",
    AccessDenied = "AccessDenied",
    Verification = "Verification",
    Default = "Default",
}

const errorMap: Record<Error, React.ReactNode> = {
    [Error.Configuration]: (
        <p>
            There was a problem when trying to authenticate. Please contact us if this
            error persists. Unique error code:
            <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
        </p>
    ),
    [Error.AccessDenied]: (
        <p>Access was denied. Please try again or contact support.</p>
    ),
    [Error.Verification]: (
        <p>Verification failed. Please try again.</p>
    ),
    [Error.Default]: (
        <p>An unknown error occurred. Please try again.</p>
    ),
}
const ErrorReport = () => {
    const search = useSearchParams()
    const error = search.get("error") as Error
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            {errorMap[error]}
        </div>
    )
}
export default function AuthErrorPage() {

    return (
        <Suspense>
            <div className="flex h-screen w-full flex-col items-center justify-center">
                <a
                    href="#"
                    className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <h5 className="mb-2 flex flex-row items-center justify-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Something went wrong
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <ErrorReport />
                    </div>
                </a>
            </div>
        </Suspense>
    )
}