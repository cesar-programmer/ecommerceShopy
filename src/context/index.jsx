/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [visible, setVisible] = useState(false)
  const [carVsible, setCarVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [cart, setCart] = useState([])

  const deleteItems = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    setCounter(newCart.length)
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{
      deleteItems,
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
