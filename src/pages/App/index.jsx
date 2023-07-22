// App.js
import { HashRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../../layout'
import React from 'react'
import { CartProvider } from '../../context'
import './App.css' // Importa el componente ProtectedRoute

function App () {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          {/* La ruta '/' ahora apunta directamente al componente DefaultLayout */}
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  )
}

export default App
