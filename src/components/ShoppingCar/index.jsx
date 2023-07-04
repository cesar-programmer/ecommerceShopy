import React, { useContext } from 'react'
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
                  <CCardImage orientation="top" src={item.images[0]} className="h-28 object-cover" />
                  <CCardBody>
                    <CCardTitle className="font-semibold text-sm">{item.title}</CCardTitle>
                    <CCardText>${item.price}</CCardText>
                    <CButton color="danger" variant="ghost" onClick={() => handleDeleteItem(item.id)}>
                      Delete
                    </CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Continue Shopping
          </CButton>
          <CButton color="primary">Checkout</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ShoppingCar
