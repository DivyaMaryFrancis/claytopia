import React from 'react'
import { Routes,Route } from 'react-router-dom' 

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'




const App = () => {
  return (
    <>
    <Navbar/>
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24"> 
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/product/:id' element={<Product />} />
      {/* Add more routes as needed */}

    </Routes>
    </div>
    </>
  )
}

export default App