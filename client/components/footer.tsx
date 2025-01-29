import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bottom-0 flex gap-6 flex-wrap items-center justify-center">
            <Link href="https://github.com/curveball/a12n-server" target="_blank">
                <div className="mb-8 mt-16 flex flex-col items-center">
                    <div className="flex space-x-4 text-sm">
                        <pre>@curveball/a12n-server</pre>
                    </div>
                </div>
            </Link>
            <Link href="https://github.com/curveball/pnpm-example" target="_blank">
                <div className="mb-8 mt-16 flex flex-col items-center">
                    <div className="flex space-x-4 text-sm">
                        <pre>github</pre>
                    </div>
                </div>
            </Link>
        </footer>
    )
}
