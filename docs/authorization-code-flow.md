# a12n Oauth2 Authorization Code Flow

## Authorization

Note: requesting the following is handled by `next-auth` `authorize` callback under the hood on this project 

See 

The following are parameters or body data that can be sent to each endpoint.

- POST `/authorize&<params>`
query parameters:

```json
    "clientId": string,
    "redirectUri": string ,
    "responseType": "code",
    "scope"?: string,
    "state"?: string
````

- POST `/authorize`

```
Headers:
  A12N: <cookie>
  content-type: application/x-www-form-urlencoded

Body:
{
  response_type: code,
  code: string,
  redirect_uri: http://localhost:3000/api/auth/callback/a12n-server,
  client_id: string,
  client_secret: string
  code_challenge: string
  code_challenge_method: S256
  scope: 'openid email profile'
  state: string // AUTH_SECRET value
}
```

### Responses

- 302 Redirect
    `?code=<authorization_code>&state=<state>` 

```
Headers: 
Location: <redirect_uri>?code=<authorization_code>&state=<state>
```

- 400: Invalid Request, Unsupported Response Type, Invalid Scope, Invalid Grant, Unsupported Grant Type
- 403 Unauthorized Client / Access Denied
- 500 Server Error
- 503 Temporarily Unavailable 
Potential errors based on https://github.com/curveball/a12n-server/blob/main/src/oauth2/errors.ts

According to `src/middleware/login.ts` and `src/login/controller.ts` this is also possible:
- 303 Not logged in / Account Inactive
  Route to `?login?continue`

## Access Token Retrieval

- POST `/token?<grantType>&<params>`
Query Parameters:

```json
  "grantType": "authorization_code"
  "code": <authorization_code>,
  "redirectUri": URL,
  "client_id": string,
``` 

```
POST http://localhost:8531/token
Headers:
 A12N: <cookie>
 content-type: application/x-www-form-urlencoded

{
  "grant_type": "authorization_code",
  "code": "BqOOXyI2R5ju7DYDjx0hgMR21BIIzqF0QWvr2j_VUfc",
  "redirect_uri": "http://localhost:3000/api/auth/callback/a12n-server",
  "client_id": "nextjs-app",
  "client_secret": "secret-token:ytpMV93aixlVgBEyBGS9Ruy7DxaQrYFrqeIVYT_3NRc"
}
```

### Responses

- 302: Redirect
`?access_token=<access_token>&token_type=Bearer&expires_in=<expires_in>&state=<state>`

```
  Headers: 
  Location: <redirect_uri>
            ?access_token=<access_token>
            &token_type=Bearer
            &expires_in=<expires_in>
            &state=<state>
```

```

Not sent to user-agent, but available in server logs or Bruno
```
{
  "access_token": string,
  "token_type": "bearer",
  "expires_in": 600,
  "refresh_token": string,
  "id_token": string
}
```