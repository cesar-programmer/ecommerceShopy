// AppRoutes.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount'
import MyOrder from '../pages/MyOrder'
import MyOrders from '../pages/MyOrders'
import NotFound from '../pages/NotFound'
import SingIn from '../pages/SingIn'
import User from '../pages/User'
import OrderDetails from '../components/OrdersDetails'

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-orders/last" element={<MyOrder />} />
      <Route path="/my-orders/:orderId" element={<OrderDetails />} />
      <Route path="/sing-in" element={<SingIn />} />
      <Route path="/user" element={<User />} />
      <Route path="/:category" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
