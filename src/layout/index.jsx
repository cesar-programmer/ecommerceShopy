import React from 'react'
import Navbar from '../components/Navbar'
import Routes from '../routes'
import ShoppingCar from '../components/ShoppingCar'

function DefaultLayout () {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-14 ">
        <Routes />
      </div>
      <ShoppingCar />
    </div>
  )
}

export default DefaultLayout
