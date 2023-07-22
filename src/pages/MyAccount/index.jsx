import React, { useContext } from 'react'
import CartContext from '../../context'
import { CCard, CCardBody, CCardHeader, CCol, CContainer, CRow } from '@coreui/react'

const MyAccount = () => {
  const context = useContext(CartContext)
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCard>
            <CCardHeader>
              <h4>My Account</h4>
            </CCardHeader>
            <CCardBody>
              {/* Aquí puedes agregar el contenido de la página */}
              <h5>User Information</h5>
              <p>Nombre: {context.UserActive?.nameUser}</p>
              <p>Email: {context.UserActive?.email}</p>
              {/* Otros campos de información del usuario */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default MyAccount
