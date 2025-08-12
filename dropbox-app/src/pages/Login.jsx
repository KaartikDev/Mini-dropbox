//Login.jsx

import { useAuth } from "react-oidc-context";


function Login(){
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7mrp01870fmr2n1esjkqhvmt84";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://us-east-1ekdmwpaui.auth.us-east-1.amazoncognito.com";
    auth.removeUser();
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

    return(
        <>
            <h1>Login</h1>
            <div>
                <button onClick={() => auth.signinRedirect()}>Sign in</button>
                <button onClick={() => signOutRedirect()}>Sign out</button>
            </div>        
        </>
    );
}

export default Login