/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import CartContext from '../../context'
import { CCard, CCardBody, CCardImage, CCardText, CButton } from '@coreui/react'

function Card ({ product }) {
  const context = useContext(CartContext)

  return (
    <CCard style={{ width: '16rem', height: '24rem' }}>
      <CCardImage
        orientation="top"
        src={product.image}
        style={{ cursor: 'pointer', height: '220px', width: '260px' }}
        onClick={() => {
          context.setVisible(true)
          context.setSelectedItem(product)
        }}
      />

      <CCardBody>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CCardText style={{ marginBottom: '0.5rem' }}>{product.title.slice(0, 29)}</CCardText>
          <CCardText style={{ marginBottom: '0.5rem' }}>${product.price}</CCardText>
          <CButton
          color="secondary"
          variant="outline"
          size="sm"
          style={{ marginBottom: '0.5rem' }}
          onClick={() => {
            // aqui se agrega el producto al carrito de compras con el spread operator
            // y se pone el cunter del carrito en + 1
            context.addToCart(product)
            context.setCounter(context.counter + 1)
          }}
          >
            Add to Cart
          </CButton>
          <div>{product.category.name}</div>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default Card
