import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount'
import MyOrder from '../pages/MyOrder'
import MyOrders from '../pages/MyOrders'
import NotFound from '../pages/NotFound'
import SingIn from '../pages/SingIn'

function AppRoutes () {
  return (
  <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </>
  )
}

export default AppRoutes
