```mermaid
sequenceDiagram
    title OAuth2 Authorization Code Flow
    actor User
    participant Client as Application <br/> (nextjs)
    participant a12nServer as Auth Server <br/>(a12n-server)
    
    User->>Client: Clicks "Register" button

    Client-->>a12nServer: <<HttpRequest>> POST <br/> POST /register

    critical [authorize]
        option [HTTP 200 OK]
            a12nServer-->>Client: Redirect to Consent screen
        option [HTTP 401 Unauthorized]
            a12nServer-->>Client: Redirect to Login screen
    end
    Note right of Client: App requests for permissions to access resources

    User ->> Client: Authenticate and grant permission

    a12nServer-->>Client: Redirect with Authorization Code

    Client->>A12nServer: <<HttpRequest>> POST "/token?grant_type=authorization_code&code=...&redirect_uri=...&client_id=..."

    A12nServer->>A12nServer: <<Internal>>> Validate Authorization Code

    A12nServer-->>Client: Returns Access Token

    Note left of Client: Client can now access protected resources