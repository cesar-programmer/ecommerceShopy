import React, { useState, useContext, useEffect } from 'react'
import CartContext from '../../context'
import { Link } from 'react-router-dom'
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink
} from '@coreui/react'
import './index.css'

function NavBar () {
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')
  const context = useContext(CartContext)
  // utilizo el hook useEffect para que cada vez que se actualice el carrito se actualice el total
  useEffect(() => {
    context.totalCart()
  }, [context.cart])

  useEffect(() => {
    context.userActtive()
  }, [context.users])

  // esta funcion cambia el estado de la categoria seleccionada y navega a la pagina correspondiente
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName)
  }

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand
            component={Link}
            to="/Home"
            >
            Shopi
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem
                component={Link}
                to="/Home"
                className={selectedItem === 'All' ? 'active' : ''}
                onClick={() => handleItemClick('All')}
              >
                All
              </CNavItem>
              <CNavItem
                component={Link}
                to="men's clothing"
                className={selectedItem === "men's clothing" ? 'active' : ''}
                onClick={() => handleItemClick("men's clothing")}
              >
                men clothing
              </CNavItem>
              <CNavItem
                component={Link}
                to="/Electronics"
                className={selectedItem === 'Electronics' ? 'active' : ''}
                onClick={() => handleItemClick('Electronics')}
              >
                Electronics
              </CNavItem>
              <CNavItem
                component={Link}
                to="/jewelery"
                className={selectedItem === 'jewelery' ? 'active' : ''}
                onClick={() => handleItemClick('jewelery')}
              >
                jewelery
              </CNavItem>
              <CNavItem
                component={Link}
                to="/women's clothing"
                className={selectedItem === "women's clothing" ? 'active' : ''}
                onClick={() => handleItemClick("women's clothing")}
              >
                women clothing
              </CNavItem>
              <CNavItem
                component={Link}
                to="/Others"
                className={selectedItem === 'Others' ? 'active' : ''}
                onClick={() => handleItemClick('Others')}
              >
                Others
              </CNavItem>
            </CNavbarNav>

            <CNavbarNav className="ms-auto">
              <CNavItem
                to="/contact"
              >
              {context.UserActive?.nameUser}
              </CNavItem>
              <CNavItem
                component={Link}
                to="/my-orders"
                className={selectedItem === 'my-orders' ? 'active' : ''}
                onClick={() => handleItemClick('my-orders')}
              >
                My Orders
              </CNavItem>
              <CNavItem
                component={Link}
                to="/my-account"
                className={selectedItem === 'my-account' ? 'active' : ''}
                onClick={() => handleItemClick('my-account')}
              >
                My Account
              </CNavItem>
              <CNavItem
                component={Link}
                to="/sing-in"
                onClick={() => {
                  context.handleSignout()
                  context.setOrder([])
                }}
              >
              {context.UserActive?.nameUser ? 'Sing Out' : 'Sing In'}
              </CNavItem>
              <CNavItem>
                <CNavLink
                onClick={ () => context.setCarVisible(!context.carVsible) }
                style={{ cursor: 'pointer' }}
                >
                {
                  context.UserActive?.nameUser ? `🛒 (${context.cart.length})` : ''
                }
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default NavBar
