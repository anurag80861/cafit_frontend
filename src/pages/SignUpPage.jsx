// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function SignUpPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
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
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
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
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
//             >
//               Sign Up
//             </button>
//             <Link to="/login" className="text-blue-600 hover:underline">
//               Login
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;

import React from 'react'

const SignUpPage = () => {
  return (
    <div>SignUpPage</div>
  )
}

export default SignUpPage