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
NEXTAUTH_URL=https://example.com # canonical url of your website
NEXT_ERROR_REDIRECT_URL=https://example.com/error # where to redirect on login error

AUTH_SECRET= # `npx auth secret` or `openssl rand -hex 32`
AUTH_AUTH0_SECRET=
AUTH_AUTH0_ISSUER=
```

