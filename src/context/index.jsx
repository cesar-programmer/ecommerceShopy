/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [visible, setVisible] = useState(false)
  const [carVsible, setCarVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [cart, setCart] = useState([])

  console.log(cart)

  return (
    <CartContext.Provider value={{
      carVsible,
      setCarVisible,
      cart,
      setCart,
      selectedItem,
      setSelectedItem,
      visible,
      setVisible,
      counter,
      setCounter
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
