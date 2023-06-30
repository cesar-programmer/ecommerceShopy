import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DefaultLayout from '../../layout'
import React from 'react'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
