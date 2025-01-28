// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function LoginPage() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle login logic here
//     console.log('Email:', email)
//     console.log('Password:', password)
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
//             >
//               Login
//             </button>
//             <Link to="/signup" className="text-blue-600 hover:underline">
//               Register
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginPage

import React from 'react'

const LoginPage = () => {
  return (
    <div>LoginPage</div>
  )
}

export default LoginPage