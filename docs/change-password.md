# Change Password

POST `/change-password`

## Responses

303 Current Password Incorrect

```
Headers:
    Location: /change-password?error=Current+password+isn't+correct.+Please+try+again
```

303 New Password and Confirm Password Mismatch

```
Headers:
   Location: /change-password?error=New+password+and+confirm+password+do+not+match.+Please+try+again
```

303 Password Change Successful
```
Headers: 
    Location: /home
```

PUT `/user/:userId/password`

## Request body:

```json
{
    "oldPassword": string,
    "newPassword": string
}
```