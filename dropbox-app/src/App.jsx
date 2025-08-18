//App.jsx
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Upload from './pages/Upload'
import Gallery from './pages/Gallery'
import ProtectedRoute from './protectedRoute'

import { HashRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
// Function to check if OIDC parameters are present in the URL
// This is used to clean up the URL after authentication
function hasOidcParams(search) {
  const p = new URLSearchParams(search);
  return p.has("code") || p.has("state");
} // add other provivers

function App() {

  const auth = useAuth()
    useEffect(() => {
        if (hasOidcParams(window.location.search) && !auth.isLoading) {
        // Replace the current history entry: same path, no query, keep the hash
        const cleanUrl = window.location.pathname + (window.location.hash || "");
        window.history.replaceState({}, "", cleanUrl);
        }
    }, []);

  return(


    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          
          <Route path="/upload" 
            element={
              <ProtectedRoute>
                <Upload/>
              </ProtectedRoute>
              } 
            /> 

          <Route path="/gallery" 
            element={
              <ProtectedRoute>
                <Gallery/>
              </ProtectedRoute>
              } 
            />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
