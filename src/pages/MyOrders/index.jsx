import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import OrdersCard from '../../components/OrdersCard'
import CartContext from '../../context'

function MyOrders () {
  const context = useContext(CartContext)

  return (
    <>
    <div>MyOrders</div>
    { context.order.length === 0
      ? (
        <p>Your account dont have orders.</p>
        )
      : (
          context.order.map((item) => (
        <Link
          key={item.id} to={`/my-orders/${item.id}`}
          style={{ textDecoration: 'none', color: '#333' }}
 >
        <OrdersCard
          totalPrice={item.totalPrice}
          items={item.items}
          date={item.date}
        />
        </Link>
          ))
        )}

    </>
  )
}

export default MyOrders
