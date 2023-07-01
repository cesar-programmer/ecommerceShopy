/* eslint-disable no-tabs */
import React from 'react'
import ProducCard from '../components/Card'
import useGetProducts from '../hooks/useGetProducts'
import { CContainer, CRow } from '@coreui/react'

const API = 'https://api.escuelajs.co/api/v1/products'

function ProductList () {
  const products = useGetProducts(API)

  return (
    <CContainer>
      <CRow className="align-items-start">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProducCard product={product} />
          </div>
        ))}
      </CRow>
    </CContainer>
  )
}

export default ProductList
