```mermaid
sequenceDiagram
    title OAuth2 Authorization Code Flow
    actor User
    participant Client as Application <br/> (nextjs)
    participant a12nServer as Auth Server <br/>(a12n-server)
    participant ResourceServer as OAuth2 Provider <br/> (Google)
    
    User->>Client: Clicks "Sign In with Google" button

    Client-->>a12nServer: <<HttpRequest>> POST <br/> POST "/authorize?response_type=code&client_id=...&redirect_uri=[origin]/callback/google&scope=...&state=..."

    a12nServer-->>ResourceServer: Redirect to Google Sign In 
    ResourceServer -->> Client: Consent screen for permission to access resources

    Note right of Client: App requests for permissions to access resources

    User ->> Client: Authenticate and grant permission

    ResourceServer-->>Client: Redirect with Authorization Code

    Client->>A12nServer: <<HttpRequest>> POST "/token?grant_type=authorization_code&code=...&redirect_uri=...&client_id=..."

    A12nServer->>A12nServer: <<Internal>>> Validate Authorization Code.  Authorization Code Valid

    A12nServer-->>Client: Returns Access Token

    Note left of Client: Client can now access protected resources