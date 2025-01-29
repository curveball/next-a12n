# a12n Oauth2 Authorization Code Flow

## Authorization 
Referring to [a12n-server/src/oauth2/controller/authorize.ts](https://github.com/curveball/a12n-server/blob/main/src/oauth2/controller/authorize.ts)

- HTTP POST `/authorize&<params>`
query parameters:

```json
    "clientId": string,
    "redirectUri": string ,
    "responseType": "code",
    "scope"?: string,
    "state"?: string
```
### Responses

- HTTP 302 Redirect
    `?code=<authorization_code>&state=<state>` 

```
Headers: 
Location: <redirect_uri>?code=<authorization_code>&state=<state>
```

- HTTP 400: Invalid Request, Unsupported Response Type, Invalid Scope, Invalid Grant, Unsupported Grant Type
- HTTP 403 Unauthorized Client / Access Denied
- HTTP 500 Server Error
- HTTP 503 Temporarily Unavailable 
Potential errors based on https://github.com/curveball/a12n-server/blob/main/src/oauth2/errors.ts

According to `src/middleware/login.ts` and `src/login/controller.ts` this is also possible:
- HTTP 303 Not logged in / Account Inactive
  Route to `?login?continue`

## Access Token Retrieval

- HTTP POST `/token?<grantType>&<params>`
Query Parameters:

```json
  "grantType": "authorization_code"
  "code": <authorization_code>,
  "redirectUri": URL,
  "client_id": string,
``` 

### Responses

- HTTP 302: Redirect
`?access_token=<access_token>&token_type=Bearer&expires_in=<expires_in>&state=<state>`

```
  Headers: 
  Location: <redirect_uri>
            ?access_token=<access_token>
            &token_type=Bearer
            &expires_in=<expires_in>
            &state=<state>
```