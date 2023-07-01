/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  return (
    <CartContext.Provider value={{
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
