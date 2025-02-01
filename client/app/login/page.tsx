import { login } from "../actions/login";

export default async function Page() {
    return (
        <div>
            <form action={login}>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
