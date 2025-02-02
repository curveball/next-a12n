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
NEXTAUTH_URL=http://localhost:8531 # canonical url of your website
NEXTAUTH_CLIENT_ID= # client id from your a12n-server
AUTH_URL=http://localhost:8531 # internal url of your a12n-server for development purposes
AUTH_SECRET= # `npx auth secret` or `openssl rand -hex 32`
```

In `server/.env` :
```
cp .env.example .env to copy defaults over to .env
```

The first time you start the server, you will be prompted to create an admin user at `http://localhost:8531/`

If you are running this locally, all details are set up in sqllite3 and not exposed to the internet. 

If you for whatever reason lock yourself out or forget your admin password, you can start over by deleting the `a12n.sqlite` file.

## Register a new client-side web app on `@curveball/a12n-server`

The following instructions are intended for running a client app and `a12n-server` locally.

1. Go to `http://localhost:8531/app/new` to register a new app as client. 

![screenshot of page for registering a new client-side application on a12n-server](./create-new-client-2.png)

http://localhost:8531/app/:app_id/client

You will need to provide the:
- client name (this will become your `NEXTAUTH_CLIENT_ID`) 
- client URL (`NEXTAUTH_URL`). 

The client id is used in the client to authenticate with the server.

The URL is used to redirect the user back to the client after authentication.

1. You'll be directed to configure the client.

![screenshot of Edit OAuth2 Client page in a12n-server](./create-new-client-2.png)
http://localhost:8531/app/:app_id/client

Select "authorization_code" and "refresh_token" as  grant types.

1. Click "Save"

Your client is now registered and you can use the client id in your client-side app.

You can always change configurations by going to `http://localhost:8531/app/:app_id/client/:client_id/edit` or selecting Manage Clients from the `a12n-server` dashboard.

# Related Reading

- On [migrating from next-auth 4 to 5](https://authjs.dev/getting-started/migrating-to-v5)

