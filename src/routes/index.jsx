// routes/AppRoutes.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount'
import MyOrder from '../pages/MyOrder'
import MyOrders from '../pages/MyOrders'
import NotFound from '../pages/NotFound'
import SingIn from '../pages/SingIn'
import OrderDetails from '../components/OrdersDetails'
import CreateAccount from '../pages/CreateAccount'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes () {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/my-orders/last" element={<MyOrder />} />
      <Route path="/:category" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/sing-in" element={<SingIn />} />
      <Route path="/my-orders/:orderId" element={<OrderDetails />} />
      <Route path="/create-account" element={<CreateAccount />} />

      {/* Rutas protegidas */}
      <Route path="/my-order" element={
      <ProtectedRoute>
        <MyOrder />
      </ProtectedRoute>} />
      <Route path="/my-orders" element={
      <ProtectedRoute>
        <MyOrders />
      </ProtectedRoute>} />

      {/* Ruta por defecto en caso de que ninguna coincida */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
