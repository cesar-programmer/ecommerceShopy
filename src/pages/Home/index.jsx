import React from 'react'
import ProductList from '../../containers/ProductList'
import Detalles from '../../components/DetallesItems'
import SeacrhBar from '../../components/SearchBar'
function Home () {
  return (
    <>
    <SeacrhBar />
    <div style={{ marginTop: '44px' }}>
      <ProductList />
      <Detalles />
    </div>
    </>
  )
}

export default Home
