import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
  const items = useSelector(state => state.cart.items)
 
  console.log("items", items)

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{item.dish.name}</h2>
              <p className="text-gray-700 mb-2">Price: <span className="font-bold">Rs {item.dish.price}</span></p>
              <p className="text-gray-700 mb-2">Quantity: <span className="font-bold">{item.quantity}</span></p>
              {item.dish.inStock ? (
                <p className="text-green-500 font-semibold">Available</p>
              ) : (
                <p className="text-red-500 font-semibold">Not Available</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartPage