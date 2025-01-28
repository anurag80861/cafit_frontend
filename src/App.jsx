// App.js
import React, { useEffect } from 'react';
import Homepage from './pages/HomePage'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import CounterPage from './pages/CounterPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { useDispatch } from 'react-redux';
import { setCart } from './slices/cartSlice'
import DishPage from './pages/DishPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:5500/cart")
      .then(res => {
        const user = res.data;
        const cart = user.cart;
        dispatch(setCart(cart));
      })
      .catch(err => console.log(err))
  }, [dispatch]);

  return (
    <div>
      <Navbar /> {/* Navbar doesn't need Router here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/counters" element={<CounterPage />} />
        <Route path='/dishes' element={<DishPage/>}/>
        {/* <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} /> */}
      </Routes>
    </div>
  );
}

export default App

