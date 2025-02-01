# Registration flow

HTTP POST `/register` 

Request body:

```ts
{
    "email": string,
    "password": string,
    "redirectUri": string,
    "state"?: string
    "code": string # nextauth code
}
```

### Responses

- 303 Successful Registration with Continue URL

```json
{
  "continue": "CONTINUE_URL"
}
Headers:
    Location: CONTINUE_URL
```

- 303 Successful Registration without Continue URL
  
```json
Location: /login?msg=Registration+successful.+Please+log+in
```

- 303 Password Mismatch / User Already Exists/ Email Already Exists
```json
Headers:
    Location: /register?error=<error_message>&continue=<continue_url>
```

## MFA Registration

- POST `/register/mfa`

### Request Body
```
{
  "mfaDevice": "totp" | "yubikey",
}
```

### Responses

303 Redirect 

```ts
Location: /register/mfa/totp|webauthn
```

- POST `/register/user`

### Request Body

```ts
{
  "username": string,
  "password": string,
  "email": string,
  "firstName"?: string,
  "lastName"?: string,
  "addMfa": boolean,
}
``` 

### Responses


- 303: MFA Enabled and Requested

```json
Location: /register/mfa

Session Data:
{
  "registerUser": user,
  "registerContinueUrl": "CONTINUE_URL"
}
```
- 303: Redirect: Invalid token

```json
/register/mfa/totp?error=Invalid+token'
```

- 303: Redirect: Unknown MFA Device 

```json
 '/register/mfa?error=Unknown MFA device'
``` 