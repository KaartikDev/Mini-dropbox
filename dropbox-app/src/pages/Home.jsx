//Home.jsx
import { Link } from 'react-router-dom';
import StatusIndicator from '../StatusIndicator';

import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
function hasOidcParams(search) {
  const p = new URLSearchParams(search);
  return p.has("code") || p.has("state"); // add others if your provider uses them
}

function Home(){
    const auth = useAuth()
    useEffect(() => {
        if (hasOidcParams(window.location.search) && !auth.isLoading && auth.isAuthenticated) {
        // Replace the current history entry: same path, no query, keep the hash
        const cleanUrl = window.location.pathname + (window.location.hash || "");
        window.history.replaceState({}, "", cleanUrl);
        }
    }, []);
    
    return(
        <>
            <h1>Home</h1>
            <StatusIndicator></StatusIndicator>
            <Link to="/about">About</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/upload">Upload</Link>
            <br />
            <Link to="/gallery">Gallery</Link>
            <br />
        </>
    )
}

export default Home