import React, { useState, useContext } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CContainer, CForm, CFormInput, CRow, CButton, CCardFooter } from '@coreui/react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../context/AuthContext'
import CartContext from '../../context'

const CreateAccount = () => {
  const context = useContext(CartContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignin = () => {
    context.CreateAccount(name, email, password)
  }

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <h4>Create account</h4>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CFormInput
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  label="Name"
                />
                <CFormInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  label="Email address"
                />
                <CFormInput
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  label="Password"
                  onChange={handlePasswordChange}
                />
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
              color="primary"
              onClick={handleSignin}
              component={Link}
              to="/"
              >
                Create account
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default CreateAccount
