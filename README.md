# @curveball/a12n-server and Next.js

This is a simple example of how to use `@curveball/a12n-server` with a Next.js project using  OAuth2 authorization code flow and `next-auth@beta`/`authjs/dev` v5 [^1].

If you've been using `next-auth` v4, checkout their ["Upgrade Guide (NextAuth.js v5)"](https://authjs.dev/getting-started/migrating-to-v5).

Pre-requisites:
- `pnpm` 
- node >= 20

## Getting Started

From this repo root: 

`pnpm install` to install dependencies.

`git submodule update --rebase` to update the `@curveball/a12n-server` submodule.

In separate Terminal tabs:

`pnpm start:server` to start server (will open at `http://localhost:8531/`) 

`pnpm start:client` Next will open at `http://localhost:3000/`

`pnpm lint` to lint all projects

From within project folders, running pnpm <command> from the respective `package.json` scripts will run the projects.

## Environment variables

In `client/.env` :
```
A12N_URL=http://localhost:8531 # Where your a12n-server is hosted
A12N_CLIENT_ID= # client id from your a12n-server
A12N_CLIENT_SECRET= # client id from your a12n-server
AUTH_SECRET= # `npx auth secret` or `openssl rand -hex 32`
```
Environment variables prefixed with `AUTH_` are used by `authjs/next-auth`. See ["Environment Variable Inference"](https://authjs.dev/reference/nextjs#:~:text=next%2Dauth%40beta-,Environment%20variable%20inference,-NEXTAUTH_URL%20and%20NEXTAUTH_SECRET)


## Setting up a12n-server

### Environment variables

To get started quickly, you can copy the default .env settings:

In `@curveball/a12n-server/.env` :
```
cp .env.example .env 
```

This will configure the server to use a sqlite database, which is fine for dev environments, but not intended for production use.

After the server is started, head over to `http://localhost:8531/`, which will prompt you to create an admin user.

If you for whatever reason lock yourself out or forget your admin password, you can start over by deleting the `a12nserver.sqlite` file.

## Register a new client-side web app on `@curveball/a12n-server`

For next-auth to work, you need to obtain a OAuth2 client id and secret. To quickly do this, you can open the following URL in your browser, which should take you through all the steps. 

🗒️ Make note of the `client_id` and `client_secret` values, at the end of this process.

```
http://localhost:8531/app/new?nickname=MyNextApp&allowedGrantTypes=authorization_code,refresh_token&redirectUris=http://localhost:3000/api/auth/callback/a12n-server&url=http://localhost:3000/&clientId=nextjs-app
```

Or manually create the client by following the steps below:

1. Go to `http://localhost:8531/app/new` to register a new app as client. 

![screenshot of page for registering a new client-side application on a12n-server](./docs/img/create-new-app.png)

You will need to provide the:
- client name (this will become known as the `nickname` on a12n-server) 
- client URL (`NEXTAUTH_URL`). 

The `client_id` is used in the client to authenticate with the server.

The client URL is used to redirect the user back to the client after authentication.

1. You'll be directed to configure the client.

![screenshot of Edit OAuth2 Client page in a12n-server](./docs/img/add-oauth-client.png)

Select "authorization_code" and "refresh_token" as  grant types.

For valid redirect_urls make sure it includes: `http://localhost:3000/api/auth/callback/a12n-server`

1. Click "Add"

Your client is now registered and you can use the `clientId` and `clientSecret` in your client-side app.

![Screenshot of view after a new client is added with Oauth2 configurations](./docs/img/after-adding-client.png)

Save the values of `clientId` and `clientSecret` for the next step.

You can always change configurations by going to `http://localhost:8531/app/:app_id/client/:client_id/edit` or selecting Manage Clients from the `a12n-server` dashboard.

1. Update your `.env` file with
`AUTH_A12N_ID` with the value for `client_id` 
`AUTH_A12N_SECRET` with the `client_secret` value.

1. Restart your client and server.

## Maintenance

Updating `@curveball/a12n-server` submodule:

```bash
# initialize and update the submodule
git submodule update --remote
# switch to the submodule directory
cd a12n-server
# pull the latest changes for the submodule
git pull origin main

# return to root of project
cd ..
# add the submodule
git add a12n-server
git commit -m "Update submodule"
git push origin main
```