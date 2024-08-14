import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Ofertas from './Ofertas'
import Header from './componentes/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/ofertas" element={<Ofertas/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



