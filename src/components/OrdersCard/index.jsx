/* eslint-disable react/prop-types */
import React from 'react'

function OrdersCard ({ totalPrice, items, date }) {
  const formattedDate = date.toLocaleDateString()

  return (
    <div className="flex flex-col justify-between items-center py-3 px-4 mb-4 bg-white shadow rounded-lg">
      <div className="flex justify-between w-full mb-2">
        <p className="font-semibold">Order Date:</p>
        <p>{formattedDate}</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full mt-2">
        <p className="font-semibold">Total: ${totalPrice}</p>
      </div>
    </div>
  )
}

export default OrdersCard
