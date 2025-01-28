import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-emerald-300 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Cafeteria</div>
        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/dishes" className="text-white hover:text-gray-200 transition duration-300">Dishes</Link>
          <Link to="/manage-users" className="text-white hover:text-gray-200 transition duration-300">Manage Users</Link>
          <Link to="/counters" className="text-white hover:text-gray-200 transition duration-300"> Counters</Link>
          <Link to="/profile" className="text-white hover:text-gray-200 transition duration-300">Profile</Link>
          <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
          <Link to="/cart" className="text-white hover:text-gray-200 transition duration-300">🛒</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar