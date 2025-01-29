'use client'

import { useActionState } from 'react'
import { signup } from '../app/actions/auth'

export default function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <div className="m-auto max-w-md overflow-hidden rounded-xl bg-white md:max-w-2xl py-6">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign up for an account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={action} id="signup" className="space-y-6">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" placeholder="Name" />
                    </div>
                    {state?.errors?.name && <p className='text-red-500'>{state.errors.name}</p>}

                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" placeholder="Email" />
                    </div>
                    {state?.errors?.email && <p className='text-red-500'>{state.errors.email}</p>}

                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    {state?.errors?.password && (
                        <div>
                            <p>Password must:</p>
                            <ul>
                                {state.errors.password.map((error: unknown) => (
                                    <li key={error as string} className='text-red-500'>- {error as string}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button disabled={pending} type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}