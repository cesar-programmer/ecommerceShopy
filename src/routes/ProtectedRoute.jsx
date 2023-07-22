// routes/ProtectedRoute.js
import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import CartContext from '../context'

const ProtectedRoute = ({ children }) => {
  const context = useContext(CartContext)
  const { UserActive } = context

  if (UserActive) {
    return children
  }
  return <Navigate to="/sing-in" />
}

export default ProtectedRoute
