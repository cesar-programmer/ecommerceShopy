import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../context'
import { CCard, CCardBody, CCardHeader, CCol, CContainer, CForm, CFormInput, CRow, CButton, CCardFooter } from '@coreui/react'

const Signin = () => {
  const context = useContext(CartContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignin = () => {
    // Validar los datos de inicio de sesión aquí
    if (!email || !password) {
      console.log(context.handleSignin(email, password))
      setError('Email or password is incorrect. Please try again.')
      // Redirigir a la página principal después del inicio de sesión exitoso
    } else {
      context.handleSignin(email, password)
      navigate('/')
    }
  }

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <h4>Sign up</h4>
            </CCardHeader>
            <CCardBody>
              {error && <div className="text-danger mb-3">{error}</div>}
              <CForm>
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
              >
                Sign up
              </CButton>
              <div className="mt-3 text-center">
                <span>Dont have an account? </span>
                <CButton
                  color="info"
                  variant="ghost"
                  component={Link}
                  to="/create-account"
                  size="sm"
                  style={{ marginBottom: '0.2rem' }}
                >
                  create account
                </CButton>
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Signin
