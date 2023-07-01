import React, { useState, useContext } from 'react'
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

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName)
  }

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="/">Shopi</CNavbarBrand>
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
                to="/Clothes"
                className={selectedItem === 'Clothes' ? 'active' : ''}
                onClick={() => handleItemClick('Clothes')}
              >
                Clothes
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
                to="/Fornitures"
                className={selectedItem === 'Fornitures' ? 'active' : ''}
                onClick={() => handleItemClick('Fornitures')}
              >
                Fornitures
              </CNavItem>
              <CNavItem
                component={Link}
                to="/Toys"
                className={selectedItem === 'Toys' ? 'active' : ''}
                onClick={() => handleItemClick('Toys')}
              >
                Toys
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
                component={Link}
                to="/user"
                className={selectedItem === 'user' ? 'active' : ''}
                onClick={() => handleItemClick('user')}
              >
                ccesa@gmail.com
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
                className={selectedItem === 'sing-in' ? 'active' : ''}
                onClick={() => handleItemClick('sing-in')}
              >
                Sign In
              </CNavItem>
              <CNavItem>
                <CNavLink>🛒{context.counter}</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default NavBar
