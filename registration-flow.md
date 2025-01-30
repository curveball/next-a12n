# Registration flow

HTTP POST `/register` 

```json
    "email": string,
    "password": string,
    "redirectUri": string,
    "state"?: string
```

### Responses

- 303 Successful Registration with Continue URL
```json
Status Code: 303
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

POST `/register/mfa`

- 303: MFA Enabled and Requested

```json
Location: /register/mfa

Session Data:
{
  "registerUser": user,
  "registerContinueUrl": "CONTINUE_URL"
}
```