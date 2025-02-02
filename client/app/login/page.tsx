import { login } from "../actions/login";

export default async function Page() {
    return (

        <form action={login} id="login">
            <button type="submit" className="text-center hover:cursor-pointer w-auto px-3 py-2 rounded-md bg-green-400">Sign In</button>
        </form>

    )
}
