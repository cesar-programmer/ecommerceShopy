import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CCard, CCardImage, CCardBody, CCardText, CRow, CCardTitle, CCol } from '@coreui/react'
import CartContext from '../../context'
import './index.css'

function ShoppingCar () {
  const context = useContext(CartContext)

  const setVisible = context.setCarVisible
  const visible = context.carVsible
  const cartItems = context.cart

  const handleDeleteItem = (id) => {
    context.deleteItems(id)
  }

  return (
    <>
      <CModal alignment="center" scrollable visible={visible} >
      <CModalHeader closeButton={false} >
          <CModalTitle>Shopping Cart</CModalTitle>
      <span
      className="modal-header-custom"
      style={{ cursor: 'pointer' }}
      onClick={() => setVisible(false)}
      >
      X
      </span>
        </CModalHeader>
        <CModalBody>
          <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="g-4">
            {cartItems.map((item) => (
              <CCol xs key={item.id}>
                <CCard className="h-100">
                  <CCardImage orientation="top" src={item.image} className="h-28 object-cover" />
                  <CCardBody>
                    <CCardTitle className="font-semibold text-sm">{item.title}</CCardTitle>
                    <CCardText>${item.price}  |  Quantity:{item.quantity}</CCardText>
                    <CButton color="danger" variant="ghost" onClick={() => {
                      handleDeleteItem(item.id)
                    }}>
                      Delete
                    </CButton>
                    ${item.ItemTotal}
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </CModalBody>
        <CModalFooter>
        <CCardText style={{ marginRight: 'auto' }}>Total: ${context.total}</CCardText>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Continue Shopping
          </CButton>
          <Link
          className="text-decoration-none"
          to={cartItems.length > 0 ? '/my-orders/last' : ''}
          >
          <CButton
            disabled={cartItems.length === 0}
            color="primary"
            onClick={() => {
              setVisible(false)
              context.handleCheckout()
            }}
            >
            Checkout
          </CButton>
          </Link>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ShoppingCar
