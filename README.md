# pnpm workspace with @curveball/a12n-server and Next.js

This is a simple example of how to use `@curveball/a12n-server` with a Next.js project using the authorization code flow.

## Getting Started

`pnpm install` to install dependencies.

In separate Terminal tabs:

`pnpm start:server` to start server (will open at `http://localhost:8531/`) 

`pnpm start:client` Next will open at `http://localhost:3000/`

`pnpm lint` to lint all projects

## Environment variables

In `client/.env` :
```
NEXT_API_BASE_URL=http://localhost:8531/
NEXTAUTH_URL_INTERNAL=http://localhost:8531/ # internal url of your a12n-server for development purposes
NEXTAUTH_URL=https://example.com # canonical url of your website
NEXT_SIGNIN_ERROR_URL=http://localhost:8531/
NEXT_ERROR_REDIRECT_URL=https://example.com/error # where to redirect on login error
NEXT_AUTH_SECRET= # `npx auth secret` or `openssl rand -hex 32`
```

# Related Reading

- On [migrating from next-auth 4 to 5](https://authjs.dev/getting-started/migrating-to-v5)

