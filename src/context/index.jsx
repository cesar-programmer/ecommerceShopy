/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  // aqui se crean los estados que se van a usar en el carrito
  const [counter, setCounter] = useState(0)
  const [visible, setVisible] = useState(false)
  const [carVsible, setCarVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [order, setOrder] = useState([])
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [UserActive, setUserActive] = useState({})

  const userActtive = () => {
    const actual = users.find((user) => user.loginUser === true)
    setUserActive(actual)
  }

  const handleSignin = (email, password) => {
    // esta funcion cambia el estado de loginUser a true para que se inicie la sesion del usuario
    const newUsers = users.map((user) => {
      if (user.email === email && user.password === password) {
        return { ...user, loginUser: true }
      } else {
        return user
      }
    })
    setUsers(newUsers)
  }

  const handleSignout = () => {
    // esta funcion cambia el estado de loginUser a false para que se cierre la sesion del usuario
    const newUsers = users.map((user) => {
      if (user.loginUser === true) {
        return { ...user, loginUser: false }
      } else {
        return user
      }
    })
    setUsers(newUsers)
  }

  const CreateAccount = (nameUser, email, password) => {
    const newUser = { nameUser, email, password, loginUser: true }
    setUsers([...users, newUser])
  }

  // esta funcion busca los productos en el carrito por el nombre del producto
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // esta funcion suma el total de los productos del carrito y los agrega a la orden de compra y vacia el carrito
  const handleCheckout = () => {
    const orderToAdd = {
      id: uuidv4(),
      date: new Date(),
      items: cart,
      totalPrice: total
    }
    setOrder([...order, orderToAdd])
    setCart([])
    setCounter(0)
  }
  // esta funcion elimina los productos del carrito
  const deleteItems = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    const quantity = newCart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
    setCounter(quantity)
  }

  // esta funcion suma el total de los productos del carrito
  const totalCart = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.ItemTotal
    }, 0).toFixed(2)
    setTotal(total)
  }

  // esta funcion agrega los productos al carrito de compras y si el producto ya esta en el carrito
  const addToCart = (item) => {
    if (cart.find((product) => product.id === item.id)) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
            ItemTotal: product.price * (product.quantity + 1)
          }
        }
        return product
      }
      )
      setCart(newCart)
      setCounter(newCart.length)
      return
    }
    setCart([...cart,
      {
        ...item,
        quantity: 1,
        ItemTotal: item.price
      }])
  }
  console.log(UserActive, 'UserActive')
  console.log(users, 'users')
  console.log(cart, 'cart')
  console.log(order, 'order')
  return (
    <CartContext.Provider value={{
      UserActive,
      userActtive,
      handleSignout,
      handleSignin,
      CreateAccount,
      handleSearch,
      handleCheckout,
      addToCart,
      deleteItems,
      users,
      setUsers,
      search,
      setSearch,
      order,
      setOrder,
      total,
      totalCart,
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
