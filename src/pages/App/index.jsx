import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import DefaultLayout from '../../layout'
import React from 'react'
import { CartProvider } from '../../context'
import './App.css'

function App () {
  return (
    <>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/*" element={<DefaultLayout />} />
          </Routes>
        </HashRouter>
      </CartProvider>
    </>
  )
}

export default App
