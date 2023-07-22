// layout/DefaultLayout.js
import React from 'react'
import Navbar from '../components/Navbar'
import AppRoutes from '../routes/index' // Asegúrate de importar correctamente las rutas
import ShoppingCar from '../components/ShoppingCar'

function DefaultLayout () {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-14 ">
        <AppRoutes /> {/* Utiliza AppRoutes para definir las rutas */}
      </div>
      <ShoppingCar />
    </div>
  )
}

export default DefaultLayout
