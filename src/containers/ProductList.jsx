import React from 'react'
import { useParams } from 'react-router-dom'
import ProducCard from '../components/Card'
import useGetProducts from '../hooks/useGetProducts'
import { CContainer, CRow } from '@coreui/react'

const API = 'https://fakestoreapi.com/products'

function ProductList () {
  const products = useGetProducts(API)
  const { category } = useParams()

  // aqui se filtran los productos por el nombre del producto que se busca en el buscador y si no se busca nada se muestran todos los productos
  const filteredProducts = products.filter((product) => {
    if (category === undefined || category === 'Home') {
      // Si no se especifica una categoría o se selecciona 'Home', muestra todos los productos
      return true
    } else {
      // Filtra los productos por la categoría correspondiente a la ruta
      return product.category.toLowerCase() === category.toLowerCase()
    }
  })

  return (
    <>
    <CContainer>
      <CRow className="justify-content-evenly" xs={{ gutterY: 5 }}>
        {filteredProducts.map((product) => (
            <ProducCard key={product.id} product={product} />
        )).slice(0, 20)}
         {/* .slice(0, 20) es para que solo muestre 20 productos */}
      </CRow>
    </CContainer>
    </>
  )
}

export default ProductList
