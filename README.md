# pnpm workspace with @curveball/a12n-server and Next.js

This is a simple example of how to use `@curveball/a12n-server` with a Next.js project.

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

AUTH_SECRET= # `npx auth secret` or `openssl rand -hex 32`
AUTH_AUTH0_SECRET=
AUTH_AUTH0_ISSUER=

AUTH_FACEBOOK_ID=
AUTH_FACEBOOK_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

AUTH_TWITTER_ID=
AUTH_TWITTER_SECRET=
```

