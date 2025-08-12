//ProtectedRoute.jsx
import { useAuth } from "react-oidc-context";
import { Navigate, useLocation } from "react-router-dom";

//This makes it so u cant get to places without logging in

function ProtectedRoute({children = '/'}){
    const auth = useAuth();
    const loc = useLocation()
    if (auth.isLoading){
        return(<div>Loading...</div>)
    } else if (auth.isAuthenticated) {
        return (children);
    } else {
        return <Navigate to={`/login?to=${loc.pathname}`} replace />;
    }

}

export default ProtectedRoute