import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Upload from './pages/Upload'
import Gallery from './pages/Gallery'

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(


    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/upload" element={<Upload></Upload>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/about" element={<About></About>}></Route>

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
