import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProducCard from '../components/Card'
import useGetProducts from '../hooks/useGetProducts'
import { CContainer, CRow } from '@coreui/react'
import CartContext from '../context'

const API = 'https://fakestoreapi.com/products'

function ProductList () {
  const products = useGetProducts(API)
  const { category } = useParams()
  const context = useContext(CartContext)
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    // Filtrar los productos por el término de búsqueda y la categoría
    const filteredProducts = products.filter((product) => {
      // titleMatch es true si el título del producto incluye el término de búsqueda y categoryMatch es true si la categoría del producto coincide con la categoría seleccionada
      const titleMatch = product.title.toLowerCase().includes(context.search.toLowerCase())
      // Si la categoría es undefined o 'Home', devolver true, de lo contrario, devolver true si la categoría del producto coincide con la categoría seleccionada
      const categoryMatch = category === undefined || category === 'Home' || product.category.toLowerCase() === category.toLowerCase()
      // Devolver true si el producto coincide con el término de búsqueda y la categoría
      return titleMatch && categoryMatch
    })

    // Actualizar el estado de los productos filtrados
    // Sólo mostrar los primeros 20 productos
    setFilteredItems(filteredProducts.slice(0, 20))
  }, [context.search, category, products])

  return (
    <CContainer>
      <CRow className="justify-content-evenly" xs={{ gutterY: 5 }}>
        {filteredItems.map((product) => (
          <ProducCard key={product.id} product={product} />
        ))}
      </CRow>
    </CContainer>
  )
}

export default ProductList
