import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router'


import Inicio from './pages/inicio.jsx'
import Nav from './components/nav.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Nav />
      <body>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Inicio />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </>
    
  )
}

export default App
