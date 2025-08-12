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

function App() {
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
