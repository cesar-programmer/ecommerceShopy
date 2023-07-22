import React, { useContext } from 'react'
import CartContext from '../../context'
import { CContainer, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

function MyOrder () {
  const context = useContext(CartContext)
  const orders = context.order?.slice(-1)[0]?.items || []

  return (
    <CContainer className="py-5">
      <h1 className="mb-4">Order Details</h1>

      {orders.length === 0
        ? (
        <p>No orders available.</p>
          )
        : (
        <CCard className="mb-4">
          <CCardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orders.map((item) => (
                <div key={item.id} className="flex mb-4">
                  <CCardImage src={item.image} className="h-28 object-cover mr-4" />
                  <div>
                    <CCardTitle>{item.title}</CCardTitle>
                    <CCardText>
                      Price: ${item.price} | Quantity: {item.quantity}
                    </CCardText>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-semibold mt-4">
              Total Price: ${context.order.slice(-1)[0]?.totalPrice}
            </p>
          </CCardBody>
        </CCard>
          )}
    </CContainer>
  )
}

export default MyOrder
