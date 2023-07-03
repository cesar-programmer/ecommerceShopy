import React from 'react'
import ProductList from '../../containers/ProductList'
import Detalles from '../../components/DetallesItems'
import ShoppingCar from '../../components/ShoppingCar'
function Home () {
  return (
    <div>
      <ProductList />
      <Detalles />
      <ShoppingCar />
    </div>
  )
}

export default Home
