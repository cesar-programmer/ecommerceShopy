import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../../context'

function OrderDetails () {
  const { orderId } = useParams()
  const context = useContext(CartContext)
  const order = context.order.find((items) => items.id === orderId)
  console.log(order)

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <div className="bg-white rounded shadow p-4">
        <p className="text-gray-600 mb-2">Order ID: {orderId}</p>
        {order && (
          <>
            <h3 className="text-lg font-semibold mb-2">Order Items</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.id} className="mb-2">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-gray-600">${item.price}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-lg font-semibold">Total Price: ${order.totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
